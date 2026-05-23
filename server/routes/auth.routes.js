import { Router } from "express";
import * as authController from "../controllers/auth.controller.js";
import authenticate from "../middleware/authenticate.js";

const authRouter = Router();

/* ── Public ─────────────────────────────────────────── */
authRouter.post("/register",      authController.register);
authRouter.post("/login",         authController.login);
authRouter.post("/verify-email",  authController.verifyEmail);
authRouter.post("/resend-otp",    authController.resendOtp);
authRouter.post("/refresh-token", authController.refreshToken);

/* ── Private ────────────────────────────────────────── */
authRouter.get( "/get-me",    authenticate, authController.getMe);
authRouter.post("/logout",    authenticate, authController.logout);
authRouter.post("/logout-all",authenticate, authController.logoutAll);

export default authRouter;
