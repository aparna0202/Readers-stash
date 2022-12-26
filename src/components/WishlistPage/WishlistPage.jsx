// import Book from "../BookList/Book";
import { API_URL } from "../../common/api";
import { useEffect } from "react";

const WishlistPage = () => {
  const wishlistedBook = () => getBooksfromISBN() || [];

  function getBooksfromISBN() {
    const fetchedResult = [];
    const wishlistedIsbn = JSON.parse(localStorage.getItem("wishlist"));

    wishlistedIsbn.map((isbn) =>
      fetch(`${API_URL}?q=isbn:${isbn}`).then((result) =>
        result.json().then((result) => fetchedResult.push(result))
      )
    );
    return fetchedResult;
  }

  useEffect(() => {
    getBooksfromISBN();
  });
  console.log(wishlistedBook.length);

  return (
    <div className="WishlistPage">
      {console.log(wishlistedBook.length, wishlistedBook)}
      {wishlistedBook.map((data) => console.log(data))}
    </div>
  );
};

export default WishlistPage;
