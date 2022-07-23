import React from "react";
import { useState } from "react";
import { FaSearch } from "react-icons/fa";
import { API_URL } from "../../common/api";
import Booklist from "../BookList/Booklist";
import "./Searchbar.css";

const Searchbar = () => {
  const [searchResult, setSearchResult] = useState([]);
  const handleOnClick = (str) => {
    fetch(`${API_URL}?q=${str}`)
      .then((result) => result.json())
      .then((result) => setSearchResult(result));
  };
  const handleOnChange = (e) => {
    return e.target.value;
  };
  return (
    <div className="search">
      <div className="searchContainer">
        <input
          type="text"
          placeholder="Search here"
          className="searchBar"
          onChange={handleOnChange}
        />
        <button className="searchBtn" onClick={handleOnClick}>
          <FaSearch />
        </button>
      </div>
      (searchResult?{searchResult.map((result)=>(<Booklist))})
    </div>
  );
};

export default Searchbar;
