import React, { useState, useEffect } from "react";

import "./DetailPost.css";
import SinglePost from "./SinglePost";
import RatesBlock from "./RatesBlock";
import Rate from "./Rate";
import { get } from "../../utilities";

const DetailPost = (props) => {
  const [rates, setRates] = useState([]);
  const [post, setPost] = useState(null);

  useEffect(() => {
    if (props.rates) {
      setRates(props.rates);
    }
    if (props.post) {
      setPost(props.post);
    }
  }, [props]);

  // console.log("rates", rates);
  return (
    <div className="Card-container">
      <SinglePost post={post} />
      <Rate
        onSubmit={(rate) => {
          props.addNewRate(rate);
        }}
      />
      <RatesBlock
        rates={rates}
        // addNewComment={addNewComment}
      />
    </div>
  );
};

export default DetailPost;
