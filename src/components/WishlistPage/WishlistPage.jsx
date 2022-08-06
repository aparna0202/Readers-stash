import Book from "../BookList/Book";
import { API_URL } from "../../common/api";
import { useEffect, useState } from "react";

const Test = () => {
  return <h1>Hello</h1>;
};
const WishlistPage = () => {
  const wishlistedIsbn = JSON.parse(localStorage.getItem("wishlist"));
  const [wishlistedBook, setWishlistedBook] = useState([]);

  useEffect(() => {
    const fetchedResult = [];
    wishlistedIsbn.map((isbn) =>
      fetch(`${API_URL}?q=isbn:${isbn}`).then((result) =>
        result.json().then((result) => fetchedResult.push(result))
      )
    );

    // console.log(fetchedResult);
    setWishlistedBook(fetchedResult);
  }, []);

  return (
    <div className="WishlistPage">
      {wishlistedBook.length > 0 &&
        wishlistedBook.map(
          (book) => <Test />
          // <Book
          //   authorName={
          //     book.items[0].volumeInfo.authors
          //       ? book.items[0].volumeInfo.authors[0]
          //       : "N/A"
          //   }
          //   publishedDate={
          //     book.items[0].volumeInfo.publishedDate
          //       ? book.items[0].volumeInfo.publishedDate
          //       : "NA"
          //   }
          //   bookName={book.items[0].volumeInfo.title}
          //   publisher={book.items[0].volumeInfo.publisher}
          //   description={book.items[0].volumeInfo.description}
          //   subtitle={book.items[0].volumeInfo.subtitle}
          //   imageLinks={book.items[0].volumeInfo.imageLinks}
          //   pageCount={book.items[0].volumeInfo.pageCount}
          //   industryIdentifiers={
          //     book.items[0].volumeInfo.industryIdentifiers[0].identifier
          //   }
          // />
        )}
    </div>
  );
};

export default WishlistPage;
