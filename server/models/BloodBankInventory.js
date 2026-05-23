import mongoose from "mongoose";

const bloodBankInventorySchema = new mongoose.Schema({
    productId: {
        type: String,
        minlength: 7,
        maxlength: 14,
        required: true,
        unique: true,
         match:     [/^[A-Z0-9\-]+$/, "Invalid product ID format"],
    },
    bloodBankID: {      
        type: mongoose.Schema.Types.ObjectId,
        ref: "BloodBank",
        required: true,
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

    // A single donation can be split into multiple components
    // Without this we can't distinguish Whole Blood from Plasma etc.
    component: {
        type:     String,
        enum:     ["Whole Blood", "Plasma", "Platelets", "RBC", "WBC", "Cryoprecipitate"],
        required: true,
    },
    quantity: {    
        type: Number,
        required: true,
        min: 0,
        max: 1000
    },
    unitType: {
        type:    String,
        enum:    ["ml", "units", "bags"],
        default: "units",
    },
    departmentId: {   
        type: mongoose.Schema.Types.ObjectId,
        ref: "Department"
    },
    collectedOn: {
        type:     Date,
        required: true,
        validate: {
            validator: function(v) { return v <= new Date(); },
            message:   "Collection date cannot be in the future"
        }
    },
    // Whole Blood ~35 days, Platelets ~5 days, Plasma ~1 year
    expiryDate: {
        type:     Date,
        required: true,
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
},{timestamps:true});

bloodBankInventorySchema.pre("save", function (next) {
    if (this.expiryDate && this.expiryDate < new Date()) {
        this.status = "Expired";
    }
    next();
});

const BloodBankInventory = mongoose.model("BloodBankInventory", bloodBankInventorySchema);
export default BloodBankInventory;
