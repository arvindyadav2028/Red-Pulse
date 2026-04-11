const mongoose = require("mongoose");
const bcrypt=require('bcryptjs')
const bloodBankSchema = new mongoose.Schema({
    bloodBankID: {      
        type: String,
        minlength: 6,
        maxlength: 14,
        required: true,
        unique: true
    },
    // ✅ Add this
    hospitalId: {
    type:     mongoose.Schema.Types.ObjectId,
    ref:      "Hospital",
 //   required: true,
},
    name: {               
        type: String,
        minlength: 5,
        maxlength: 50,
        required: true,
    },
    bankHeadID: {         
        type: mongoose.Schema.Types.ObjectId,
        ref: "Employee",
        required: true,
    },
    type: {             
        type: String,
        enum: ["Government", "Private", "NGO", "Hospital-Based"],
        required: true
    },
    ownership: {        
        type: String,
        maxlength: 50,
        required: true,
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

    //Adress
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
        match:     [/^\d{6}$/, "Pincode must be 6 digits"],
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
    //GEOJSON
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

    //Contact info
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
        min:0,
        max: 1000000,
    },
    reviews: [{
    userId:  { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
    rating:  { type: Number, min: 1, max: 5, required: true },
    comment: { type: String, maxlength: 500, trim: true }
}],
},{timestamps:true});

bloodBankSchema.pre("save", async function (next) {
    if (!this.isModified("password")) return next();
    this.password = await bcrypt.hash(this.password, 10);
    next();
});
bloodBankSchema.index({ location: "2dsphere" });

bloodBankSchema.path("reviews").validate(function (reviews) {
    const ids = reviews.map(r => r.userId.toString());
    return ids.length === new Set(ids).size;
}, "A user can only submit one review");

bloodBankSchema.methods.matchPassword = async function (candidatePassword) {
    return bcrypt.compare(candidatePassword, this.password);
};

bloodBankSchema.index({ location: "2dsphere" })

const BloodBank = mongoose.model("BloodBank",bloodBankSchema);
module.exports = BloodBank;