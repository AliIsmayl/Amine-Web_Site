import mongoose from 'mongoose';
const { Schema } = mongoose;

const FotoSchema = new Schema({
    
 image:{type:String,require:true}
    

},{timestamps:true});

const Foto = mongoose.model('AminaFoto', FotoSchema);

export default Foto