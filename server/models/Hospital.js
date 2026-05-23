import mongoose from "mongoose";

const hospitalSchema = new mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "user",
        required: true,
        unique: true,
    },
    hospitalID:     { type: String, minlength: 3, maxlength: 14, trim: true },
    name:           { type: String, minlength: 3, maxlength: 50, required: [true, "Hospital name is required"] },
    hospitalHeadID: { type: mongoose.Schema.Types.ObjectId, ref: "EmployeeDetail" },
    type:           { type: String, enum: ["General","Multi Speciality","Super-specialty","Emergency","Trauma Center","Clinic"] },
    ownership:      { type: String, maxlength: 50 },
    licence:        { type: String, maxlength: 50 },
    accreditation:  { type: String, maxlength: 50 },
    emgServices:    { type: String, maxlength: 150 },

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

    image:              { type: String },
    licenceImage:       { type: String },
    accreditationImage: { type: String },
    status: { type: Number, enum: [0, 1, 2], default: 0 }, // 0=Pending, 1=Active, 2=Suspended
    phoneNo1: { type: String, maxlength: 15, required: [true, "Contact number is required"] },
    phoneNo2: { type: String, maxlength: 15 },
    totalEmp: { type: Number, min: 0, max: 1000000 },

    reviews: [{
        userId:  { type: mongoose.Schema.Types.ObjectId, ref: "user" },
        rating:  { type: Number, min: 1, max: 5 },
        comment: { type: String, maxlength: 500, trim: true },
    }],
}, { timestamps: true });

hospitalSchema.index({ location: "2dsphere" }, { sparse: true });

const Hospital = mongoose.model("Hospital", hospitalSchema);
export default Hospital;
