const mongoose = require("mongoose");

const requestSchema = new mongoose.Schema({
    requestBodyID: {
        type: mongoose.Schema.Types.ObjectId,
    },
    requestedBy: {
        type: mongoose.Schema.Types.ObjectId,
    },
    requiredComponent: {
        type: String,
        enum: ["Whole Blood", "Plasma", "Platelets", "RBC", "Other"],
        required: true,
    },
    requiredBloodType: {
        type: String,
        enum: ["A+", "A-", "B+", "B-", "AB+", "AB-", "O+", "O-"],
        required: true,
    },
    time: {
        type: Date,
        default: Date.now
    },
    date: {
        type: Date,
        default: Date.now
    },
    requestedQuantity: {
        type: Number,
        required: true,
        min: 0
    },
    fullfilledQuantity: {
        type: Number,
        default: 0
    },
    urgencyLevel: {
        type: Number,
        min: 1,
        max: 5,
        default: 3
    },
    status: {
        type: String,
        enum: ["Pending", "Approved", "Partially Fulfilled", "Fulfilled", "Rejected", "Cancelled"],
        default: "Pending"
    },
    address: { 
        type: String,
        maxlength: 150,
        required: true,
    },
    coordinates: {
        latitude: { type: Number, required: true },
        longitude: { type: Number, required: true }
    },
    rejectionReason: {
        type: String,
        maxlength: 150,
    },
    approvedBy: {   //who accept request individual or employee
        type: mongoose.Schema.Types.ObjectId,
        ref: "EmployeeDetail"
    },
    resolvedBy: {    //who solve request hospital/bankId
            type: mongoose.Schema.Types.ObjectId,
            ref: "Hospital"
        },
});

const RequestLog = mongoose.model("RequestLog", requestSchema);
module.exports = RequestLog;
