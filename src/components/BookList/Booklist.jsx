import Book from "./Book";
import "./Booklist.css";
import { API_URL } from "../../common/api";
import { useEffect } from "react";
import { useState } from "react";

const Booklist = ({ genre }) => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    fetch(`${API_URL}?maxResults=10&q=${genre}&subject:${genre}`).then(
      (result) =>
        result
          .json()
          .then((result) => result.items)
          .then((result) => {
            const filteredResult = result.filter(
              (book) => book.volumeInfo.industryIdentifiers
            );
            filteredResult.length = 5;
            return filteredResult;
          })
          .then((result) => setBooks(result))
    );
  }, [genre]);

  return (
    <div className="bookList ">
      {books.length > 0 &&
        books.map((book) => (
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
            imageLinks={book.volumeInfo.imageLinks}
            pageCount={book.volumeInfo.pageCount}
            industryIdentifiers={
              book.volumeInfo.industryIdentifiers[0].identifier
            }
          />
        ))}
    </div>
  );
};

export default Booklist;
