const mongoose = require("mongoose");

const logSchema = new mongoose.Schema({
    locationId: {
        type : String,
        minlength: 10,
        maxlength: 14,
        required: true,
        unique: true
    },
    placeName: {
        type: String,
        maxlength: 100,
        required: true
    },
    empId: {
        type: mongoose.Schema.Types.ObjectId,
        required: true
    },
    location: { 
        address: { type: String, maxlength: 150 },
        cityOrVillage: { type: String, maxlength: 50 },
        district: { type: String, maxlength: 50 },
        state: { type: String, maxlength: 50 },
    },
    time: {
        type: Date,
        default: Date.now
    },
    date: {
        type: Date,
        default: Date.now
    },
    amount: {
        type: Number,
        min: 0
    },
    typeOfLocation: {
        type: String,
        maxlength: 50,
    },
    nearbyLandmarks: {
        type: String,
        maxlength: 100,
    },
    coordinates: {
        latitude: { type: Number, required: true },
        longitude: { type: Number, required: true }
    },
    status: {
        type: String,
        enum: ["Recorded", "Verified", "Rejected"],
        default: "Recorded"
    }

});

const LocationLog = mongoose.model("LocationLog", logSchema);
module.exports = LocationLog;
