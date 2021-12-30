import React, { Component } from "react";
import charity from "../charity_guest.png";

function Charity() {
  return (
    <div className="container d-flex">
      <div className="cont-text">
        <div className="cont-charity">CHARITIES</div>
        <div className="cont-desc">
          <p>
            2% of all transaction on our platform will go to the charities,
            causes and communitites atheletes care about.
          </p>
        </div>
        <div className="cont-button-learnmore">
          <button className="learn-more">Learn More</button>
        </div>
      </div>
      <div className="cont-image">
        <img className="image" src={charity} alt="Image of Food" />
      </div>
    </div>
  );
}

export default Charity;
