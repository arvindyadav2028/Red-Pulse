const mongoose = require("mongoose");

const bloodBankSchema = new mongoose.Schema({
    bloodBanklID: {      
        type: String,
        minlength: 6,
        maxlength: 14,
        required: true,
        unique: true
    },
    name: {               
        type: String,
        minlength: 5,
        maxlength: 50,
        required: true,
    },
    bankHeadID: {         
        type: mongoose.Schema.Types.ObjectId,
        ref: "Employee",
        required: true,
    },
    type: {             
        type: String,
        enum: ["Government", "Private", "NGO", "Hospital-Based"],
        required: true
    },
    ownership: {        
        type: String,
        maxlength: 50,
        required: true,
    },
    licence: {          
        type: String,
        maxlength: 50,
        required: true
    },
    accreditation: {     
        type: String,
        maxlength: 50,
    },
    accCertificates: {   
        type: [String],   
    },
    emgServices: {        
        type: String,
        maxlength: 150,
    },

    //Adress
    address: {
        type: String,
        maxlength: 150,
        required: true,
    },
    landmark: {
        type: String,
        maxlength: 50,
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
    coordinates: {        // geolocation
        latitude: { type: Number, required: true },
        longitude: { type: Number, required: true }
    },
    image: {
        type: String,
        required: true
    },

    //Contact info
    phoneNo1: {
        type: String,
        maxlength: 15,
        required: true,
    },
    phoneNo2: {
        type: String,
        maxlength: 15,
    },
    email: {
        type: String,
        maxlength: 100,
        required: true,
    },

    totalEmp: {
        type: Number,
        max: 1000000,
    },
    reviews: [{
        userId: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
        rating: { type: Number, min: 1, max: 5 },
        comment: { type: String }
    }],
});

const BloodBank = mongoose.model("BloodBank",bloodBankSchema);

module.exports = BloodBank;