const {ImageKit}=require("@imagekit/nodejs")


const imageKitClient=new ImageKit({
    privateKey:process.env.IMAEGEKIT_PRIVET_KEY
})

async function uploadFile(file) {
    const result=await imageKitClient.files.upload({
        file,
        fileName:"music_"+Date.now,
        folder:"datta/music"
    })
    return result
    
}
module.exports={uploadFile}