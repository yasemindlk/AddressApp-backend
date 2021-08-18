import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  first_name: { type: String, default: null },
  last_name: { type: String, default: null },
  email: { type: String, unique: true },
  password: { type: String },
  token: { type: String },
  address: {
    title: { type: String },
    lat: { type: Number },
    lng: { type: Number },
  },
});

const User = mongoose.model("user", userSchema);

export default User;
