import YarisTime from "../models/yarisTime.js";
import upload from "../middleware/multer.js";
import cloudinary from "../utils/cloudinary.js";


export const createYarisTime=async(req,res)=>{
    try {
        upload.fields([{name:'image'}])(req, res, async function (err) {
          if (err) {
            console.error(err);
            return res.status(400).json({ message: err.message });
          }
          const { image,title,time } = req.body;
  
            const YarisTimeResult = req.files["image"][0];
            const YarisTimeUpload = cloudinary.uploader.upload(YarisTimeResult.path, { folder: "YarisTime" });

            const [YarisTimeResponse] = await Promise.all([YarisTimeUpload]);
    
            const newYarisTime = new YarisTime({
            
              image: YarisTimeResponse.secure_url,
              title:title,
              time:time
            });
    
            await newYarisTime.save();
    
            res.status(200).send("Create New YarisTime");
        });
      } catch (error) {
        console.error(error);
        res.status(500).json({ message: error.message });
      }
}


export const getAllYarisTime=async(req,res)=>{
    try {
        const yarisTime=await YarisTime.find({})
        res.json(yarisTime)
    } catch (error) {
        res.status(500).json({messsage:error})
    }
}

export const updateYarisTime=async(req,res)=>{
    try {
        upload.fields([{ name: 'image' }])(req, res, async function (err) {
            if (err) {
                console.error(err);
                return res.status(400).json({ message: err.message });
            }
            try {
                const updatedYarisTime = await YarisTime.findByIdAndUpdate(req.params.id, {...req.body}, { new: true });

                if (updatedYarisTime) {
                    const { image } = req.body;

                    if (req.files["image"]) {
                        const YarisTimeResult = req.files["image"][0];
                        const YarisTimeUpload = cloudinary.uploader.upload(YarisTimeResult.path, { folder: "YarisTime" });
                        const [YarisTimeResponse] = await Promise.all([YarisTimeUpload]);
                        updatedYarisTime.image = YarisTimeResponse.secure_url;
                    }

                    if (image) updatedYarisTime.image = image;
                   

                    await updatedYarisTime.save();

                    res.status(200).json(updatedYarisTime); 
                } else {
                    res.status(404).json({ message: "Güncellenmek istenen YarisTime bulunamadı." });
                }
            } catch (error) {
                res.status(500).json({ message: error.message });
            }
        });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}


export const deleteYarisTime=async(req,res)=>{
    try {
        const {id}=req.params
        const yarisTime=await YarisTime.findByIdAndDelete(id)
        res.status(200).json("deleted")
    } catch (error) {
        res.status(500).json({messsage:error})
    }
}


export const getByIdYarisTime=async(req,res)=>{
    try {
        const {id}=req.params
        const yarisTime=await YarisTime.findById(id)
        res.json(yarisTime)
    } catch (error) {
        res.status(500).json({messsage:error})
    }
}