import mongoose from 'mongoose';
const { Schema } = mongoose;

const MesqciSchema = new Schema({
    
 image:{type:String,require:true},
  name: {type:String,require:true},   
  position: {type:String}   

},{timestamps:true});

const Mesqci = mongoose.model('AminaMesqci', MesqciSchema);

export default Mesqci