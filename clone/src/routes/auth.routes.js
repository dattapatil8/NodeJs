const express=require('express')
const authController=require('../controllers/auth.control')

const router=express.Router()


router.post("/register",authController.userregistr)

router.post("/login",authController.userLogin)


module.exports=router;