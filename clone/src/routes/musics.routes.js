const express=require("express")
const musicController=require("../controllers/musics.control")
const authMeddleware=require("../meddleware/auth.meddleware")
const multer=require('multer')
const upload=multer({
    storage:multer.memoryStorage()
})

const router=express.Router()

router.post("/upload",authMeddleware.authArtist,upload.single("music"),musicController.createMusic)
router.post("/albom",authMeddleware.authArtist,musicController.createAlbom)

router.get("/",authMeddleware.authUser,musicController.getAllmusic)

router.get("/albums",authMeddleware.authUser,musicController.getAllalbum)

router.get("/albums/:albumId",authMeddleware.authUser,musicController.getAlbumid)


module.exports=router;