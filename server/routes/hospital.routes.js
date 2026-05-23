import { Router } from "express";
const router = Router();

import Hospital from "../models/Hospital.js";
import verifyToken from "../middleware/verifyToken.js";
import roleGuard from "../middleware/roleGuard.js";
import wrapAsync from "../utils/wrapAsync.js";

///////////////////////////////////////////////////////////
// GET ALL HOSPITALS
///////////////////////////////////////////////////////////
router.get("/", wrapAsync(async (req, res) => {

  const hospitals = await Hospital.find({}).select("-password");

  res.status(200).json({
    success: true,
    count: hospitals.length,
    data: hospitals,
  });
}));

///////////////////////////////////////////////////////////
// GET SINGLE HOSPITAL
///////////////////////////////////////////////////////////
router.get("/:id", verifyToken, wrapAsync(async (req, res) => {

  const hospital = await Hospital.findById(req.params.id).select("-password");

  if (!hospital) {
    return res.status(404).json({
      success: false,
      message: "No hospital found",
    });
  }

  res.status(200).json({
    success: true,
    data: hospital,
  });
}));

///////////////////////////////////////////////////////////
// UPDATE HOSPITAL
///////////////////////////////////////////////////////////
router.put("/:id", verifyToken, wrapAsync(async (req, res) => {

  const { password, ...updateData } = req.body;

  // 🔐 Authorization (CRITICAL)
  if (req.user.role !== "Admin" && req.user.id !== req.params.id) {
    return res.status(403).json({
      success: false,
      message: "Not authorized to update this hospital",
    });
  }

  const hospital = await Hospital.findByIdAndUpdate(
    req.params.id,
    updateData,
    { new: true }
  ).select("-password");

  if (!hospital) {
    return res.status(404).json({
      success: false,
      message: "No hospital found",
    });
  }

  res.status(200).json({
    success: true,
    data: hospital,
  });
}));

///////////////////////////////////////////////////////////
// DELETE HOSPITAL
///////////////////////////////////////////////////////////
router.delete(
  "/:id",
  verifyToken,
  roleGuard("Admin"),
  wrapAsync(async (req, res) => {

    const hospital = await Hospital.findByIdAndDelete(req.params.id);

    if (!hospital) {
      return res.status(404).json({
        success: false,
        message: "No hospital found",
      });
    }

    res.status(200).json({
      success: true,
      message: "Hospital removed",
    });
  })
);

export default router;