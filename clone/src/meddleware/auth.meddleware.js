const jwt =require("jsonwebtoken");

async function authArtist(req,res,next) {

     const token = req.cookies.token;

    if(!token){
        return res.status(401).json({message:"unathorized"})
    }
    try{
     const decoded=jwt.verify(token, process.env.JWT_SECRET)

     if(decoded.role !== "artist"){
        return res.status(403).json({message:"You dont have to access to create album"})
     }
    
     req.user=decoded;     

       next()
    }
    catch(err){
     return res.status(401).json({message:"unathorized"})
    }
    
}

module.exports={authArtist};