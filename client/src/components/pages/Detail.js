import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import DetailPost from "../modules/DetailPost";
import { get, post } from "../../utilities";

const Detail = () => {
  const { postId } = useParams();
  const [posts, setPosts] = useState(null);

  useEffect(() => {
    const fetchPost = async () => {
      // console.log("Fetching post with id:", postId);
      get(`/api/posts/${postId}`)
        .then((data) => {
          setPosts(data);
        })
        .catch((error) => {
          console.error("Error fetching post:", error);
        });
    };

    fetchPost();
  }, [postId]);

  const addNewRate = async (rate) => {
    try {
      const newRate = await post(`/api/posts/${postId}/rate`, rate);
      setPosts((prevPost) => ({
        ...prevPost,
        rates: [...prevPost.rates, newRate],
      }));
    } catch (error) {
      console.error("Error adding new rate:", error);
    }
  };

  if (!posts) {
    return <div>加载中...</div>;
  }

  return (
    <div>
      <DetailPost
        _id={postId}
        creator_name={post.creator_name}
        creator_id={post.creator_id}
        content={post.content}
        rating={post.rating}
        addNewRate={addNewRate}
      />
    </div>
  );
};

export default Detail;
