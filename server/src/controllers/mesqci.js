import Mesqci from "../models/mesqci.js";
import upload from "../middleware/multer.js";
import cloudinary from "../utils/cloudinary.js";


export const createMesqci=async(req,res)=>{
    try {
        upload.fields([{name:'image'}])(req, res, async function (err) {
          if (err) {
            console.error(err);
            return res.status(400).json({ message: err.message });
          }
          const { image,title,position } = req.body;
  
            const MesqciResult = req.files["image"][0];
            const MesqciUpload = cloudinary.uploader.upload(MesqciResult.path, { folder: "Mesqci" });

            const [MesqciResponse] = await Promise.all([MesqciUpload]);
    
            const newMesqci = new Mesqci({
            
              image: MesqciResponse.secure_url,
              title:title,
              position:position
            });

            await newMesqci.save();
    
            res.status(200).send("Create New Mesqci");
        });
      } catch (error) {
        console.error(error);
        res.status(500).json({ message: error.message });
      }
}


export const getAllMesqci=async(req,res)=>{
    try {
        const mesqci=await Mesqci.find({})
        res.json(mesqci)
    } catch (error) {
        res.status(500).json({messsage:error})
    }
}

export const updateMesqci=async(req,res)=>{
    try {
        upload.fields([{ name: 'image' }])(req, res, async function (err) {
            if (err) {
                console.error(err);
                return res.status(400).json({ message: err.message });
            }
            try {
                const updatedMesqci = await Mesqci.findByIdAndUpdate(req.params.id, {...req.body}, { new: true });

                if (updatedMesqci) {
                    const { image } = req.body;

                    if (req.files["image"]) {
                        const MesqciResult = req.files["image"][0];
                        const MesqciUpload = cloudinary.uploader.upload(MesqciResult.path, { folder: "Mesqci" });
                        const [MesqciResponse] = await Promise.all([MesqciUpload]);
                        updatedMesqci.image = MesqciResponse.secure_url;
                    }

                    if (image) updatedMesqci.image = image;
                   

                    await updatedMesqci.save();

                    res.status(200).json(updatedMesqci); 
                } else {
                    res.status(404).json({ message: "Güncellenmek istenen Mesqci bulunamadı." });
                }
            } catch (error) {
                res.status(500).json({ message: error.message });
            }
        });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}


export const deleteMesqci=async(req,res)=>{
    try {
        const {id}=req.params
        const mesqci=await Mesqci.findByIdAndDelete(id)
        res.status(200).json("deleted")
    } catch (error) {
        res.status(500).json({messsage:error})
    }
}


export const getByIdMesqci=async(req,res)=>{
    try {
        const {id}=req.params
        const mesqci=await Mesqci.findById(id)
        res.json(mesqci)
    } catch (error) {
        res.status(500).json({messsage:error})
    }
}