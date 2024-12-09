const mongoose = require("mongoose");

const postSchema = new mongoose.Schema({
  title: String,
  content: String,
  creator_id: String,
  creator_name: String,
  rating: Number,
  rates: [
    {
      creator_id: String,
      creator_name: String,
      content: String,
    },
  ],
});

module.exports = mongoose.model("post", postSchema);
