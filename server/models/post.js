const mongoose = require("mongoose");

const postSchema = new mongoose.Schema({
  title: String,
  content: String,
  creator_id: String,
  creator_name: String,
  tot_rating: Number,
  tot_rates: Number,
});

module.exports = mongoose.model("post", postSchema);
