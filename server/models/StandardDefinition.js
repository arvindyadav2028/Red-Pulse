import mongoose from "mongoose";

const standardSchema = new mongoose.Schema({
  minAge: {
    type: Number,
    default: 18,
  },
  maxAge: {
    type: Number,
    default: 65,
  },
  minWeight: {
    type: Number,
    default: 50, // kg
  },
  donationVolumeMin: {
    type: Number,
    default: 350,
  },
  donationVolumeMax: {
    type: Number,
    default: 450,
  },

  nextEligibleDaysM: {
    type: Number,
    default: 90, // days for males
  },
  nextEligibleDaysF: {
    type: Number,
    default: 120, // days for females
  },
  maxDonationsBloodPerYear: {
    type: Number,
    default: 4,
  },
  bloodStorageDuration: {
    type: Number,
    default: 35,
  },
  plasmaFrequency: {
    type: Number,
    default: 21,
  },
  plasmaStorageDuration: {
    type: Number,
    default: 365,
  },
  maxDonationsPlasmaPerYear: {
    type: Number,
    default: 24,
  },
  plateletsStorageDays: {
    type: Number,
    default: 5,
  },
  rbcStorageDays: {
    type: Number,
    default: 42,
  },
  cryoStorageDays: {
    type: Number,
    default: 365,
  },
  wholeBloodStorageDays: {
    type: Number,
    default: 42,
  },
  canSaveLive: {
    type: Number,
    default: 3,
  },
  isActive: {
    type: Boolean,
    default: true,
  },
},{ timestamps: true });

standardSchema.index({ isActive: 1 }, { unique: true, sparse: true });

const StandardDefinition = mongoose.model("StandardDefinition", standardSchema);
export default StandardDefinition;
