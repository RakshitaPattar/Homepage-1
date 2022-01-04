import React, { Component } from "react";
import "./App1.css";
class Submit extends Component {
  render() {
    return (
      <div className="main1">
        <div className="sub1"></div>

        <button className="sub2" onClick={this.props.submit}>
          {this.props.signup}
        </button>
        <div className="sub1"></div>
      </div>
    );
  }
}
export default Submit;
