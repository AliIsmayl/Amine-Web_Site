import Xeberler from "../models/xeberler.js";
import upload from "../middleware/multer.js";
import cloudinary from "../utils/cloudinary.js";


export const createXeberler = async (req, res) => {
    try {
        upload.fields([
            { name: 'image1', maxCount: 1 },
            { name: 'image2', maxCount: 1 },
            { name: 'image3', maxCount: 1 },
            { name: 'image4', maxCount: 1 }
        ])(req, res, async function (err) {
            if (err) {
                console.error(err);
                return res.status(400).json({ message: err.message });
            }
            const { title, content, name } = req.body;

            const imageUploads = {};
            const imageFields = ['image1', 'image2', 'image3', 'image4'];
            for (const field of imageFields) {
                if (req.files[field]) {
                    const imageResult = req.files[field][0];
                    const imageUpload = await cloudinary.uploader.upload(imageResult.path, { folder: "Xeberler" });
                    imageUploads[field] = imageUpload.secure_url;
                }
            }

            const newXeberler = new Xeberler({
                ...imageUploads,
                title,
                content,
                name
            });

            await newXeberler.save();

            res.status(200).send("Create New Xeberler");
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: error.message });
    }
}



export const getAllXeberler=async(req,res)=>{
    try {
        const xeberler=await Xeberler.find({})
        res.json(xeberler)
    } catch (error) {
        res.status(500).json({messsage:error})
    }
}

export const updateXeberler = async (req, res) => {
    try {
        upload.fields([
            { name: 'image1', maxCount: 1 },
            { name: 'image2', maxCount: 1 },
            { name: 'image3', maxCount: 1 },
            { name: 'image4', maxCount: 1 }
        ])(req, res, async function (err) {
            if (err) {
                console.error(err);
                return res.status(400).json({ message: err.message });
            }
            try {
                const updatedXeberler = await Xeberler.findByIdAndUpdate(req.params.id, { ...req.body }, { new: true });

                if (updatedXeberler) {
                    const imageUploads = {};
                    const imageFields = ['image1', 'image2', 'image3', 'image4'];
                    for (const field of imageFields) {
                        if (req.files[field]) {
                            const imageResult = req.files[field][0];
                            const imageUpload = await cloudinary.uploader.upload(imageResult.path, { folder: "Xeberler" });
                            imageUploads[field] = imageUpload.secure_url;
                        }
                    }

                    Object.assign(updatedXeberler, imageUploads);

                    await updatedXeberler.save();

                    res.status(200).json(updatedXeberler);
                } else {
                    res.status(404).json({ message: "Güncellenmek istenen Xeberler bulunamadı." });
                }
            } catch (error) {
                res.status(500).json({ message: error.message });
            }
        });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}



export const deleteXeberler=async(req,res)=>{
    try {
        const {id}=req.params
        const xeberler=await Xeberler.findByIdAndDelete(id)
        res.status(200).json("deleted")
    } catch (error) {
        res.status(500).json({messsage:error})
    }
}


export const getByIdXeberler=async(req,res)=>{
    try {
        const {name}=req.params
        const xeberler=await Xeberler.findOne({name})
        res.json(xeberler)
    } catch (error) {
        res.status(500).json({messsage:error})
    }
}