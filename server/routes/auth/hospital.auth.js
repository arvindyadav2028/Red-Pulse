import express from "express";
const router = express.Router();

import Hospital from "../../models/Hospital.js";
import { generateAccessToken } from "../../utils/generateToken.js";
import verifyToken from "../../middleware/verifyToken.js";
import wrapAsync from "../../utils/wrapAsync.js";

///////////////////////////////////////////////////////////
// REGISTER
///////////////////////////////////////////////////////////
router.post("/register", wrapAsync(async (req, res) => {

  const {
    name,
    email,
    password,
    phone1,
    ownership,
    licence,
    accreditation,
    accCertificates,
    type,
    emgServices,
    address,
    cityOrVillage,
    district,
    state,
    pincode,
    location,
    hospitalID,
    hospitalHeadID,
    phoneNo1,
    phoneNo2,
    totalEmp,
    image,
  } = req.body;

  // Normalize email
  const normalizedEmail = email.toLowerCase();

  const existing = await Hospital.exists({
    $or: [{ hospitalID }, { email: normalizedEmail }]
  });

  if (existing) {
    return res.status(409).json({
      success: false,
      message: "Hospital already registered",
    });
  }

  const hospital = await Hospital.create({
    name,
    email: normalizedEmail,
    password,
    phone1,
    ownership,
    licence,
    accreditation,
    accCertificates,
    type,
    emgServices,
    address,
    cityOrVillage,
    district,
    state,
    pincode,
    location,
    hospitalID,
    hospitalHeadID,
    phoneNo1,
    phoneNo2,
    totalEmp,
    image,
  });

  const accessToken = generateAccessToken({
    id: hospital._id,
    role: "Hospital",
    entity: "Hospital",
  });

  const { password: _, ...hospitalData } = hospital.toObject();

  res.status(201).json({
    success: true,
    accessToken,
    data: hospitalData,
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

  // 3: Find hospital
  const hospital = await Hospital.findOne({ email: normalizedEmail });

  // 4: Validate credentials
  if (!hospital || !(await hospital.matchPassword(password))) {
    return res.status(401).json({
      success: false,
      message: "Invalid credentials",
    });
  }

  const accessToken = generateAccessToken({
    id: hospital._id,
    role: "Hospital",
    entity: "Hospital",
  });

  const { password: _, ...hospitalData } = hospital.toObject();

  res.status(200).json({
    success: true,
    accessToken,
    data: hospitalData,
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