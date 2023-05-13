const mongoose=require("mongoose")
let userschema= new mongoose.Schema({
    _id:mongoose.Types.ObjectId,
    email:String,
    password:String,
})

module.exports=mongoose.model("registration",userschema)