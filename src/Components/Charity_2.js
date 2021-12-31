import React, { Component } from "react";
import SearchIcon from "@material-ui/icons/Search";

function CharityPage2() {
  return (
    <>
      <div className="container charity2">
        <div className="searchbardiv">
          <input
            className="searchbar"
            type="text"
            id="header-search"
            placeholder="Cause, Sport, State, or Athlete"
            name="s"
          />
          <button className="search-button">
            <SearchIcon />
          </button>
        </div>
      </div>
    </>
  );
}

export default CharityPage2;
