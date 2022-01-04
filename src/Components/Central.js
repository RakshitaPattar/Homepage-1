import "./App1.css";
import React, { component } from "react";
import { Component } from "react";
import Inline from "./Inline";
import Image from "./Image";
import Submit from "./Submit";


class App extends Component {
  submit() {
    alert("Clicked");
  }


  render() {
    const para="Lorem ipsum dolor sit amet, incididunt ut labore et dolore magna aliqua.";
    const shop="Shop";
    const content="Content";
    const community="Community";
    const charity="Charity";
    const signup="Sign Up";
    const head="AN ECOSYSTEM FOR ATHLETES";
    const link1="https://i.pinimg.com/originals/84/ef/44/84ef447b1462d8ed463d868d017ea365.gif";
    const link2="https://thumbs.gfycat.com/DearComfortableCub-small.gif";
    const link3="https://cdn.dribbble.com/users/1254037/screenshots/5364512/community.gif";
    const link4="https://monophy.com/media/YJhsPrhi46mnGIPtx7/monophy.gif";

    
    return (
      <div className="App">
        <Inline head={head}></Inline>
        <Image shop={shop} content={content} community={community} charity={charity} para={para} link1={link1} link2={link2} link3={link3} link4={link4} submit={this.submit}></Image>
        <Submit submit={this.submit} signup={signup}></Submit>
       
      </div>
    );
  }
}


export default App;