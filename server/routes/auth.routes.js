import { Router } from "express";
import * as authController from "../controllers/auth.controller.js";
import authenticate from "../middleware/authenticate.js";


const authRouter = Router();


/* =================================
   Public routes
================================= */
/**
 * POST /api/auth/register
 */
authRouter.post("/register", authController.register)


/**
 * POST /api/auth/login
 */
authRouter.post("/login", authController.login)


/**
 * GET /api/auth/verify-email
 */
authRouter.post("/verify-email", authController.verifyEmail)


/**
 * GET /api/auth/refresh-token
 */
authRouter.post("/refresh-token", authController.refreshToken)



/* =================================
   Private routes
================================= */
/**
 * GET /api/auth/get-me
 */
authRouter.get("/get-me", authenticate, authController.getMe)


/**
 * GET /api/auth/logout
 */
authRouter.post("/logout", authenticate, authController.logout)


/**
 * GET /api/auth/logout-all
 */
authRouter.post("/logout-all", authenticate, authController.logoutAll)




// authRouter.post("/forgot-password")
// authRouter.post("/reset-password")
// authRouter.post("/resend-otp")
// authRouter.post("/change-password")

export default authRouter;