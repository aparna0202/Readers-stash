import React from "react";
import { useState } from "react";
import "./Header.css";
import Button from "../Common/Button/Button";
import { FaUser, FaBars, FaTimes, FaBookReader } from "react-icons/fa";

const Header = (props) => {
  const [isMobile, setIsMobile] = useState(false);
  const handleOnClick = () => {};
  return (
    <header className="header">
      <span className="logo">
        <FaBookReader />{" "}
        <div className="name">
          readers <span>stash</span>
        </div>
      </span>
      <div className={isMobile ? "navLinkContainerMobile" : "navLinkContainer"}>
        {props.children}
        <div className="accountsContainer">
          <FaUser />
          <a href="#">Log In</a>
        </div>
      </div>
      <button className="hamburgerIcon">
        {isMobile ? <FaTimes /> : <FaBars />}
      </button>
    </header>
  );
};

export default Header;
