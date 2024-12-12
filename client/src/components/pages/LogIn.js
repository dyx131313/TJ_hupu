import React, { useState } from "react";
import LoginTable from "../modules/LoginTable";
import PhotoWall from "../modules/PhotoWall"; // 引入 PhotoWall 组件
import "./LogIn.css";

import corgi from "../../public/corgi.jpg";
import NBA from "../../public/NBA.jpg";
import football from "../../public/football.jpg";
import lol from "../../public/lol.jpg";
import TJ from "../../public/TJ.jpg";
import TJ_SP from "../../public/TJ_SP.jpg";
import food1 from "../../public/food1.jpg";
import food2 from "../../public/food2.jpg";
import music1 from "../../public/music1.jpg";
import music2 from "../../public/music2.jpg";
import trip from "../../public/trip.jpg";
import scene from "../../public/scene.jpg";
import movie from "../../public/movie.jpg";
import volarant from "../../public/volarant.jpg";
import art from "../../public/art.jpg";
import flower from "../../public/flower.jpg";

const LogIn = (props) => {
  const photos = [
    {
      src: NBA,
      alt: "NBA",
    },
    {
      src: food2,
      alt: "Food2",
    },
    {
      src: football,
      alt: "Football",
    },
    {
      src: corgi,
      alt: "Cute corgi",
    },
    {
      src: flower,
      alt: "Flower",
    },
    {
      src: lol,
      alt: "LOL",
    },
    {
      src: scene,
      alt: "Scene",
    },
    {
      src: music1,
      alt: "Music1",
    },
    {
      src: volarant,
      alt: "Volarant",
    },
    {
      src: TJ,
      alt: "TongJi",
    },
    {
      src: movie,
      alt: "Movie",
    },
    {
      src: food1,
      alt: "Food1",
    },
    {
      src: TJ_SP,
      alt: "TongJi SP",
    },
    {
      src: art,
      alt: "Art",
    },
    {
      src: music2,
      alt: "Music2",
    },
    {
      src: trip,
      alt: "Trip",
    },

    // 添加更多照片
  ];

  return (
    <>
      <div className="loginAll">
        <div className="logindisplay-container">
          <div className="logintable-container">
            <LoginTable handleLogin={props.handleLogin} />
          </div>
          <div className="logo-container">
            <PhotoWall photos={photos} /> {/* 添加照片墙 */}
          </div>
        </div>
      </div>
      <div className="square">
        <ul>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
        </ul>
      </div>
      <div className="circle">
        <ul>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
        </ul>
      </div>
    </>
  );
};

export default LogIn;
