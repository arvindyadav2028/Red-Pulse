import express from "express";
const router = express.Router();

import Donor from "../../models/Donor.js";
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
    bloodGroup,
    gender,
    age,
    weight,
    address,
    cityOrVillage,
    district,
    state,
    pincode,
    idProof,
    idProofNo,
    image,
  } = req.body;

  // Normalize email
  const normalizedEmail = email.toLowerCase();

  const existing = await Donor.exists({ email: normalizedEmail });
  if (existing) {
    return res.status(409).json({
      success: false,
      message: "Email is already registered."
    });
  }

  const donor = await Donor.create({
    name,
    email: normalizedEmail,
    password,
    phone1,
    bloodGroup,
    gender,
    age,
    weight,
    address,
    cityOrVillage,
    district,
    state,
    pincode,
    idProof,
    idProofNo,
    image,
  });


  const accessToken = generateAccessToken({
    id: donor._id,
    role: "Donor",
    entity: "Donor"
  });

  const { password: _, ...donorData } = donor.toObject();

  res.status(201).json({
    success: true,
    accessToken,
    data: donorData,
  });
}));

///////////////////////////////////////////////////////////////////////////////////////////

router.post("/login", wrapAsync(async (req, res) => {

  const { email, password } = req.body;

  // 1:Validate
  if (!email || !password) {
    return res.status(400).json({
      success: false,
      message: "Email and password are required",
    });
  }

  //2 Normalise
  const normalizedEmail = email.toLowerCase();

  //3.FInd user
  const donor = await Donor.findOne({ email: normalizedEmail });

  if (!donor || !(await donor.matchPassword(password))) {
    return res.status(401).json({
      success: false,
      message: "Invalid credentials",
    });
  }

  const accessToken = generateAccessToken({
    id: donor._id,
    role: "Donor",
    entity: "Donor"
  });

  const { password: _, ...donorData } = donor.toObject();

  res.status(200).json({
    success: true,
    accessToken,
    data: donorData,
  });
}));

////////////////////////////////////////////////////////////////////////////////////////////

router.post("/logout", verifyToken, (req, res) => {
  res.status(200).json({
    success: true,
    message: "Logged out successfully",
  });
});

////////////////////////////////////////////////////////////////////////////////////////////

export default router;

//You fill a registration form
//Bank gives you back a receipt--DOnor data is that recepit also don't change comments