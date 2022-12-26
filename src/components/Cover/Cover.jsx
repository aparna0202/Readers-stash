import React from "react";
import Searchbar from "../Searchbar/Searchbar";
import "./Cover.css";

const Cover = () => {
  return (
    <div className="cover">
      <Searchbar />

      <div className="textContainer">
        <blockquote>
          So many books, so little time.
          <br /> <cite>-― Frank Zappa</cite>
        </blockquote>
      </div>
    </div>
  );
};

export default Cover;
