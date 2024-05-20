import upload from "../middleware/multer.js";
import cloudinary from "../utils/cloudinary.js";
import Foto from "../models/foto.js";

export const createFoto=async(req,res)=>{
    try {
        upload.fields([{name:'image'}])(req, res, async function (err) {
          if (err) {
            console.error(err);
            return res.status(400).json({ message: err.message });
          }
          const { image } = req.body;
  
            const FotoResult = req.files["image"][0];
            const FotoUpload = cloudinary.uploader.upload(FotoResult.path, { folder: "Foto" });

            const [FotoResponse] = await Promise.all([FotoUpload]);
    
            const newFoto = new Foto({
            
              image: FotoResponse.secure_url
            });
    
            await newFoto.save();
    
            res.status(200).send("Create New Foto");
        });
      } catch (error) {
        console.error(error);
        res.status(500).json({ message: error.message });
      }
}


export const getFoto=async(req,res)=>{
    try {
        const foto=await Foto.find({})
        res.json(foto)
    } catch (error) {
        res.status(500).json({messsage:error})
    }
}

export const updateFoto=async(req,res)=>{
    try {
        upload.fields([{ name: 'image' }])(req, res, async function (err) {
            if (err) {
                console.error(err);
                return res.status(400).json({ message: err.message });
            }
            try {
                const updatedFoto = await Foto.findByIdAndUpdate(req.params.id, {}, { new: true });

                if (updatedFoto) {
                    const { image } = req.body;

                    if (req.files["image"]) {
                        const FotoResult = req.files["image"][0];
                        const FotoUpload = cloudinary.uploader.upload(FotoResult.path, { folder: "Foto" });
                        const [FotoResponse] = await Promise.all([FotoUpload]);
                        updatedFoto.image = FotoResponse.secure_url;
                    }

                    if (image) updatedFoto.image = image;
                   

                    await updatedFoto.save();

                    res.status(200).json(updatedFoto); 
                } else {
                    res.status(404).json({ message: "Güncellenmek istenen Foto bulunamadı." });
                }
            } catch (error) {
                res.status(500).json({ message: error.message });
            }
        });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}


export const deleteFoto=async(req,res)=>{
    try {
        const {id}=req.params
        const foto=await Foto.findByIdAndDelete(id)
        res.status(200).json("deleted")
    } catch (error) {
        res.status(500).json({messsage:error})
    }
}


export const getByIdFoto=async(req,res)=>{
    try {
        const {id}=req.params
        const foto=await Foto.findById(id)
        res.json(foto)
    } catch (error) {
        res.status(500).json({messsage:error})
    }
}