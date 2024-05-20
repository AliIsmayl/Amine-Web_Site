import mongoose from 'mongoose';
const { Schema } = mongoose;

const İdmanciSchema = new Schema({
    
 image:{type:String},
 title: {type:String},   
  position: {type:String}   

},{timestamps:true});

const İdmanci = mongoose.model('Aminaİdmanci', İdmanciSchema);

export default İdmanci