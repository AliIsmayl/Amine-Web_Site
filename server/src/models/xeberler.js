import mongoose from 'mongoose';
const { Schema } = mongoose;

const XeberSchema = new Schema({
    
 image:{type:String,require:true},
  tittle: {type:String,require:true},   
  content: {type:String}   

},{timestamps:true});

const Xeber = mongoose.model('AminaXeber', XeberSchema);

export default Xeber