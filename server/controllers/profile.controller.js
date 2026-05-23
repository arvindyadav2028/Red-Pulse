import User from "../models/User.js";
import Donor from "../models/Donor.js";
import Hospital from "../models/Hospital.js";
import BloodBank from "../models/BloodBank.js";
import EmployeeDetail from "../models/EmployeeDetails.js";

/* =================================
   BECOME DONOR
================================= */
export const becomeDonor = async (req, res) => {
    try {
        const userId = req.user._id;

        const existingDonor = await Donor.findOne({ userId });
        if (existingDonor) {
            return res.status(409).json({
                success: false,
                message: "Donor profile already exists"
            });
        }

        const donor = await Donor.create({
            userId,
            ...req.body,
            image: req.files?.image?.[0]?.path,
            idProofImage: req.files?.idProofImage?.[0]?.path
        });

        await User.findByIdAndUpdate(userId, {
            role: "donor",
            onboardingCompleted: true
        });

        return res.status(201).json({ success: true, donor });

    } catch (error) {
        return res.status(500).json({ success: false, message: error.message });
    }
};

/* =================================
   BECOME EMPLOYEE
================================= */
export const becomeEmployee = async (req, res) => {
    try {
        const userId = req.user._id;

        const existingEmployee = await EmployeeDetail.findOne({ userId });
        if (existingEmployee) {
            return res.status(409).json({
                success: false,
                message: "Employee profile already exists"
            });
        }

        const employee = await EmployeeDetail.create({
            userId,
            ...req.body,
            image: req.files?.image?.[0]?.path
        });

        await User.findByIdAndUpdate(userId, {
            role: "employee",
            onboardingCompleted: true
        });

        return res.status(201).json({ success: true, employee });

    } catch (error) {
        return res.status(500).json({ success: false, message: error.message });
    }
};

/* =================================
   BECOME ADMIN  (creates admin profile + optionally an org)
================================= */
export const becomeAdmin = async (req, res) => {
    try {
        const userId = req.user._id;

        // Just set the role; org is created in a separate step
        await User.findByIdAndUpdate(userId, {
            role: "admin",
            onboardingCompleted: true
        });

        return res.status(200).json({ success: true, message: "Admin role granted" });

    } catch (error) {
        return res.status(500).json({ success: false, message: error.message });
    }
};

/* =================================
   REGISTER HOSPITAL  (admin only)
================================= */
export const registerHospital = async (req, res) => {
    try {
        const userId = req.user._id;

        const existingHospital = await Hospital.findOne({ userId });
        if (existingHospital) {
            return res.status(409).json({
                success: false,
                message: "Hospital already registered for this account"
            });
        }

        const hospital = await Hospital.create({
            userId,
            ...req.body,
            image: req.files?.image?.[0]?.path,
            licenceImage: req.files?.licenceImage?.[0]?.path,
            accreditationImage: req.files?.accreditationImage?.[0]?.path
        });

        return res.status(201).json({ success: true, hospital });

    } catch (error) {
        return res.status(500).json({ success: false, message: error.message });
    }
};

/* =================================
   REGISTER BLOODBANK  (admin only)
================================= */
export const registerBloodBank = async (req, res) => {
    try {
        const userId = req.user._id;

        const existingBloodBank = await BloodBank.findOne({ userId });
        if (existingBloodBank) {
            return res.status(409).json({
                success: false,
                message: "Blood bank already registered for this account"
            });
        }

        const bloodBank = await BloodBank.create({
            userId,
            ...req.body,
            image: req.files?.image?.[0]?.path,
            licenceImage: req.files?.licenceImage?.[0]?.path
        });

        return res.status(201).json({ success: true, bloodBank });

    } catch (error) {
        return res.status(500).json({ success: false, message: error.message });
    }
};

/* =================================
   GET MY PROFILE  (any authenticated role)
================================= */
export const getMyProfile = async (req, res) => {
    try {
        const userId = req.user._id;
        const role = req.user.role;

        let profile = null;

        if (role === "donor") {
            profile = await Donor.findOne({ userId }).select("-password");
        } else if (role === "employee") {
            profile = await EmployeeDetail.findOne({ userId }).select("-password");
        } else if (role === "admin") {
            const hospital = await Hospital.findOne({ userId });
            const bloodBank = await BloodBank.findOne({ userId });
            profile = { hospital, bloodBank };
        }

        return res.status(200).json({ success: true, role, profile });

    } catch (error) {
        return res.status(500).json({ success: false, message: error.message });
    }
};
