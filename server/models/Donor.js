const mongoose = require("mongoose");

const donorSchema = new mongoose.Schema({
    name: {
        type: String,
        maxlength: 50,
        required: true,
    },
    phone1: {
        type: String,
        maxlength: 15,
        required: true,
    },
    phone2: {
        type: String,
        maxlength: 15,
    },
    idProof: {
        type: String,
        required: true
    },
    idProofNo: {
        type: String,
        required: true,
        maxlength: 30,
        minlength: 6,
    },
    bloodGroup: {
        type: String,
        enum: ["A+", "A-", "B+", "B-", "AB+", "AB-", "O+", "O-"],
        required: true,
    },
    email: {
        type: String,
        maxlength: 100,
        required: true,
    },
    gender: {
        type: String,
        enum: ["M", "F", "O"],
        required: true
    },
    weight: {
        type: Number,
        min: 45,
        required: true
    },
    age: {
        type: Number,
        min: 18,
        max: 65,
        required: true
    },
    allergies: {
        type: String,
        maxlength: 200,
    },
    medicalHistory: {
        type: String,
        maxlength: 300,
    },

    //Address
    address: {
        type: String,
        maxlength: 150,
        required: true,
    },
    landmark: {
        type: String,
        maxlength: 50
    },
    cityOrVillage: {
        type: String,
        maxlength: 50,
        required: true,
    },
    pincode: {
        type: String,
        minlength: 6,
        maxlength: 6,
        required: true
    },
    district: {
        type: String,
        maxlength: 50,
        required: true
    },
    state: {
        type: String,
        maxlength: 50,
        required: true
    },
    image: {
        type: String,
        required: true,
    },

    continueDonation: {
        type: String,
        maxlength: 1, // Y/N
    },
    availableOnEmg: {
        type: String,
        maxlength: 1, // Y/N
    },
    status: {
        type: Number,
        enum: [0, 1, 2], // 0 = Inactive, 1 = Active, 2 = Suspended
        default: 0,
    },
    badgesEarned: {
        type: [String], // Array of badge titles
    },
    lastDonationDate: {
        type: Date
    },
    totalDonations: {
        type: Number,
        default: 0
    },

    reviews: [{
        userId: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
        rating: { type: Number, min: 1, max: 5 },
        comment: { type: String }
    }],
});

const Donor = mongoose.model("Donor", donorSchema);
module.exports = Donor;
