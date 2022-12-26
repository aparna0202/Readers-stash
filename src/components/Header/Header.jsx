import React from "react";
import "./Header.css";
import Button from "../Common/Button/Button";
import { FaUser, FaBars } from "react-icons/fa";

const Header = (props) => {
  const handleOnClick = () => {};
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
      <button className="btn" onClick={handleOnClick}>
        <FaBars />
      </button>
    </header>
  );
};

export default Header;
