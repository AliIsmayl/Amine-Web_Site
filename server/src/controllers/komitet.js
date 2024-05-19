import Komitet from "../models/komitet.js";
import upload from "../middleware/multer.js";
import cloudinary from "../utils/cloudinary.js";


export const createKomitet=async(req,res)=>{
    try {
        upload.fields([{name:'image'}])(req, res, async function (err) {
          if (err) {
            console.error(err);
            return res.status(400).json({ message: err.message });
          }
          const { image,title,position } = req.body;
  
            const KomitetResult = req.files["image"][0];
            const KomitetUpload = cloudinary.uploader.upload(KomitetResult.path, { folder: "Komitet" });

            const [KomitetResponse] = await Promise.all([KomitetUpload]);
    
            const newKomitet = new Komitet({
            
              image: KomitetResponse.secure_url,
              title:title,
              position:position
            });
    
            await newKomitet.save();
    
            res.status(200).send("Create New Komitet");
        });
      } catch (error) {
        console.error(error);
        res.status(500).json({ message: error.message });
      }
}


export const getAllKomitet=async(req,res)=>{
    try {
        const komitet=await Komitet.find({})
        res.json(komitet)
    } catch (error) {
        res.status(500).json({messsage:error})
    }
}

export const updateKomitet=async(req,res)=>{
    try {
        upload.fields([{ name: 'image' }])(req, res, async function (err) {
            if (err) {
                console.error(err);
                return res.status(400).json({ message: err.message });
            }
            try {
                const updatedKomitet = await Komitet.findByIdAndUpdate(req.params.id, {...req.body}, { new: true });

                if (updatedKomitet) {
                    const { image } = req.body;

                    if (req.files["image"]) {
                        const KomitetResult = req.files["image"][0];
                        const KomitetUpload = cloudinary.uploader.upload(KomitetResult.path, { folder: "Komitet" });
                        const [KomitetResponse] = await Promise.all([KomitetUpload]);
                        updatedKomitet.image = KomitetResponse.secure_url;
                    }

                    if (image) updatedKomitet.image = image;
                   

                    await updatedKomitet.save();

                    res.status(200).json(updatedKomitet); 
                } else {
                    res.status(404).json({ message: "Güncellenmek istenen Komitet bulunamadı." });
                }
            } catch (error) {
                res.status(500).json({ message: error.message });
            }
        });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}


export const deleteKomitet=async(req,res)=>{
    try {
        const {id}=req.params
        const komitet=await Komitet.findByIdAndDelete(id)
        res.status(200).json("deleted")
    } catch (error) {
        res.status(500).json({messsage:error})
    }
}


export const getByIdKomitet=async(req,res)=>{
    try {
        const {id}=req.params
        const komitet=await Komitet.findById(id)
        res.json(komitet)
    } catch (error) {
        res.status(500).json({messsage:error})
    }
}