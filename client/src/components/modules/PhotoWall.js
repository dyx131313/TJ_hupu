// PhotoWall.js
import React from "react";
import "./PhotoWall.css";

const PhotoWall = ({ photos }) => {
  return (
    <div className="photo-wall">
      {photos.map((photo, index) => (
        <div key={index} className="photo">
          <img src={photo.src} alt={photo.alt} />
        </div>
      ))}
    </div>
  );
};

export default PhotoWall;
