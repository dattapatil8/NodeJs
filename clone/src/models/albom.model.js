const mongoose = require("mongoose");


const albomSchema= new mongoose.Schema({
    title:{
        type:String,
        required:true
    },
    musics:[{
        type: mongoose.Schema.Types.ObjectId,
        ref:"music"
    }],
    artist:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"user",
        required:true
    }

})

const albomModel=mongoose.model("albom",albomSchema)


module.exports=albomModel;