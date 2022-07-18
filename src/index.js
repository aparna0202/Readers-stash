import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./index.css";
import App from "./App";
import BookDetailPage from "./components/BookDetailPage/BookDetailPage";
import Cover from "./components/Cover/Cover";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<App />}></Route>
        <Route path="BookDetails/:isbn" element={<BookDetailPage />} />
        <Route path="Cover" element={<Cover />} />
      </Routes>
    </Router>
  </React.StrictMode>
);
