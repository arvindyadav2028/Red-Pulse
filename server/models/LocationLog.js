import mongoose from "mongoose";

const logSchema = new mongoose.Schema({
    locationId: {
        type : String,
        minlength: 10,
        maxlength: 14,
        required: true,
        unique: true,
         trim:      true,
    match:     [/^[A-Z0-9\-]+$/, "Invalid location ID format"],
    },
    placeName: {
        type: String,
        maxlength: 100,
        required: true
    },
    empId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "EmployeeDetail",
        required: true
    },
    address:       { type: String, maxlength: 150, required: true, trim: true },
    cityOrVillage: { type: String, maxlength: 50,  required: true, trim: true },
    district:      { type: String, maxlength: 50,  required: true, trim: true },
    state:         { type: String, maxlength: 50,  required: true, trim: true },

    geoLocation: {
        type: { type: String, enum: ["Point"], default: "Point" },
        coordinates: { type: [Number], default: undefined }, // [longitude, latitude]
    },
    eventDate: {
        type: Date, 
        required: true
    },
    amount: {
        type: Number,
        min: 0
    },
    typeOfLocation: {
        type: String,
        enum: ["Permanent", "Mobile Camp", "Outreach Drive", "Emergency"],
        required: true,
    },
    nearbyLandmarks: {
        type: String,
        maxlength: 100,
    },
    
    totalDonors:     { 
        type: Number,
         min: 0, 
         default: 0 
        },
     
    totalUnitsCollected: {
        type: Number,
        min: 0, 
        default: 0 
    },
    hostedBy:   { 
        type: mongoose.Schema.Types.ObjectId, 
        ref: "Hospital" 
    },
    hostedByBank: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "BloodBank" 
    },
    status: {
        type: String,
        enum: ["Recorded", "Verified", "Rejected"],
        default: "Recorded"
    }

},{timestamps:true});
logSchema.index({ geoLocation: "2dsphere" });

logSchema.pre("save", function(next) {
    if (!this.hostedBy && !this.hostedByBank) {
        return next(new Error("Either hostedBy or hostedByBank is required"));
    }
    next();
});

logSchema.index({ hostedBy: 1, eventDate: -1 });     
logSchema.index({ typeOfLocation: 1, status: 1 });

const LocationLog = mongoose.model("LocationLog", logSchema);
export default LocationLog;
