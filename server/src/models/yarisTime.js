import mongoose from 'mongoose';
const { Schema } = mongoose;

const YarisTimeSchema = new Schema({
    
 image:{type:String},
 title: {type:String},   
  time: {type:String}   

},{timestamps:true});

const YarisTime = mongoose.model('AminaYarisTime', YarisTimeSchema);

export default YarisTime