import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: [true, "Username is required"],
        unique: [true, "Username must be unique"],
        trim: true
    },
    email: {
        type: String,
        required: [true, "Email is required"],
        unique: [true, "Email must be unique"],
        lowercase: true,
        trim: true
    },
    password: {
        type: String,
        required: [true, "Password is required"]
    },
    role: {
        type: String,
        enum: ["user", "donor", "employee", "admin"],
        default: "user"
    },
    // Tracks whether the post-login onboarding flow is complete.
    // false  → redirect to /onboarding/role on every login
    // true   → redirect directly to role-specific dashboard
    onboardingCompleted: {
        type: Boolean,
        default: false
    },
    verified: {
        type: Boolean,
        default: false
    }
}, {
    timestamps: true
});

const userModel = mongoose.model("user", userSchema);

export default userModel;
