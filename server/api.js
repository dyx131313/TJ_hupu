const express = require("express");
const router = express.Router();
const Post = require("./models/post"); // 确保正确导入 Post 模型
const User = require("./models/user"); // 确保正确导入 User 模型
const Rate = require("./models/rate"); // 确保正确导入 Rate 模型

// 以下是 API 路由
router.get("/posts", (req, res) => {
  if (req.query.ids) {
    const ids = req.query.ids.split(",");
    Post.find({
      _id: { $in: ids },
    })
      .then((posts) => {
        res.send(posts);
      })
      .catch((err) => {
        console.error("Error fetching posts:", err);
        res.status(500).send("Internal Server Error");
      });
  } else {
    Post.find({})
      .then((posts) => {
        res.send(posts);
      })
      .catch((err) => {
        console.error("Error fetching posts:", err);
        res.status(500).send("Internal Server Error");
      });
  }
});

router.get("/posts/:postId/rates", (req, res) => {
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
    creator_id: req.body.creator_id,
    creator_name: req.body.creator_name,
    tot_rates: 0,
    tot_rating: 0,
    star_ratings: [
      { stars: 1, count: 0 },
      { stars: 2, count: 0 },
      { stars: 3, count: 0 },
      { stars: 4, count: 0 },
      { stars: 5, count: 0 },
    ],
  });

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
    creator_id: req.body.creator_id,
    creator_name: req.body.creator_name,
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

router.post("/posts/:postId/update", async (req, res) => {
  const { postId } = req.params;
  Post.findById(postId)
    .then((post) => {
      let past_rating = post.tot_rating;
      let past_rates = post.tot_rates;
      post.tot_rates = past_rates + 1;
      post.tot_rating = past_rating + req.body.rating;
      let past_star_ratings = post.star_ratings;
      post.star_ratings = past_star_ratings.map((star_rating) => {
        if (star_rating.stars * 2 === req.body.rating) {
          star_rating.count += 1;
        }
        return star_rating;
      });
      post
        .save()
        .then((post) => {
          res.send(post);
        })
        .catch((err) => {
          console.error("Error updating post:", err);
          res.status(500).send("Internal Server Error");
        });
    })
    .catch((err) => {
      console.error("Error finding post:", err);
      res.status(500).send("Internal Server Error");
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

router.get("/users/:userId", (req, res) => {
  const { userId } = req.params;
  User.findById(userId)
    .then((user) => {
      if (!user) {
        return res.status(404).send("User not found");
      }
      res.send(user);
    })
    .catch((err) => {
      console.error("Error fetching user:", err);
      res.status(500).send("Internal Server Error");
    });
});

router.get("/users/:userId/posts", (req, res) => {
  const { userId } = req.params;
  Post.find({ creator_id: userId })
    .then((posts) => {
      res.send(posts);
    })
    .catch((err) => {
      console.error("Error fetching posts:", err);
      res.status(500).send("Internal Server Error");
    });
});

const selectPostbyrateid = (rates) => {
  return Promise.all(
    rates.map((rate) => {
      return Post.findById(rate.parent_id);
    })
  );
};

router.get("/users/:userId/rates", (req, res) => {
  const { userId } = req.params;
  Rate.find({ creator_id: userId })
    .then((rates) => {
      res.send(rates);
    })
    .catch((err) => {
      console.error("Error fetching rates:", err);
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
