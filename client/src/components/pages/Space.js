import React, { useState, useEffect } from "react";
// import CatHappiness from "../modules/CatHappiness.js";
import { get } from "../../utilities";

import "../../utilities.css";
import "./Space.css";

const Test = {
  name: "test",
  id: "123",
  description: "我爱玩原神",
};
const Space = (props) => {
  const [user_name, setUser_name] = useState("");
  const [user_email, setUser_email] = useState("");
  useEffect(() => {
    if (props.user) {
      setUser_name(props.user.name);
      setUser_email(props.user.email);
    }
    // get(`/api/user`, { userid: props.userId }).then((userObj) => setUser(userObj));
  }, []);

  // if (!user) {
  //   return <div> Loading! </div>;
  // }
  console.log("user_name", user_name);

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
          <div className="Space-subContainer u-textCenter">
            <h4 className="Space-subTitle">个人名言</h4>
            <div id="Space-description">{Test.description}</div>
          </div>
          <div className="Space-subContainer u-textCenter">
            <h4 className="Space-subTitle">座右铭</h4>
            <div id="favorite-cat">愿此行，终抵群星</div>
          </div>
        </div>
      </div>
      <div className="content">
        <div className="myPublish">这里是你发布过的内容</div>
        <hr></hr>
        <div className="myComment">这你是你评论过的帖子</div>
      </div>
    </div>
  );
};

export default Space;
