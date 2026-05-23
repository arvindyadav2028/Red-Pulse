import { Router } from "express";
const router = Router();

import Employee from "../models/EmployeeDetails.js";
import verifyToken from "../middleware/verifyToken.js";
import roleGuard from "../middleware/roleGuard.js";
import wrapAsync from "../utils/wrapAsync.js";

///////////////////////////////////////////////////////////
// GET ALL EMPLOYEES
///////////////////////////////////////////////////////////
router.get(
  "/",
  verifyToken,
  roleGuard(["Admin", "Hospital"]),
  wrapAsync(async (req, res) => {

    const employees = await Employee.find({}).select("-password");

    res.status(200).json({
      success: true,
      count: employees.length,
      data: employees,
    });
  })
);

///////////////////////////////////////////////////////////
// GET SINGLE EMPLOYEE
///////////////////////////////////////////////////////////
router.get("/:id", verifyToken, wrapAsync(async (req, res) => {

  const employee = await Employee.findById(req.params.id).select("-password");

  if (!employee) {
    return res.status(404).json({
      success: false,
      message: "No employee found",
    });
  }

  res.status(200).json({
    success: true,
    data: employee,
  });
}));

///////////////////////////////////////////////////////////
// UPDATE EMPLOYEE
///////////////////////////////////////////////////////////
router.put("/:id", verifyToken, wrapAsync(async (req, res) => {

  const { password, ...updateData } = req.body;

  // 🔐 Authorization (CRITICAL)
  if (req.user.role !== "Admin" && req.user.id !== req.params.id) {
    return res.status(403).json({
      success: false,
      message: "Not authorized to update this employee",
    });
  }

  const employee = await Employee.findByIdAndUpdate(
    req.params.id,
    updateData,
    { new: true }
  ).select("-password");

  if (!employee) {
    return res.status(404).json({
      success: false,
      message: "No employee found",
    });
  }

  res.status(200).json({
    success: true,
    data: employee,
  });
}));

///////////////////////////////////////////////////////////
// DELETE EMPLOYEE
///////////////////////////////////////////////////////////
router.delete(
  "/:id",
  verifyToken,
  roleGuard("Admin"),
  wrapAsync(async (req, res) => {

    const employee = await Employee.findByIdAndDelete(req.params.id);

    if (!employee) {
      return res.status(404).json({
        success: false,
        message: "No employee found",
      });
    }

    res.status(200).json({
      success: true,
      message: "Employee removed",
    });
  })
);

export default router;