const express = require("express");
const router = express.Router();
const Post = require("./models/post"); // 确保正确导入 Post 模型

router.get("/posts", (req, res) => {
  Post.find({})
    .then((posts) => {
      res.send(posts);
    })
    .catch((err) => {
      console.error("Error fetching posts:", err);
      res.status(500).send("Internal Server Error");
    });
});

router.post("/post", (req, res) => {
  const newPost = new Post({
    title: req.body.title,
    content: req.body.content,
    creator_id: req.user ? req.user._id : null,
    creator_name: req.user ? req.user.name : "Anonymous",
    rating: req.body.rating || 0,
    rates: [],
  });

  console.log("Creating new post:", newPost);

  newPost
    .save()
    .then((post) => {
      res.send(post);
    })
    .catch((err) => {
      console.error("Error saving post:", err);
      res.status(500).send("Internal Server Error");
    });
});

// anything else falls to this "not found" case
router.all("*", (req, res) => {
  console.log(`API route not found: ${req.method} ${req.url}`);
  res.status(404).send({ msg: "API route not found" });
});

module.exports = router;
