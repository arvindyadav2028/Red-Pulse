import express from "express";
import morgan from "morgan";
import cookieParser from "cookie-parser";
import cors from "cors";
import helmet from "helmet";
import rateLimit from "express-rate-limit";
import path from "path";
import { fileURLToPath } from "url";

import config from "./config/config.js";
import authRouter from "./routes/auth.routes.js";
import profileRouter from "./routes/profile.routes.js";

const app = express();
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// ── Security headers ──────────────────────────────────────
app.use(helmet({
    crossOriginResourcePolicy: { policy: "cross-origin" }, // allow /uploads images
}));

// ── CORS ──────────────────────────────────────────────────
const allowedOrigins = [
    config.CLIENT_ORIGIN,
    "http://localhost:5173",
    "http://localhost:3000",
].filter(Boolean);

app.use(cors({
    origin: (origin, cb) => {
        // allow requests with no origin (mobile apps, curl, Postman)
        if (!origin || allowedOrigins.includes(origin)) return cb(null, true);
        cb(new Error(`CORS blocked: ${origin}`));
    },
    credentials: true,
}));

// ── Rate limiting ─────────────────────────────────────────
const authLimiter = rateLimit({
    windowMs: 15 * 60 * 1000, // 15 min
    max: 20,
    standardHeaders: true,
    legacyHeaders: false,
    message: { message: "Too many requests, please try again later." },
});

// ── Body / cookie parsers ─────────────────────────────────
app.use(express.json({ limit: "1mb" }));
app.use(cookieParser());

// ── Logging ───────────────────────────────────────────────
if (config.NODE_ENV !== "test") {
    app.use(morgan("dev"));
}

// ── Static: uploaded files ────────────────────────────────
app.use("/uploads", express.static(path.join(__dirname, "uploads")));

// ── Routes ────────────────────────────────────────────────
app.use("/api/auth", authLimiter, authRouter);
app.use("/api/profile", profileRouter);

// ── Health check ──────────────────────────────────────────
app.get("/api/health", (req, res) => res.json({ status: "ok" }));

// ── 404 ───────────────────────────────────────────────────
app.use((req, res) => {
    res.status(404).json({ message: "Route not found" });
});

// ── Global error handler ──────────────────────────────────
// eslint-disable-next-line no-unused-vars
app.use((err, req, res, next) => {
    const status = err.status || err.statusCode || 500;
    const message = (config.NODE_ENV === "production" && status === 500)
        ? "Internal Server Error"
        : err.message || "Internal Server Error";
    return res.status(status).json({ message });
});

export default app;
