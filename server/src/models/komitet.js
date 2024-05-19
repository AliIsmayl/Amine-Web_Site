import mongoose from 'mongoose';
const { Schema } = mongoose;

const KomitetSchema = new Schema({
    
 image:{type:String},
 title: {type:String},   
  position: {type:String}   

},{timestamps:true});

const Komitet = mongoose.model('AminaKomitet', KomitetSchema);

export default Komitet