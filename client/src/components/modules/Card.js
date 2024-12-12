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
      <div>
        <SinglePost post={post} whether_detail={false} />
      </div>
    </div>
  );
};

export default Card;
