import React, { useState, useEffect } from "react";
// import CatHappiness from "../modules/CatHappiness.js";
import { get } from "../../utilities";

import "../../utilities.css";
import "./Space.css";
import { useParams, useNavigate } from "react-router-dom";

import Card from "../modules/Card";

const Space = (props) => {
  const { userId } = useParams();
  const [user_name, setUser_name] = useState(undefined);
  const [user_email, setUser_email] = useState(undefined);
  const [posted_post, setPosted_post] = useState([]);
  const [rates, setRates] = useState([]);
  const [rated_post, setRated_post] = useState([]);

  const navigate = useNavigate();

  useEffect(() => {
    if (userId === "undefined") {
      alert("请先登录或输入正确的id！");
      navigate("/");
      return;
    }
    get(`/api/users/${userId}`).then((user) => {
      setUser_name(user.name);
      setUser_email(user.email);
    });
    get(`/api/users/${userId}/posts`).then((posts) => {
      setPosted_post(posts);
    });
    get(`/api/users/${userId}/rates`).then((rates) => {
      setRates(rates);
    });
    get(`/api/posts`, { params: { ids: rates.map((rate) => rate.parentId) } }).then(
      (ratedPosts) => {
        setRated_post(ratedPosts);
        // console.log("ratedPosts", ratedPosts);
      }
    );
  }, [userId]);

  return (
    <div className="SpaceAll">
      <div className="Space-profileContainer">
        <div className="Space-avatarContainer">
          <div className="Space-avatar-placeholder">👤</div>
        </div>

        <h1 className="Space-name u-textCenter">{user_name}</h1>
        <hr className="Space-linejj" />
        <div className="Space-infoContainer">
          <div className="Space-subContainer u-textCenter">
            <h4 className="Space-subTitle">我的邮箱</h4>
            <div id="Space-description">
              {user_email}
              {/* {user.description} */}
            </div>
          </div>
        </div>
      </div>
      <div className="content">
        <div className="myPublish">
          <p>发布的帖子</p>
          {posted_post.map((post) => (
            <Card key={`post_1_${post._id}`} post={post} />
          ))}
        </div>
        <hr></hr>
        <div className="myComment">
          <p>评论的帖子</p>
          {rated_post.map((post) => (
            <Card key={`post_2_${post._id}`} post={post} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Space;
