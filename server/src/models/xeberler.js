import mongoose from 'mongoose';
const { Schema } = mongoose;

const XeberSchema = new Schema({
    
 image:{type:String},
  tittle: {type:String},   
  content: {type:String}   

},{timestamps:true});

const Xeber = mongoose.model('AminaXeber', XeberSchema);

export default Xeber