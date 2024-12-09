import React, { useState, useEffect } from "react";
// import CatHappiness from "../modules/CatHappiness.js";
import { get } from "../../utilities";

import "../../utilities.css";
import "./Space.css";

const Test = {
  name: "test",
  id: "123",
  description: "I am allergic to cats",
};

const Space = (props) => {
  const [catHappiness, setCatHappiness] = useState(0);
  const [user, setUser] = useState();

  useEffect(() => {
    document.title = "Space Page";
    // get(`/api/user`, { userid: props.userId }).then((userObj) => setUser(userObj));
  }, []);

  const incrementCatHappiness = () => {
    setCatHappiness(catHappiness + 1);
  };

  // if (!user) {
  //   return <div> Loading! </div>;
  // }
  return (
    <div className="SpaceAll">
      <div className="Space-profileContainer">
        <div
          className="Space-avatarContainer"
          onClick={() => {
            incrementCatHappiness();
          }}
        >
          <div className="Space-avatar" />
        </div>

        <h1 className="Space-name u-textCenter">{Test.name}</h1>
        <hr className="Space-linejj" />
        <div className="Space-infoContainer">
          <div className="Space-subContainer u-textCenter">
            <h4 className="Space-subTitle">About Me</h4>
            <div id="Space-description">
              I am really allergic to cats i don't know why i have a catbook
            </div>
          </div>
          <div className="Space-subContainer u-textCenter">
            <h4 className="Space-subTitle">Cat Happiness</h4>
            {/* <CatHappiness catHappiness={catHappiness} /> */}
          </div>
          <div className="Space-subContainer u-textCenter">
            <h4 className="Space-subTitle">My Favorite Type of Cat</h4>
            <div id="favorite-cat">corgi</div>
          </div>
        </div>
      </div> 
      <div className="content">
        <div className="myPublish">
        </div>
        <hr></hr>
        <div className="myComment">
        </div>
      </div>    
    </div>
  );
};

export default Space;
