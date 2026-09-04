const express=require("express")
 const cookieParser=require("cookie-parser")
const authRoute=require("./routes/auth.routes")
const musicsRoute=require("./routes/musics.routes")
const app=express()

app.use(express.json())

app.use(cookieParser())

app.use('/api/auth',authRoute)
app.use('/api/music',musicsRoute)


module.exports=app;