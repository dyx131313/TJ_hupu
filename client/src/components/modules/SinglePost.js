import React, { useState, useEffect } from "react";
import "./SinglePost.css";
// import { Link } from "react-router-dom";

const SinglePost = (props) => {
  const [averageRating, setAverageRating] = useState("N/A");
  const [totRates, setTotRates] = useState(0);

  useEffect(() => {
    if (props.post && props.post.tot_rates > 0) {
      setAverageRating((props.post.tot_rating / props.post.tot_rates).toFixed(1));
    } else {
      setAverageRating("N/A");
    }
    if (props.post) {
      setTotRates(props.post.tot_rates);
    }
  }, [props.post]);

  if (!props.post) {
    return <div>加载中...</div>;
  }
  // console.log("haha SinglePost", props.post.creator_name);
  return (
    // <div></div>
    <div className="SinglePost">
      <div className="Card-post">
        <div className="SinglePost-Post">
          {/* <Link to={`/profile/${props.creator_id}`} className="u-link u-bold"> */}
          <p className="SinglePost-PostCreator">made by {props.post.creator_name}</p>
          {/* </Link> */}
          <p className="SinglePost-PostContent">{props.post.content}</p>
        </div>
        <div className="SinglePost-rate">
          <p>Rating: {averageRating}</p>
          <p>Rates: {totRates}</p>
        </div>
      </div>
    </div>
  );
};

export default SinglePost;
