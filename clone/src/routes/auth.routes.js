const express=require('express')
const authController=require('../controllers/auth.control')

const router=express.Router()


router.post("/register",authController.registr)


module.exports=router;