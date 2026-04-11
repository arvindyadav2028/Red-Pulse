const mongoose= require("mongoose");
const initData = require("./SampleData.js");

// Import all models
const AlertLog = require("../models/AlertLog.js");
const BloodBankInventory = require("../models/BloodBankInventory.js");
const BloodBank = require("../models/BloodBank.js");
const CommunityEngagement = require("../models/CommunityEngagement.js");
const CommunityEvent = require("../models/CommunityEvent.js");
const DonorLog = require("../models/DonorLog.js");
const Donor = require("../models/Donor.js");
const EmployeeDetails = require("../models/EmployeeDetails.js");
const HospitalInventory = require("../models/HospitalInventory.js");
const Hospital = require("../models/Hospital.js");
const LifeSave = require("../models/LifeSave.js");
const LocationLog = require("../models/LocationLog.js");
const RequestLog = require("../models/RequestLog.js");
const StandardDefinition = require("../models/StandardDefinition.js");
const SurplusDefinition = require("../models/SurplusDefinition.js");

async function main() {
    try {
        await mongoose.connect("mongodb://127.0.0.1:27017/LifeLine");
        console.log("Connection successful");
    } catch (err) {
        console.log("Connection error:", err);
    }
}

main();

async function initDB() {
  try {
    console.log("Starting Database Initialization...");

    // Clear old records
    await Promise.all([
      AlertLog.deleteMany({}),
      BloodBankInventory.deleteMany({}),
      BloodBank.deleteMany({}),
      CommunityEngagement.deleteMany({}),
      CommunityEvent.deleteMany({}),
      DonorLog.deleteMany({}),
      Donor.deleteMany({}),
      EmployeeDetails.deleteMany({}),
      HospitalInventory.deleteMany({}),
      Hospital.deleteMany({}),
      LifeSave.deleteMany({}),
      LocationLog.deleteMany({}),
      RequestLog.deleteMany({}),
      StandardDefinition.deleteMany({}),
      SurplusDefinition.deleteMany({}),
    ]);

    // Insert new data (linked to the same model)
    await Promise.all([
      AlertLog.insertMany(initData.alertLog),
      BloodBankInventory.insertMany(initData.bloodBankInventory),
      BloodBank.insertMany(initData.bloodBank),
      CommunityEngagement.insertMany(initData.communityEngagement),
      DonorLog.insertMany(initData.donorLog),
      Donor.insertMany(initData.donor),
      EmployeeDetails.insertMany(initData.employeeDetail),
      HospitalInventory.insertMany(initData.hospitalInventory),
      Hospital.insertMany(initData.hospital),
      LifeSave.insertMany(initData.lifeSaved),
      LocationLog.insertMany(initData.locationLog),
      RequestLog.insertMany(initData.requestLog),
      StandardDefinition.insertMany(initData.standardDefinition),
      SurplusDefinition.insertMany(initData.surplusDefinition),
    ]);

    console.log("Database successfully inserted");
  } 
  catch (error) {
    console.error("Error during initialization:", error);
  } 
  finally {
    mongoose.connection.close();
  }
}

initDB();