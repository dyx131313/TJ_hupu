import React, { useState, useEffect } from "react";
import { get } from "../../utilities";
import SinglePost from "../modules/SinglePost";
import { NewPost } from "../modules/NewPostInput";

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

  const PostsList = Posts.map((post) => (
    <SinglePost
      key={post._id}
      _id={post._id}
      creator_name={post.creator_name}
      creator_id={post.creator_id}
      content={post.content}
      rating={post.rating}
      rates_length={post.rates.length}
      hot_rate={post.hot_rate}
    />
  ));

  return (
    <>
      <NewPost addNewPost={addNewPost} />
      {PostsList}
    </>
  );
};

export default Feed;
