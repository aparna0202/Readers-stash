import Header from "./components/Header/Header";
import Homepage from "./components/Homepage/Homepage";
import HeaderLink from "./components/Header/HeaderLink";
import BookDetailPage from "./components/BookDetailPage/BookDetailPage";
import { Routes, Route } from "react-router-dom";
import "./App.css";

import WishlistPage from "./components/WishlistPage/WishlistPage";
import SearchResults from "./components/SearchResults/SearchResults";

function App() {
  return (
    <>
      <Header>
        <HeaderLink url="/aboutus" text="About Us" />
        <HeaderLink url="/features" text="features" />
        <HeaderLink url="/wishlist" text="Wishlist" />
        <HeaderLink url="/membership" text="Membership" />
      </Header>
      <Routes>
        <Route path="details/:isbn" element={<BookDetailPage />} />
        <Route path="/" element={<Homepage />} />
        <Route path="/search" element={<SearchResults />} />
        <Route path="/wishlist" element={<WishlistPage />} />
      </Routes>
    </>
  );
}

export default App;
