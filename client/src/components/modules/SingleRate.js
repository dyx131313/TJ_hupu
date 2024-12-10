import React from "react";
import { Link } from "react-router-dom";
import "./SingleRate.css";

const SingleRate = (props) => {
  const { creator_name, content, rating } = props;

  const renderStars = (rating) => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      stars.push(
        <span key={i} className={i <= rating ? "star filled" : "star"}>
          ★
        </span>
      );
    }
    return stars;
  };

  return (
    <div className="Card-rateBody">
      <div className="rate-header">
        <div className="rate-creator">{creator_name}</div>
        <div className="rate-stars">{renderStars(rating)}</div>
      </div>
      <div className="rate-content">{content}</div>
    </div>
  );
};

export default SingleRate;
