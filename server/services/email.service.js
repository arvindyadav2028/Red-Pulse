import nodemailer from "nodemailer";
import config from "../config/config.js";

// Build transporter — only if email credentials are provided
const makeTransporter = () => {
    if (!config.GOOGLE_CLIENT_ID || !config.GOOGLE_USER) {
        console.warn("⚠️  Email credentials not configured — emails will be logged to console only.");
        return null;
    }
    return nodemailer.createTransport({
        service: "gmail",
        auth: {
            type: "OAuth2",
            user: config.GOOGLE_USER,
            clientId: config.GOOGLE_CLIENT_ID,
            clientSecret: config.GOOGLE_CLIENT_SECRET,
            refreshToken: config.GOOGLE_REFRESH_TOKEN,
        },
    });
};

const transporter = makeTransporter();

if (transporter) {
    transporter.verify((error) => {
        if (error) {
            console.error("Email server error:", error.message);
        } else {
            console.log("✅ Email server ready");
        }
    });
}

export const sendEmail = async (to, subject, text, html) => {
    if (!transporter) {
        // Dev fallback — log OTP to console
        console.log(`\n📧 [EMAIL FALLBACK] To: ${to} | Subject: ${subject}\n${text}\n`);
        return;
    }
    try {
        const info = await transporter.sendMail({
            from: `"RedPulse" <${config.GOOGLE_USER}>`,
            to,
            subject,
            text,
            html,
        });
        console.log("Email sent:", info.messageId);
    } catch (error) {
        console.error("Email send error:", error.message);
        throw new Error("Failed to send email. Please try again.");
    }
};
