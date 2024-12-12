import React, { useState } from "react";
import "./Create.css";
import { get, post } from "../../utilities";
import { useNavigate } from "react-router-dom";

const Create = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [category, setCategory] = useState("");

  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();
    const user = await get("/api/whoami");
    if (!user._id) {
      alert("请先登录再发布帖子！");
      return;
    }
    const body = {
      title,
      content,
      // category,
      creator_id: user._id,
      creator_name: user.name,
    };

    console.log("postData", body);

    post("/api/posts/post", body)
      .then((response) => {
        alert("发布成功！");
        navigate("/");
        setTitle("");
        setContent("");
        setCategory("");
      })
      .catch((err) => {
        console.error("Error Createing post:", err);
        alert("发布失败，请稍后重试！");
      });
  };

  return (
    <div>
      <h1>Create</h1>
    </div>
  );
};

export default Create;
