import React, { useState, useEffect, use } from "react";
import "./SinglePost.css";

const SinglePost = (props) => {
  const [averageRating, setAverageRating] = useState("N/A");
  const [totRates, setTotRates] = useState(0);
  const [starRatings, setStarRatings] = useState([]);

  useEffect(() => {
    if (props.post && props.post.tot_rates > 0) {
      setAverageRating((props.post.tot_rating / props.post.tot_rates).toFixed(1));
    } else {
      setAverageRating("N/A");
    }
    if (props.post) {
      setTotRates(props.post.tot_rates);
    }
    if (props.post) {
      setStarRatings(props.post.star_ratings);
    }
  }, [props.post]);

  if (!props.post) {
    return <div>加载中...</div>;
  }

  const getStarRatingWidth = (count) => {
    return (count / totRates) * 100 + "%";
  };

  return (
    <>
      <div className="SinglePost">
        <div className="SinglePost-top">
          <div className="SinglePost-Post">
            <p className="SinglePost-PostTitle">{props.post.title}</p>
            <p className="SinglePost-PostCreator">{props.post.creator_name}</p>
          </div>
          <div className="SinglePost-rate">
            <div className="SinglePost-averageRating">{averageRating}</div>
            <div className="SinglePost-totalRates">共 {totRates} 条评论</div>
          </div>
        </div>
        {props.whether_detail ? (
          <div className="SinglePost-bottom">
            <div className="SinglePost-PostContent">{props.post.content}</div>
            <div className="SinglePost-starRatings">
              {starRatings.map((starRating) => (
                <div key={starRating.stars} className="SinglePost-starRating">
                  <span className="SinglePost-starRatingStars">{starRating.stars} 星</span>
                  <div className="SinglePost-starRatingBar">
                    <div
                      className="SinglePost-starRatingBarFill"
                      style={{ width: getStarRatingWidth(starRating.count) }}
                    ></div>
                  </div>
                  <span className="SinglePost-starRatingCount">({starRating.count})</span>
                </div>
              ))}
            </div>
          </div>
        ) : (
          <></>
        )}

        {/* {props.post.hot_rate ? <p className="hotRate">Hot Rate: {props.post.hot_rate}</p> : null} */}
      </div>
    </>
  );
};

export default SinglePost;
