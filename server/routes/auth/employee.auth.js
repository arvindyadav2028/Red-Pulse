import express from "express";
const router = express.Router();

import { generateAccessToken } from "../../utils/generateToken.js";
import verifyToken from "../../middleware/verifyToken.js";
import wrapAsync from "../../utils/wrapAsync.js";

import EmployeeDetail from "../../models/EmployeeDetails.js";

///////////////////////////////////////////////////////////
// REGISTER
///////////////////////////////////////////////////////////
router.post("/register", wrapAsync(async (req, res) => {

  const {
    empId,
    hospitalId,
    name,
    age,
    gender,
    phone1,
    email,
    password,
    workLocation,
    designation,
    image,
    role,
    shift,
  } = req.body;

  // Normalize email
  const normalizedEmail = email.toLowerCase();

  const existing = await EmployeeDetail.exists({ email: normalizedEmail });

  if (existing) {
    return res.status(409).json({
      success: false,
      message: "Employee already registered",
    });
  }

  const employee = await EmployeeDetail.create({
    empId,
    hospitalId,
    name,
    age,
    gender,
    phone1,
    email: normalizedEmail,
    password,
    workLocation,
    designation,
    image,
    role,
    shift,
  });

  const accessToken = generateAccessToken({
    id: employee._id,
    role: "Employee",
    entity: "Employee",
  });

  const { password: _, ...employeeData } = employee.toObject();

  res.status(201).json({
    success: true,
    accessToken,
    data: employeeData,
  });
}));

///////////////////////////////////////////////////////////
// LOGIN
///////////////////////////////////////////////////////////
router.post("/login", wrapAsync(async (req, res) => {

  const { email, password } = req.body;

  // 1: Validate input
  if (!email || !password) {
    return res.status(400).json({
      success: false,
      message: "Email and password are required",
    });
  }

  // 2: Normalize
  const normalizedEmail = email.toLowerCase();

  // 3: Find employee
  const employee = await EmployeeDetail.findOne({ email: normalizedEmail });

  // 4: Validate credentials
  if (!employee || !(await employee.matchPassword(password))) {
    return res.status(401).json({
      success: false,
      message: "Invalid credentials",
    });
  }

  const accessToken = generateAccessToken({
    id: employee._id,
    role: "Employee",
    entity: "Employee",
  });

  const { password: _, ...employeeData } = employee.toObject();

  res.status(200).json({
    success: true,
    accessToken,
    data: employeeData,
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