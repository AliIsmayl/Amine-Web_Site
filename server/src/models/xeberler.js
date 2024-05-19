import mongoose from 'mongoose';
const { Schema } = mongoose;

const XeberSchema = new Schema({
    
 image:{type:String},
 title: {type:String},   
  content: {type:String} ,
  name:{type:String,unique:true}  

},{timestamps:true});

const Xeber = mongoose.model('AminaXeber', XeberSchema);

export default Xeber