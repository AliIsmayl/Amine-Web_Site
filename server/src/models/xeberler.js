import mongoose from 'mongoose';
const { Schema } = mongoose;

const XeberSchema = new Schema({
    image1: { type: String },
    image2: { type: String },
    image3: { type: String },
    image4: { type: String },
    title: { type: String },
    content: { type: String },
    name: { type: String, unique: true }
}, { timestamps: true });

const Xeber = mongoose.model('AminaXeber', XeberSchema);

export default Xeber;
