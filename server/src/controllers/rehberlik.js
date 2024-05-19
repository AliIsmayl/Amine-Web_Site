import Rehberlik from "../models/rehberlik.js";
import upload from "../middleware/multer.js";
import cloudinary from "../utils/cloudinary.js";


export const createRehberlik=async(req,res)=>{
    try {
        upload.fields([{name:'image'}])(req, res, async function (err) {
          if (err) {
            console.error(err);
            return res.status(400).json({ message: err.message });
          }
          const { image,title,position } = req.body;
  
            const RehberlikResult = req.files["image"][0];
            const RehberlikUpload = cloudinary.uploader.upload(RehberlikResult.path, { folder: "Rehberlik" });

            const [RehberlikResponse] = await Promise.all([RehberlikUpload]);
    
            const newRehberlik = new Rehberlik({
            
              image: RehberlikResponse.secure_url,
              title:title,
              position:position
            });
    
            await newRehberlik.save();
    
            res.status(200).send("Create New Rehberlik");
        });
      } catch (error) {
        console.error(error);
        res.status(500).json({ message: error.message });
      }
}


export const getAllRehberlik=async(req,res)=>{
    try {
        const rehberlik=await Rehberlik.find({})
        res.json(rehberlik)
    } catch (error) {
        res.status(500).json({messsage:error})
    }
}

export const updateRehberlik=async(req,res)=>{
    try {
        upload.fields([{ name: 'image' }])(req, res, async function (err) {
            if (err) {
                console.error(err);
                return res.status(400).json({ message: err.message });
            }
            try {
                const updatedRehberlik = await Rehberlik.findByIdAndUpdate(req.params.id, {...req.body}, { new: true });

                if (updatedRehberlik) {
                    const { image } = req.body;

                    if (req.files["image"]) {
                        const RehberlikResult = req.files["image"][0];
                        const RehberlikUpload = cloudinary.uploader.upload(RehberlikResult.path, { folder: "Rehberlik" });
                        const [RehberlikResponse] = await Promise.all([RehberlikUpload]);
                        updatedRehberlik.image = RehberlikResponse.secure_url;
                    }

                    if (image) updatedRehberlik.image = image;
                   

                    await updatedRehberlik.save();

                    res.status(200).json(updatedRehberlik); 
                } else {
                    res.status(404).json({ message: "Güncellenmek istenen Rehberlik bulunamadı." });
                }
            } catch (error) {
                res.status(500).json({ message: error.message });
            }
        });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}


export const deleteRehberlik=async(req,res)=>{
    try {
        const {id}=req.params
        const rehberlik=await Rehberlik.findByIdAndDelete(id)
        res.status(200).json("deleted")
    } catch (error) {
        res.status(500).json({messsage:error})
    }
}


export const getByIdRehberlik=async(req,res)=>{
    try {
        const {id}=req.params
        const rehberlik=await Rehberlik.findById(id)
        res.json(rehberlik)
    } catch (error) {
        res.status(500).json({messsage:error})
    }
}