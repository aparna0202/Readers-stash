import React from "react";
import { useState } from "react";
import "./Header.css";
import { FaUser, FaBars, FaTimes, FaBookReader } from "react-icons/fa";

const Header = (props) => {
  return (
    <header className="header">
      <span className="logo">
        <FaBookReader />{" "}
        <div className="name">
          readers <span>stash</span>
        </div>
      </span>
      <div className="navLinkContainer">
        {props.children}
        <div className="accountsContainer">
          <FaUser />
          <a href="#">Log In</a>
        </div>
      </div>
    </header>
  );
};

export default Header;
