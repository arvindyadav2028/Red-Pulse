import mongoose from "mongoose";

const donorSchema = new mongoose.Schema({
    // Link to the User account that owns this donor profile
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "user",
        required: true,
        unique: true,
    },
    name:          { type: String, maxlength: 50, required: [true, "Name is required"] },
    phone1:        { type: String, maxlength: 15, required: [true, "Phone is required"] },
    phone2:        { type: String, maxlength: 15 },
    idProof:       { type: String, required: [true, "ID proof type is required"] },
    idProofNo:     { type: String, required: [true, "ID proof number is required"], maxlength: 30, minlength: 6 },
    bloodGroup:    { type: String, enum: ["A+","A-","B+","B-","AB+","AB-","O+","O-"], required: [true, "Blood group is required"] },
    gender:        { type: String, enum: ["M","F","O"], required: [true, "Gender is required"] },
    weight:        { type: Number, min: 45, required: [true, "Weight is required"] },
    age:           { type: Number, min: 18, max: 65, required: [true, "Age is required"] },
    allergies:     { type: String, maxlength: 200 },
    medicalHistory:{ type: String, maxlength: 300 },

    // Address
    address:       { type: String, maxlength: 150, required: [true, "Address is required"] },
    landmark:      { type: String, maxlength: 50 },
    cityOrVillage: { type: String, maxlength: 50,  required: [true, "City / Village is required"] },
    pincode:       { type: String, minlength: 6, maxlength: 6, required: [true, "Pincode is required"] },
    district:      { type: String, maxlength: 50,  required: [true, "District is required"] },
    state:         { type: String, maxlength: 50,  required: [true, "State is required"] },

    // GeoJSON — optional, set via GPS
    location: {
        type: { type: String, enum: ["Point"] },
        coordinates: { type: [Number], default: undefined },
    },

    image:            { type: String },
    idProofImage:     { type: String },
    continueDonation: { type: Boolean, default: false },
    availableOnEmg:   { type: Boolean, default: false },

    status:           { type: Number, enum: [0, 1, 2], default: 1 }, // 0=Inactive, 1=Active, 2=Suspended
    badgesEarned:     { type: [String], default: [] },
    lastDonationDate: { type: Date },
    nextEligibleDate: { type: Date },
    totalDonations:   { type: Number, default: 0 },

    reviews: [{
        userId:  { type: mongoose.Schema.Types.ObjectId, ref: "user" },
        rating:  { type: Number, min: 1, max: 5 },
        comment: { type: String, maxlength: 500 },
    }],
}, { timestamps: true });

// Auto-calculate next eligible donation date (56-day WHO standard)
donorSchema.pre("save", function (next) {
    if (this.isModified("lastDonationDate") && this.lastDonationDate) {
        const nextDate = new Date(this.lastDonationDate);
        nextDate.setDate(nextDate.getDate() + 56);
        this.nextEligibleDate = nextDate;
    }
    next();
});

// Geo index — sparse so docs without location are excluded
donorSchema.index({ location: "2dsphere" }, { sparse: true });

const Donor = mongoose.model("Donor", donorSchema);
export default Donor;
