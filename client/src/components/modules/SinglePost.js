import React from "react";
import { Link } from "react-router-dom";
import "./SinglePost.css";

/**
 * Rate is a component that renders creator and content of a post
 *
 * Proptypes
 * @param {string} _id of the Post
 * @param {string} creator_name
 * @param {string} creator_id
 * @param {string} content of the Post
 */
const SinglePost = (props) => {
  return (
    <div className="SinglePost-container">
      <div className="SinglePost-Post">
        {/* <Link to={`/profile/${props.creator_id}`} className="u-link u-bold"> */}
        <p className="SinglePost-PostCreator">made by {props.creator_name}</p>
        {/* </Link> */}
        <p className="SinglePost-PostContent">{props.content}</p>
      </div>
      <div className="SinglePost-rating">
        <p>{props.rating}</p>
        <p>{props.comments.length}</p>
      </div>
    </div>
  );
};

export default SinglePost;
