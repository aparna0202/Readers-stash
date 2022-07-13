import React from "react";
import "./Button.css";
import SmallText from "../SmallText/SmallText";
import PropTypes from "prop-types";

const Button = (props) => {
  const { text, url, isRounded = false, isHollowed = false } = props;

  return (
    <a
      href={url}
      className={`btn ${isRounded && "rounded"} ${isHollowed && "hollowed"}`}
    >
      <SmallText text={text} />
    </a>
  );
};

Button.propTypes = {
  text: PropTypes.string.isRequired,
  url: PropTypes.string,
  isHollowed: PropTypes.bool,
  isRounded: PropTypes.bool,
};

export default Button;
