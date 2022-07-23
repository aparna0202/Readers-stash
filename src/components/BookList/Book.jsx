import React from "react";
import BookDetailPage from "../BookDetailPage/BookDetailPage";
import "./Book.css";
const Book = (props) => {
  // const props = {
  //   authorName: "DK",
  //   publishedDate: "2020-03-05",
  //   bookName: "The Physics Book",
  //   publisher: "Dorling Kindersley Ltd",
  //   description:
  //     "Explore the laws and theories of physics in this accessible introduction to the forces that shape our Universe, our planet, and our everyday lives. Using a bold, graphic-led approach The Physics Book sets out more than 80 key concepts and discoveries that have defined the subject and influenced our technology since the beginning of time. With the focus firmly on unpicking the thought behind each theory - as well as exploring when and how each idea and breakthrough came about - seven themed chapt...",
  //   subtitle: "Big Ideas Simply Explained",
  //   imageLinks: {
  //     smallThumbnail:
  //       "http://books.google.com/books/content?id=3FfDDwAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api",
  //     thumbnail:
  //       "http://books.google.com/books/content?id=3FfDDwAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api",
  //   },
  //   pageCount: 336,
  // };
  return (
    <div
      className="book"
      onClick={() =>
        window.open(`/details/${props.industryIdentifiers}`, "_blank")
      }
    >
      <img
        src={props.imageLinks.thumbnail}
        alt={`${props.bookName} Thumbnail`}
        className="bookImage"
      />
      <div className="info">
        <div className="bookTitleContainer">
          <div className="bookName">{props.bookName}</div>
          <div className="subtitle">{props.subtitle}</div>
        </div>
        <div className="detailsContainer">
          <div className="authorName">
            <b>Author Name: </b>
            {props.authorName}
          </div>
          <div className="publication">
            <b>Publisher:</b> {props.publisher}
          </div>
          <div className="date">
            <b>Published Year:</b> {props.publishedDate.split("-")[0]}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Book;
