import mongoose from "mongoose";

const alertSchema = new mongoose.Schema({
    requesterName: { 
        type: String,
        maxlength: 50,
        required: true,
    },
    contactDetails: {
        type: String,
        maxlength: 100,
        required: true,
    },
    requestId: {
    type: mongoose.Schema.Types.ObjectId,
    ref:  "RequestLog",
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
    radiusKm: {
        type:    Number,
        default: 10,  // ← notify donors within 10km by default
        min:     1,
        max:     500,
    },
    expiresAt: {
        type: Date,
        required:true,
    },
    resolvedAt : {
        type: Date,
        
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
    unitRequired: {
        type: Number,
        min: 1,
        required:true,
    },
    unitType:     {
         type: String, 
         enum: ["ml", "units", "bags"],
         default: "units"
         },
    status: {
        type: String,
        enum: ["Pending", "In Progress", "Resolved", "Escalated"],
        default: "Pending"
    },
    triggeredBy:     
    { type: mongoose.Schema.Types.ObjectId,
        ref: "Hospital",
        required: true
    },
    triggeredByBank: {
        type: mongoose.Schema.Types.ObjectId, 
        ref: "BloodBank"
    },
    resolvedBy:      { 
        type: mongoose.Schema.Types.ObjectId,
        ref: "EmployeeDetail" 
    },
},{timestamps:true});

alertSchema.index({location:"2dsphere"});
alertSchema.index({ bloodGroup: 1, status: 1 });               // ← find active alerts by blood group
alertSchema.index({ expiresAt: 1 });                           // ← for auto-expiry queries
alertSchema.index({ triggeredBy: 1, status: 1 }); 

const AlertLog = mongoose.model("AlertLog", alertSchema);
export default AlertLog;
