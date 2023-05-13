const mongoose=require("mongoose")
let userschema= new mongoose.Schema({
    _id:mongoose.Types.ObjectId,
    name:String,
    location:String,
    street:String,
    phone:String,
    item:Object
})

module.exports=mongoose.model("itemsList",userschema)