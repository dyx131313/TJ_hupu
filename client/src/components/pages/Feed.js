import React, { useState, useEffect } from "react";
import Card from "../modules/Card.js";
import { NewPost } from "../modules/NewPostInput.js";

import { get } from "../../utilities";

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
  const [Posts, setPosts] = useState([test_Post]);

  // called when the "Feed" component "mounts", i.e.
  // when it shows up on screen
  // useEffect(() => {
  //   document.title = "News Feed";
  //   get("/api/stories").then((storyObjs) => {
  //     let reversedStoryObjs = storyObjs.reverse();
  //     setStories(reversedStoryObjs);
  //   });
  // }, []);

  // this gets called when the user pushes "Submit", so their
  // post gets added to the screen right away
  const addNewPost = (PostObj) => {
    setPosts([PostObj].concat(Posts));
  };

  let PostsList = null;
  const hasPosts = Posts.length !== 0;
  if (hasPosts) {
    PostsList = Posts.map((PostObj) => (
      <Card
        key={`Card_${PostObj._id}`}
        _id={PostObj._id}
        creator_name={PostObj.creator_name}
        creator_id={PostObj.creator_id}
        userId={props.userId}
        content={PostObj.content}
        rating={PostObj.rating}
        rates={PostObj.rates}
      />
    ));
  } else {
    PostsList = <div>No stories!</div>;
  }
  return (
    <>
      {props.userId && <NewPost addNewPost={addNewPost} />}
      {PostsList}
    </>
  );
};

export default Feed;
