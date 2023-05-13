const bcrypt = require("bcrypt")
const express=require("express")
const router=express.Router()
const bodyParser=require("body-parser")
const encoder=bodyParser.json()
router.use(bodyParser.urlencoded({ extended: false }));
const mongoose=require("mongoose")

// const salt=bcrypt.genSalt(10)

const user=require("./models/registration")

router.post("/",encoder,(req,res)=>{
    console.log(req.body.email,"email... inregistration")
    user.find({email:req.body.email},{_id:0,email:1},(err,result)=>{
        if(err){
            console.log(err,"error")
        }
        if(result.length>0){
            res.status(400).send({message:"try another"})
         }
        else {   
            
            // const hashed=bcrypt.hash(req.body.password,salt)
            const data=new user({
            _id:new mongoose.Types.ObjectId,
            email:req.body.email,
            password: req.body.password,
        });
            data.save().then((result)=>{
                res.json(result)
                console.log(result)
            }).catch(error=>{console.log(error.message)})
        }
                // router.get("/invalid",(req,res)=>{
                //     const text="already exist this email plz change it"
                //     res.send(text)
                // })
            })
        
        });

router.get("/",(req,res)=>{
    user.find().then(data=>{
        res.json(data)
    })
})

module.exports=router;