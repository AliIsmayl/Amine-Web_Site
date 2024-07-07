import Medals from "../models/medal.js";


export const createMedal=async(req,res)=>{
    try {
        const medal=new Medals({
          ...req.body
        })
        await medal.save()
        res.status(200).json("created")
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}


export const getMedal=async(req,res)=>{
    try {
        const medal=await Medals.find({})
        res.json(medal)
    } catch (error) {
        res.status(500).json({messsage:error})
    }
}

export const updateMedal=async(req,res)=>{
    try {
        const {id}=req.params
        const medal=await Medals.findByIdAndUpdate(id,req.body)
        res.status(200).json("updated")
    } catch (error) {
        res.status(500).json({messsage:error})
    }
}


export const deleteMedal=async(req,res)=>{
    try {
        const {id}=req.params
        const medal=await Medals.findByIdAndDelete(id)
        res.status(200).json("deleted")
    } catch (error) {
        res.status(500).json({messsage:error})
    }
}


export const getByIdMedal=async(req,res)=>{
    try {
        const {id}=req.params
        const medal=await Medals.findById(id)
        res.json(medal)
    } catch (error) {
        res.status(500).json({messsage:error})
    }
}