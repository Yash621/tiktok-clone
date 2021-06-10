import mongoose from "mongoose";

const tiktokSchema = mongoose.Schema({
  url: String,
  description: String,
  username: String,
  song: String,
  likes: String,
  comments: String,
  shares: String,
});

export default mongoose.model("tiktok", tiktokSchema);
