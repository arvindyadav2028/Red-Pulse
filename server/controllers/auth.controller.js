import userModel    from "../models/User.js";
import sessionModel from "../models/Session.js";
import otpModel     from "../models/Otp.js";

import crypto from "crypto";
import bcrypt  from "bcryptjs";
import jwt     from "jsonwebtoken";

import config              from "../config/config.js";
import { sendEmail }       from "../services/email.service.js";
import { generateOtp, getOtpHtml } from "../utils/utils.js";

/* ── helpers ──────────────────────────────────────────── */
const safeUser = (u) => ({
    _id:                  u._id,
    username:             u.username,
    email:                u.email,
    role:                 u.role,
    onboardingCompleted:  u.onboardingCompleted,
    verified:             u.verified,
    createdAt:            u.createdAt,
});

const signAccess = (payload) =>
    jwt.sign(payload, config.JWT_SECRET, { expiresIn: "15m" });

const signRefresh = (payload) =>
    jwt.sign(payload, config.JWT_SECRET, { expiresIn: "7d" });

const hashToken = (token) =>
    crypto.createHash("sha256").update(token).digest("hex");

const COOKIE_OPTS = {
    httpOnly:  true,
    secure:    config.NODE_ENV === "production",
    sameSite:  config.NODE_ENV === "production" ? "strict" : "lax",
    maxAge:    7 * 24 * 60 * 60 * 1000,
};

/* ── REGISTER ─────────────────────────────────────────── */
export const register = async (req, res) => {
    try {
        const { username, email, password } = req.body;

        if (!username || !email || !password)
            return res.status(400).json({ message: "Username, email and password are required" });
        if (password.length < 8)
            return res.status(400).json({ message: "Password must be at least 8 characters" });

        const exists = await userModel.findOne({ $or: [{ username }, { email }] });
        if (exists) return res.status(409).json({ message: "Username or email already taken" });

        const hashed = await bcrypt.hash(password, 12);
        const user   = await userModel.create({ username, email, password: hashed });

        await _sendOtp(user._id, email);

        return res.status(201).json({
            message: "Account created. Check your email for the verification code.",
            user: safeUser(user),
        });
    } catch (err) {
        return res.status(500).json({ message: err.message });
    }
};

/* ── VERIFY EMAIL ─────────────────────────────────────── */
export const verifyEmail = async (req, res) => {
    try {
        const { otp, email } = req.body;
        if (!otp || !email) return res.status(400).json({ message: "Email and OTP are required" });

        const otpDoc = await otpModel.findOne({ email });
        if (!otpDoc) return res.status(400).json({ message: "OTP not found or already expired" });

        const valid = await bcrypt.compare(String(otp), otpDoc.otpHash);
        if (!valid) return res.status(400).json({ message: "Invalid OTP code" });

        const user = await userModel.findByIdAndUpdate(otpDoc.user, { verified: true }, { new: true });
        await otpModel.deleteMany({ user: otpDoc.user });

        return res.status(200).json({
            message: "Email verified successfully",
            user: safeUser(user),
        });
    } catch (err) {
        return res.status(500).json({ message: err.message });
    }
};

/* ── RESEND OTP ───────────────────────────────────────── */
export const resendOtp = async (req, res) => {
    try {
        const { email } = req.body;
        if (!email) return res.status(400).json({ message: "Email is required" });

        const user = await userModel.findOne({ email });
        if (!user)    return res.status(404).json({ message: "No account found with this email" });
        if (user.verified) return res.status(400).json({ message: "Email already verified" });

        await otpModel.deleteMany({ user: user._id });
        await _sendOtp(user._id, email);

        return res.status(200).json({ message: "New OTP sent to your email" });
    } catch (err) {
        return res.status(500).json({ message: err.message });
    }
};

