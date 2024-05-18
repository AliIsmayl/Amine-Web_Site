import mongoose from 'mongoose';
const { Schema } = mongoose;

const RehberlikSchema = new Schema({
    
 image:{type:String,require:true},
  name: {type:String,require:true},   
  position: {type:String}   

},{timestamps:true});

const Rehberlik = mongoose.model('AminaRehberlik', RehberlikSchema);

export default Rehberlik