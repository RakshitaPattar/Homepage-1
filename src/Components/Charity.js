import React, { Component } from "react";
import charity from "../charity_guest.png";

function Charity(props) {
  return (
    <div className="container d-flex charity">
      <div className="cont-text">
        <div className="cont-charity">{props.title_p}</div>
        <div className="cont-desc">
          <p>{props.description}</p>
        </div>
        <div className="cont-button-learnmore">
          <button className="learn-more">Learn More</button>
        </div>
      </div>
      <div className="cont-image">
        <img className="image" src={props.imagesrc.food} alt="Image of Food" />
      </div>
    </div>
  );
}

export default Charity;
