const mongoose=require("mongoose")
let userschema= new mongoose.Schema({
    _id:mongoose.Types.ObjectId,
    firstName:String,
    lastName:String,
    country:String,
    issue:String,
})

module.exports=mongoose.model("complaintModel",userschema)