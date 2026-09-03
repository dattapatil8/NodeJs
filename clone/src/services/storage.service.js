const {ImageKit}=require("@imagekit/nodejs")


const imageKitClient=new ImageKit({
    privateKey:process.env.IMAEGEKIT_PRIVET_KEY
})