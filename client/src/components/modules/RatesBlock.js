import React from "react";
import SingleRate from "./SingleRate.js";
import "./RatesBlock.css";

const RatesBlock = (props) => {
  console.log("props.rates", props.rates);
  return (
    <div className="Card-rateSection">
      <div className="post-rates">
        {props.rates.map((rate) => (
          <SingleRate
            creator_name={rate.creator_name}
            content={rate.content}
            rating={rate.rating}
          />
        ))}
      </div>
    </div>
  );
};

export default RatesBlock;
