const userModel=require('../models/user.model')
const jwt=require('jsonwebtoken')
const bcrypt=require('bcryptjs')
async function registr(req,res) {
    const {userName,email,password,role="user"}=req.body

    const userAlredyExist=await userModel.findone({
        $or:[
            {userName},
            {email}
        ]
    })

    if(userAlredyExist){
        return res.status(409).json({
            message:"user alredy exist"
        })
    }
    const hash=await bcrypt.hash(password,10)

    const user=await userModel.create({
        userName,
        email,
        password:hash,
        role
    })

    const token=jwt.sign({
        id:user._id,
        role:user.role,
  },process.env.JWT_SECRET)

  res.cookie("token",token)

res.status(201).json({
    message:"user register succesfully",
    id:user._id,
    userName:user.userName,
    email:user.email,
    role:user.role
})

    
}

module.exports={registr};
