const mongoose = require("mongoose");

const requestSchema = new mongoose.Schema({
    
    requestedBy: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Hospital", 
        required: true 
    },
    requestedByEmp:  { 
        type: mongoose.Schema.Types.ObjectId,
         ref: "EmployeeDetail",
          required: true
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
    requestedAt: {
        type: Date,
        default: Date.now
    },
    neededBy: {
        type: Date,
       required:true,
    },
    fulfilledAt: { type: Date }, 

    requestedQuantity: {
        type: Number,
        required: true,
        min: 1,
    },
    fullfilledQuantity: {
        type: Number,
        default: 0,
        min: 0
    },
    unitType: {
        type:String,
        enum:["ml", "units", "bags"],
        default: "units",
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
    location: {
        type: {
            type:    String,
            enum:    ["Point"],
            default: "Point",
        },
        coordinates: {
            type:    [Number],
            default: undefined,
        },
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
    bloodBankId: { 
        type: mongoose.Schema.Types.ObjectId, 
        ref: "BloodBank" 
    },
    productId:   { 
        type: mongoose.Schema.Types.ObjectId,
        ref: "BloodBankInventory" 
    },
});

requestSchema.index({ location: "2dsphere" });
const RequestLog = mongoose.model("RequestLog", requestSchema);
module.exports = RequestLog;
