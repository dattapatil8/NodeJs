const musicModel = require("../models/musics.model");
const albomModel = require("../models/albom.model")
const { uploadFile } = require("../services/storage.service");
const jwt = require("jsonwebtoken");

async function createMusic(req, res) {

    

        const { title } = req.body;
        const file = req.file;

        if (!file) {
            return res.status(400).json({
                message: "Music file is required"
            });
        }

       
        const result = await uploadFile(
            file.buffer.toString("base64")
        );

      
        const music = await musicModel.create({
            uri: result.url,
            title: title,
            artist: req.user.id
        });

        return res.status(201).json({
            message: "Music Created Successfully",
            music: {
                id: music._id,
                uri: music.uri,
                title: music.title,
                artist: music.artist
            }
        });

    }

async function createAlbom(req, res) {

  

     const {title ,musics}=req.body;

    const albom=await albomModel.create({
        title,
        artist:req.user.id,
        musics:musics
    })
    res.status(201).json({message:"Album created succsesfully",
       albom:
       { id:albom._id,
        title:albom.title,
        artist:albom.artist,
        musics:albom.musics,
    }
    })
    }

async function getAllmusic(req,res) {
const musics=await musicModel.find();

res.status(200).json({
    message:"music Fetchd Successfuly",
    musics:musics
})

        
    }

module.exports = { createMusic, createAlbom, getAllmusic };