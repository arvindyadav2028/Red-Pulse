import { Router } from "express";
import authenticate from "../middleware/authenticate.js";
import roleGuard from "../middleware/roleGuard.js";
import upload from "../middleware/upload.js";
import * as profileController from "../controllers/profile.controller.js";

const profileRouter = Router();

/* =================================
   GET MY PROFILE  (donor / employee / admin)
================================= */
profileRouter.get(
    "/me",
    authenticate,
    profileController.getMyProfile
);

/* =================================
   DONOR ONBOARDING
================================= */
profileRouter.post(
    "/become-donor",
    authenticate,
    roleGuard("user"),
    upload.fields([
        { name: "image", maxCount: 1 },
        { name: "idProofImage", maxCount: 1 }
    ]),
    profileController.becomeDonor
);

/* =================================
   EMPLOYEE ONBOARDING
================================= */
profileRouter.post(
    "/become-employee",
    authenticate,
    roleGuard("user"),
    upload.fields([
        { name: "image", maxCount: 1 }
    ]),
    profileController.becomeEmployee
);

/* =================================
   ADMIN ONBOARDING  (just sets role)
================================= */
profileRouter.post(
    "/become-admin",
    authenticate,
    roleGuard("user"),
    profileController.becomeAdmin
);

/* =================================
   HOSPITAL REGISTRATION  (admin only)
================================= */
profileRouter.post(
    "/register-hospital",
    authenticate,
    roleGuard("admin"),
    upload.fields([
        { name: "image", maxCount: 1 },
        { name: "licenceImage", maxCount: 1 },
        { name: "accreditationImage", maxCount: 1 }
    ]),
    profileController.registerHospital
);

/* =================================
   BLOODBANK REGISTRATION  (admin only)
================================= */
profileRouter.post(
    "/register-bloodbank",
    authenticate,
    roleGuard("admin"),
    upload.fields([
        { name: "image", maxCount: 1 },
        { name: "licenceImage", maxCount: 1 }
    ]),
    profileController.registerBloodBank
);

export default profileRouter;
