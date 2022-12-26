import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaSearch } from "react-icons/fa";
import "./Searchbar.css";

const Searchbar = () => {
  const [query, setQuery] = useState("");
  let navigate = useNavigate();

  const handleOnClick = () => {
    navigate("/search", { replace: true, state: { query } });
  };

  const handleOnChange = (e) => {
    setQuery(e.target.value);
  };
  const handleKeyDown = (a) => {
    if (a.keyCode === 13) {
      handleOnClick();
    }
  };

  return (
    <div className="search">
      <div className="searchContainer">
        <input
          type="text"
          placeholder="Search here"
          className="searchBar"
          onChange={handleOnChange}
          onKeyDown={handleKeyDown}
        />
        <button className="btn" onClick={handleOnClick}>
          <FaSearch />
        </button>
      </div>
    </div>
  );
};

export default Searchbar;
