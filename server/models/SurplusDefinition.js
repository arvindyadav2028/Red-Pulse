const mongoose = require("mongoose");

const surplusDefinitionSchema = new mongoose.Schema({
  status: {
    type: String,
    enum: ["Surplus", "Moderate", "Low"],
    required: true,
    unique: true,
  },
  minUnits: {
    type: Number,
    min: 0,
    required: true,
  },
  maxUnits: {
    type: Number,
    min: 0,
  },
  
  colorCode: {
    type: String,
    enum: ["Green", "Yellow", "Red"],
    required: true,
  },
  recommendedAction: {
    // kept same
    type: String,
    required: true,
  },

 bloodGroupThresholds: [{
    bloodGroup:   { type: String, enum: ["A+","A-","B+","B-","AB+","AB-","O+","O-"], required: true },
    lowBelow:     { type: Number, min: 0, required: true },
    surplusAbove: { type: Number, min: 0, required: true },
}],
},{timestamps:true});

surplusDefinitionSchema.index({ status: 1 });     // ← quick status lookup
surplusDefinitionSchema.index({ colorCode: 1 });

const SurplusDefinition = mongoose.model(
  "SurplusDefinition",
  surplusDefinitionSchema,
);
module.exports = SurplusDefinition;
