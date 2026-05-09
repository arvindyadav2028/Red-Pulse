import jwt from "jsonwebtoken";
import config from "../config/config.js";

const verifyToken = (req, res, next) => {
    const authHeader = req.headers.authorization;

    // Check header
    if (!authHeader || !authHeader.startsWith("Bearer ")) {
        return res.status(401).json({
            message: "No token provided",
        });
    }

    const token = authHeader.split(" ")[1];

    try {
        const decoded = jwt.verify(token, config.JWT_SECRET);

        // Attach user info to request
        req.user = decoded;

        next();
    } catch (error) {
        return res.status(401).json({
            message: "Invalid or expired token",
        });
    }
};

export default verifyToken;