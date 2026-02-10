const mongoose = require('mongoose');

const standardSchema = new mongoose.Schema({
    _id : {
        type : String,
    },
    minAge: {
        type: Number,
        default: 18
    },
    maxAge: {
        type: Number,
        default: 65
    },
    minWeight: {
        type: Number,
        default: 50 // kg
    },
    donationVolume: {
        type: String,
        default: "350-450 ml"
    },
    donationFrequency: {
        type: String,
        default: "Every 3 months (males) / Every 4 months (females)"
    },
    nextEligibleDaysM: {
        type: Number,
        default: 90  // days for males
    },
    nextEligibleDaysF: {
        type: Number,
        default: 120  // days for females
    },
    maxDonationsBloodPerYear: {
        type: Number,
        default: 4
    },
    bloodStorageDuration: {
        type: String,
        default: "35-42 days"
    },
    plasmaFrequency: {
        type: String,
        default: "Every 2-4 weeks"
    },
    plasmaStorageDuration: {
        type: String,
        default: "Up to 1 year (frozen)"
    },
    maxDonationsPlasmaPerYear: {
        type: String,
        default: "24-26 times"
    },
    canSaveLive: {
        type: String,
        default: "1 unit can save up to 3 lives"
    },
});

const StandardDefinition = mongoose.model("StandardDefinition", standardSchema);
module.exports = StandardDefinition;
