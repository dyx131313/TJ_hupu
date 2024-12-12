const mongoose = require("mongoose");

const postSchema = new mongoose.Schema({
  title: String,
  content: String,
  creator_id: String,
  creator_name: String,
  tot_rating: Number,
  tot_rates: Number,
  star_ratings: {
    type: [
      {
        stars: Number,
        count: Number,
      },
    ],
    default: [
      { stars: 1, count: 0 },
      { stars: 2, count: 0 },
      { stars: 3, count: 0 },
      { stars: 4, count: 0 },
      { stars: 5, count: 0 },
    ],
  },
});

module.exports = mongoose.model("post", postSchema);
