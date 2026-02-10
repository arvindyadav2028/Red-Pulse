// Auto-generated SampleData based on models
const mongoose = require('mongoose');

module.exports = {
  communityEngagement: [
  {
    date: "2025-11-01T00:00:00Z",
    event: "Mega Blood Donation Drive 2025",
    location: "Indira Gandhi Stadium, New Delhi",
    targetGroup: "Corporate Employees & Students",
    partner: "Red Cross India",
    attendees: 950,
    bloodUnit: 820,
    feedback: "Excellent turnout and efficient organization. Media coverage boosted awareness.",
    followUpAction: "Plan a similar national drive in Q1 2026 focusing on metro cities.",
    status: "Completed",
    sponsors: [
      { name: "Tata Trusts", contributionType: "Financial", amount: 500000 },
      { name: "Hero Motocorp", contributionType: "Logistics", amount: 150000 }
    ]
  },
  {
    date: "2025-10-12T00:00:00Z",
    event: "University Blood Awareness Week",
    location: "Banaras Hindu University, Varanasi",
    targetGroup: "Students & Faculty",
    partner: "Divine Life General Hospital",
    attendees: 400,
    bloodUnit: 120,
    feedback: "High enthusiasm from students; effective health check-ups conducted.",
    followUpAction: "Include plasma donation awareness next session.",
    status: "Completed",
    sponsors: [
      { name: "State Bank of India", contributionType: "Awareness Material", amount: 50000 }
    ]
  },
  {
    date: "2025-09-28T00:00:00Z",
    event: "World Blood Donor Day Celebration",
    location: "Lucknow City Center Auditorium",
    targetGroup: "Registered Donors & Public Volunteers",
    partner: "City Care Multi-specialty Hospital",
    attendees: 300,
    bloodUnit: 200,
    feedback: "Recognition ceremony boosted donor retention.",
    followUpAction: "Publish annual donor leaderboard on RedPulse app.",
    status: "Completed",
    sponsors: [
      { name: "Apollo Foundation", contributionType: "Gifts & Mementos", amount: 30000 }
    ]
  },
  {
    date: "2025-11-10T00:00:00Z",
    event: "Corporate Health Camp",
    location: "Infosys Campus, Pune",
    targetGroup: "Corporate Professionals",
    partner: "Metro City Super-specialty Hospital",
    attendees: 250,
    bloodUnit: 160,
    feedback: "Well-received. Employees appreciated mobile donation van setup.",
    followUpAction: "Quarterly schedule with major IT companies in Pune & Mumbai.",
    status: "Ongoing",
    sponsors: [
      { name: "Infosys Foundation", contributionType: "CSR Initiative", amount: 200000 }
    ]
  },
  {
    date: "2025-08-05T00:00:00Z",
    event: "Rural Health & Donation Awareness Camp",
    location: "Amethi, Uttar Pradesh",
    targetGroup: "Rural Villagers & Farmers",
    partner: "Jeevan Jyoti Charitable Blood Bank",
    attendees: 180,
    bloodUnit: 75,
    feedback: "Good local participation; need more medical staff for screening.",
    followUpAction: "Deploy mobile medical vans and training sessions next quarter.",
    status: "Completed",
    sponsors: [
      { name: "Bharat Petroleum CSR", contributionType: "Financial", amount: 120000 }
    ]
  },
  {
    date: "2025-11-03T00:00:00Z",
    event: "Disaster Relief Donation Camp",
    location: "Patna Flood Relief Center",
    targetGroup: "General Public & NGOs",
    partner: "Sahara Blood Center",
    attendees: 600,
    bloodUnit: 480,
    feedback: "High urgency; camp successfully managed emergency needs.",
    followUpAction: "Build permanent emergency mobile units for future crises.",
    status: "Completed",
    sponsors: [
      { name: "UNICEF India", contributionType: "Emergency Funding", amount: 300000 }
    ]
  },
  {
    date: "2025-10-15T00:00:00Z",
    event: "Blood Safety Training Workshop",
    location: "Fortune Multi-specialty Center, Bhopal",
    targetGroup: "Hospital Technicians & Nurses",
    partner: "WHO Regional Office",
    attendees: 120,
    bloodUnit: 0,
    feedback: "Informative and well-structured training sessions.",
    followUpAction: "Schedule next-level certification workshop in January 2026.",
    status: "Completed",
    sponsors: [
      { name: "WHO", contributionType: "Technical Training", amount: 100000 }
    ]
  },
  {
    date: "2025-12-05T00:00:00Z",
    event: "Youth Blood Champions Drive",
    location: "Rajiv Gandhi Stadium, Hyderabad",
    targetGroup: "College Youth & Volunteers",
    partner: "Aarogyam Govt Blood Bank",
    attendees: 700,
    bloodUnit: 560,
    feedback: "Youth turnout exceeded expectations; media engagement strong.",
    followUpAction: "Launch online donor challenge campaign on social media.",
    status: "Planned",
    sponsors: [
      { name: "RedPulse Foundation", contributionType: "Financial", amount: 250000 },
      { name: "NSS Unit Hyderabad", contributionType: "Volunteer Support", amount: 0 }
    ]
  },
  {
    date: "2025-07-19T00:00:00Z",
    event: "Women Health & Donation Seminar",
    location: "Shanti Care General Hospital, Patna",
    targetGroup: "Female Donors & Health Workers",
    partner: "Women’s Health NGO",
    attendees: 150,
    bloodUnit: 60,
    feedback: "Excellent discussion; several women registered as first-time donors.",
    followUpAction: "Launch regular women-only donation campaigns across Bihar.",
    status: "Completed",
    sponsors: [
      { name: "Care India", contributionType: "Training", amount: 50000 }
    ]
  },
  {
    date: "2025-09-01T00:00:00Z",
    event: "Community Blood Donation Marathon",
    location: "Marine Drive, Mumbai",
    targetGroup: "Public Volunteers & NGOs",
    partner: "Rotary Club of Mumbai",
    attendees: 1200,
    bloodUnit: 950,
    feedback: "Record-breaking event; smooth logistics and registration.",
    followUpAction: "Apply for national recognition under CSR category.",
    status: "Completed",
    sponsors: [
      { name: "HDFC Bank", contributionType: "Financial", amount: 600000 },
      { name: "Mahindra Rise", contributionType: "Infrastructure Support", amount: 250000 }
    ]
  }
],
donor: [
  {
    name: "Arun Sharma",
    phone1: "+919812345678",
    phone2: "+919812345679",
    idProof: "Aadhar",
    idProofNo: "123456789012",
    bloodGroup: "A+",
    email: "arun.sharma@example.com",
    gender: "M",
    weight: 72,
    age: 29,
    allergies: "None",
    medicalHistory: "Healthy, no prior diseases",
    address: "Flat 12, Green Apartments, Sector 10",
    landmark: "Near City Mall",
    cityOrVillage: "Lucknow",
    pincode: "226001",
    district: "Lucknow",
    state: "Uttar Pradesh",
    image: "arun_sharma.jpg",
    continueDonation: "Y",
    availableOnEmg: "Y",
    status: 1,
    badgesEarned: ["Gold Donor", "Top Volunteer"],
    lastDonationDate: "2025-10-12T00:00:00Z",
    totalDonations: 5,
    reviews: [
      {
        userId: "6728f1b5a4d2ab12f0567101",
        rating: 5,
        comment: "Always available for emergencies."
      }
    ]
  },
  {
    name: "Priya Mehta",
    phone1: "+919700112233",
    idProof: "PAN",
    idProofNo: "ABCDE1234F",
    bloodGroup: "O+",
    email: "priya.mehta@example.com",
    gender: "F",
    weight: 58,
    age: 25,
    allergies: "Dust allergy",
    medicalHistory: "Minor seasonal allergies only",
    address: "House No. 18, Nehru Nagar",
    landmark: "Opposite SBI Bank",
    cityOrVillage: "Delhi",
    pincode: "110019",
    district: "New Delhi",
    state: "Delhi",
    image: "priya_mehta.jpg",
    continueDonation: "Y",
    availableOnEmg: "Y",
    status: 1,
    badgesEarned: ["Silver Donor"],
    lastDonationDate: "2025-09-05T00:00:00Z",
    totalDonations: 3
  },
  {
    name: "Vikram Patel",
    phone1: "+919855221199",
    idProof: "Driving License",
    idProofNo: "DL-09-202145",
    bloodGroup: "B+",
    email: "vikram.patel@example.com",
    gender: "M",
    weight: 80,
    age: 32,
    allergies: "None",
    medicalHistory: "No chronic diseases",
    address: "Plot 7, New Colony, Station Road",
    landmark: "Near City Police HQ",
    cityOrVillage: "Ahmedabad",
    pincode: "380001",
    district: "Ahmedabad",
    state: "Gujarat",
    image: "vikram_patel.jpg",
    continueDonation: "Y",
    availableOnEmg: "N",
    status: 1,
    badgesEarned: ["Bronze Donor"],
    lastDonationDate: "2025-08-17T00:00:00Z",
    totalDonations: 2
  },
  {
    name: "Riya Sen",
    phone1: "+919876510987",
    idProof: "Passport",
    idProofNo: "N1234567",
    bloodGroup: "AB+",
    email: "riya.sen@example.com",
    gender: "F",
    weight: 56,
    age: 27,
    allergies: "Penicillin",
    medicalHistory: "Recovered from dengue (2023)",
    address: "12, Park Street",
    landmark: "Near Metro Station",
    cityOrVillage: "Kolkata",
    pincode: "700016",
    district: "Kolkata",
    state: "West Bengal",
    image: "riya_sen.jpg",
    continueDonation: "Y",
    availableOnEmg: "Y",
    status: 1,
    badgesEarned: ["Gold Donor"],
    lastDonationDate: "2025-07-22T00:00:00Z",
    totalDonations: 7
  },
  {
    name: "Sandeep Kumar",
    phone1: "+917000223344",
    idProof: "Voter ID",
    idProofNo: "UP/1234/567890",
    bloodGroup: "O-",
    email: "sandeep.kumar@example.com",
    gender: "M",
    weight: 68,
    age: 35,
    allergies: "None",
    medicalHistory: "Healthy donor, regular participant",
    address: "9 Shivaji Marg, Aliganj",
    landmark: "Near Hanuman Temple",
    cityOrVillage: "Lucknow",
    pincode: "226020",
    district: "Lucknow",
    state: "Uttar Pradesh",
    image: "sandeep_kumar.jpg",
    continueDonation: "Y",
    availableOnEmg: "Y",
    status: 1,
    badgesEarned: ["Top Donor 2024", "Gold Donor"],
    lastDonationDate: "2025-10-10T00:00:00Z",
    totalDonations: 12
  },
  {
    name: "Neha Joshi",
    phone1: "+918888991122",
    idProof: "Aadhar",
    idProofNo: "789654123987",
    bloodGroup: "B-",
    email: "neha.joshi@example.com",
    gender: "F",
    weight: 60,
    age: 30,
    allergies: "Peanuts",
    medicalHistory: "Normal health status",
    address: "Flat 204, Sunrise Towers",
    landmark: "Near Airport Road",
    cityOrVillage: "Pune",
    pincode: "411001",
    district: "Pune",
    state: "Maharashtra",
    image: "neha_joshi.jpg",
    continueDonation: "Y",
    availableOnEmg: "N",
    status: 1,
    badgesEarned: ["Silver Donor"],
    lastDonationDate: "2025-06-18T00:00:00Z",
    totalDonations: 4
  },
  {
    name: "Rahul Gupta",
    phone1: "+917788990011",
    idProof: "Aadhar",
    idProofNo: "456789123012",
    bloodGroup: "AB-",
    email: "rahul.gupta@example.com",
    gender: "M",
    weight: 75,
    age: 28,
    allergies: "None",
    medicalHistory: "Fit for donation, no issues reported",
    address: "Sector 15, Housing Board Colony",
    landmark: "Next to Park",
    cityOrVillage: "Gurgaon",
    pincode: "122001",
    district: "Gurgaon",
    state: "Haryana",
    image: "rahul_gupta.jpg",
    continueDonation: "Y",
    availableOnEmg: "Y",
    status: 1,
    badgesEarned: ["Bronze Donor"],
    lastDonationDate: "2025-09-25T00:00:00Z",
    totalDonations: 3
  },
  {
    name: "Manisha Verma",
    phone1: "+919812220099",
    idProof: "Driving License",
    idProofNo: "DL-23-546321",
    bloodGroup: "A-",
    email: "manisha.verma@example.com",
    gender: "F",
    weight: 62,
    age: 33,
    allergies: "None",
    medicalHistory: "Fit and active donor",
    address: "24, Civil Lines",
    landmark: "Opposite High School",
    cityOrVillage: "Jaipur",
    pincode: "302001",
    district: "Jaipur",
    state: "Rajasthan",
    image: "manisha_verma.jpg",
    continueDonation: "Y",
    availableOnEmg: "Y",
    status: 1,
    badgesEarned: ["Platinum Donor", "Community Hero"],
    lastDonationDate: "2025-05-15T00:00:00Z",
    totalDonations: 10
  },
  {
    name: "Rohit Das",
    phone1: "+918500123456",
    idProof: "Aadhar",
    idProofNo: "999888777666",
    bloodGroup: "O+",
    email: "rohit.das@example.com",
    gender: "M",
    weight: 70,
    age: 26,
    allergies: "None",
    medicalHistory: "Healthy and regular donor",
    address: "House 48, East Lake Colony",
    landmark: "Beside Garden View Park",
    cityOrVillage: "Bhopal",
    pincode: "462001",
    district: "Bhopal",
    state: "Madhya Pradesh",
    image: "rohit_das.jpg",
    continueDonation: "Y",
    availableOnEmg: "Y",
    status: 1,
    badgesEarned: ["Gold Donor"],
    lastDonationDate: "2025-10-20T00:00:00Z",
    totalDonations: 8
  },
  {
    name: "Ankita Rao",
    phone1: "+919999000111",
    idProof: "Passport",
    idProofNo: "L6543210",
    bloodGroup: "B+",
    email: "ankita.rao@example.com",
    gender: "F",
    weight: 55,
    age: 24,
    allergies: "None",
    medicalHistory: "Healthy donor, no issues",
    address: "1/45, Shakti Nagar",
    landmark: "Opp. City Library",
    cityOrVillage: "Hyderabad",
    pincode: "500001",
    district: "Hyderabad",
    state: "Telangana",
    image: "ankita_rao.jpg",
    continueDonation: "Y",
    availableOnEmg: "Y",
    status: 1,
    badgesEarned: ["Bronze Donor"],
    lastDonationDate: "2025-09-30T00:00:00Z",
    totalDonations: 2
  }
],
donorLog: [
  {
    donarId: "6728f1b5a4d2ab12f0567101", // Arun Sharma
    lastDonation: "2025-10-12T00:00:00Z",
    lastDonationQuantity: 450,
    totalDonation: 5,
    nextEligibleDate: "2026-01-10T00:00:00Z", // 90 days after
    placeName: "Red Cross Central Blood Bank, Lucknow",
    location: { latitude: 26.8467, longitude: 80.9462 },
    empId: "6728f1b5a4d2ab12f0567893", // Hospital staff / verifier
    lifeSaved: 3,
    remarks: "Routine donation; vitals normal.",
    verifiedBy: "6728f1b5a4d2ab12f0567894",
    status: "Verified"
  },
  {
    donarId: "6728f1b5a4d2ab12f0567102", // Priya Mehta
    lastDonation: "2025-09-05T00:00:00Z",
    lastDonationQuantity: 450,
    totalDonation: 3,
    nextEligibleDate: "2025-12-05T00:00:00Z", // 90 days (female)
    placeName: "Apollo Blood Center, Gurgaon",
    location: { latitude: 28.4595, longitude: 77.0266 },
    empId: "6728f1b5a4d2ab12f0567895",
    lifeSaved: 3,
    remarks: "Donated during corporate camp.",
    verifiedBy: "6728f1b5a4d2ab12f0567896",
    status: "Verified"
  },
  {
    donarId: "6728f1b5a4d2ab12f0567103", // Vikram Patel
    lastDonation: "2025-08-17T00:00:00Z",
    lastDonationQuantity: 400,
    totalDonation: 2,
    nextEligibleDate: "2025-11-17T00:00:00Z",
    placeName: "Lifeline Private Blood Bank, Pune",
    location: { latitude: 18.5204, longitude: 73.8567 },
    empId: "6728f1b5a4d2ab12f0567897",
    lifeSaved: 3,
    remarks: "Screened and cleared; no complications.",
    verifiedBy: "6728f1b5a4d2ab12f0567898",
    status: "Verified"
  },
  {
    donarId: "6728f1b5a4d2ab12f0567104", // Riya Sen
    lastDonation: "2025-07-22T00:00:00Z",
    lastDonationQuantity: 450,
    totalDonation: 7,
    nextEligibleDate: "2025-10-22T00:00:00Z",
    placeName: "Sanjeevani Govt Blood Bank, Indore",
    location: { latitude: 22.7196, longitude: 75.8577 },
    empId: "6728f1b5a4d2ab12f0567899",
    lifeSaved: 3,
    remarks: "Donated during emergency flood relief drive.",
    verifiedBy: "6728f1b5a4d2ab12f0567900",
    status: "Verified"
  },
  {
    donarId: "6728f1b5a4d2ab12f0567105", // Sandeep Kumar
    lastDonation: "2025-10-10T00:00:00Z",
    lastDonationQuantity: 450,
    totalDonation: 12,
    nextEligibleDate: "2026-01-08T00:00:00Z",
    placeName: "Jeevan Jyoti Charitable Blood Bank, Varanasi",
    location: { latitude: 25.3176, longitude: 82.9739 },
    empId: "6728f1b5a4d2ab12f0567901",
    lifeSaved: 3,
    remarks: "Top donor of the year; donated voluntarily.",
    verifiedBy: "6728f1b5a4d2ab12f0567902",
    status: "Verified"
  },
  {
    donarId: "6728f1b5a4d2ab12f0567106", // Neha Joshi
    lastDonation: "2025-06-18T00:00:00Z",
    lastDonationQuantity: 450,
    totalDonation: 4,
    nextEligibleDate: "2025-10-18T00:00:00Z",
    placeName: "Sahara Blood Center, Noida",
    location: { latitude: 28.602, longitude: 77.37 },
    empId: "6728f1b5a4d2ab12f0567903",
    lifeSaved: 3,
    remarks: "Donated plasma during shortage drive.",
    verifiedBy: "6728f1b5a4d2ab12f0567904",
    status: "Verified"
  },
  {
    donarId: "6728f1b5a4d2ab12f0567107", // Rahul Gupta
    lastDonation: "2025-09-25T00:00:00Z",
    lastDonationQuantity: 400,
    totalDonation: 3,
    nextEligibleDate: "2025-12-25T00:00:00Z",
    placeName: "LifeCare Blood Bank & Diagnostics, Patna",
    location: { latitude: 25.5941, longitude: 85.1376 },
    empId: "6728f1b5a4d2ab12f0567905",
    lifeSaved: 3,
    remarks: "Rare AB- blood unit verified and stored.",
    verifiedBy: "6728f1b5a4d2ab12f0567906",
    status: "Verified"
  },
  {
    donarId: "6728f1b5a4d2ab12f0567108", // Manisha Verma
    lastDonation: "2025-05-15T00:00:00Z",
    lastDonationQuantity: 450,
    totalDonation: 10,
    nextEligibleDate: "2025-09-15T00:00:00Z",
    placeName: "Green Cross Hospital Blood Bank, Patna",
    location: { latitude: 25.595, longitude: 85.14 },
    empId: "6728f1b5a4d2ab12f0567907",
    lifeSaved: 3,
    remarks: "Donated during state-level donor event.",
    verifiedBy: "6728f1b5a4d2ab12f0567908",
    status: "Verified"
  },
  {
    donarId: "6728f1b5a4d2ab12f0567109", // Rohit Das
    lastDonation: "2025-10-20T00:00:00Z",
    lastDonationQuantity: 450,
    totalDonation: 8,
    nextEligibleDate: "2026-01-20T00:00:00Z",
    placeName: "Mission Blood & Plasma Center, Rajkot",
    location: { latitude: 22.3039, longitude: 70.8022 },
    empId: "6728f1b5a4d2ab12f0567909",
    lifeSaved: 3,
    remarks: "Emergency donation for accident victim.",
    verifiedBy: "6728f1b5a4d2ab12f0567910",
    status: "Verified"
  },
  {
    donarId: "6728f1b5a4d2ab12f0567110", // Ankita Rao
    lastDonation: "2025-09-30T00:00:00Z",
    lastDonationQuantity: 400,
    totalDonation: 2,
    nextEligibleDate: "2025-12-30T00:00:00Z",
    placeName: "Aarogyam Govt Blood Bank, Hyderabad",
    location: { latitude: 17.385, longitude: 78.4867 },
    empId: "6728f1b5a4d2ab12f0567911",
    lifeSaved: 3,
    remarks: "Donated during women’s health week drive.",
    verifiedBy: "6728f1b5a4d2ab12f0567912",
    status: "Verified"
  }
],
employeeDetail: [
  {
    empId: "EMP001",
    name: "Dr. Neeraj Singh",
    age: 42,
    gender: "M",
    phone1: "+919812345600",
    phone2: "+919812345601",
    email: "neeraj.singh@redpulse.org",
    workLocation: "City Care Multi-specialty Hospital, Lucknow",
    designation: "Chief Surgeon",
    image: "neeraj_singh.jpg",
    role: "Doctor",
    status: "Active",
    shift: "Day",
    joinedOn: "2015-04-21T00:00:00Z"
  },
  {
    empId: "EMP002",
    name: "Dr. Aarti Nair",
    age: 37,
    gender: "F",
    phone1: "+919700223344",
    email: "aarti.nair@redpulse.org",
    workLocation: "Global Super-specialty Hospital, Delhi",
    designation: "Cardiologist",
    image: "aarti_nair.jpg",
    role: "Doctor",
    status: "Active",
    shift: "Rotational",
    joinedOn: "2017-06-10T00:00:00Z"
  },
  {
    empId: "EMP003",
    name: "Rohit Tiwari",
    age: 29,
    gender: "M",
    phone1: "+919833221100",
    email: "rohit.tiwari@redpulse.org",
    workLocation: "Sahara Blood Center, Noida",
    designation: "Lab Technician",
    image: "rohit_tiwari.jpg",
    role: "Technician",
    status: "Active",
    shift: "Day",
    joinedOn: "2020-01-05T00:00:00Z"
  },
  {
    empId: "EMP004",
    name: "Priyanka Sharma",
    age: 31,
    gender: "F",
    phone1: "+918888900011",
    email: "priyanka.sharma@redpulse.org",
    workLocation: "Red Cross Central Blood Bank, Lucknow",
    designation: "Nurse Supervisor",
    image: "priyanka_sharma.jpg",
    role: "Nurse",
    status: "Active",
    shift: "Rotational",
    joinedOn: "2019-09-15T00:00:00Z"
  },
  {
    empId: "EMP005",
    name: "Amit Verma",
    age: 35,
    gender: "M",
    phone1: "+919977889900",
    email: "amit.verma@redpulse.org",
    workLocation: "Apollo Blood Center, Gurgaon",
    designation: "Blood Bank Manager",
    image: "amit_verma.jpg",
    role: "Admin",
    status: "Active",
    shift: "Day",
    joinedOn: "2018-03-01T00:00:00Z"
  },
  {
    empId: "EMP006",
    name: "Meena George",
    age: 40,
    gender: "F",
    phone1: "+919922334455",
    email: "meena.george@redpulse.org",
    workLocation: "Divine Life General Hospital, Varanasi",
    designation: "Head Nurse",
    image: "meena_george.jpg",
    role: "Nurse",
    status: "On Leave",
    shift: "Rotational",
    joinedOn: "2016-08-19T00:00:00Z"
  },
  {
    empId: "EMP007",
    name: "Sanjay Patel",
    age: 27,
    gender: "M",
    phone1: "+918566778899",
    email: "sanjay.patel@redpulse.org",
    workLocation: "Green Cross Hospital Blood Bank, Patna",
    designation: "Junior Technician",
    image: "sanjay_patel.jpg",
    role: "Technician",
    status: "Active",
    shift: "Night",
    joinedOn: "2022-05-12T00:00:00Z"
  },
  {
    empId: "EMP008",
    name: "Dr. Kavita Rao",
    age: 45,
    gender: "F",
    phone1: "+919766554433",
    phone2: "+919766554434",
    email: "kavita.rao@redpulse.org",
    workLocation: "Metro City Super-specialty Hospital, Pune",
    designation: "Oncologist",
    image: "kavita_rao.jpg",
    role: "Doctor",
    status: "Active",
    shift: "Day",
    joinedOn: "2014-12-10T00:00:00Z"
  },
  {
    empId: "EMP009",
    name: "Arjun Das",
    age: 30,
    gender: "M",
    phone1: "+919899445566",
    email: "arjun.das@redpulse.org",
    workLocation: "Lifeline Blood Bank, Pune",
    designation: "Support Staff",
    image: "arjun_das.jpg",
    role: "Staff",
    status: "Inactive",
    shift: "Day",
    joinedOn: "2019-11-25T00:00:00Z"
  },
  {
    empId: "EMP010",
    name: "Dr. Sunita Kapoor",
    age: 39,
    gender: "F",
    phone1: "+919777888999",
    email: "sunita.kapoor@redpulse.org",
    workLocation: "Fortune Multi-specialty Center, Bhopal",
    designation: "Emergency Specialist",
    image: "sunita_kapoor.jpg",
    role: "Doctor",
    status: "Active",
    shift: "Rotational",
    joinedOn: "2018-10-14T00:00:00Z"
  }
],
  hospital: [
  {
    hospitalID: "HOSP001001",
    name: "City Care Multi-specialty Hospital",
    hospitalHeadID: "6728f1b5a4d2ab12f0567890",
    type: "Multi-specialty",
    ownership: "Private",
    licence: "LIC-HC-0001",
    accreditation: "NABH",
    accCertificates: ["nabh_cert_2025.pdf"],
    emgServices: "24x7 Emergency and Trauma Center",
    address: "23 MG Road, Sector 18",
    landmark: "Near Metro Station",
    cityOrVillage: "Lucknow",
    pincode: "226001",
    district: "Lucknow",
    state: "Uttar Pradesh",
    coordinates: { latitude: 26.8467, longitude: 80.9462 },
    image: "citycare_hospital.jpg",
    phoneNo1: "+919876543210",
    phoneNo2: "+919876543211",
    email: "info@citycarehospital.in",
    totalEmp: 250,
    reviews: [
      {
        userId: "6728f1b5a4d2ab12f0567891",
        rating: 5,
        comment: "Excellent staff and clean facilities."
      }
    ]
  },
  {
    hospitalID: "HOSP001002",
    name: "Global Super-specialty Hospital",
    hospitalHeadID: "6728f1b5a4d2ab12f0567892",
    type: "Super-specialty",
    ownership: "Corporate",
    licence: "LIC-HC-0002",
    accreditation: "JCI",
    accCertificates: ["jci_cert_2024.pdf"],
    emgServices: "24-hour Cardiac & Neuro emergency unit",
    address: "45 Green Park Avenue",
    landmark: "Beside Mall Plaza",
    cityOrVillage: "Delhi",
    pincode: "110016",
    district: "New Delhi",
    state: "Delhi",
    coordinates: { latitude: 28.567, longitude: 77.210 },
    image: "global_hospital.jpg",
    phoneNo1: "+911122334455",
    phoneNo2: "+911122334456",
    email: "contact@globalhospital.com",
    totalEmp: 800,
    reviews: [
      {
        userId: "6728f1b5a4d2ab12f0567893",
        rating: 4,
        comment: "Good doctors but parking is limited."
      }
    ]
  },
  {
    hospitalID: "HOSP001003",
    name: "Divine Life General Hospital",
    hospitalHeadID: "6728f1b5a4d2ab12f0567894",
    type: "General",
    ownership: "Trust",
    licence: "LIC-HC-0003",
    accreditation: "ISO",
    accCertificates: ["iso_cert_2023.pdf"],
    emgServices: "24-hour ambulance service available",
    address: "Main Road, Civil Lines",
    landmark: "Opposite Post Office",
    cityOrVillage: "Varanasi",
    pincode: "221002",
    district: "Varanasi",
    state: "Uttar Pradesh",
    coordinates: { latitude: 25.3176, longitude: 82.9739 },
    image: "divine_life_hospital.jpg",
    phoneNo1: "+919812345678",
    email: "support@divinelife.in",
    totalEmp: 120
  },
  {
    hospitalID: "HOSP001004",
    name: "Sunrise Multi-specialty Clinic",
    hospitalHeadID: "6728f1b5a4d2ab12f0567895",
    type: "Clinic",
    ownership: "Private",
    licence: "LIC-HC-0004",
    accreditation: "ISO",
    emgServices: "Basic emergency first aid services",
    address: "12 Sunrise Complex, MG Road",
    landmark: "Opp. City Mall",
    cityOrVillage: "Indore",
    pincode: "452001",
    district: "Indore",
    state: "Madhya Pradesh",
    coordinates: { latitude: 22.7196, longitude: 75.8577 },
    image: "sunrise_clinic.jpg",
    phoneNo1: "+917000112233",
    email: "contact@sunriseclinic.com",
    totalEmp: 45
  },
  {
    hospitalID: "HOSP001005",
    name: "Silverline Super-specialty Institute",
    hospitalHeadID: "6728f1b5a4d2ab12f0567896",
    type: "Super-specialty",
    ownership: "Corporate",
    licence: "LIC-HC-0005",
    accreditation: "NABL",
    accCertificates: ["nabl_lab_cert.pdf"],
    emgServices: "Advanced trauma care and ICU facilities",
    address: "Sector 62, Noida",
    landmark: "Behind Tech Park",
    cityOrVillage: "Noida",
    pincode: "201301",
    district: "Gautam Buddha Nagar",
    state: "Uttar Pradesh",
    coordinates: { latitude: 28.602, longitude: 77.37 },
    image: "silverline_hospital.jpg",
    phoneNo1: "+919999888777",
    email: "info@silverline.in",
    totalEmp: 600
  },
  {
    hospitalID: "HOSP001006",
    name: "Shanti Care General Hospital",
    hospitalHeadID: "6728f1b5a4d2ab12f0567897",
    type: "General",
    ownership: "Government",
    licence: "LIC-HC-0006",
    accreditation: "NABH",
    emgServices: "Free ambulance and 24-hour casualty unit",
    address: "Station Road, Patel Nagar",
    landmark: "Near Bus Depot",
    cityOrVillage: "Patna",
    pincode: "800001",
    district: "Patna",
    state: "Bihar",
    coordinates: { latitude: 25.5941, longitude: 85.1376 },
    image: "shanti_hospital.jpg",
    phoneNo1: "+916122345678",
    email: "shanticare@bihar.gov.in",
    totalEmp: 300
  },
  {
    hospitalID: "HOSP001007",
    name: "Wellness Multi-specialty Hospital",
    hospitalHeadID: "6728f1b5a4d2ab12f0567898",
    type: "Multi-specialty",
    ownership: "Private",
    licence: "LIC-HC-0007",
    accreditation: "NABH",
    accCertificates: ["nabh_cert_2025.pdf"],
    emgServices: "Emergency OPD and ICU facilities",
    address: "Ring Road, Rajkot",
    landmark: "Near Airport",
    cityOrVillage: "Rajkot",
    pincode: "360001",
    district: "Rajkot",
    state: "Gujarat",
    coordinates: { latitude: 22.3039, longitude: 70.8022 },
    image: "wellness_hospital.jpg",
    phoneNo1: "+919876550000",
    email: "care@wellnesshospitals.in",
    totalEmp: 180
  },
  {
    hospitalID: "HOSP001008",
    name: "Fortune Multi-specialty Center",
    hospitalHeadID: "6728f1b5a4d2ab12f0567899",
    type: "Multi-specialty",
    ownership: "Private",
    licence: "LIC-HC-0008",
    accreditation: "NABL",
    emgServices: "Trauma, orthopedic, and cardiac emergency",
    address: "56 Lake View Colony",
    landmark: "Opposite Police Station",
    cityOrVillage: "Bhopal",
    pincode: "462001",
    district: "Bhopal",
    state: "Madhya Pradesh",
    coordinates: { latitude: 23.2599, longitude: 77.4126 },
    image: "fortune_center.jpg",
    phoneNo1: "+917565430098",
    email: "info@fortunehealth.org",
    totalEmp: 400
  },
  {
    hospitalID: "HOSP001009",
    name: "Green Valley General Hospital",
    hospitalHeadID: "6728f1b5a4d2ab12f0567900",
    type: "General",
    ownership: "Trust",
    licence: "LIC-HC-0009",
    accreditation: "ISO",
    emgServices: "General emergency, maternity and pediatric unit",
    address: "Highway Road, Durg",
    landmark: "Near Railway Crossing",
    cityOrVillage: "Durg",
    pincode: "491001",
    district: "Durg",
    state: "Chhattisgarh",
    coordinates: { latitude: 21.19, longitude: 81.28 },
    image: "greenvalley_hospital.jpg",
    phoneNo1: "+917882223344",
    email: "greenvalley@trust.in",
    totalEmp: 220
  },
  {
    hospitalID: "HOSP001010",
    name: "Metro City Super-specialty Hospital",
    hospitalHeadID: "6728f1b5a4d2ab12f0567901",
    type: "Super-specialty",
    ownership: "Corporate",
    licence: "LIC-HC-0010",
    accreditation: "JCI",
    emgServices: "Critical care, neurology, and oncology unit",
    address: "Plot 12, Industrial Area",
    landmark: "Near IT Park",
    cityOrVillage: "Pune",
    pincode: "411001",
    district: "Pune",
    state: "Maharashtra",
    coordinates: { latitude: 18.5204, longitude: 73.8567 },
    image: "metrocity_hospital.jpg",
    phoneNo1: "+912023456789",
    phoneNo2: "+912023456790",
    email: "helpdesk@metrocityhospital.in",
    totalEmp: 900
  }
],
  hospitalInventory: [
  {
    productId: "HINV-0001",
    hospitalID: "6728f1b5a4d2ab12f0567890", // City Care Multi-specialty Hospital
    donorID: "6728f1b5a4d2ab12f0567101",    // Arun Sharma
    bloodGroup: "A+",
    quantity: 450,
    departmentId: null,
    status: "Available",
    remarks: "Fresh unit received from Red Cross Blood Bank; stored at 4°C."
  },
  {
    productId: "HINV-0002",
    hospitalID: "6728f1b5a4d2ab12f0567892", // Global Super-specialty Hospital
    donorID: "6728f1b5a4d2ab12f0567102",    // Priya Mehta
    bloodGroup: "O+",
    quantity: 350,
    departmentId: null,
    status: "Reserved",
    remarks: "Reserved for cardiac surgery on patient ID GH-2423."
  },
  {
    productId: "HINV-0003",
    hospitalID: "6728f1b5a4d2ab12f0567894", // Divine Life General Hospital
    donorID: "6728f1b5a4d2ab12f0567103",    // Vikram Patel
    bloodGroup: "B+",
    quantity: 450,
    departmentId: null,
    status: "Available",
    remarks: "Cross-matched and stored under routine supply."
  },
  {
    productId: "HINV-0004",
    hospitalID: "6728f1b5a4d2ab12f0567895", // Sunrise Multi-specialty Clinic
    donorID: "6728f1b5a4d2ab12f0567104",    // Riya Sen
    bloodGroup: "AB+",
    quantity: 400,
    departmentId: null,
    status: "Used",
    remarks: "Issued to patient SN-551 for emergency C-section."
  },
  {
    productId: "HINV-0005",
    hospitalID: "6728f1b5a4d2ab12f0567896", // Silverline Super-specialty Institute
    donorID: "6728f1b5a4d2ab12f0567105",    // Sandeep Kumar
    bloodGroup: "O-",
    quantity: 450,
    departmentId: null,
    status: "Available",
    remarks: "O-negative rare blood group kept in frozen stock."
  },
  {
    productId: "HINV-0006",
    hospitalID: "6728f1b5a4d2ab12f0567897", // Shanti Care General Hospital
    donorID: "6728f1b5a4d2ab12f0567106",    // Neha Joshi
    bloodGroup: "B-",
    quantity: 400,
    departmentId: null,
    status: "Available",
    remarks: "Low stock level; reorder suggested for B-negative group."
  },
  {
    productId: "HINV-0007",
    hospitalID: "6728f1b5a4d2ab12f0567898", // Wellness Multi-specialty Hospital
    donorID: "6728f1b5a4d2ab12f0567107",    // Rahul Gupta
    bloodGroup: "AB-",
    quantity: 350,
    departmentId: null,
    status: "Reserved",
    remarks: "Critical blood unit reserved for trauma case WT-221."
  },
  {
    productId: "HINV-0008",
    hospitalID: "6728f1b5a4d2ab12f0567899", // Fortune Multi-specialty Center
    donorID: "6728f1b5a4d2ab12f0567108",    // Manisha Verma
    bloodGroup: "A-",
    quantity: 450,
    departmentId: null,
    status: "Available",
    remarks: "Ready for surgery; expires in 35 days from collection."
  },
  {
    productId: "HINV-0009",
    hospitalID: "6728f1b5a4d2ab12f0567900", // Green Valley General Hospital
    donorID: "6728f1b5a4d2ab12f0567109",    // Rohit Das
    bloodGroup: "O+",
    quantity: 450,
    departmentId: null,
    status: "Expired",
    remarks: "Expired blood unit from October batch; marked for disposal."
  },
  {
    productId: "HINV-0010",
    hospitalID: "6728f1b5a4d2ab12f0567901", // Metro City Super-specialty Hospital
    donorID: "6728f1b5a4d2ab12f0567110",    // Ankita Rao
    bloodGroup: "B+",
    quantity: 400,
    departmentId: null,
    status: "Discarded",
    remarks: "Leakage detected during quality inspection; discarded safely."
  }
],
lifeSaved: [
  {
    donorId: "6728f1b5a4d2ab12f0567101",  // Arun Sharma
    donorName: "Arun Sharma",
    quantityDonated: 2250,  // 5 × 450ml
    lifeSaved: 15,          // 3 lives per donation
    startYear: "2020",
    presentYear: "2025",
    totalDonationCount: 5,
    remarks: "Consistent donor; awarded Gold Donor recognition in 2024.",
    status: "Verified"
  },
  {
    donorId: "6728f1b5a4d2ab12f0567102",  // Priya Mehta
    donorName: "Priya Mehta",
    quantityDonated: 1350,
    lifeSaved: 9,
    startYear: "2022",
    presentYear: "2025",
    totalDonationCount: 3,
    remarks: "Donated regularly every 4 months.",
    status: "Active"
  },
  {
    donorId: "6728f1b5a4d2ab12f0567103",  // Vikram Patel
    donorName: "Vikram Patel",
    quantityDonated: 900,
    lifeSaved: 6,
    startYear: "2023",
    presentYear: "2025",
    totalDonationCount: 2,
    remarks: "Recently joined donor network; reliable participant.",
    status: "Active"
  },
  {
    donorId: "6728f1b5a4d2ab12f0567104",  // Riya Sen
    donorName: "Riya Sen",
    quantityDonated: 3150,
    lifeSaved: 21,
    startYear: "2019",
    presentYear: "2025",
    totalDonationCount: 7,
    remarks: "Top donor; supports emergency and voluntary drives.",
    status: "Verified"
  },
  {
    donorId: "6728f1b5a4d2ab12f0567105",  // Sandeep Kumar
    donorName: "Sandeep Kumar",
    quantityDonated: 5400,
    lifeSaved: 36,
    startYear: "2017",
    presentYear: "2025",
    totalDonationCount: 12,
    remarks: "Top donor of Lucknow region; consistent 4+ donations per year.",
    status: "Verified"
  },
  {
    donorId: "6728f1b5a4d2ab12f0567106",  // Neha Joshi
    donorName: "Neha Joshi",
    quantityDonated: 1800,
    lifeSaved: 12,
    startYear: "2021",
    presentYear: "2025",
    totalDonationCount: 4,
    remarks: "Regular donor with excellent health record.",
    status: "Active"
  },
  {
    donorId: "6728f1b5a4d2ab12f0567107",  // Rahul Gupta
    donorName: "Rahul Gupta",
    quantityDonated: 1350,
    lifeSaved: 9,
    startYear: "2022",
    presentYear: "2025",
    totalDonationCount: 3,
    remarks: "AB- donor; participates in rare blood emergency calls.",
    status: "Verified"
  },
  {
    donorId: "6728f1b5a4d2ab12f0567108",  // Manisha Verma
    donorName: "Manisha Verma",
    quantityDonated: 4500,
    lifeSaved: 30,
    startYear: "2016",
    presentYear: "2025",
    totalDonationCount: 10,
    remarks: "Long-term donor; platinum badge holder.",
    status: "Verified"
  },
  {
    donorId: "6728f1b5a4d2ab12f0567109",  // Rohit Das
    donorName: "Rohit Das",
    quantityDonated: 3600,
    lifeSaved: 24,
    startYear: "2018",
    presentYear: "2025",
    totalDonationCount: 8,
    remarks: "Always available for urgent O+ blood requests.",
    status: "Active"
  },
  {
    donorId: "6728f1b5a4d2ab12f0567110",  // Ankita Rao
    donorName: "Ankita Rao",
    quantityDonated: 900,
    lifeSaved: 6,
    startYear: "2023",
    presentYear: "2025",
    totalDonationCount: 2,
    remarks: "New donor; participated in recent Hyderabad drive.",
    status: "Active"
  }
],
standardDefinition: [
  {
    // 1️⃣ WHO & NACO Standard for Whole Blood Donation
    _id: "std_whole_blood_2025",
    minAge: 18,
    maxAge: 65,
    minWeight: 50, // kg
    donationVolume: "350–450 ml",
    donationFrequency: "Every 3 months (males) / Every 4 months (females)",
    nextEligibleDaysM: 90,
    nextEligibleDaysF: 120,
    maxDonationsBloodPerYear: 4,
    bloodStorageDuration: "35–42 days at 2–6°C (with CPDA-1 or additive solution)",
    plasmaFrequency: "Not applicable",
    plasmaStorageDuration: "Separated plasma: Up to 1 year at −30°C",
    maxDonationsPlasmaPerYear: "N/A",
    canSaveLive: "1 unit can save up to 3 lives (red cells, plasma, platelets)",
    category: "Whole Blood Donation",
    sourceStandard: "WHO Blood Donor Guidelines, NACO India 2024"
  },
  {
    // 2️⃣ Plasma Donation (Apheresis)
    _id: "std_plasma_donation_2025",
    minAge: 18,
    maxAge: 65,
    minWeight: 55,
    donationVolume: "600–800 ml (apheresis)",
    donationFrequency: "Every 2 weeks (minimum 14 days)",
    nextEligibleDaysM: 14,
    nextEligibleDaysF: 14,
    maxDonationsBloodPerYear: 24,
    bloodStorageDuration: "Plasma not stored as whole blood",
    plasmaFrequency: "Every 2–4 weeks",
    plasmaStorageDuration: "Up to 1 year at −30°C (frozen)",
    maxDonationsPlasmaPerYear: "24–26 times per year",
    canSaveLive: "Used for transfusion, clotting factors, and plasma-derived medicines",
    category: "Plasma Donation (Apheresis)",
    sourceStandard: "WHO Guidelines for Plasma Fractionation, 2023"
  },
  {
    // 3️⃣ Platelet Donation (Apheresis)
    _id: "std_platelet_donation_2025",
    minAge: 18,
    maxAge: 60,
    minWeight: 55,
    donationVolume: "200–400 ml (single donor apheresis)",
    donationFrequency: "Once every 2 weeks (minimum 14 days)",
    nextEligibleDaysM: 14,
    nextEligibleDaysF: 14,
    maxDonationsBloodPerYear: 24,
    bloodStorageDuration: "Not applicable (platelets separated)",
    plasmaFrequency: "Not applicable",
    plasmaStorageDuration: "Platelets stored 5–7 days at 20–24°C with agitation",
    maxDonationsPlasmaPerYear: "N/A",
    canSaveLive: "1 donation can support multiple platelet transfusions",
    category: "Platelet Donation (Apheresis)",
    sourceStandard: "AABB Platelet Collection Guidelines, 2024"
  },
  {
    // 4️⃣ Double Red Cell Donation (Apheresis)
    _id: "std_double_rbc_2025",
    minAge: 18,
    maxAge: 60,
    minWeight: 65, // more weight required
    donationVolume: "Approximately 500 ml red cells (double unit)",
    donationFrequency: "Once every 6 months (minimum 180 days)",
    nextEligibleDaysM: 180,
    nextEligibleDaysF: 180,
    maxDonationsBloodPerYear: 2,
    bloodStorageDuration: "35–42 days at 2–6°C",
    plasmaFrequency: "Not applicable",
    plasmaStorageDuration: "N/A",
    maxDonationsPlasmaPerYear: "N/A",
    canSaveLive: "Double RBC donation can save up to 6 lives",
    category: "Double Red Cell Donation",
    sourceStandard: "American Red Cross Donation Standards, 2024"
  },
  {
    // 5️⃣ Pediatric/Low Volume Donation (for <55kg donors, rare cases)
    _id: "std_low_volume_2025",
    minAge: 18,
    maxAge: 55,
    minWeight: 45,
    donationVolume: "250–350 ml",
    donationFrequency: "Every 4 months (both genders)",
    nextEligibleDaysM: 120,
    nextEligibleDaysF: 120,
    maxDonationsBloodPerYear: 3,
    bloodStorageDuration: "35 days at 2–6°C",
    plasmaFrequency: "Not applicable",
    plasmaStorageDuration: "Plasma separated, stored up to 1 year at −30°C",
    maxDonationsPlasmaPerYear: "N/A",
    canSaveLive: "Used primarily for pediatric patients or small-volume transfusions",
    category: "Low Volume / Pediatric Donation",
    sourceStandard: "NACO India 2024 and WHO Donor Safety Guidelines"
  }
],
surplusDefinition: [
  {
    _id: "surplus_1",
    status: "✅ Surplus / Sufficient",
    label: "Green",
    stockLevelDefinition: "≥ 110% of the average monthly demand",
    colorCode: "Green",
    recommendedAction: "No action required; consider redistribution or hold stock for upcoming drives.",
    thresholdValue: 110
  },
  {
    _id: "surplus_2",
    status: "⚠️ Moderate / Optimal",
    label: "Yellow",
    stockLevelDefinition: "Between 70% – 109% of the average monthly demand",
    colorCode: "Yellow",
    recommendedAction: "Monitor regularly; plan donor recruitment or internal alerts for next week.",
    thresholdValue: 70
  },
  {
    _id: "surplus_3",
    status: "❌ Low / Critical",
    label: "Red",
    stockLevelDefinition: "≤ 69% of the average monthly demand",
    colorCode: "Red",
    recommendedAction: "Immediate donor mobilization, hospital communication, and emergency blood call required.",
    thresholdValue: 0
  },
  {
    _id: "surplus_4",
    status: "🩸 Expiring Soon",
    label: "Orange",
    stockLevelDefinition: "≥ 90% stock nearing expiry within 5 days",
    colorCode: "Yellow",
    recommendedAction: "Redistribute or utilize units before expiry; rotate to high-demand zones.",
    thresholdValue: 90
  },
  {
    _id: "surplus_5",
    status: "📦 Overstocked / Risk of Wastage",
    label: "Blue",
    stockLevelDefinition: "≥ 150% of the average monthly demand",
    colorCode: "Green",
    recommendedAction: "Distribute excess stock to low-supply centers; freeze plasma components if applicable.",
    thresholdValue: 150
  }
],
bloodBank: [
  {
    bloodBanklID: "BLDBNK001001",
    name: "Red Cross Central Blood Bank",
    bankHeadID: "6728f1b5a4d2ab12f0567001",
    type: "NGO",
    ownership: "Indian Red Cross Society",
    licence: "LIC-BB-0001",
    accreditation: "NABL",
    accCertificates: ["nabl_cert_2024.pdf"],
    emgServices: "24-hour blood supply for emergency and trauma patients",
    address: "15 Civil Lines, MG Road",
    landmark: "Near Collectorate",
    cityOrVillage: "Lucknow",
    pincode: "226001",
    district: "Lucknow",
    state: "Uttar Pradesh",
    coordinates: { latitude: 26.8467, longitude: 80.9462 },
    image: "redcross_bb.jpg",
    phoneNo1: "+919876543210",
    phoneNo2: "+919876543211",
    email: "info@redcrossbloodbank.org",
    totalEmp: 65,
    reviews: [
      {
        userId: "6728f1b5a4d2ab12f0567002",
        rating: 5,
        comment: "Efficient service and quick response."
      }
    ]
  },
  {
    bloodBanklID: "BLDBNK001002",
    name: "Apollo Hospital Blood Center",
    bankHeadID: "6728f1b5a4d2ab12f0567003",
    type: "Hospital-Based",
    ownership: "Apollo Hospitals Ltd",
    licence: "LIC-BB-0002",
    accreditation: "NABH",
    accCertificates: ["nabh_blood_cert_2025.pdf"],
    emgServices: "Critical supply to Apollo hospitals network",
    address: "Sector 38, Gurgaon",
    landmark: "Near HUDA City Metro",
    cityOrVillage: "Gurgaon",
    pincode: "122001",
    district: "Gurgaon",
    state: "Haryana",
    coordinates: { latitude: 28.4595, longitude: 77.0266 },
    image: "apollo_bb.jpg",
    phoneNo1: "+911244567890",
    email: "bloodbank@apollohospitals.com",
    totalEmp: 120
  },
  {
    bloodBanklID: "BLDBNK001003",
    name: "Lifeline Private Blood Bank",
    bankHeadID: "6728f1b5a4d2ab12f0567004",
    type: "Private",
    ownership: "Lifeline Health Services",
    licence: "LIC-BB-0003",
    accreditation: "ISO",
    accCertificates: ["iso_cert_2023.pdf"],
    emgServices: "24/7 emergency blood and plasma provision",
    address: "23 High Street, Shivaji Nagar",
    landmark: "Opposite Post Office",
    cityOrVillage: "Pune",
    pincode: "411005",
    district: "Pune",
    state: "Maharashtra",
    coordinates: { latitude: 18.5204, longitude: 73.8567 },
    image: "lifeline_bb.jpg",
    phoneNo1: "+912025678900",
    email: "contact@lifelinebb.in",
    totalEmp: 45
  },
  {
    bloodBanklID: "BLDBNK001004",
    name: "Sanjeevani Government Blood Bank",
    bankHeadID: "6728f1b5a4d2ab12f0567005",
    type: "Government",
    ownership: "Health Department, MP Government",
    licence: "LIC-BB-0004",
    accreditation: "NABL",
    emgServices: "Free blood for government hospitals and accident victims",
    address: "District Hospital Campus, Indore",
    landmark: "Near Main Gate",
    cityOrVillage: "Indore",
    pincode: "452001",
    district: "Indore",
    state: "Madhya Pradesh",
    coordinates: { latitude: 22.7196, longitude: 75.8577 },
    image: "sanjeevani_bb.jpg",
    phoneNo1: "+917312223344",
    phoneNo2: "+917312223345",
    email: "sanjeevani.bb@mphealth.gov.in",
    totalEmp: 70
  },
  {
    bloodBanklID: "BLDBNK001005",
    name: "Jeevan Jyoti Charitable Blood Bank",
    bankHeadID: "6728f1b5a4d2ab12f0567006",
    type: "NGO",
    ownership: "Jeevan Jyoti Trust",
    licence: "LIC-BB-0005",
    accreditation: "ISO",
    emgServices: "Blood collection drives and rural health support",
    address: "12 Temple Road, Varanasi",
    landmark: "Behind Kashi Vishwanath Temple",
    cityOrVillage: "Varanasi",
    pincode: "221001",
    district: "Varanasi",
    state: "Uttar Pradesh",
    coordinates: { latitude: 25.3176, longitude: 82.9739 },
    image: "jeevanjyoti_bb.jpg",
    phoneNo1: "+919876540001",
    email: "help@jeevanjyoti.org",
    totalEmp: 30
  },
  {
    bloodBanklID: "BLDBNK001006",
    name: "Sahara Blood Center",
    bankHeadID: "6728f1b5a4d2ab12f0567007",
    type: "Private",
    ownership: "Sahara Healthcare Pvt Ltd",
    licence: "LIC-BB-0006",
    accreditation: "NABL",
    accCertificates: ["nabl_cert_2025.pdf"],
    emgServices: "24-hour donor availability & platelet separation unit",
    address: "Block C, Cyber City",
    landmark: "Opposite Metro Station",
    cityOrVillage: "Noida",
    pincode: "201301",
    district: "Gautam Buddha Nagar",
    state: "Uttar Pradesh",
    coordinates: { latitude: 28.602, longitude: 77.37 },
    image: "sahara_bb.jpg",
    phoneNo1: "+911204567890",
    email: "info@saharabb.in",
    totalEmp: 55
  },
  {
    bloodBanklID: "BLDBNK001007",
    name: "LifeCare Blood Bank & Diagnostics",
    bankHeadID: "6728f1b5a4d2ab12f0567008",
    type: "Private",
    ownership: "LifeCare Diagnostics Pvt Ltd",
    licence: "LIC-BB-0007",
    accreditation: "ISO",
    emgServices: "Rapid blood grouping, plasma storage, and donor registry",
    address: "1st Floor, LifeCare Plaza",
    landmark: "Near City Bus Depot",
    cityOrVillage: "Patna",
    pincode: "800001",
    district: "Patna",
    state: "Bihar",
    coordinates: { latitude: 25.5941, longitude: 85.1376 },
    image: "lifecare_bb.jpg",
    phoneNo1: "+916122221234",
    email: "support@lifecarebloodbank.com",
    totalEmp: 40
  },
  {
    bloodBanklID: "BLDBNK001008",
    name: "Green Cross Hospital Blood Bank",
    bankHeadID: "6728f1b5a4d2ab12f0567009",
    type: "Hospital-Based",
    ownership: "Green Cross Hospitals",
    licence: "LIC-BB-0008",
    accreditation: "NABH",
    emgServices: "Round-the-clock blood supply to hospital network",
    address: "Kankarbagh Main Road",
    landmark: "Next to Medico Pharmacy",
    cityOrVillage: "Patna",
    pincode: "800020",
    district: "Patna",
    state: "Bihar",
    coordinates: { latitude: 25.595, longitude: 85.140 },
    image: "greencross_bb.jpg",
    phoneNo1: "+916120098765",
    email: "bloodbank@greencross.in",
    totalEmp: 100
  },
  {
    bloodBanklID: "BLDBNK001009",
    name: "Mission Blood & Plasma Center",
    bankHeadID: "6728f1b5a4d2ab12f0567010",
    type: "NGO",
    ownership: "Mission Humanity Foundation",
    licence: "LIC-BB-0009",
    accreditation: "ISO",
    emgServices: "Free blood for poor and critical patients",
    address: "Church Road, Rajkot",
    landmark: "Near City Library",
    cityOrVillage: "Rajkot",
    pincode: "360001",
    district: "Rajkot",
    state: "Gujarat",
    coordinates: { latitude: 22.3039, longitude: 70.8022 },
    image: "mission_bb.jpg",
    phoneNo1: "+919876511223",
    email: "missionblood@ngo.org",
    totalEmp: 25
  },
  {
    bloodBanklID: "BLDBNK001010",
    name: "Aarogyam Govt Blood Bank",
    bankHeadID: "6728f1b5a4d2ab12f0567011",
    type: "Government",
    ownership: "Health & Family Welfare Department",
    licence: "LIC-BB-0010",
    accreditation: "NABL",
    emgServices: "Free and emergency blood donation support",
    address: "District Hospital Campus",
    landmark: "Near Main Gate",
    cityOrVillage: "Bhopal",
    pincode: "462001",
    district: "Bhopal",
    state: "Madhya Pradesh",
    coordinates: { latitude: 23.2599, longitude: 77.4126 },
    image: "aarogyam_bb.jpg",
    phoneNo1: "+917554321234",
    email: "aarogyam.bb@mp.gov.in",
    totalEmp: 85
  }
],
bloodBankInventory: [
  {
    productId: "INV-BL-0001",
    bloodBankID: "6728f1b5a4d2ab12f0567001",  // Red Cross Central Blood Bank
    donorID: "6728f1b5a4d2ab12f0567101",      // Arun Sharma
    bloodGroup: "A+",
    quantity: 450,
    departmentId: null,
    status: "Available",
    remarks: "Freshly donated unit, screened and stored at 4°C."
  },
  {
    productId: "INV-BL-0002",
    bloodBankID: "6728f1b5a4d2ab12f0567003",  // Apollo Hospital Blood Center
    donorID: "6728f1b5a4d2ab12f0567102",      // Priya Mehta
    bloodGroup: "O+",
    quantity: 450,
    departmentId: null,
    status: "Reserved",
    remarks: "Reserved for patient in Apollo ICU."
  },
  {
    productId: "INV-BL-0003",
    bloodBankID: "6728f1b5a4d2ab12f0567004",  // Lifeline Private Blood Bank
    donorID: "6728f1b5a4d2ab12f0567103",      // Vikram Patel
    bloodGroup: "B+",
    quantity: 350,
    departmentId: null,
    status: "Available",
    remarks: "Screened and labeled as safe for transfusion."
  },
  {
    productId: "INV-BL-0004",
    bloodBankID: "6728f1b5a4d2ab12f0567005",  // Sanjeevani Government Blood Bank
    donorID: "6728f1b5a4d2ab12f0567104",      // Riya Sen
    bloodGroup: "AB+",
    quantity: 400,
    departmentId: null,
    status: "Used",
    remarks: "Issued for emergency transfusion in trauma case."
  },
  {
    productId: "INV-BL-0005",
    bloodBankID: "6728f1b5a4d2ab12f0567006",  // Jeevan Jyoti Charitable Blood Bank
    donorID: "6728f1b5a4d2ab12f0567105",      // Sandeep Kumar
    bloodGroup: "O-",
    quantity: 450,
    departmentId: null,
    status: "Available",
    remarks: "Rare group O-negative; stored in deep freeze."
  },
  {
    productId: "INV-BL-0006",
    bloodBankID: "6728f1b5a4d2ab12f0567007",  // Sahara Blood Center
    donorID: "6728f1b5a4d2ab12f0567106",      // Neha Joshi
    bloodGroup: "B-",
    quantity: 350,
    departmentId: null,
    status: "Available",
    remarks: "Tested negative for all infectious markers."
  },
  {
    productId: "INV-BL-0007",
    bloodBankID: "6728f1b5a4d2ab12f0567008",  // LifeCare Blood Bank & Diagnostics
    donorID: "6728f1b5a4d2ab12f0567107",      // Rahul Gupta
    bloodGroup: "AB-",
    quantity: 400,
    departmentId: null,
    status: "Reserved",
    remarks: "Critical unit reserved for surgery tomorrow."
  },
  {
    productId: "INV-BL-0008",
    bloodBankID: "6728f1b5a4d2ab12f0567009",  // Green Cross Hospital Blood Bank
    donorID: "6728f1b5a4d2ab12f0567108",      // Manisha Verma
    bloodGroup: "A-",
    quantity: 450,
    departmentId: null,
    status: "Available",
    remarks: "Stored under strict temperature control (2–6°C)."
  },
  {
    productId: "INV-BL-0009",
    bloodBankID: "6728f1b5a4d2ab12f0567010",  // Mission Blood & Plasma Center
    donorID: "6728f1b5a4d2ab12f0567109",      // Rohit Das
    bloodGroup: "O+",
    quantity: 450,
    departmentId: null,
    status: "Expired",
    remarks: "Expired on 2025-10-31; marked for disposal."
  },
  {
    productId: "INV-BL-0010",
    bloodBankID: "6728f1b5a4d2ab12f0567011",  // Aarogyam Govt Blood Bank
    donorID: "6728f1b5a4d2ab12f0567110",      // Ankita Rao
    bloodGroup: "B+",
    quantity: 450,
    departmentId: null,
    status: "Discarded",
    remarks: "Discarded due to leakage detected during inspection."
  }
],
requestLog : [
  {
    requestBodyID: "6728f1b5a4d2ab12f0567101", // Arun Sharma (Donor reference)
    requestedBy: "6728f1b5a4d2ab12f0567902",   // Employee reference (Hospital staff)
    requiredComponent: "Whole Blood",
    requiredBloodType: "A+",
    requestedQuantity: 450,
    fullfilledQuantity: 450,
    urgencyLevel: 5,
    status: "Fulfilled",
    address: "City Care Multi-specialty Hospital, MG Road, Lucknow",
    coordinates: { latitude: 26.8467, longitude: 80.9462 },
    approvedBy: "6728f1b5a4d2ab12f0567893",
    resolvedBy: "6728f1b5a4d2ab12f0567890",
    rejectionReason: null
  },
  {
    requestBodyID: "6728f1b5a4d2ab12f0567102",
    requestedBy: "6728f1b5a4d2ab12f0567895",
    requiredComponent: "Plasma",
    requiredBloodType: "O+",
    requestedQuantity: 600,
    fullfilledQuantity: 600,
    urgencyLevel: 4,
    status: "Fulfilled",
    address: "Global Super-specialty Hospital, Green Park Avenue, Delhi",
    coordinates: { latitude: 28.567, longitude: 77.210 },
    approvedBy: "6728f1b5a4d2ab12f0567896",
    resolvedBy: "6728f1b5a4d2ab12f0567892"
  },
  {
    requestBodyID: "6728f1b5a4d2ab12f0567103",
    requestedBy: "6728f1b5a4d2ab12f0567905",
    requiredComponent: "RBC",
    requiredBloodType: "B+",
    requestedQuantity: 400,
    fullfilledQuantity: 300,
    urgencyLevel: 3,
    status: "Partially Fulfilled",
    address: "Divine Life General Hospital, Civil Lines, Varanasi",
    coordinates: { latitude: 25.3176, longitude: 82.9739 },
    approvedBy: "6728f1b5a4d2ab12f0567897",
    resolvedBy: "6728f1b5a4d2ab12f0567894",
    rejectionReason: null
  },
  {
    requestBodyID: "6728f1b5a4d2ab12f0567104",
    requestedBy: "6728f1b5a4d2ab12f0567906",
    requiredComponent: "Platelets",
    requiredBloodType: "AB+",
    requestedQuantity: 250,
    fullfilledQuantity: 250,
    urgencyLevel: 4,
    status: "Fulfilled",
    address: "Sunrise Multi-specialty Clinic, MG Road, Indore",
    coordinates: { latitude: 22.7196, longitude: 75.8577 },
    approvedBy: "6728f1b5a4d2ab12f0567898",
    resolvedBy: "6728f1b5a4d2ab12f0567895"
  },
  {
    requestBodyID: "6728f1b5a4d2ab12f0567105",
    requestedBy: "6728f1b5a4d2ab12f0567901",
    requiredComponent: "Whole Blood",
    requiredBloodType: "O-",
    requestedQuantity: 450,
    fullfilledQuantity: 0,
    urgencyLevel: 5,
    status: "Pending",
    address: "Silverline Super-specialty Institute, Sector 62, Noida",
    coordinates: { latitude: 28.602, longitude: 77.37 },
    approvedBy: null,
    resolvedBy: null
  },
  {
    requestBodyID: "6728f1b5a4d2ab12f0567106",
    requestedBy: "6728f1b5a4d2ab12f0567903",
    requiredComponent: "Plasma",
    requiredBloodType: "B-",
    requestedQuantity: 500,
    fullfilledQuantity: 500,
    urgencyLevel: 3,
    status: "Fulfilled",
    address: "Shanti Care General Hospital, Station Road, Patna",
    coordinates: { latitude: 25.5941, longitude: 85.1376 },
    approvedBy: "6728f1b5a4d2ab12f0567899",
    resolvedBy: "6728f1b5a4d2ab12f0567897"
  },
  {
    requestBodyID: "6728f1b5a4d2ab12f0567107",
    requestedBy: "6728f1b5a4d2ab12f0567907",
    requiredComponent: "Platelets",
    requiredBloodType: "AB-",
    requestedQuantity: 300,
    fullfilledQuantity: 0,
    urgencyLevel: 2,
    status: "Rejected",
    address: "Wellness Multi-specialty Hospital, Ring Road, Rajkot",
    coordinates: { latitude: 22.3039, longitude: 70.8022 },
    approvedBy: "6728f1b5a4d2ab12f0567898",
    resolvedBy: null,
    rejectionReason: "Low platelet count donor unavailability."
  },
  {
    requestBodyID: "6728f1b5a4d2ab12f0567108",
    requestedBy: "6728f1b5a4d2ab12f0567908",
    requiredComponent: "RBC",
    requiredBloodType: "A-",
    requestedQuantity: 400,
    fullfilledQuantity: 400,
    urgencyLevel: 4,
    status: "Fulfilled",
    address: "Fortune Multi-specialty Center, Lake View Colony, Bhopal",
    coordinates: { latitude: 23.2599, longitude: 77.4126 },
    approvedBy: "6728f1b5a4d2ab12f0567894",
    resolvedBy: "6728f1b5a4d2ab12f0567899"
  },
  {
    requestBodyID: "6728f1b5a4d2ab12f0567109",
    requestedBy: "6728f1b5a4d2ab12f0567909",
    requiredComponent: "Whole Blood",
    requiredBloodType: "O+",
    requestedQuantity: 450,
    fullfilledQuantity: 450,
    urgencyLevel: 5,
    status: "Fulfilled",
    address: "Green Valley General Hospital, Highway Road, Durg",
    coordinates: { latitude: 21.19, longitude: 81.28 },
    approvedBy: "6728f1b5a4d2ab12f0567905",
    resolvedBy: "6728f1b5a4d2ab12f0567900"
  },
  {
    requestBodyID: "6728f1b5a4d2ab12f0567110",
    requestedBy: "6728f1b5a4d2ab12f0567910",
    requiredComponent: "Other",
    requiredBloodType: "B+",
    requestedQuantity: 450,
    fullfilledQuantity: 0,
    urgencyLevel: 2,
    status: "Cancelled",
    address: "Metro City Super-specialty Hospital, Pune",
    coordinates: { latitude: 18.5204, longitude: 73.8567 },
    approvedBy: null,
    resolvedBy: null,
    rejectionReason: "Request cancelled by hospital admin."
  }
],
alertLog: [
  {
    requistBodyName: "City Care Multi-specialty Hospital",
    contaactDetails: "+919812345600",
    location: "MG Road, Lucknow, Uttar Pradesh",
    crisis: "Road accident with multiple trauma patients requiring O+ units.",
    urgencyLevel: 5,
    unitRequired: 4,
    status: "In Progress",
    createdBy: "6728f1b5a4d2ab12f0567893", // Employee who raised alert
    resolvedBy: "6728f1b5a4d2ab12f0567890"  // Hospital handling it
  },
  {
    requistBodyName: "Global Super-specialty Hospital",
    contaactDetails: "+911122334455",
    location: "Green Park Avenue, Delhi",
    crisis: "Critical shortage of AB- plasma for ICU patient.",
    urgencyLevel: 4,
    unitRequired: 2,
    status: "Pending",
    createdBy: "6728f1b5a4d2ab12f0567894",
    resolvedBy: null
  },
  {
    requistBodyName: "Divine Life General Hospital",
    contaactDetails: "+919812345678",
    location: "Civil Lines, Varanasi",
    crisis: "Emergency pediatric transfusion needed for thalassemia patient.",
    urgencyLevel: 5,
    unitRequired: 1,
    status: "Resolved",
    createdBy: "6728f1b5a4d2ab12f0567895",
    resolvedBy: "6728f1b5a4d2ab12f0567894"
  },
  {
    requistBodyName: "Sanjeevani Govt Blood Bank",
    contaactDetails: "+917312223344",
    location: "Main Road, Indore",
    crisis: "City blood bank reaching critical low levels across all groups.",
    urgencyLevel: 5,
    unitRequired: 12,
    status: "Escalated",
    createdBy: "6728f1b5a4d2ab12f0567896",
    resolvedBy: null
  },
  {
    requistBodyName: "Silverline Super-specialty Institute",
    contaactDetails: "+919999888777",
    location: "Sector 62, Noida",
    crisis: "O- blood urgently required for emergency surgery.",
    urgencyLevel: 5,
    unitRequired: 1,
    status: "Resolved",
    createdBy: "6728f1b5a4d2ab12f0567897",
    resolvedBy: "6728f1b5a4d2ab12f0567896"
  },
  {
    requistBodyName: "Shanti Care General Hospital",
    contaactDetails: "+916122345678",
    location: "Patel Nagar, Patna",
    crisis: "Stock of B- and AB+ reaching expiry soon.",
    urgencyLevel: 2,
    unitRequired: 0,
    status: "Pending",
    createdBy: "6728f1b5a4d2ab12f0567898",
    resolvedBy: null
  },
  {
    requistBodyName: "Wellness Multi-specialty Hospital",
    contaactDetails: "+919876550000",
    location: "Ring Road, Rajkot",
    crisis: "Power outage affecting cold storage — need stock transfer support.",
    urgencyLevel: 4,
    unitRequired: 6,
    status: "In Progress",
    createdBy: "6728f1b5a4d2ab12f0567899",
    resolvedBy: "6728f1b5a4d2ab12f0567898"
  },
  {
    requistBodyName: "Fortune Multi-specialty Center",
    contaactDetails: "+917565430098",
    location: "Lake View Colony, Bhopal",
    crisis: "Accident with two critical cases needing A- and B+ immediately.",
    urgencyLevel: 5,
    unitRequired: 3,
    status: "In Progress",
    createdBy: "6728f1b5a4d2ab12f0567900",
    resolvedBy: "6728f1b5a4d2ab12f0567899"
  },
  {
    requistBodyName: "Green Valley General Hospital",
    contaactDetails: "+917882223344",
    location: "Highway Road, Durg",
    crisis: "Flood emergency — stock redistribution required to nearby hospitals.",
    urgencyLevel: 5,
    unitRequired: 10,
    status: "Escalated",
    createdBy: "6728f1b5a4d2ab12f0567901",
    resolvedBy: null
  },
  {
    requistBodyName: "Metro City Super-specialty Hospital",
    contaactDetails: "+912023456789",
    location: "Industrial Area, Pune",
    crisis: "Emergency cesarean section — B+ blood required within 2 hours.",
    urgencyLevel: 4,
    unitRequired: 2,
    status: "Resolved",
    createdBy: "6728f1b5a4d2ab12f0567902",
    resolvedBy: "6728f1b5a4d2ab12f0567899"
  }
],
locationLog : [
  {
    locationId: "LOC-000001001",
    placeName: "Red Cross Central Blood Bank",
    empId: "6728f1b5a4d2ab12f0567893", // Employee: Amit Verma
    location: {
      address: "Mahatma Gandhi Marg, Hazratganj",
      cityOrVillage: "Lucknow",
      district: "Lucknow",
      state: "Uttar Pradesh"
    },
    amount: 0,
    typeOfLocation: "Blood Bank",
    nearbyLandmarks: "Opposite General Post Office",
    coordinates: { latitude: 26.8467, longitude: 80.9462 },
    status: "Verified"
  },
  {
    locationId: "LOC-000001002",
    placeName: "City Care Multi-specialty Hospital",
    empId: "6728f1b5a4d2ab12f0567894", // Employee: Dr. Neeraj Singh
    location: {
      address: "Gomti Nagar Extension",
      cityOrVillage: "Lucknow",
      district: "Lucknow",
      state: "Uttar Pradesh"
    },
    amount: 0,
    typeOfLocation: "Hospital",
    nearbyLandmarks: "Near Shalimar Gate 2",
    coordinates: { latitude: 26.848, longitude: 80.985 },
    status: "Verified"
  },
  {
    locationId: "LOC-000001003",
    placeName: "Global Super-specialty Hospital",
    empId: "6728f1b5a4d2ab12f0567895", // Employee: Dr. Aarti Nair
    location: {
      address: "Green Park Avenue",
      cityOrVillage: "Delhi",
      district: "New Delhi",
      state: "Delhi"
    },
    amount: 0,
    typeOfLocation: "Hospital",
    nearbyLandmarks: "Near AIIMS Metro Station",
    coordinates: { latitude: 28.567, longitude: 77.210 },
    status: "Verified"
  },
  {
    locationId: "LOC-000001004",
    placeName: "Apollo Blood Center",
    empId: "6728f1b5a4d2ab12f0567896", // Employee: Meena George
    location: {
      address: "Golf Course Road",
      cityOrVillage: "Gurgaon",
      district: "Gurugram",
      state: "Haryana"
    },
    amount: 0,
    typeOfLocation: "Blood Bank",
    nearbyLandmarks: "Next to Fortis Hospital",
    coordinates: { latitude: 28.4595, longitude: 77.0266 },
    status: "Verified"
  },
  {
    locationId: "LOC-000001005",
    placeName: "Sahara Blood Center",
    empId: "6728f1b5a4d2ab12f0567897", // Employee: Rohit Tiwari
    location: {
      address: "Sector 62, Noida",
      cityOrVillage: "Noida",
      district: "Gautam Buddha Nagar",
      state: "Uttar Pradesh"
    },
    amount: 0,
    typeOfLocation: "Blood Bank",
    nearbyLandmarks: "Opposite DPS School",
    coordinates: { latitude: 28.602, longitude: 77.37 },
    status: "Verified"
  },
  {
    locationId: "LOC-000001006",
    placeName: "Divine Life General Hospital",
    empId: "6728f1b5a4d2ab12f0567898", // Employee: Priyanka Sharma
    location: {
      address: "Sigra Road",
      cityOrVillage: "Varanasi",
      district: "Varanasi",
      state: "Uttar Pradesh"
    },
    amount: 0,
    typeOfLocation: "Hospital",
    nearbyLandmarks: "Near Kashi Vishwanath Corridor",
    coordinates: { latitude: 25.3176, longitude: 82.9739 },
    status: "Verified"
  },
  {
    locationId: "LOC-000001007",
    placeName: "Fortune Multi-specialty Center",
    empId: "6728f1b5a4d2ab12f0567899", // Employee: Sanjay Patel
    location: {
      address: "Lake View Colony",
      cityOrVillage: "Bhopal",
      district: "Bhopal",
      state: "Madhya Pradesh"
    },
    amount: 0,
    typeOfLocation: "Hospital",
    nearbyLandmarks: "Near Boat Club Road",
    coordinates: { latitude: 23.2599, longitude: 77.4126 },
    status: "Verified"
  },
  {
    locationId: "LOC-000001008",
    placeName: "Mission Blood & Plasma Center",
    empId: "6728f1b5a4d2ab12f0567900", // Employee: Arjun Das
    location: {
      address: "Kalawad Road",
      cityOrVillage: "Rajkot",
      district: "Rajkot",
      state: "Gujarat"
    },
    amount: 0,
    typeOfLocation: "Blood Bank",
    nearbyLandmarks: "Next to Sterling Hospital",
    coordinates: { latitude: 22.3039, longitude: 70.8022 },
    status: "Verified"
  },
  {
    locationId: "LOC-000001009",
    placeName: "Metro City Super-specialty Hospital",
    empId: "6728f1b5a4d2ab12f0567901", // Employee: Kavita Rao
    location: {
      address: "Shivaji Nagar",
      cityOrVillage: "Pune",
      district: "Pune",
      state: "Maharashtra"
    },
    amount: 0,
    typeOfLocation: "Hospital",
    nearbyLandmarks: "Behind E-Square Mall",
    coordinates: { latitude: 18.5204, longitude: 73.8567 },
    status: "Verified"
  },
  {
    locationId: "LOC-000001010",
    placeName: "Green Valley General Hospital",
    empId: "6728f1b5a4d2ab12f0567902", // Employee: Sunita Kapoor
    location: {
      address: "Highway Road",
      cityOrVillage: "Durg",
      district: "Durg",
      state: "Chhattisgarh"
    },
    amount: 0,
    typeOfLocation: "Hospital",
    nearbyLandmarks: "Near Durg Railway Station",
    coordinates: { latitude: 21.19, longitude: 81.28 },
    status: "Recorded"
  }
]};