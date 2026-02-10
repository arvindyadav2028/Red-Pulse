const mongoose = require("mongoose");

const bloodBankInventorySchema = new mongoose.Schema({
    productId: {
        type: String,
        minlength: 7,
        maxlength: 14,
        required: true,
        unique: true
    },
    bloodBankID: {      
        type: mongoose.Schema.Types.ObjectId,
        ref: "BloodBank",
        // required: true
    },
    donorID: {         
        type: mongoose.Schema.Types.ObjectId,
        ref: "Donor",
        required: true,
    },
    bloodGroup: {      
        type: String,
        enum: ["A+", "A-", "B+", "B-", "AB+", "AB-", "O+", "O-"],
        required: true
    },
    quantity: {    
        type: Number,
        required: true,
        min: 0,
        max: 1000
    },
    departmentId: {   
        type: mongoose.Schema.Types.ObjectId,
        ref: "Department"
    },
    status: {
        type: String,
        enum: ["Available", "Reserved", "Used", "Discarded", "Expired"],
        default: "Available"
    },
    remarks: {
        type: String,
        maxlength: 150
    },
});

const BloodBankInventory = mongoose.model("BloodBankInventory", bloodBankInventorySchema);
module.exports = BloodBankInventory;
