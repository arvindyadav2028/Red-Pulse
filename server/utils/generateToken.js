import jwt from "jsonwebtoken";
import config from "../config/config.js";

// Access Token (short-lived)
export const generateAccessToken = (payload) => {
    return jwt.sign(payload, config.JWT_SECRET, {
        expiresIn: "15m",
    });
};

// Refresh Token (long-lived)
export const generateRefreshToken = (payload) => {
    return jwt.sign(payload, config.JWT_SECRET, {
        expiresIn: "7d",
    });
};