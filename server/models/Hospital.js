const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");

const hospitalSchema = new mongoose.Schema({
    hospitalID: {         
        type: String,
        minlength: 6,
        maxlength: 14,
        required: true,
        unique: true
    },
    name: {               
        type: String,
        minlength: 3,
        maxlength: 50,
        required: true,
    },
    hospitalHeadID: {     
        type: mongoose.Schema.Types.ObjectId,
        ref: "Employee",
        required: true,
    },
    type: {              
        type: String,
        enum: ["General", "Multi-specialty", "Super-specialty", "Clinic"],
       // required: true
    },
    ownership: {         
        type: String,
        maxlength: 50,
       // required: true,
    },
    licence: {            
        type: String,
        maxlength: 50,
        required: true
    },
    accreditation: {     
        type: String,
        maxlength: 50,
    },
    accCertificates: {     
        type: [String],
    },
    emgServices: {       
        type: String,
        maxlength: 150,
    },
    //AUTH
    email:{
        type:String,
        required:true,
        minlength:5,
        unique:true,
        lowercase:true,
        trim:true,
        match:[/^\S+@\S+\.\S+$/, "Invalid email format"],
    },
    password:{
        type:String,
        minlength:6,
        required:true
    },

    //Address
    address: {
        type: String,
        maxlength: 150,
        required: true,
    },
    landmark: {
        type: String,
        maxlength: 50,
    },
    cityOrVillage: {
        type: String,
        maxlength: 50,
        required: true,
    },
    pincode: {
        type: String,
        minlength: 6,
        maxlength: 6,
        required: true,
        match: [/^\d{6}$/, "Pincode must be 6 digits"],
    },
    district: {
        type: String,
        maxlength: 50,
        required: true
    },
    state: {
        type: String,
        maxlength: 50,
        required: true
    },
    location: {
      type: {
        type:    String,
        enum:    ["Point"],
        default: "Point",
      },
      coordinates: {
        type:    [Number], // [longitude, latitude]
        default: undefined,
      },
    },
    image: {
        type: String,
        required: true
    },
    status: { 
        type: Number, 
        enum: [0, 1, 2], 
        default: 0 
    }, // 0=Inactive, 1=Active, 2=Suspended
    
    // Contact info
    phoneNo1: {
        type: String,
        maxlength: 15,
        required: true,
    },
    phoneNo2: {
        type: String,
        maxlength: 15,
    },
  
    totalEmp: {
        type: Number,
        max: 1000000,
        min:0,
    },
    reviews: [{
        userId: { 
            type: mongoose.Schema.Types.ObjectId,
             ref: "User",
             required:true, 
            },
        rating: { 
            type: Number,
             min: 1,
             max: 5 ,
             required:true,
            },
        comment: { 
            type: String,
            maxlength:500,
            trim:true,
        }
    }],

},{timestamps:true});

hospitalSchema.pre("save",async function(next){
    if(!this.isModified("password")) return next();
    this.password=await bcrypt.hash(this.password, 10);
    next();
});


// compare password
hospitalSchema.methods.matchPassword = async function (enteredPassword) {
    return await bcrypt.compare(enteredPassword, this.password);
};


// ── Geo index for location-based Hospital search ─────
hospitalSchema.index({location:"2dsphere"});

const Hospital = mongoose.model("Hospital", hospitalSchema);
module.exports = Hospital;
