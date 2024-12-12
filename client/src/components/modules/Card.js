import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import SinglePost from "./SinglePost";
import "./Card.css";

const Card = (props) => {
  const [post, setPost] = useState(null);

  useEffect(() => {
    setPost(props.post);
  }, [props.post]);

  const navigate = useNavigate();
  const handleClick = () => {
    navigate(`/detail/${post._id}`);
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
