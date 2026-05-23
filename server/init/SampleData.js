import mongoose from "mongoose";

const oid = () => new mongoose.Types.ObjectId();
const bloodGroups = ["A+","A-","B+","B-","AB+","AB-","O+","O-"];

// ---------- EMPLOYEES ----------
const employeeDetails = Array.from({ length: 20 }, (_, i) => ({
  _id: oid(),
  name: "Employee " + i,
  role: "Staff"
}));

// ---------- HOSPITAL ----------
const hospital = Array.from({ length: 20 }, (_, i) => ({
  _id: oid(),
  hospitalID: "HOSP" + (1000 + i),
  name: "Hospital " + i,
  hospitalHeadID: employeeDetails[i]._id,
  type: "General",
  ownership: "Private",
  licence: "LIC" + (2000 + i),
  email: `hospital${i}@mail.com`,
  password: "password123",
  address: "Street " + i,
  cityOrVillage: "City " + i,
  pincode: "4620" + (10 + i),
  district: "District " + i,
  state: "Madhya Pradesh",
  location: { type: "Point", coordinates: [77 + i * 0.01, 23 + i * 0.01] },
  image: "https://dummyimage.com/200x200/000/fff",
  phoneNo1: "98765432" + (10 + i)
}));

// ---------- DONOR ----------
const donor = Array.from({ length: 20 }, (_, i) => ({
  _id: oid(),
  name: "Donor " + i,
  bloodGroup: bloodGroups[i % 8],
  phone: "98765432" + (20 + i)
}));

// ---------- ALERT ----------
const alertLog = Array.from({ length: 20 }, (_, i) => ({
  _id: oid(),
  requesterName: "Requester " + i,
  contactDetails: "98765432" + (30 + i),
  location: { type: "Point", coordinates: [76 + i * 0.02, 22 + i * 0.02] },
  bloodGroup: bloodGroups[i % 8],
  component: "Whole Blood",
  unitRequired: (i % 10) + 1,
  expiresAt: new Date(Date.now() + 3600000),
  triggeredBy: hospital[i]._id
}));

// ---------- REQUEST ----------
const requestLog = Array.from({ length: 20 }, (_, i) => ({
  _id: oid(),
  requesterName: "Req " + i,
  contactDetails: "98765432" + (40 + i),
  bloodGroup: bloodGroups[i % 8],
  component: "Whole Blood",
  unitRequired: (i % 10) + 1,
  triggeredBy: hospital[i]._id
}));

// ---------- COMMUNITY ----------
const communityEngagement = Array.from({ length: 20 }, (_, i) => ({
  _id: oid(),
  hospitalId: hospital[i]._id,
  date: new Date(),
  event: "Event " + i,
  location: { type: "Point", coordinates: [75 + i * 0.02, 21 + i * 0.02] },
  targetGroup: "General",
  status: "Planned",
  organizedBy: oid()
}));

// ---------- BLOOD BANK ----------
const bloodBank = Array.from({ length: 20 }, (_, i) => ({
  _id: oid(),
  name: "BloodBank " + i,
  type: "Government",
  cityOrVillage: "City " + i,
  linkedHospitals: [hospital[i]._id],
  registeredDonors: [donor[i]._id]
}));

// ---------- BLOOD BANK INVENTORY ----------
const bloodbankInventory = Array.from({ length: 20 }, (_, i) => ({
  _id: new mongoose.Types.ObjectId(),

  productId: "PBB" + (1000 + i),

  bloodBankID: new mongoose.Types.ObjectId(),  // MUST be this name
  donorID: new mongoose.Types.ObjectId(),      // MUST be this name

  bloodGroup: ["A+","A-","B+","B-","AB+","AB-","O+","O-"][i % 8],

  component: "Whole Blood",

  quantity: 200 + i * 10,

  collectedOn: new Date(),   // NOT collectedAt ❌
  expiryDate: new Date(Date.now() + 86400000),

  status: "Available"
}));

// ---------- HOSPITAL INVENTORY ----------
const hospitalInventory = Array.from({ length: 20 }, (_, i) => ({
  _id: oid(),
  hospitalId: hospital[i]._id,
  bloodGroup: bloodGroups[i % 8],
  quantity: 100 + i * 10
}));

// ---------- LIFE SAVED ----------
const lifeSaved = Array.from({ length: 20 }, (_, i) => ({
  _id: oid(),
  donorId: donor[i]._id,
  bloodGroup: bloodGroups[i % 8],
  totalUnitsGiven: (i % 20) + 1
}));

// ---------- LOCATION LOG ----------
const locationLog = Array.from({ length: 20 }, (_, i) => ({
  _id: oid(),
  location: { type: "Point", coordinates: [78 + i * 0.01, 24 + i * 0.01] },
  hostedBy: hospital[i]._id
}));

// ---------- DONOR LOG ----------
const donorLog = Array.from({ length: 20 }, (_, i) => ({
  _id: oid(),
  donorId: donor[i]._id
}));

// ---------- STANDARD ----------
const standardDefinition = Array.from({ length: 20 }, (_, i) => ({
  _id: oid(),
  name: "Standard " + i
}));

// ---------- SURPLUS ----------
const surplusDefinition = Array.from({ length: 20 }, (_, i) => ({
  _id: oid(),
  name: "Surplus " + i
}));

// ---------- EXPORT ----------
export default {
  alertLog,
  bloodbankInventory,
  bloodBank,
  communityEngagement,
  donorLog,
  donor,
  employeeDetails,
  hospitalInventory,
  hospital,
  lifeSaved,
  locationLog,
  requestLog,
  standardDefinition,
  surplusDefinition
};