import Header from "./components/Header/Header";
import Homepage from "./components/Homepage/Homepage";
import HeaderLink from "./components/Header/HeaderLink";
import Cover from "./components/Cover/Cover";
import BookDetailPage from "./components/BookDetailPage/BookDetailPage";
import { FaUser } from "react-icons/fa";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import Booklist from "./components/BookList/Booklist";

function App() {
  return (
    <>
      <Header>
        <HeaderLink url="/aboutus" text="About Us" />
        <HeaderLink url="/features" text="features" />
        <HeaderLink url="/services" text="Services" />
        <HeaderLink url="/membership" text="Membership" />
      </Header>
      <Routes>
        <Route path="details/:isbn" element={<BookDetailPage />} />
        <Route path="/home" element={<Homepage />} />
        <Route path="Cover" element={<Cover />} />
      </Routes>
    </>
  );
}

export default App;
