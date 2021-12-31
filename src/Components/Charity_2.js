import React, { Component, useState } from "react";
import SearchIcon from "@material-ui/icons/Search";

function CharityPage2() {
  const [input, setInput] = useState("Cause, Sport, State, or Athlete");

  const Input = (e) => {
    e.preventDefault();
    setInput(e.target.value);
  };
  const clickevent = (e) => {
    console.log(input);
  };

  return (
    <>
      <div className="container charity2">
        <div className="searchbardiv">
          <input
            className="searchbar"
            type="text"
            id="header-search"
            placeholder={input}
            onChange={Input}
            name="s"
          />
          <button className="search-button" type="submit" onClick={clickevent}>
            <SearchIcon />
          </button>
        </div>
      </div>
    </>
  );
}

export default CharityPage2;
