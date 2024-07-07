import mongoose from 'mongoose';
const { Schema } = mongoose;

const VideoSchema = new Schema({
    
 video:{type:String}
    

},{timestamps:true});

const Video = mongoose.model('AminaVideo', VideoSchema);

export default Video