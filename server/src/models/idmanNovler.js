import mongoose from 'mongoose';
const { Schema } = mongoose;

const IdmanNovleriSchema = new Schema({
    
  name: {type:String,unique:true,required:true},   
  tittle: {type:String,required:true},   
  content: {type:String},   
  Alt:[
    {
      name: {type:String,unique:true},   
      tittle: {type:String},   
      content: {type:String}, 
    }
  ]

},{timestamps:true});

const IdmanNovleri = mongoose.model('AminaIdmanNovleri', IdmanNovleriSchema);

export default IdmanNovleri