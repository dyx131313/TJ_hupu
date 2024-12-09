import React, { useState, useEffect } from "react";

import "./DetailPost.css";
import SinglePost from "./SinglePost";
import RatesBlock from "./RatesBlock";

const DetailPost = (props) => {
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

export default DetailPost;
