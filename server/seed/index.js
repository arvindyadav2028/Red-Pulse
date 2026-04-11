const mongoose = require("mongoose");
const Hospital = require("../models/Hospital.js");

async function main() {
  try {
    await mongoose.connect("mongodb://127.0.0.1:27017/LifeLine");
    console.log("✅ MongoDB Connected");

    // Optional: clear previous hospitals
    await Hospital.deleteMany({});
    console.log("🧹 Old hospital data cleared");

    // Insert hospitals
    const result = await Hospital.insertMany([
      {
        _id: new mongoose.Types.ObjectId(),
        hospitalID: "HSP1001",
        name: "Sanjeevani MultiCare Hospital",
        hospitalHeadID: new mongoose.Types.ObjectId(),
        type: "Multi-specialty",
        ownership: "Private",
        licence: "LIC-2025-MP-01",
        accreditation: "NABH",
        accCertificates: ["ISO9001", "QualityCare2024"],
        emgServices: "24x7 Emergency with ICU and Trauma Center",
        address: "Sector 5, Arera Colony",
        landmark: "Near DB Mall",
        cityOrVillage: "Bhopal",
        pincode: "462016",
        district: "Bhopal",
        state: "Madhya Pradesh",
        coordinates: { latitude: 23.2599, longitude: 77.4126 },
        image: "hospital1.jpg",
        phoneNo1: "9876543210",
        phoneNo2: "9753124680",
        email: "info@sanjeevani-mc.in",
        totalEmp: 250,
        reviews: [
          {
            userId: new mongoose.Types.ObjectId(),
            rating: 5,
            comment: "Excellent facilities and staff.",
          },
        ],
      },
      // 🏥 Paste your other 9 hospitals here
    ]);

    console.log(`🏥 ${result.length} hospitals inserted successfully!`);
  } catch (err) {
    console.error("❌ Error inserting hospitals:", err);
  } finally {
    mongoose.connection.close();
    console.log("🔒 Connection closed");
  }
}

main();
