import mongoose from 'mongoose';
const { Schema } = mongoose;

const HakimSchema = new Schema({
    
 image:{type:String,require:true},
  name: {type:String,require:true},   
  position: {type:String}   

},{timestamps:true});

const Hakim = mongoose.model('AminaHakim', HakimSchema);

export default Hakim