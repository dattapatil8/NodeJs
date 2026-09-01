const mongoose=require('mongoose')


async function connectDB() {

    try {
        await mongoose.connect(process.env.MONGO_URL)
        console.log("MongoDB connected succesesfully")
    } catch (error) {
        console.log("batabase note connected",error)
    }
    
}

module.exports=connectDB;