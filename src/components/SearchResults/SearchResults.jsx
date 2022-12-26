import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useLocation } from "react-router-dom";
import { API_URL } from "../../common/api";
import Book from "../BookList/Book";
import "./SearchResults.css";

const SearchResults = () => {
  const [searchResult, setSearchResult] = useState([]);
  const location = useLocation();
  const query = location.state.query;
  const fetchResults = () => {
    fetch(`${API_URL}?maxResults=40&q=${query}`)
      .then((result) => result.json())
      .then((result) => result.items)
      .then((result) => setSearchResult(result));
  };

  useEffect(() => {
    fetchResults();
  }, [query]);
  return (
    <>
      <div className="searchResults">
        <div className="searchResultsContainer">
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
                  book.volumeInfo.imageLinks
                    ? book.volumeInfo.imageLinks
                    : "N/A"
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
    </>
  );
};

export default SearchResults;
