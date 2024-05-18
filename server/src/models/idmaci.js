import mongoose from 'mongoose';
const { Schema } = mongoose;

const İdmanciSchema = new Schema({
    
 image:{type:String,require:true},
  name: {type:String,require:true},   
  position: {type:String}   

},{timestamps:true});

const İdmanci = mongoose.model('Aminaİdmanci', İdmanciSchema);

export default İdmanci