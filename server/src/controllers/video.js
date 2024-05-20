import upload from "../middleware/multer.js";
import cloudinary from "../utils/cloudinary.js";
import Video from "../models/video.js";

export const createVideo = async (req, res) => {
    upload.fields([{ name: 'video' }])(req, res, async function (err) {
        if (err) {
            console.error(err);
            return res.status(400).json({ message: err.message });
        }

        try {
            const videoResult = req.files["video"][0];
            const videoUpload = await cloudinary.uploader.upload(videoResult.path, { folder: "Video", resource_type: "video" });

            const newVideo = new Video({
                video: videoUpload.secure_url
            });

            await newVideo.save();
            res.status(200).send("Create New Video");
        } catch (error) {
            console.error(error);
            res.status(500).json({ message: error.message });
        }
    });
}

export const getVideo = async (req, res) => {
    try {
        const videos = await Video.find({});
        res.json(videos);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

export const updateVideo = async (req, res) => {
    upload.fields([{ name: 'video' }])(req, res, async function (err) {
        if (err) {
            console.error(err);
            return res.status(400).json({ message: err.message });
        }

        try {
            const updatedVideo = await Video.findById(req.params.id);
            if (!updatedVideo) {
                return res.status(404).json({ message: "Video not found." });
            }

            if (req.files["video"]) {
                const videoResult = req.files["video"][0];
                const videoUpload = await cloudinary.uploader.upload(videoResult.path, { folder: "Video", resource_type: "video" });
                updatedVideo.video = videoUpload.secure_url;
            }

            await updatedVideo.save();
            res.status(200).json(updatedVideo);
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    });
}

export const deleteVideo = async (req, res) => {
    try {
        const { id } = req.params;
        const video = await Video.findByIdAndDelete(id);
        if (!video) {
            return res.status(404).json({ message: "Video not found." });
        }
        res.status(200).json("deleted");
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

export const getByIdVideo = async (req, res) => {
    try {
        const { id } = req.params;
        const video = await Video.findById(id);
        if (!video) {
            return res.status(404).json({ message: "Video not found." });
        }
        res.json(video);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}
