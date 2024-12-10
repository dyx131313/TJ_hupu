import React, { useState } from "react";
import "./Rate.css";
const Rate = (props) => {
  const [rating, setRating] = useState(0);
  const [comment, setComment] = useState("");

  const handleRatingChange = (newRating) => {
    setRating(newRating);
  };

  const handleCommentChange = (event) => {
    setComment(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    props.onSubmit({ rating, content: comment });
    setRating(0);
    setComment("");
  };

  return (
    <div className="rate-container">
      <form onSubmit={handleSubmit} className="rate-form">
        <div className="rating">
          {[2, 4, 6, 8, 10].map((star) => (
            <span
              key={star}
              className={`star ${rating >= star ? "selected" : ""}`}
              onClick={() => handleRatingChange(star)}
            >
              ★
            </span>
          ))}
        </div>
        <textarea
          className="comment"
          value={comment}
          onChange={handleCommentChange}
          placeholder="输入你的评论..."
        />
        <button type="submit" className="submit-button">
          提交
        </button>
      </form>
    </div>
  );
};

export default Rate;
