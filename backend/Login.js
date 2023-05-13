const express=require("express")
const router=express.Router()
const bodyParser=require("body-parser")
const encoder=bodyParser.json()
router.use(bodyParser.urlencoded({ extended: false }));
const mongoose=require("mongoose")

const user=require("./models/registration")

router.post("/",encoder,(req,res)=>{
    console.log(req.body.email,"email...loginpage")
    user.find({email:req.body.email},{_id:0,email:1},(err,result)=>{
        if(err){
            console.log(err,"error loginpage")
            }
        if(result.length>0){
            res.status(200).send({message:"yea it is in database"})
            }
        else {
            res.status(400).send({message:"not in database"})
            }
        })
    });
router.get("/",(req,res)=>{
    user.find().then(data=>{
        res.json(data)
    })
})

module.exports=router;