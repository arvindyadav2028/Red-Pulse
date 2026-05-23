import mongoose from "mongoose";

const employeeSchema = new mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "user",
        required: true,
        unique: true,
    },
    // Optional — assigned later when linked to an org
    empId: {
        type: String,
        minlength: 4,
        maxlength: 30,
        match: [/^[A-Z0-9\-]+$/, "Invalid employee ID format"],
        sparse: true,   // allows multiple docs without this field
        uppercase: true,
        trim: true,
    },
    hospitalId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Hospital",
    },
    name: {
        type: String,
        maxlength: 50,
        required: [true, "Name is required"],
        trim: true,
    },
    age: {
        type: Number,
        min: 18,
        max: 65,
        required: [true, "Age is required"],
    },
    gender: {
        type: String,
        enum: ["M", "F", "O"],
        required: [true, "Gender is required"],
    },
    phone1: {
        type: String,
        maxlength: 15,
        required: [true, "Phone number is required"],
    },
    phone2: {
        type: String,
        maxlength: 15,
    },
    // Work email — stored separately from login email (optional at registration)
    email: {
        type: String,
        maxlength: 100,
        lowercase: true,
        trim: true,
        match: [/^\S+@\S+\.\S+$/, "Invalid email format"],
    },
    workLocation: {
        type: String,
        maxlength: 100,
        required: [true, "Work location is required"],
        trim: true,
    },
    designation: {
        type: String,
        maxlength: 50,
        required: [true, "Designation is required"],
        trim: true,
    },
    image: {
        type: String,
    },
    role: {
        type: String,
        enum: ["Admin", "Doctor", "Technician", "Nurse", "Staff"],
        default: "Staff",
    },
    status: {
        type: String,
        enum: ["Active", "Inactive", "On Leave"],
        default: "Active",
    },
    shift: {
        type: String,
        enum: ["Day", "Night", "Rotational"],
        default: "Day",
    },
    joinedOn: {
        type: Date,
    },
}, { timestamps: true });

const EmployeeDetail = mongoose.model("EmployeeDetail", employeeSchema);
export default EmployeeDetail;
