import React, { useState, useEffect } from "react";

import "./DetailPost.css";

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
  return <></>;
};

export default DetailPost;
