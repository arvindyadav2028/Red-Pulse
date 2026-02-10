const mongoose = require("mongoose");

const communitySchema = new mongoose.Schema({
    date: { 
        type: Date,
        required: true,
        default: Date.now
    },
    event: { 
        type: String,
        maxlength: 100,
        required: true
    },
    location: { 
        type: String,
        maxlength: 150,
        required: true
    },
    targetGroup: {
        type: String,
        maxlength: 100,
        required: true
    },
    partner: { 
        type: String,
        maxlength: 100
    },
    attendees: {
        type: Number,
        min: 0,
        default: 0
    },
    bloodUnit: {
        type: Number,
        min: 0,
        default: 0
    },
    feedback: { 
        type: String,
        maxlength: 300
    },
    followUpAction: {
        type: String,
        maxlength: 300
    },
    status: { 
        type: String,
        enum: ["Planned", "Ongoing", "Completed", "Cancelled"],
        default: "Planned"
    },
    sponsors: [{
        name: String,
        contributionType: String,
        amount: Number
    }],
});

const CommunityEngagement = mongoose.model("CommunityEngagement", communitySchema);
module.exports = CommunityEngagement;