/* ── LOGIN ────────────────────────────────────────────── */
export const login = async (req, res) => {
    try {
        const { email, password } = req.body;
        if (!email || !password) return res.status(400).json({ message: "Email and password are required" });

        const user = await userModel.findOne({ email });
        if (!user) return res.status(401).json({ message: "Invalid email or password" });
        if (!user.verified) return res.status(401).json({ message: "Please verify your email before logging in" });

        const ok = await bcrypt.compare(password, user.password);
        if (!ok) return res.status(401).json({ message: "Invalid email or password" });

        const refreshToken     = signRefresh({ id: user._id });
        const refreshTokenHash = hashToken(refreshToken);

        const session = await sessionModel.create({
            user:             user._id,
            refreshTokenHash,
            ip:               req.ip,
            userAgent:        req.headers["user-agent"],
        });

        const accessToken = signAccess({
            id:        user._id,
            role:      user.role,
            sessionId: session._id,
        });

        res.cookie("refreshToken", refreshToken, COOKIE_OPTS);

        return res.status(200).json({
            message: "Logged in successfully",
            user: safeUser(user),
            accessToken,
        });
    } catch (err) {
        return res.status(500).json({ message: err.message });
    }
};

/* ── GET ME ───────────────────────────────────────────── */
export const getMe = async (req, res) => {
    try {
        return res.status(200).json({
            message: "User fetched successfully",
            user: safeUser(req.user),
        });
    } catch (err) {
        return res.status(500).json({ message: err.message });
    }
};

/* ── REFRESH TOKEN ────────────────────────────────────── */
export const refreshToken = async (req, res) => {
    try {
        const token = req.cookies.refreshToken;
        if (!token) return res.status(401).json({ message: "Refresh token not found" });

        let decode;
        try {
            decode = jwt.verify(token, config.JWT_SECRET);
        } catch {
            return res.status(401).json({ message: "Refresh token expired or invalid" });
        }

        const tokenHash = hashToken(token);
        const session   = await sessionModel.findOne({ refreshTokenHash: tokenHash, revoked: false });
        if (!session) return res.status(401).json({ message: "Session not found or revoked" });

        const user = await userModel.findById(decode.id).select("-password");
        if (!user)  return res.status(404).json({ message: "User not found" });

        const newRefreshToken     = signRefresh({ id: user._id });
        const newRefreshTokenHash = hashToken(newRefreshToken);

        session.refreshTokenHash = newRefreshTokenHash;
        await session.save();

        const accessToken = signAccess({
            id:        user._id,
            role:      user.role,
            sessionId: session._id,
        });

        res.cookie("refreshToken", newRefreshToken, COOKIE_OPTS);

        return res.status(200).json({ message: "Token refreshed", accessToken });
    } catch (err) {
        return res.status(500).json({ message: err.message });
    }
};

/* ── LOGOUT ───────────────────────────────────────────── */
export const logout = async (req, res) => {
    try {
        const token = req.cookies.refreshToken;
        if (token) {
            const tokenHash = hashToken(token);
            await sessionModel.findOneAndUpdate(
                { user: req.user._id, refreshTokenHash: tokenHash },
                { revoked: true }
            );
        }
        res.clearCookie("refreshToken", COOKIE_OPTS);
        return res.status(200).json({ message: "Logged out successfully" });
    } catch (err) {
        return res.status(500).json({ message: err.message });
    }
};

/* ── LOGOUT ALL ───────────────────────────────────────── */
export const logoutAll = async (req, res) => {
    try {
        await sessionModel.updateMany({ user: req.user._id, revoked: false }, { revoked: true });
        res.clearCookie("refreshToken", COOKIE_OPTS);
        return res.status(200).json({ message: "Logged out from all devices" });
    } catch (err) {
        return res.status(500).json({ message: err.message });
    }
};

/* ── private helper ───────────────────────────────────── */
async function _sendOtp(userId, email) {
    const otp     = generateOtp();
    const otpHash = await bcrypt.hash(otp, 10);

    await otpModel.create({ email, user: userId, otpHash });
    await sendEmail(
        email,
        "RedPulse — Email Verification",
        `Your OTP is: ${otp}  (expires in 10 minutes)`,
        getOtpHtml(otp)
    );
}
