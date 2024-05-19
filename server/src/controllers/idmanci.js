import Idmanci from "../models/idmaci.js";
import upload from "../middleware/multer.js";
import cloudinary from "../utils/cloudinary.js";


export const createIdmanci=async(req,res)=>{
    try {
        upload.fields([{name:'image'}])(req, res, async function (err) {
          if (err) {
            console.error(err);
            return res.status(400).json({ message: err.message });
          }
          const { image,title,position } = req.body;
  
            const IdmanciResult = req.files["image"][0];
            const IdmanciUpload = cloudinary.uploader.upload(IdmanciResult.path, { folder: "Idmanci" });

            const [IdmanciResponse] = await Promise.all([IdmanciUpload]);
    
            const newIdmanci = new Idmanci({
            
              image: IdmanciResponse.secure_url,
              title:title,
              position:position
            });
    
            await newIdmanci.save();
    
            res.status(200).send("Create New Idmanci");
        });
      } catch (error) {
        console.error(error);
        res.status(500).json({ message: error.message });
      }
}


export const getAllIdmanci=async(req,res)=>{
    try {
        const idmanci=await Idmanci.find({})
        res.json(idmanci)
    } catch (error) {
        res.status(500).json({messsage:error})
    }
}

export const updateIdmanci=async(req,res)=>{
    try {
        upload.fields([{ name: 'image' }])(req, res, async function (err) {
            if (err) {
                console.error(err);
                return res.status(400).json({ message: err.message });
            }
            try {
                const updatedIdmanci = await Idmanci.findByIdAndUpdate(req.params.id, {...req.body}, { new: true });

                if (updatedIdmanci) {
                    const { image } = req.body;

                    if (req.files["image"]) {
                        const IdmanciResult = req.files["image"][0];
                        const IdmanciUpload = cloudinary.uploader.upload(IdmanciResult.path, { folder: "Idmanci" });
                        const [IdmanciResponse] = await Promise.all([IdmanciUpload]);
                        updatedIdmanci.image = IdmanciResponse.secure_url;
                    }

                    if (image) updatedIdmanci.image = image;
                   

                    await updatedIdmanci.save();

                    res.status(200).json(updatedIdmanci); 
                } else {
                    res.status(404).json({ message: "Güncellenmek istenen Idmanci bulunamadı." });
                }
            } catch (error) {
                res.status(500).json({ message: error.message });
            }
        });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}


export const deleteIdmanci=async(req,res)=>{
    try {
        const {id}=req.params
        const idmanci=await Idmanci.findByIdAndDelete(id)
        res.status(200).json("deleted")
    } catch (error) {
        res.status(500).json({messsage:error})
    }
}


export const getByIdIdmanci=async(req,res)=>{
    try {
        const {id}=req.params
        const idmanci=await Idmanci.findById(id)
        res.json(idmanci)
    } catch (error) {
        res.status(500).json({messsage:error})
    }
}