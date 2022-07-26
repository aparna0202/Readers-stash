import React from "react";
import { useState } from "react";
import { FaSearch } from "react-icons/fa";
import { API_URL } from "../../common/api";
import Booklist from "../BookList/Booklist";
import Book from "../BookList/Book";
import "./Searchbar.css";

const Searchbar = () => {
  const [searchResult, setSearchResult] = useState([]);
  const [query, setQuery] = useState("");
  const handleOnClick = () => {
    fetch(`${API_URL}?maxResults=40&q=${query}`)
      .then((result) => result.json())
      .then((result) => result.items)
      .then((result) => setSearchResult(result));
  };

  const handleOnChange = (e) => {
    e.preventDefault();
    setQuery(e.target.value);
  };
  return (
    <div className="search">
      <div className="searchContainer">
        <input
          type="text"
          placeholder="Search here"
          className="searchBar"
          onChange={handleOnChange}
        />
        <button className="searchBtn" onClick={handleOnClick}>
          <FaSearch />
        </button>
      </div>
      <div className="searchResults">
        {searchResult ? (
          searchResult.map((book) => (
            <Book
              authorName={
                book.volumeInfo.authors ? book.volumeInfo.authors[0] : "N/A"
              }
              publishedDate={
                book.volumeInfo.publishedDate
                  ? book.volumeInfo.publishedDate
                  : "NA"
              }
              bookName={book.volumeInfo.title}
              publisher={book.volumeInfo.publisher}
              description={book.volumeInfo.description}
              subtitle={book.volumeInfo.subtitle}
              imageLinks={
                book.volumeInfo.imageLinks ? book.volumeInfo.imageLinks : "N/A"
              }
              pageCount={book.volumeInfo.pageCount}
              industryIdentifiers={
                book.volumeInfo.industryIdentifiers
                  ? book.volumeInfo.industryIdentifiers[0].identifier
                  : "N/A"
              }
            />
          ))
        ) : (
          <h1 className="message">No Results found!</h1>
        )}
      </div>
    </div>
  );
};

export default Searchbar;
