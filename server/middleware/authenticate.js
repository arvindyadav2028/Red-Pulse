import jwt from "jsonwebtoken";
import config from "../config/config.js";
import userModel from "../models/User.js";

const authenticate = async (req, res, next) => {
  try {
    // 1. Get token from header
    const authHeader = req.headers.authorization;
    const token = authHeader && authHeader.split(" ")[1];

    if (!token) {
      return res.status(401).json({ message: "Access token required" });
    }

    // 2. Verify token
    const decoded = jwt.verify(token, config.JWT_SECRET);

    // 3. Find user and attach to request
    const user = await userModel.findById(decoded.id).select("-password");
    
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    //attached the fetched user to req promise
    req.user = user;
    req.sessionId = decoded.sessionId; // Useful for logout logic
    next();
  } catch (error) {
    return res.status(401).json({
      message: "Invalid or expired token",
      error: error.message
    });
  }
};

export default authenticate;