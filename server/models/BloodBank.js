import mongoose from "mongoose";

const bloodBankSchema = new mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "user",
        required: true,
        unique: true,
    },
    bloodBankID: { type: String, minlength: 3, maxlength: 14, trim: true },
    hospitalId:  { type: mongoose.Schema.Types.ObjectId, ref: "Hospital" },
    name:        { type: String, minlength: 3, maxlength: 50, required: [true, "Blood bank name is required"] },
    bankHeadID:  { type: mongoose.Schema.Types.ObjectId, ref: "EmployeeDetail" },
    type:        { type: String, enum: ["Government","Private","NGO","Hospital Attached","Hospital-Based"] },
    ownership:   { type: String, maxlength: 50 },
    licence:     { type: String, maxlength: 50 },
    accreditation: { type: String, maxlength: 50 },
    emgServices: { type: String, maxlength: 150 },

    address:       { type: String, maxlength: 150, required: [true, "Address is required"] },
    landmark:      { type: String, maxlength: 50 },
    cityOrVillage: { type: String, maxlength: 50,  required: [true, "City / Village is required"] },
    pincode:       { type: String, minlength: 6, maxlength: 6, required: [true, "Pincode is required"], match: [/^\d{6}$/, "Pincode must be 6 digits"] },
    district:      { type: String, maxlength: 50,  required: [true, "District is required"] },
    state:         { type: String, maxlength: 50,  required: [true, "State is required"] },

    location: {
        type: { type: String, enum: ["Point"], default: "Point" },
        coordinates: { type: [Number], default: undefined },
    },

    image:        { type: String },
    licenceImage: { type: String },
    status: { type: Number, enum: [0, 1, 2], default: 0 },
    phoneNo1: { type: String, maxlength: 15, required: [true, "Contact number is required"] },
    phoneNo2: { type: String, maxlength: 15 },
    totalEmp: { type: Number, min: 0, max: 1000000 },

    reviews: [{
        userId:  { type: mongoose.Schema.Types.ObjectId, ref: "user" },
        rating:  { type: Number, min: 1, max: 5 },
        comment: { type: String, maxlength: 500, trim: true },
    }],
}, { timestamps: true });

bloodBankSchema.index({ location: "2dsphere" }, { sparse: true });

// One review per user
bloodBankSchema.path("reviews").validate(function (reviews) {
    const ids = reviews.map(r => r.userId.toString());
    return ids.length === new Set(ids).size;
}, "A user can only submit one review");

const BloodBank = mongoose.model("BloodBank", bloodBankSchema);
export default BloodBank;
