import mongoose from "mongoose";

const otpSchema = new mongoose.Schema({
    email: {
        type: String,
        required: [true, "Email is required"]
    },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "user",   // matches mongoose.model("user", ...) in User.js
        required: [true, "User is required"]
    },
    otpHash: {
        type: String,
        required: [true, "OTP hash is required"]
    },
    expiresAt: {
        type: Date,
        default: () => new Date(Date.now() + 10 * 60 * 1000), // 10 min TTL
        index: { expires: 0 }  // MongoDB TTL index auto-deletes expired OTPs
    }
}, {
    timestamps: true
});

const otpModel = mongoose.model("otps", otpSchema);

export default otpModel;
