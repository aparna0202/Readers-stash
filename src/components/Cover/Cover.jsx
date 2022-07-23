import React from "react";
import "./Cover.css";
import { FaSearch } from "react-icons/fa";

const Cover = () => {
  return (
    <div className="cover">
      <div className="imgContainer">
        <img
          className="img"
          src="https://images.unsplash.com/photo-1507842217343-583bb7270b66?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1890&q=80"
          alt="Cover"
        />
      </div>
      <div className="searchContainer">
        <input type="text" placeholder="Search here" className="searchBar" />
        <button className="searchBtn">
          <FaSearch />
        </button>
      </div>
    </div>
  );
};

export default Cover;
