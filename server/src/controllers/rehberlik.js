import Rehberlik from "../models/rehberlik.js";

export const createRehberlik=async (req,res)=>{
try {
    const rehberlik=new Rehberlik({...req.body})
    await rehberlik.save()
    res.status(200).json(rehberlik)
} catch (error) {
    res.status(500).json({message:error.message})
}
}


export const getAllRehberlik=async (req,res)=>{
    try {
        const rehberlik=await Rehberlik.find({})
        res.json(rehberlik)
    } catch (error) {
        res.status(500).json({message:error.message})
    }
}

export const updateRehberlik=async(req,res)=>{
    try {
      const {id}=  req.params
      const rehberlik=await Rehberlik.findByIdAndUpdate(id,req.body)
      res.status(200).json("updated")
    } catch (error) {
        res.status(500).json({message:error.message}) 
    }
}

export const deleteRehberlik=async(req,res)=>{
    try {
      const {id}=  req.params
      const rehberlik=await Rehberlik.findByIdAndDelete(id)
      res.status(200).json("deleted")
    } catch (error) {
        res.status(500).json({message:error.message}) 
    }
}

export const getByIdRehberlik=async(req,res)=>{
    try {
      const {id}=  req.params
      const rehberlik=await Rehberlik.findById(id)
      res.json(rehberlik)
    } catch (error) {
        res.status(500).json({message:error.message}) 
    }
}

