import React from "react";
import { Link } from "react-router-dom";

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
    <div className="Card-Post">
      {/* <Link to={`/profile/${props.creator_id}`} className="u-link u-bold"> */}
      <p className="Card-PostCreator">made by {props.creator_name}</p>
      {/* </Link> */}
      <p className="Card-PostContent">{props.content}</p>
    </div>
  );
};

export default SinglePost;
