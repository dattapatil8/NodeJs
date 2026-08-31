const  userModel=require("../models/user.model")
const jwt=require('jsonwebtoken')

async function registration(req,res) {



   const{userName,email,password}=req.body;  

   const emailAllradyExist=await userModel.findOne({
    email
   })
   if(emailAllradyExist){
     return res.status(409).json({
      message:"Email AllradyExist"
     })
   }

   const user=await userModel.create({
     userName,email,password
   })

   const token= jwt.sign(
    {id:user._id},
    process.env.JWT_SECRET
   )
   res.cookie("token",token)

   res.status(201).json({
    message:"user registretion succesesfully",
    user,
   

   })
   


}







module.exports={registration}