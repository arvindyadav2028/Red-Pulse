import express from "express";
import morgan from "morgan";
import cookieParser from "cookie-parser";
import authRouter from './routes/auth.routes.js';


const app = express();

// middlewares
app.use(express.json());
app.use(morgan("dev"));
app.use(cookieParser());

// Routes
app.use("/api/auth", authRouter);

// Error middleware
// const errorHandler = require("./middlewares/error.middleware");
// app.use(errorHandler);

export default app;