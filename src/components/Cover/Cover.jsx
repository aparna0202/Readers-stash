import React from "react";
import Searchbar from "../Searchbar/Searchbar";
import "./Cover.css";

const Cover = () => {
  return (
    <div className="cover">
      <img
        src="https://images.unsplash.com/photo-1533669955142-6a73332af4db?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1574&q=80"
        alt=""
        className="bgImage"
      />
      <div className="text">
        <div className="textContainer">
          <blockquote>
            So many books, so little time.
            <br /> <cite>-― Frank Zappa</cite>
          </blockquote>
        </div>
        <Searchbar />
      </div>
    </div>
  );
};

export default Cover;
