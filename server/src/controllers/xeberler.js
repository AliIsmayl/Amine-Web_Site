import Xeberler from "../models/xeberler.js";
import upload from "../middleware/multer.js";
import cloudinary from "../utils/cloudinary.js";


export const createXeberler=async(req,res)=>{
    try {
        upload.fields([{name:'image'}])(req, res, async function (err) {
          if (err) {
            console.error(err);
            return res.status(400).json({ message: err.message });
          }
          const { image,title,content,name} = req.body;
  
            const XeberlerResult = req.files["image"][0];
            const XeberlerUpload = cloudinary.uploader.upload(XeberlerResult.path, { folder: "Xeberler" });

            const [XeberlerResponse] = await Promise.all([XeberlerUpload]);
    
            const newXeberler = new Xeberler({
            
              image: XeberlerResponse.secure_url,
              title:title,
              content:content,
              name:name
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

export const updateXeberler=async(req,res)=>{
    try {
        upload.fields([{ name: 'image' }])(req, res, async function (err) {
            if (err) {
                console.error(err);
                return res.status(400).json({ message: err.message });
            }
            try {
                const updatedXeberler = await Xeberler.findByIdAndUpdate(req.params.id, {...req.body}, { new: true });

                if (updatedXeberler) {
                    const { image } = req.body;

                    if (req.files["image"]) {
                        const XeberlerResult = req.files["image"][0];
                        const XeberlerUpload = cloudinary.uploader.upload(XeberlerResult.path, { folder: "Xeberler" });
                        const [XeberlerResponse] = await Promise.all([XeberlerUpload]);
                        updatedXeberler.image = XeberlerResponse.secure_url;
                    }

                    if (image) updatedXeberler.image = image;
                   

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