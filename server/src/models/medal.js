import mongoose from 'mongoose';
const { Schema } = mongoose;

const MedalSchema = new Schema({
    
  qold:{type:Number},
  silver:{type:Number},   
  bronz:{type:Number} 

},{timestamps:true});

const Medals = mongoose.model('AminaMedal', MedalSchema);

export default Medals