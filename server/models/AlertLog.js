const mongoose = require("mongoose");

const alertSchema = new mongoose.Schema({
    requistBodyName: { 
        type: String,
        maxlength: 50,
        required: true,
    },
    contaactDetails: {
        type: String,
        maxlength: 100,
        required: true,
    },
    location: {
        type: String,
        maxlength: 150,
        required: true,
    },
    time: {
        type: Date,
        default: Date.now
    },
    date : {
        type: Date,
        default: Date.now
    },
    crisis: {
        type: String,
        maxlength: 100,
    },
    urgencyLevel: {
        type: Number,
        min: 1,
        max: 5,
        default: 3
    },
    unitRequired: {
        type: Number,
        min: 0
    },
    status: {
        type: String,
        enum: ["Pending", "In Progress", "Resolved", "Escalated"],
        default: "Pending"
    },
    createdBy: {
        type: mongoose.Schema.Types.ObjectId,
    },
    resolvedBy: {
        type: mongoose.Schema.Types.ObjectId,
    },
});

const AlertLog = mongoose.model("AlertLog", alertSchema);
module.exports = AlertLog;
