import mongoose from 'mongoose';
const { Schema } = mongoose;

const HakimSchema = new Schema({
    
 image:{type:String},
 title: {type:String},   
  position: {type:String}   

},{timestamps:true});

const Hakim = mongoose.model('AminaHakim', HakimSchema);

export default Hakim