const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");

const donorSchema = new mongoose.Schema({
    name: { type: String, maxlength: 50, required: true },
    phone1: { type: String, maxlength: 15, required: true },
    phone2: { type: String, maxlength: 15 },
    idProof: { type: String, required: true },
    idProofNo: { type: String, required: true, maxlength: 30, minlength: 6 },
    bloodGroup: { type: String, enum: ["A+", "A-", "B+", "B-", "AB+", "AB-", "O+", "O-"], required: true },
    
    // ── Auth ──────────────────────────────────────
    email: { type: String, maxlength: 100, required: true, unique: true, lowercase: true,match:[/^\S+@\S+\.\S+$/, "Invalid email format"], },
    password: { type: String, required: true, minlength: 6 },

    gender: { type: String, enum: ["M", "F", "O"], required: true },
    weight: { type: Number, min: 45, required: true },
    age: { type: Number, min: 18, max: 65, required: true },
    allergies: { type: String, maxlength: 200 },
    medicalHistory: { type: String, maxlength: 300 },

    // ── Address ───────────────────────────────────
    address: { type: String, maxlength: 150, required: true },
    landmark: { type: String, maxlength: 50 },
    cityOrVillage: { type: String, maxlength: 50, required: true },
    pincode: { type: String, minlength: 6, maxlength: 6, required: true },
    district: { type: String, maxlength: 50, required: true },
    state: { type: String, maxlength: 50, required: true },

    // ── Location (for Emergency Circle Alert) ─────
    location: {
        type: {
            type:    String,
            enum:    ["Point"],
        // default: "Point",
        },
        coordinates: {
            type:    [Number],
            default: undefined,
            
        },
    },

    image: { type: String, required: true },
    continueDonation: { type: Boolean, default: false },
    availableOnEmg:   { type: Boolean, default: false },
    
    status: { type: Number, enum: [0, 1, 2], default: 0 }, // 0=Inactive, 1=Active, 2=Suspended
    badgesEarned: { type: [String] },
    lastDonationDate: { type: Date },
    nextEligibleDate: { type: Date }, // ← Added: auto-calculated
    totalDonations: { type: Number, default: 0 },

    reviews: [{
        userId: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
        rating: { type: Number, min: 1, max: 5 },
        comment: { type: String }
    }],
}, { timestamps: true }); // ← Added: createdAt & updatedAt auto fields

// ── Hash password before saving ───────────────────
donorSchema.pre("save", async function (next) {
    if (!this.isModified("password")) return next();
    this.password = await bcrypt.hash(this.password, 10); // 10 is Salt rounds (cost factor), higher number slow performance
    next();
});

// ── Auto-calculate next eligible donation date ────
donorSchema.pre("save", function (next) {
    if (this.isModified("lastDonationDate") && this.lastDonationDate) {
        const nextDate = new Date(this.lastDonationDate);
        nextDate.setDate(nextDate.getDate() + 56); // 56 days cooldown
        this.nextEligibleDate = nextDate;
    }
    next();
});

// ── Compare password on login ─────────────────────
donorSchema.methods.matchPassword = async function (enteredPassword) {
    return await bcrypt.compare(enteredPassword, this.password);
};

// ── Geo index for location-based donor search ─────
donorSchema.index(
    { "location": "2dsphere" },
    { sparse: true }  //It tells MongoDB: “Only include documents in index if this field exists”
);

const Donor = mongoose.model("Donor", donorSchema);
module.exports = Donor;