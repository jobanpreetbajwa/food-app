const express=require("express")
const router=express.Router()
const bodyParser=require("body-parser")
const encoder=bodyParser.json()
router.use(bodyParser.urlencoded({ extended: false }));
const mongoose=require("mongoose")

const user=require("./models/complaintModel")

router.post("/",encoder,(req,res)=>{

    const data=new user({
        _id:new mongoose.Types.ObjectId,
        firstName:req.body.complaint.name,
        lastName:req.body.complaint.last,
        country:req.body.complaint.country,
        issue:req.body.complaint.text
    });
    data.save().then((result)=>{
        res.json(result)
        console.log(result)
    }).catch(error=>{console.log(error.message)})
});

router.get("/",(req,res)=>{
    user.find().then(data=>{
        res.json(data)
    })
})

module.exports=router;