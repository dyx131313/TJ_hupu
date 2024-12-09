import React from "react";
import { Link } from "react-router-dom";

/**
 * Component to render a single rate
 *
 * Proptypes
 * @param {string} _id of rate
 * @param {string} creator_name
 * @param {string} creator_id
 * @param {string} content of the rate
 */
const SingleRate = (props) => {
  return (
    <div className="Card-rateBody">
      {/* <Link to={`/profile/${props.creator_id}`} className="u-link u-bold">
        {props.creator_name}
      </Link> */}
      <span>{" | " + props.content}</span>
    </div>
  );
};

export default SingleRate;
