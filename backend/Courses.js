const express=require("express")
const router=express.Router()

const array=[
    {key:1,id:"m1",name:"sushi", description:"Finest fish and veggies",price:22.34},
    {key:2,id:"m2",name:"Schnitzel",description:"A german specialty!",price:21.},
    {key:3,id:"m3",name:"Barbecue Burger",description:"American, raw, meaty",price:20},
    {key:4,id:"m4",name:"Green Bowl",description:"Healthy...and green...",price:30.3},
    {key:5,id:"m5",name:"apple",description:"red apple",price:10.3},
]


router.get("/",(req,res)=>{
    res.send(array)
});

router.post("/",(req,res)=>{
    // const schema={
    //     name: Joi.string().min(3).required()
    // }
    // const result=Joi.valid(req.body,schema)
    // console.log(result)
    // // const course={
    //     // id:array.length+1,
    //     name:req.body.name
    // }
    // if(result.error){
    //     res.status(505).send(result.error.detail.message)
    // }
    // array.push({id:array.length+1,name:req.body.name})
    const data={userdata:req.body.user,userItems:req.body.orderedItems}
    res.send(data)
    user.push=data
    console.log("in post ",data)
})
router.put("/:id",(req,res)=>{
    const boolean=array.find(x=>{ return x.id===parseInt(req.params.id)})
    if(!(boolean)){
        res.status(404).send("the course with the given id was not found...")
    }
    boolean.name=req.body.name
    res.send(array)   

})


router.get("/",(req,res)=>{
    
    res.send(user)
    console.log("in get ",user)
})
router.get("/:id",(req, res)=>{
    const boolean=array.find(x=>{ return x.id===parseInt(req.params.id)})
    if(!(boolean)){
        res.status(404).send("the course with the given id was not found...")
    }
    else res.send(boolean)

})

module.exports = router;