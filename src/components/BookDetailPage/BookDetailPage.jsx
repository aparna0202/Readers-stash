import React from "react";
import "./BookDetailPage.css";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { API_URL } from "../../common/api";
import { useState } from "react";

const BookDetailPage = () => {
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

  let { isbn } = useParams();
  const [bookData, setBookData] = useState([]);
  const [isLoaded, setIsLoaded] = useState(false);
  useEffect(() => {
    setIsLoaded(true);
    fetch(`${API_URL}?q=isbn:${isbn}`).then((result) =>
      result
        .json()
        .then((result) => result.items)
        .then((result) => setBookData(result))
    );
  }, [isbn]);
  const Shimmer = () => {
    return <div className="shimmer-animation skeleton">shimmer Book</div>;
  };

  return isLoaded ? (
    <>
      {bookData.map((result) => (
        <div className="bookDetailPage">
          <div className="leftContainer">
            <div className="titleContainer">
              <h4 className="title">{result.volumeInfo.title}</h4>
              <h6 className="subTitle">{result.volumeInfo.subtitle}</h6>
            </div>
            <p className="description">
              <b>Description:</b>
              {result.volumeInfo.description}
            </p>
            <div className="otherDetails">
              <div className="authorName">
                <b>Author Name: </b>
                {result.volumeInfo.authors}
              </div>
              <div className="pubisherName">
                <b>Publisher: </b>
                {result.volumeInfo.publisher}
              </div>
              <div className="publishedDate">
                <b>Published Date: </b>
                {result.volumeInfo.publishedDate}
              </div>
              <div className="pageCount">
                <b>Page Count: </b>
                {result.volumeInfo.pageCount}
              </div>
              <div className="ratings">
                <b>Rating:</b> {result.volumeInfo.averageRating}
              </div>
            </div>
          </div>
          <div className="rightContainer">
            <img
              src={result.volumeInfo.imageLinks.thumbnail}
              alt=""
              className="bookCover"
            />
          </div>
        </div>
      ))}
    </>
  ) : (
    <Shimmer />
  );
};

export default BookDetailPage;
