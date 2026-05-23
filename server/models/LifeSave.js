import mongoose from "mongoose";

const lifesaveSchema = new mongoose.Schema({
    donorId: {
        type:     mongoose.Schema.Types.ObjectId,
        ref:      "Donor",
        required: true,
        unique:   true,  //This automatically creates an index internally equivalent to db.collection.createIndex({ donorId: 1 }, { unique: true })
    },
    bloodGroup: {
        type:     String,
        enum:     ["A+", "A-", "B+", "B-", "AB+", "AB-", "O+", "O-"],
        required: true,
    },
    totalDonationCount: { 
        type: Number, 
        default: 0, 
        min: 0
     },
    totalUnitsGiven:    { 
        type: Number, 
        default: 0,
         min: 0 
        },
    lifeSaved:          {
         type: Number, 
         default: 0,
          min: 0 
        }, // totalUnitsGiven * 3
    startYear:          { 
        type: Number, 
        min: 1900,
         max: new Date().getFullYear()
         },
    lastDonationDate:   { 
        type: Date
     },
    badgesEarned:       { 
        type: [String], 
        default: []
     },
    remarks:            { 
        type: String, 
        maxlength: 150,
         trim: true 
        },
    status: {
        type:    String,
        enum:    ["Active", "Inactive", "Verified"],
        default: "Active"
    },
}, { timestamps: true });

lifesaveSchema.index({ bloodGroup: 1, lifeSaved: -1 }); // ← leaderboard
lifesaveSchema.index({ totalDonationCount: -1 });        // ← top donors

const LifeSave = mongoose.model("LifeSave", lifesaveSchema);
export default LifeSave;
