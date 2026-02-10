const mongoose = require('mongoose');

const surplusDefinitionSchema = new mongoose.Schema({
    _id : {
        type : String,
    },
    status: {
        type: String,
        required: true,       // ✅ Surplus / ⚠️ Moderate / ❌ Low
    },
    label: {
        type: String,
        required: true        // Green, Yellow, Red
    },
    stockLevelDefinition: { 
        type: String,
        required: true  
    },
    colorCode: {
        type: String,
        enum: ["Green", "Yellow", "Red"],
        required: true
    },
    recommendedAction: { // kept same
        type: String,
        required: true
    },

    thresholdValue: {
        type: Number,
        min: 0,
        default: 100  // percentage baseline
    },
});

const SurplusDefinition = mongoose.model("SurplusDefinition", surplusDefinitionSchema);
module.exports = SurplusDefinition;
