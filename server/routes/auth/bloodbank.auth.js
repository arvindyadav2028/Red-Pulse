import express from "express";
import BloodBank from "../../models/BloodBank.js";

import { generateAccessToken } from "../../utils/generateToken.js";
import verifyToken from "../../middleware/verifyToken.js";
import wrapAsync from "../../utils/wrapAsync.js";

const router = express.Router();

///////////////////////////////////////////////////////////
// REGISTER
///////////////////////////////////////////////////////////
router.post("/register", wrapAsync(async (req, res) => {

    const {
        bloodBankID, name, type, ownership,
        licence, email, password,
        address, cityOrVillage, pincode,
        district, state, location,
        phoneNo1, image, bankHeadID
    } = req.body;

    const existing = await BloodBank.exists({ bloodBankID });

    if (existing) {
        return res.status(409).json({
            success: false,
            message: "BloodBank Already Registered"
        });
    }

    const bloodbank = await BloodBank.create({
        bloodBankID, name, type, ownership,
        licence, email, password,
        address, cityOrVillage, pincode,
        district, state, location,
        phoneNo1, image, bankHeadID
    });

    //create token
    const accessToken = generateAccessToken({
        id: bloodbank._id,
        role: "BloodBank",
        entity: "BloodBank"
    });

    const { password: _, ...bloodbankData } = bloodbank.toObject();

    res.status(201).json({
        success: true,
        accessToken,
        data: bloodbankData,
    });
}));

///////////////////////////////////////////////////////////
// LOGIN
///////////////////////////////////////////////////////////
router.post("/login", wrapAsync(async (req, res) => {

    const { email, password } = req.body;

    if (!email || !password) {
        return res.status(400).json({
            success: false,
            message: "Email and password are required",
        });
    }

    const normalizedEmail = email.toLowerCase();

    const bloodbank = await BloodBank.findOne({ email: normalizedEmail });

    if (!bloodbank || !(await bloodbank.matchPassword(password))) {
        return res.status(401).json({
            success: false,
            message: "Invalid credentials",
        });
    }

    // create token
    const accessToken = generateAccessToken({
        id: bloodbank._id,
        role: "BloodBank",
        entity: "BloodBank"
    });

    const { password: _, ...bloodbankData } = bloodbank.toObject();

    res.status(200).json({
        success: true,
        accessToken,
        data: bloodbankData,
    });
}));

///////////////////////////////////////////////////////////
// LOGOUT
///////////////////////////////////////////////////////////
router.post("/logout", verifyToken, (req, res) => {

    res.status(200).json({
        success: true,
        message: "Logged out successfully",
    });
});

export default router;