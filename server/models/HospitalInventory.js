const mongoose = require("mongoose");

const hospitalInventorySchema = new mongoose.Schema({
    productId: {
        type: String,
        minlength: 7,
        maxlength: 14,
        required: true,
        unique: true
    },
    hospitalID: {       
        type: mongoose.Schema.Types.ObjectId,
        required: true
    },
    donorID: {          
        type: mongoose.Schema.Types.ObjectId,
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

const HospitalInventory = mongoose.model("HospitalInventory", hospitalInventorySchema);
module.exports = HospitalInventory;
