import mongoose from 'mongoose';
const { Schema } = mongoose;

const MesqciSchema = new Schema({
    
 image:{type:String},
  name: {type:String},   
  position: {type:String}   

},{timestamps:true});

const Mesqci = mongoose.model('AminaMesqci', MesqciSchema);

export default Mesqci