import Header from "./components/Header/Header";
import Homepage from "./components/Homepage/Homepage";
import HeaderLink from "./components/Header/HeaderLink";
import BookDetailPage from "./components/BookDetailPage/BookDetailPage";
import { FaUser } from "react-icons/fa";
import "./App.css";

function App() {
  return (
    <>
      {/* <Header>
        <HeaderLink url="/aboutus" text="About Us" />
        <HeaderLink url="/features" text="features" />
        <HeaderLink url="/services" text="Services" />
        <HeaderLink url="/membership" text="Membership" />
      </Header> */}
      <Homepage />
      <BookDetailPage />
    </>
  );
}

export default App;
