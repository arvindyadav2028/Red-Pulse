const mongoose = require("mongoose");

const employeeSchema = new mongoose.Schema({
    empId: {
        type: String,
        maxlength: 30,
        required: true,
        unique: true
    },
    name: {
        type: String,
        maxlength: 50,
        required: true,
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
    email: {
        type: String,
        maxlength: 100,
        required: true,
    },
    workLocation: {
        type: String,
        maxlength: 100,
        required: true,
    },
    designation: {
        type: String,
        maxlength: 50,
        required: true,
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
        default: Date.now
    },
});

const EmployeeDetail = mongoose.model("EmployeeDetail", employeeSchema);
module.exports = EmployeeDetail;
