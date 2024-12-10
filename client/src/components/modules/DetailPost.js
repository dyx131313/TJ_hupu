import React, { useState, useEffect } from "react";

import "./DetailPost.css";
import SinglePost from "./SinglePost";
import RatesBlock from "./RatesBlock";
import Rate from "./Rate";
import { get } from "../../utilities";

const DetailPost = (props) => {
  const post_id = props._id;
  const [rates, setRates] = useState([]);

  useEffect(() => {
    get(`/api/posts/${post_id}/rates`).then((RateObjs) => {
      if (Array.isArray(RateObjs)) {
        let reversedRateObjs = RateObjs.reverse();
        setRates(reversedRateObjs);
      } else {
        console.error("API response is not an array:", RateObjs);
      }
    });
  }, [props._id]);

  return (
    <div className="Card-container">
      <SinglePost
        _id={props._id}
        creator_name={props.creator_name}
        creator_id={props.creator_id}
        content={props.content}
        rating={props.rating}
        contents={props.contents}
        rates_length={rates.length}
      />
      <Rate
        onSubmit={(rate) => {
          props.addNewRate(rate);
        }}
      />
      <RatesBlock
        story={props}
        rates={rates}
        creator_id={props.creator_id}
        userId={props.userId}
        // addNewComment={addNewComment}
      />
    </div>
  );
};

export default DetailPost;
