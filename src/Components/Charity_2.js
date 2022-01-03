// apply the feature to update the search bar with the initial value (input)
// after search button is clicked

import React, { Component, useState } from "react";
import SearchIcon from "@material-ui/icons/Search";

function CharityPage2() {
  const [input, setInput] = useState("");

  const Input = (e) => {
    e.preventDefault();
    setInput(e.target.value);
  };
  const clickevent = (e) => {
    console.log(input);
    setInput("");
  };

  return (
    <>
      <div className="container charity2">
        <div className="searchbardiv">
          <input
            className="searchbar"
            type="text"
            id="header-search"
            placeholder="Cause,Sport, State, or Athelete "
            value={input}
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
