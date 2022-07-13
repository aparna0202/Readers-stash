import Book from "./Book";
import "./Booklist.css";
import { API_URL } from "../../common/api";
import { useEffect } from "react";
import { useState } from "react";

const Booklist = ({ genre }) => {
  const [books, setBooks] = useState([1, 2, 3, 4, 5]);

  // useEffect(() => {
  //   fetch(`${API_URL}?maxResults=5&q=${genre}&subject:${genre}`).then(
  //     (result) =>
  //       result
  //         .json()
  //         .then((result) => result.items)
  //         .then((result) => setBooks(result))
  //   );
  // }, []);

  return (
    <div className="bookList">
      {books.length > 0 &&
        books.map((book) => (
          <Book
          // authorName={book.volumeInfo.authors[0]}
          // publishedDate={book.volumeInfo.publishedDate}
          // bookName={book.volumeInfo.title}
          // publisher={book.volumeInfo.publisher}
          // description={book.volumeInfo.description}
          // subtitle={book.volumeInfo.subtitle}
          // imageLinks={book.volumeInfo.imageLinks}
          // pageCount={book.volumeInfo.pageCount}
          />
        ))}
    </div>
  );
};

export default Booklist;
