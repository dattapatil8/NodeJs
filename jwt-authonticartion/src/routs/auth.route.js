const express=require('express')
const authController=require('../controler/auth.control')

const router=express.Router()


router.post("/registretion",authController.registration )


module.exports=router;