import React, { useState, useEffect } from "react";
import Card from "../modules/Card.js";
import { NewPost } from "../modules/NewPostInput.js";

import { get, post } from "../../utilities";

// const test_Post = {
//   _id: "123",
//   creator_name: "test",
//   creator_id: "123",
//   content: "I am allergic to cats",
//   rating: 10.0,
//   rates: [
//     {
//       _id: "123",
//       creator_name: "test",
//       creator_id: "123",
//       content: "I am allergic to cats",
//     },
//   ],
// };

const Feed = (props) => {
  const [Posts, setPosts] = useState([]);

  const addNewPost = (PostObj) => {
    setPosts([PostObj].concat(Posts));
  };
  // called when the "Feed" component "mounts", i.e.
  // when it shows up on screen
  useEffect(() => {
    console.log("Feed mounted");
    get("/api/posts").then((PostObjs) => {
      let reversedPostObjs = PostObjs.reverse();
      setPosts(reversedPostObjs);
      // addNewPost(test_Post);
    });
  }, []);

  // this gets called when the user pushes "Submit", so their
  // post gets added to the screen right away

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
      {<NewPost addNewPost={addNewPost} />}
      {PostsList}
    </>
  );
};

export default Feed;
