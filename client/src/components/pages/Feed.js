import React, { useState, useEffect } from "react";
import Card from "../modules/Card.js";
import { NewPost } from "../modules/NewPostInput.js";
import { get } from "../../utilities";
import SinglePost from "../modules/SinglePost.js";
import "./Feed.css";
const test_Post = {
  _id: "123",
  creator_name: "test",
  creator_id: "123",
  content: "I am allergic to cats",
  rating: 10.0,
  rates: [
    {
      _id: "123",
      creator_name: "test",
      creator_id: "123",
      content: "I am allergic to cats",
    },
  ],
};

const Feed = (props) => {
  const [Posts, setPosts] = useState([]);

  const addNewPost = (PostObj) => {
    setPosts([PostObj].concat(Posts));
  };

  useEffect(() => {
    get("/api/posts")
      .then((PostObjs) => {
        if (Array.isArray(PostObjs)) {
          let reversedPostObjs = PostObjs.reverse();
          setPosts(reversedPostObjs);
        } else {
          console.error("API response is not an array:", PostObjs);
        }
      })
      .catch((err) => {
        console.error("Error fetching posts:", err);
      });
  }, []);

  const PostsList = Posts.map((post) => <Card post={post} />);

  return <div className="PostList">{PostsList}</div>;
};

export default Feed;
