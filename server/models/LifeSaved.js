const mongoose = require("mongoose");

const lifeSchema = new mongoose.Schema({
    donorId: { 
        type: mongoose.Schema.Types.ObjectId,
        required: true,
    },
    donorName: {
        type: String,
        maxlength: 50,
        required: true,
    },
    quantityDonated: { 
        type: Number,
        required: true,
        min: 0
    },
    lifeSaved: {
        type: Number,
        required: true,
        min: 0
    },
    startYear: {
        type: String,
        maxlength: 4,
        required: true,
    },
    presentYear: { 
        type: String,
        maxlength: 4,
        required: true,
    },
    totalDonationCount: {
        type: Number,
        default: 0
    },
    remarks: {
        type: String,
        maxlength: 150
    },
    status: {
        type: String,
        enum: ["Active", "Inactive", "Verified"],
        default: "Active"
    },
});

const LifeSave = mongoose.model("LifeSave", lifeSchema);
module.exports = LifeSave;
