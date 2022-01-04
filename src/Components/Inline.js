import React from "react";

const heading = {
  textAlign: "center",
  padding: "5px",
  fontFamily: "Arial",
  fontSize: "30px",
  fontWeight: "bold",
  wordSpacing: "0px",
  textDecoration: "none solid rgb(0,0,0)",
  display:"block",
  marginBottom:"10px",
  alignItems:"center",
  justifyContent:"center"
  
};
const Inline=(props)=> {
  return <h1 style={heading}>{props.head}</h1>;
}
export default Inline;
