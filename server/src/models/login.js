import mongoose, { Schema } from "mongoose";

const UserSchema = new Schema(
  {
    username: {
      type: String,
      minLength: [2, "username must be minimum 2 character"],
      maxLength: [15, "username must be maximum 15 character"],
    },
    password: { type: String },
    isAdmin: { type: Boolean, default: false },
    
  },
  { timestamps: true }
);

export const Users = mongoose.model("Users", UserSchema);
