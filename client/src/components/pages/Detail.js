import React, { useState, useEffect } from "react";
import DetailPost from "../modules/DetailPost";

const test_Post = {
  _id: "123",
  creator_name: "test",
  creator_id: "123",
  content: "I am allergic to cats",
  rating: 10.0,
  rates: [
    {
      _id: "123",
      creator_name: "test",
      creator_id: "123",
      content: "I am allergic to cats",
    },
  ],
};

const Detail = (props) => {
  return (
    <div>
      <DetailPost
        _id={test_Post._id}
        creator_name={test_Post.creator_name}
        creator_id={test_Post.creator_id}
        content={test_Post.content}
        rating={test_Post.rating}
        rates={test_Post.rates}
      />
    </div>
  );
};

export default Detail;
