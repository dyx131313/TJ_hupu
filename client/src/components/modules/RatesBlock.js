import React from "react";
import SingleRate from "./SingleRate.js";
import "./RatesBlock.css";

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
