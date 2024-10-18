import mongoose from "mongoose";
const { Schema } = mongoose;

const AdministrativeSchema = new Schema(
  {
    image: { type: String },
    title: { type: String },
    position: { type: String },
  },
  { timestamps: true }
);

const Administrative = mongoose.model(
  "AminaAdministrative",
  AdministrativeSchema
);

export default Administrative;
