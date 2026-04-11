const mongoose = require("mongoose");
const bcrypt=require("bcryptjs")

const employeeSchema = new mongoose.Schema({
    empId: {
       type:String, 
        minlength: 4,
        maxlength: 30, 
        match: [/^[A-Z0-9\-]+$/, "Invalid employee ID format"],
        required: true, 
        unique: true,
        uppercase: true,
        trim:  true,
    },
    hospitalId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Hospital",
        required: true,
    },
    name: {
        type: String,
        maxlength: 50,
        required: true,
        trim:true
    },
    age: {
        type: Number,
        min: 18,
        max: 65,
        required: true
    },
    gender: {
        type: String,
        enum: ["M", "F", "O"],
        required: true
    },
    phone1: {
        type: String,
        maxlength: 15,
        required: true
    },
    phone2: {
        type: String,
        maxlength: 15,
    },

    //AUTH
    email: {
        type: String,
        maxlength: 100,
        required: true,
        unique:true,
        lowercase:true,
        match:[/^\S+@\S+\.\S+$/, "Invalid email format"],
    },
    password:{
        type:String,
        minlength:8,
        required:true,
    },
    workLocation: {
        type: String,
        maxlength: 100,
        required: true,
        trim:true
    },
    designation: {
        type: String,
        maxlength: 50,
        required: true,
        trim:true
    },
    image: {
        type: String,
        required: true,
    },
    role: {
        type: String,
        enum: ["Admin", "Doctor", "Technician", "Nurse", "Staff"],
        default: "Staff"
    },
    status: {
        type: String,
        enum: ["Active", "Inactive", "On Leave"],
        default: "Active"
    },
    shift: {
        type: String,
        enum: ["Day", "Night", "Rotational"],
        default: "Day"
    },
    joinedOn: {
        type: Date,

    },
},{timestamps:true});

employeeSchema.pre("save", async function (next) {
    if (!this.isModified("password")) return next();
    this.password = await bcrypt.hash(this.password, 10);
    next();
})

employeeSchema.methods.matchPassword = async function (candidatePassword) {
    return bcrypt.compare(candidatePassword, this.password);
};

const EmployeeDetail = mongoose.model("EmployeeDetail", employeeSchema);
module.exports = EmployeeDetail;