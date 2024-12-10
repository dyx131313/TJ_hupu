const express = require("express");
const router = express.Router();
const Post = require("./models/post"); // 确保正确导入 Post 模型
const User = require("./models/user"); // 确保正确导入 User 模型
const Rate = require("./models/rate"); // 确保正确导入 Rate 模型

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

router.get("/posts/:postId/rates", (req, res) => {
  console.log("backend Fetching rates for post:", req.params);
  const { postId } = req.params;
  Rate.find({ parent_id: postId })
    .then((rates) => {
      res.send(rates);
    })
    .catch((err) => {
      console.error("Error fetching rates:", err);
      res.status(500).send("Internal Server Error");
    });
});

router.post("/posts/post", (req, res) => {
  const newPost = new Post({
    title: req.body.title,
    content: req.body.content,
    creator_id: req.user ? req.user._id : null,
    creator_name: req.user ? req.user.name : "Anonymous",
    rating: req.body.rating || 0,
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

router.post("/posts/:postId/rate", (req, res) => {
  const { postId } = req.params;
  const newRate = new Rate({
    content: req.body.content,
    creator_id: req.user ? req.user._id : null,
    creator_name: req.user ? req.user.name : "Anonymous",
    rating: req.body.rating,
    parent_id: postId,
  });

  newRate
    .save()
    .then((rate) => {
      res.send(rate);
    })
    .catch((err) => {
      console.error("Error saving rate:", err);
      res.status(500).send("Internal Server Error");
    });
});

router.post("/signup", (req, res) => {
  const { name, email, password } = req.body;

  const newUser = new User({
    name,
    email,
    password,
  });

  newUser
    .save()
    .then((user) => {
      res.send(user);
    })
    .catch((err) => {
      console.error("Error saving user:", err);
      res.status(500).send("Internal Server Error");
    });
});

router.post("/login", (req, res) => {
  const { emailOrName, password } = req.body;

  User.findOne({
    $or: [{ email: emailOrName }, { name: emailOrName }],
  })
    .then((user) => {
      if (!user || user.password !== password) {
        return res.status(401).send("Invalid email, username or password");
      }

      // 将用户信息存储在会话中
      req.session.user = user;
      console.log("User logged in:", user);
      res.send({ msg: "Login successful" });
    })
    .catch((err) => {
      console.error("Error finding user:", err);
      res.status(500).send("Internal Server Error");
    });
});

router.post("/logout", (req, res) => {
  req.session.destroy((err) => {
    if (err) {
      return res.status(500).send("Error logging out");
    }
    res.send({ msg: "Logout successful" });
  });
});

router.get("/posts/:postId", (req, res) => {
  const { postId } = req.params;
  Post.findById(postId)
    .then((post) => {
      if (!post) {
        return res.status(404).send("Post not found");
      }
      res.send(post);
    })
    .catch((err) => {
      console.error("Error fetching post:", err);
      res.status(500).send("Internal Server Error");
    });
});

// 验证用户是否已登录的中间件
const isAuthenticated = (req, res, next) => {
  if (req.session.user) {
    next();
  } else {
    res.status(401).send("Unauthorized");
  }
};

// 受保护的路由示例
router.get("/protected", isAuthenticated, (req, res) => {
  res.send("This is a protected route");
});

router.get("/whoami", (req, res) => {
  res.send(req.session.user || {});
});

// anything else falls to this "not found" case
router.all("*", (req, res) => {
  console.log(`API route not found: ${req.method} ${req.url}`);
  res.status(404).send({ msg: "API route not found" });
});

module.exports = router;
