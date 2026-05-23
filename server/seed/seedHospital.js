// seed/seedHospital.js
import mongoose from "mongoose";
import Hospital from "../models/Hospital.js";

const hospitalsData = [
{
hospitalID:"HOSP1000",
name:"Hospital 0",
hospitalHeadID:new mongoose.Types.ObjectId(),
type:"General",
ownership:"Private",
licence:"LIC2000",
accreditation:"NABH",
accCertificates:["ISO9001","NABH"],
emgServices:"24x7 Emergency",
email:"hospital0@mail.com",
password:"password123",
address:"Street 0",
landmark:"Near Park",
cityOrVillage:"City 0",
pincode:"462010",
district:"District 0",
state:"Madhya Pradesh",
location:{type:"Point",coordinates:[77.0,23.0]},
image:"https://dummyimage.com/200x200/000/fff",
status:0,
phoneNo1:"9876543210",
phoneNo2:"9123456710",
totalEmp:50,
reviews:[{userId:new mongoose.Types.ObjectId(),rating:1,comment:"Good"}]
},
{
hospitalID:"HOSP1001",
name:"Hospital 1",
hospitalHeadID:new mongoose.Types.ObjectId(),
type:"Multi-specialty",
ownership:"Private",
licence:"LIC2001",
email:"hospital1@mail.com",
password:"password123",
address:"Street 1",
cityOrVillage:"City 1",
pincode:"462011",
district:"District 1",
state:"Madhya Pradesh",
location:{type:"Point",coordinates:[77.01,23.01]},
image:"https://dummyimage.com/200x200/000/fff",
phoneNo1:"9876543211",
totalEmp:60,
reviews:[{userId:new mongoose.Types.ObjectId(),rating:2}]
},
{
hospitalID:"HOSP1002",
name:"Hospital 2",
hospitalHeadID:new mongoose.Types.ObjectId(),
type:"Super-specialty",
ownership:"Private",
licence:"LIC2002",
email:"hospital2@mail.com",
password:"password123",
address:"Street 2",
cityOrVillage:"City 2",
pincode:"462012",
district:"District 2",
state:"Madhya Pradesh",
location:{type:"Point",coordinates:[77.02,23.02]},
image:"https://dummyimage.com/200x200/000/fff",
phoneNo1:"9876543212",
totalEmp:70,
reviews:[{userId:new mongoose.Types.ObjectId(),rating:3}]
},
{
hospitalID:"HOSP1003",
name:"Hospital 3",
hospitalHeadID:new mongoose.Types.ObjectId(),
type:"Clinic",
ownership:"Private",
licence:"LIC2003",
email:"hospital3@mail.com",
password:"password123",
address:"Street 3",
cityOrVillage:"City 3",
pincode:"462013",
district:"District 3",
state:"Madhya Pradesh",
location:{type:"Point",coordinates:[77.03,23.03]},
image:"https://dummyimage.com/200x200/000/fff",
phoneNo1:"9876543213",
totalEmp:80,
reviews:[{userId:new mongoose.Types.ObjectId(),rating:4}]
},
{
hospitalID:"HOSP1004",
name:"Hospital 4",
hospitalHeadID:new mongoose.Types.ObjectId(),
type:"General",
ownership:"Private",
licence:"LIC2004",
email:"hospital4@mail.com",
password:"password123",
address:"Street 4",
cityOrVillage:"City 4",
pincode:"462014",
district:"District 4",
state:"Madhya Pradesh",
location:{type:"Point",coordinates:[77.04,23.04]},
image:"https://dummyimage.com/200x200/000/fff",
phoneNo1:"9876543214",
totalEmp:90,
reviews:[{userId:new mongoose.Types.ObjectId(),rating:5}]
},

// remaining similar pattern 👇

{
hospitalID:"HOSP1005",
name:"Hospital 5",
hospitalHeadID:new mongoose.Types.ObjectId(),
licence:"LIC2005",
email:"hospital5@mail.com",
password:"password123",
address:"Street 5",
cityOrVillage:"City 5",
pincode:"462015",
district:"District 5",
state:"Madhya Pradesh",
location:{type:"Point",coordinates:[77.05,23.05]},
image:"https://dummyimage.com/200x200/000/fff",
phoneNo1:"9876543215"
},
{
hospitalID:"HOSP1006",
name:"Hospital 6",
hospitalHeadID:new mongoose.Types.ObjectId(),
licence:"LIC2006",
email:"hospital6@mail.com",
password:"password123",
address:"Street 6",
cityOrVillage:"City 6",
pincode:"462016",
district:"District 6",
state:"Madhya Pradesh",
location:{type:"Point",coordinates:[77.06,23.06]},
image:"https://dummyimage.com/200x200/000/fff",
phoneNo1:"9876543216"
},
{
hospitalID:"HOSP1007",
name:"Hospital 7",
hospitalHeadID:new mongoose.Types.ObjectId(),
licence:"LIC2007",
email:"hospital7@mail.com",
password:"password123",
address:"Street 7",
cityOrVillage:"City 7",
pincode:"462017",
district:"District 7",
state:"Madhya Pradesh",
location:{type:"Point",coordinates:[77.07,23.07]},
image:"https://dummyimage.com/200x200/000/fff",
phoneNo1:"9876543217"
},
{
hospitalID:"HOSP1008",
name:"Hospital 8",
hospitalHeadID:new mongoose.Types.ObjectId(),
licence:"LIC2008",
email:"hospital8@mail.com",
password:"password123",
address:"Street 8",
cityOrVillage:"City 8",
pincode:"462018",
district:"District 8",
state:"Madhya Pradesh",
location:{type:"Point",coordinates:[77.08,23.08]},
image:"https://dummyimage.com/200x200/000/fff",
phoneNo1:"9876543218"
},
{
hospitalID:"HOSP1009",
name:"Hospital 9",
hospitalHeadID:new mongoose.Types.ObjectId(),
licence:"LIC2009",
email:"hospital9@mail.com",
password:"password123",
address:"Street 9",
cityOrVillage:"City 9",
pincode:"462019",
district:"District 9",
state:"Madhya Pradesh",
location:{type:"Point",coordinates:[77.09,23.09]},
image:"https://dummyimage.com/200x200/000/fff",
phoneNo1:"9876543219"
}
];

async function seedHospitals() {
  try {
    // 1️⃣ Connect to MongoDB
    await mongoose.connect("mongodb://127.0.0.1:27017/LifeLine");
    console.log("✅ MongoDB Connected");

    // 2️⃣ Clear old data
    await Hospital.deleteMany({});
    console.log("🧹 Cleared existing hospital data");

    // 3️⃣ Insert new data
    const result = await Hospital.insertMany(hospitalsData);
    console.log(`🏥 ${result.length} hospitals inserted successfully!`);

  } catch (err) {
    console.error("❌ Error seeding hospitals:", err);
  } finally {
    // 4️⃣ Close connection
    await mongoose.connection.close();
    console.log("🔒 Connection closed");
  }
}

// Run the seeder
seedHospitals();
