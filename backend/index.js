const express=require("express");
const cors = require("cors");
const bodyParser=require("body-parser")
const encoder=bodyParser.json()

const mongoose=require("mongoose")
const User=require("./models/itemsList")
const app=express();
const course=require("./Courses")
const complaint=require("./ComplaintApi")
const Registration=require("./Registration")
const login=require("./Login")

// mongoose.connect("mongodb+srv://joban:bajwa@cluster0.gn69z.mongodb.net/foodapp?retryWrites=true&w=majority",{
//     useNewUrlParser:true,
//     useUnifiedTopology:true
//  }).then(()=>{console.log("connected to mongodb")}).catch(error=>console.log("error",error));

 mongoose.connect("mongodb://localhost:27017",{
    useNewUrlParser:true,
    useUnifiedTopology:true
 }).then(()=>{console.log("connected to mongodb")}).catch(error=>console.log("error",error));


User.find({},(err,result)=>{
    if(err)console.log("error occuring..")
    
    });
    // data.save().then((result)=>{
    //     console.log(result)
    // }).catch((error)=>{console.log(error.message)})


app.use(cors())   
app.use(express.json())
const Joi=require("joi")
app.use("/api/course",course)
app.use("/api/complaint",complaint)
app.use("/api/registration",Registration)
app.use("/api/login",login)

// app.get("/",(req,res)=>{
//     res.send(array)
// });

app.get("/",encoder,(req,res)=>{
    User.find().then(data=>{
        res.json(data)
    })
})

// app.get("/",(req,res)=>{
//     // const data={userdata:req.body.user,userItems:req.body.orderedItems}
//     res.send(arrayOfData)
//     console.log("in get ",arrayOfData)
// })
app.post("/",encoder,(req,res)=>{
    // console.log("req body...",req.body.userdata)
    // const data={userdata:req.body.user,userItems:req.body.orderedItems}
    // const data=req.body
    // arrayOfData.push(data)
    // res.send(data)
    // console.log("in post index file ",data)
    const data=new User({
        _id:new mongoose.Types.ObjectId,
        name:req.body.user.name,
        location:req.body.user.location,
        street:req.body.user.street,
        number:req.body.user.contact,
        item:req.body.orderedItems
    });
    data.save().then((result)=>{
        res.json(result)
        console.log(result)
    }).catch(error=>{console.log(error.message)})
});


const port=process.env.port||3000
app.listen(port,()=>{console.log(`listening to port ${port}...`)})