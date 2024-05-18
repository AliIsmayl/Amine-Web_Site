import mongoose from 'mongoose';
const { Schema } = mongoose;

const KomitetSchema = new Schema({
    
 image:{type:String,require:true},
  name: {type:String,require:true},   
  position: {type:String}   

},{timestamps:true});

const Komitet = mongoose.model('AminaKomitet', KomitetSchema);

export default Komitet