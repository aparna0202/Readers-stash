import React from "react";
import Booklist from "../BookList/Booklist";
import Cover from "../Cover/Cover";
import "./Homepage.css";
const Homepage = () => {
  return (
    <>
      <Cover />
      <div className="home">
        <Booklist genre="history" />
        <Booklist genre="maths" />
        <Booklist genre="chemistry" />
        <Booklist genre="physics" />
      </div>
    </>
  );
};

export default Homepage;
