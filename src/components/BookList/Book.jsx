import { useState, useEffect } from "react";
import { FaRegHeart } from "react-icons/fa";
import { FaHeart } from "react-icons/fa";
import "./Book.css";

const Book = ({
  industryIdentifiers,
  imageLinks = false,
  bookName = "NA",
  subtitle = "NA",
  authorName = "NA",
  publisher = "NA",
  publishedDate = false,
}) => {
  const [wishlistedBook, setWishlistedBook] = useState(false);
  const isbn = `${industryIdentifiers}`;

  const handleOnClick = () => {
    const wishlist = JSON.parse(localStorage.getItem("wishlist") || "[]");

    const index = wishlist.indexOf(isbn);
    if (index > -1) {
      wishlist.splice(index, 1);
      setWishlistedBook(false);
    } else {
      wishlist.push(isbn);
      setWishlistedBook(true);
    }

    localStorage.setItem("wishlist", JSON.stringify(wishlist));
  };

  useEffect(() => {
    const wishlist = JSON.parse(localStorage.getItem("wishlist") || "[]");
    const index = wishlist.indexOf(isbn);
    if (index > -1) {
      setWishlistedBook(true);
    } else {
      setWishlistedBook(false);
    }
  }, [wishlistedBook, isbn]);

  return (
    <div className="book">
      <div className="wishlistIcon" onClick={handleOnClick}>
        {!wishlistedBook ? <FaRegHeart /> : <FaHeart />}
      </div>
      <div
        className="bookDetails"
        onClick={() => window.open(`/details/${industryIdentifiers}`, "_blank")}
      >
        <img
          src={imageLinks.thumbnail}
          alt={`${bookName} Thumbnail`}
          className="bookImage"
        />
        <div className="info">
          <div className="bookTitleContainer">
            <div className="bookName">{bookName}</div>
            <div className="subtitle">{subtitle}</div>
          </div>
          <div className="detailsContainer">
            <div className="authorName">
              <b>Author Name: </b>
              {authorName}
            </div>
            <div className="publication">
              <b>Publisher:</b> {publisher}
            </div>
            <div className="date">
              <b>Published Year:</b> {publishedDate.split("-")[0]}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Book;
