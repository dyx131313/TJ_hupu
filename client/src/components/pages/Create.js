import React, { useState } from "react";
import "./Create.css";
import { get, post } from "../../utilities";

const Create = ({ userId }) => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [category, setCategory] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (!userId) {
      alert("请先登录再发布帖子！");
      return;
    }
    const user = await get("/api/whoami");
    console.log("user", user);
    const body = {
      title,
      content,
      // category,
      creator_id: user._Id,
      creator_name: user.name,
    };

    console.log("postData", body);

    post("/api/posts/post", body)
      .then((response) => {
        alert("发布成功！");
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
    <div className="Create-container">
      <h1>发布帖子</h1>
      <form onSubmit={handleSubmit} className="Create-form">
        <div className="Create-formGroup">
          <label htmlFor="title">标题：</label>
          <input
            type="text"
            id="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
            placeholder="请输入文章标题"
          />
        </div>
        <div className="Create-formGroup">
          <label htmlFor="content">内容：</label>
          <textarea
            id="content"
            value={content}
            onChange={(e) => setContent(e.target.value)}
            required
            placeholder="请输入文章内容"
          ></textarea>
        </div>
        {/* <div className="Create-formGroup">
          <label htmlFor="category">选择分区：</label>
          <select
            id="category"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            required
          >
            <option value="" disabled>
              -- 请选择分区 --
            </option>
            <option value="music">音乐</option>
            <option value="sports">体育</option>
            <option value="game">游戏</option>
            <option value="food">美食</option>
            <option value="study">学习</option>
            <option value="gossip">校内八卦</option>
            <option value="funny">校园趣事</option>
          </select>
        </div> */}
        <button type="submit" className="Create-submit">
          发布
        </button>
      </form>
    </div>
  );
};

export default Create;
