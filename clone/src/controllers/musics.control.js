const musicModel = require("../models/musics.model");
const { uploadFile } = require("../services/storage.service");
const jwt = require("jsonwebtoken");

async function createMusic(req, res) {

    const token = req.cookies.token;

    if (!token) {
        return res.status(401).json({
            message: "Unauthorized"
        });
    }

    try {

        // Verify token
        const decode = jwt.verify(token, process.env.JWT_SECRET);

        console.log("DECODE:", decode);

        // Only artist can upload music
        if (decode.role !== "artist") {
            return res.status(403).json({
                message: "You don't have access to create music"
            });
        }

        const { title } = req.body;
        const file = req.file;

        if (!file) {
            return res.status(400).json({
                message: "Music file is required"
            });
        }

        // Upload file
        const result = await uploadFile(
            file.buffer.toString("base64")
        );

        // Create music
        const music = await musicModel.create({
            uri: result.url,
            title: title,
            artist: decode.id
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

    } catch (error) {

        console.log("ERROR:", error);

        return res.status(401).json({
            message: "Unauthorized",
            error: error.message
        });
    }
}

module.exports = { createMusic };