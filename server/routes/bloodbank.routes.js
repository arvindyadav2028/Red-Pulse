import express from "express";
const router = express.Router();

import BloodBank from "../models/BloodBank.js";
import verifyToken from "../middleware/verifyToken.js";
import roleGuard from "../middleware/roleGuard.js";
import wrapAsync from "../utils/wrapAsync.js";

///////////////////////////////////////////////////////////
// GET ALL BLOODBANKS
///////////////////////////////////////////////////////////
router.get("/", wrapAsync(async (req, res) => {

    const bloodbanks = await BloodBank.find({}).select("-password");

    res.status(200).json({
        success: true,
        count: bloodbanks.length,
        data: bloodbanks,
    });
}));

///////////////////////////////////////////////////////////
// GET SINGLE BLOODBANK
///////////////////////////////////////////////////////////
router.get("/:id", verifyToken, wrapAsync(async (req, res) => {

    const bloodbank = await BloodBank.findById(req.params.id).select("-password");

    if (!bloodbank) {
        return res.status(404).json({
            success: false,
            message: "No bloodbank found",
        });
    }

    res.status(200).json({
        success: true,
        data: bloodbank,
    });
}));

///////////////////////////////////////////////////////////
// UPDATE BLOODBANK
///////////////////////////////////////////////////////////
router.put("/:id", verifyToken, wrapAsync(async (req, res) => {

    // 🔒 Prevent password update here
    const { password, ...updateData } = req.body;

    // 🔐 Authorization check (VERY IMPORTANT)
    if (req.user.role !== "Admin" && req.user.id !== req.params.id) {
        return res.status(403).json({
            success: false,
            message: "Not authorized to update this bloodbank",
        });
    }

    const bloodbank = await BloodBank.findByIdAndUpdate(
        req.params.id,
        updateData,
        { new: true }
    ).select("-password");

    if (!bloodbank) {
        return res.status(404).json({
            success: false,
            message: "No bloodbank found",
        });
    }

    res.status(200).json({
        success: true,
        data: bloodbank,
    });
}));

///////////////////////////////////////////////////////////
// DELETE BLOODBANK
///////////////////////////////////////////////////////////
router.delete(
    "/:id",
    verifyToken,
    roleGuard("Admin"),
    wrapAsync(async (req, res) => {

        const bloodbank = await BloodBank.findByIdAndDelete(req.params.id);

        if (!bloodbank) {
            return res.status(404).json({
                success: false,
                message: "No bloodbank found",
            });
        }

        res.status(200).json({
            success: true,
            message: "Bloodbank removed",
        });
    })
);

module.exports = router;