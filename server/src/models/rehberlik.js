import mongoose from 'mongoose';
const { Schema } = mongoose;

const RehberlikSchema = new Schema({
    
 image:{type:String},
  title: {type:String},   
  position: {type:String}   

},{timestamps:true});

const Rehberlik = mongoose.model('AminaRehberlik', RehberlikSchema);

export default Rehberlik