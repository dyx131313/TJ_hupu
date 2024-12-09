import React, { useState, useEffect } from "react";
import SinglePost from "./SinglePost.js";
// import CommentsBlock from "./CommentsBlock.js";
import RatesBlock from "./RatesBlock.js";
import { get } from "../../utilities";

import "./Card.css";

/**
 * Card is a component for displaying content like posts
 *
 * Proptypes
 * @param {string} _id of the Post
 * @param {string} creator_name
 * @param {string} creator_id
 * @param {string} content of the Post
 * @param {string} rating of the Post
 * @param {number} contents of the Post
 */
const Card = (props) => {
  // const [comments, setComments] = useState([]);

  // useEffect(() => {
  //   get("/api/comment", { parent: props._id }).then((comments) => {
  //     setComments(comments);
  //   });
  // }, []);

  // this gets called when the user pushes "Submit", so their
  // post gets added to the screen right away
  // const addNewComment = (commentObj) => {
  //   setComments(comments.concat([commentObj]));
  // };

  return (
    <div className="Card-container">
      <SinglePost
        _id={props._id}
        creator_name={props.creator_name}
        creator_id={props.creator_id}
        content={props.content}
        rating={props.rating}
        contents={props.contents}
        rates_length={props.rates.length}
      />
      <RatesBlock
        story={props}
        rates={props.rates}
        creator_id={props.creator_id}
        userId={props.userId}
        // addNewComment={addNewComment}
      />
    </div>
  );
};

export default Card;
