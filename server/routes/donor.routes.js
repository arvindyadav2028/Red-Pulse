import { Router } from "express";
const router = Router();

import Donor from "../models/Donor.js";
import verifyToken from "../middleware/verifyToken.js";
import roleGuard from "../middleware/roleGuard.js";
import wrapAsync from "../utils/wrapAsync.js";

///////////////////////////////////////////////////////////
// GET ALL DONORS
///////////////////////////////////////////////////////////
router.get(
  "/",
  verifyToken,
  roleGuard(["Admin", "Hospital"]),
  wrapAsync(async (req, res) => {

    const donors = await Donor.find({}).select("-password");

    res.status(200).json({
      success: true,
      count: donors.length,
      data: donors,
    });
  })
);

///////////////////////////////////////////////////////////
// GET SINGLE DONOR
///////////////////////////////////////////////////////////
router.get("/:id", verifyToken, wrapAsync(async (req, res) => {

  const donor = await Donor.findById(req.params.id).select("-password");

  if (!donor) {
    return res.status(404).json({
      success: false,
      message: "No donor found",
    });
  }

  res.status(200).json({
    success: true,
    data: donor,
  });
}));

///////////////////////////////////////////////////////////
// UPDATE DONOR
///////////////////////////////////////////////////////////
router.put("/:id", verifyToken, wrapAsync(async (req, res) => {

  const { password, ...updateData } = req.body;

  // 🔐 Authorization (VERY IMPORTANT)
  if (req.user.role !== "Admin" && req.user.id !== req.params.id) {
    return res.status(403).json({
      success: false,
      message: "Not authorized to update this donor",
    });
  }

  const donor = await Donor.findByIdAndUpdate(
    req.params.id,
    updateData,
    { new: true }
  ).select("-password");

  if (!donor) {
    return res.status(404).json({
      success: false,
      message: "No donor found",
    });
  }

  res.status(200).json({
    success: true,
    data: donor,
  });
}));

///////////////////////////////////////////////////////////
// DELETE DONOR
///////////////////////////////////////////////////////////
router.delete(
  "/:id",
  verifyToken,
  roleGuard("Admin"),
  wrapAsync(async (req, res) => {

    const donor = await Donor.findByIdAndDelete(req.params.id);

    if (!donor) {
      return res.status(404).json({
        success: false,
        message: "No donor found",
      });
    }

    res.status(200).json({
      success: true,
      message: "Donor removed",
    });
  })
);

export default router;