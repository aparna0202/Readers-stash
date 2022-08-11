import React from "react";
import "./Header.css";
import { FaUser, FaBars } from "react-icons/fa";

const Header = (props) => {
  return (
    <header className="header">
      <span>LOGO</span>
      <div className="navLinkContainer">
        {props.children}
        <div className="accountsContainer">
          <FaUser />
          <a href="#">Log In</a>
        </div>
      </div>
      <div className="hamburger">
        <FaBars />
      </div>
    </header>
  );
};

export default Header;
