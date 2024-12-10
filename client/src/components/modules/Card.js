import React from "react";
import { useNavigate } from "react-router-dom";
import SinglePost from "./SinglePost";
import "./Card.css";

const Card = (props) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/detail");
  };

  return (
    <div className="Card-container" onClick={handleClick}>
      <SinglePost
        _id={props._id}
        creator_name={props.creator_name}
        creator_id={props.creator_id}
        content={props.content}
        rating={props.rating}
        contents={props.contents}
        rates_length={props.rates.length}
        // hot_rate={props.rates[0].content}
      />
    </div>
  );
};

export default Card;
