import Hakim from "../models/hakim.js";
import upload from "../middleware/multer.js";
import cloudinary from "../utils/cloudinary.js";


export const createHakim=async(req,res)=>{
    try {
        upload.fields([{name:'image'}])(req, res, async function (err) {
          if (err) {
            console.error(err);
            return res.status(400).json({ message: err.message });
          }
          const { image,title,position } = req.body;
  
            const HakimResult = req.files["image"][0];
            const HakimUpload = cloudinary.uploader.upload(HakimResult.path, { folder: "Hakim" });

            const [HakimResponse] = await Promise.all([HakimUpload]);
    
            const newHakim = new Hakim({
            
              image: HakimResponse.secure_url,
              title:title,
              position:position
            });
    
            await newHakim.save();
    
            res.status(200).send("Create New Hakim");
        });
      } catch (error) {
        console.error(error);
        res.status(500).json({ message: error.message });
      }
}


export const getAllHakim=async(req,res)=>{
    try {
        const hakim=await Hakim.find({})
        res.json(hakim)
    } catch (error) {
        res.status(500).json({messsage:error})
    }
}

export const updateHakim=async(req,res)=>{
    try {
        upload.fields([{ name: 'image' }])(req, res, async function (err) {
            if (err) {
                console.error(err);
                return res.status(400).json({ message: err.message });
            }
            try {
                const updatedHakim = await Hakim.findByIdAndUpdate(req.params.id, {...req.body}, { new: true });

                if (updatedHakim) {
                    const { image } = req.body;

                    if (req.files["image"]) {
                        const HakimResult = req.files["image"][0];
                        const HakimUpload = cloudinary.uploader.upload(HakimResult.path, { folder: "Hakim" });
                        const [HakimResponse] = await Promise.all([HakimUpload]);
                        updatedHakim.image = HakimResponse.secure_url;
                    }

                    if (image) updatedHakim.image = image;
                   

                    await updatedHakim.save();

                    res.status(200).json(updatedHakim); 
                } else {
                    res.status(404).json({ message: "Güncellenmek istenen Hakim bulunamadı." });
                }
            } catch (error) {
                res.status(500).json({ message: error.message });
            }
        });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}


export const deleteHakim=async(req,res)=>{
    try {
        const {id}=req.params
        const hakim=await Hakim.findByIdAndDelete(id)
        res.status(200).json("deleted")
    } catch (error) {
        res.status(500).json({messsage:error})
    }
}


export const getByIdHakim=async(req,res)=>{
    try {
        const {id}=req.params
        const hakim=await Hakim.findById(id)
        res.json(hakim)
    } catch (error) {
        res.status(500).json({messsage:error})
    }
}