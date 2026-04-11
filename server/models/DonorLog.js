const mongoose = require("mongoose");

const logSchema = new mongoose.Schema({
    donorId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Donor",
        required: true,
    },
    bloodBankId: {
         type: mongoose.Schema.Types.ObjectId,
          ref: "BloodBank", 
          required: true
         }, 

    productId: { 
        type: mongoose.Schema.Types.ObjectId, 
        ref: "BloodBankInventory" 
    },
    DonoationDate: {
        type: Date,
        required: true
    },
    Quantity: {
        type: Number,
        min: 1,
        required: true
    },
    unitType:      {
         type: String, 
         enum: ["ml", "units", "bags"],
          default: "units"
         },

         bloodGroup: {
    type:     String,
    enum:     ["A+", "A-", "B+", "B-", "AB+", "AB-", "O+", "O-"],
    required: true,
    },

    component: {
    type:     String,
    enum:     ["Whole Blood", "Plasma", "Platelets", "RBC", "WBC", "Cryoprecipitate"],
    required: true,
    },

    totalDonation: {
        type: Number,
        default: 0,
    },

    nextEligibleDate: {
        type: Date,
        required: true
    },
    placeName: {
        type: String,
        maxlength: 100,
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
   
    lifeSaved: {
        type: Number,
        default: 0,
    },
    remarks: {
        type: String,
        maxlength: 150
    },
    processedBy: {   //Employye Id Who takes the blood
        type: mongoose.Schema.Types.ObjectId,
        ref: "EmployeeDetail",
        required:true
    },
    status: {
        type: String,
       enum: ["Pending", "Approved", "Completed", "Rejected"],
        default: "Recorded"
    }

}, { timestamps: true });

logSchema.index({ donorId: 1, donationDate: -1 }); // ← donor history
logSchema.index({ bloodBankId: 1, donationDate: -1 });

logSchema.index({ location: "2dsphere" });

const DonorLog = mongoose.model("DonorLog", logSchema);
module.exports = DonorLog;


//Indexes are used to speed up queries. Without them MongoDB scans every document in a collection to find matches — called a collection scan.