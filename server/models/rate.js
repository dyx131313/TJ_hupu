const mongoose = require("mongoose");

const PostSchema = new mongoose.Schema({
  rating: Number,
  creator_id: String,
  creator_name: String,
  content: String,
  parent_id: String,
});

module.exports = mongoose.model("rate", PostSchema);
