import React from "react";
import "./HeaderLink.css";

const HeaderLink = ({ url = "#", text = "#" }) => {
  return (
    <a className="headerLink" href={url}>
      {text}
    </a>
  );
};

export default HeaderLink;
