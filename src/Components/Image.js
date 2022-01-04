import React, { Component } from "react";

import "./App1.css";
class Image extends Component {
 
  render() {
    return (
      <div className="main">
        <div className="main2">
          <button className="button">
            <div className="cover">
              <div className="mouse">
                <img
                  src={this.props.link1}
                  alt="my"
                  width="200px"
                  height="150px"
                  onClick={this.props.submit}
                />
              </div>
              <div className="details" onClick={this.props.submit}>
                <p>Info Box</p>
              </div>
            </div>

            <div className="mouse1">
              <div className="main3">
                <h1>{this.props.shop}</h1>
              </div>
              <div className="main4">
              <p>{this.props.para}</p>
               
              </div>
            </div>
          </button>
        </div>
        <div className="main2">
          <button className="button">
            <div className="cover">
              <div className="mouse">
                <img
                  src={this.props.link2}
                  alt="my"
                  width="150"
                  height="150"
                  onClick={this.props.submit}
                />
              </div>
              <div className="details" onClick={this.props.submit}>
                <p>Info Box</p>
              </div>
            </div>
            <div className="mouse1">
              <div className="main3">
                <h1>{this.props.content}</h1>
              </div>
              <div className="main4">
              <p>{this.props.para}</p>
              </div>
            </div>
          </button>
        </div>
        <div className="main2">
          <button className="button">
            <div className="cover">
              <div className="mouse">
                <img
                  src={this.props.link3}
                  alt="my"
                  width="150"
                  height="150"
                  onClick={this.props.submit}
                />
              </div>
              <div className="details" onClick={this.props.submit}>
                <p>Info Box</p>
              </div>
            </div>
            <div className="mouse1">
              <div className="main3">
              <h1>{this.props.community}</h1>
              </div>
              <div className="main4">
              <p>{this.props.para}</p>
              </div>
            </div>
          </button>
        </div>
        <div className="main2">
          <button className="button">
            <div className="cover">
              <div className="mouse">
                <img
                  src={this.props.link4}
                  alt="my"
                  width="150"
                  height="150"
                  onClick={this.props.submit}
                />
              </div>
              <div className="details" onClick={this.props.submit}>
                <p>Info Box</p>
              </div>
            </div>
            <div className="mouse1">
              <div className="main3">
                <h1>{this.props.charity}</h1>
              </div>
              <div className="main4">
              <p>{this.props.para}</p>
              </div>
            </div>
          </button>
        </div>
      </div>
    );
  }
}
export default Image;
