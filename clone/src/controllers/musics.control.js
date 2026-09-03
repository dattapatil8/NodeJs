const musicModel=require("../models/musics.model")
const jwt=require("jsonwebtoken")

async function createMusic(req,res) {
     
    const token=req.cookies.token;

    if(!token){
        return res.status(401).json({
            message:"Unauthorize"
        })
    }

    try {
    const decode=jwt.verify(token,procces.env.JWT_SECRET)
    
    if(decode.role !=="artist"){
          return res.status(403).json({
            message:"You dont have access to a create musics"
        })
    }

        
    } catch (error) {
        res.status(401).json({
            message:"Unauthorize"
        })
    }
    const title=req.body;

    const file=req.file;
    
}