import React from "react";
import SingleRate from "./SingleRate.js";
import { NewComment } from "./NewPostInput.js";

/**
 * @typedef ContentObject
 * @property {string} _id of post/rate
 * @property {string} creator_name
 * @property {string} content of the post/rate
 */

/**
 * Component that holds all the rates for a post
 *
 * Proptypes
 * @param {ContentObject[]} rates
 * @param {ContentObject} post
 */
const RatesBlock = (props) => {
  return (
    <div className="Card-rateSection">
      <div className="post-rates">
        {props.rates.map((rate) => (
          <SingleRate
            key={`SingleRate_${rate._id}`}
            _id={rate._id}
            creator_name={rate.creator_name}
            creator_id={rate.creator_id}
            content={rate.content}
          />
        ))}
        {/* {props.userId && <NewRate storyId={props.story._id} addNewRate={props.addNewRate} />} */}
      </div>
    </div>
  );
};

export default RatesBlock;
