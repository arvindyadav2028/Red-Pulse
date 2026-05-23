
import mongoose from "mongoose";

const organizationSchema = new mongoose.Schema({
 name:String,
 type:{
   type:String,
   enum:["hospital","bloodbank","ngo"]
 },
 address:String,
 createdBy:{
   type:mongoose.Schema.Types.ObjectId,
   ref:"User"
 }
},{timestamps:true});

export default mongoose.model("Organization", organizationSchema);
