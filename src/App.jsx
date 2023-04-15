import { useEffect, useState, useContext } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Nav from "./components/Nav/Nav";
import HomePage from "./containers/HomePage/HomePage";
import "./App.css";
import BookList from "./containers/BookList/BookList";
import BookPage from "./containers/BookPage/BookPage";
import SearchProvider from "./context/SearchProvider";
import { SearchContext } from "./context/SearchProvider";

function App() {
  return (
    <SearchProvider>
      <BrowserRouter>
        <div className="App">
          <Nav />

          <Routes>
            <Route path="/" element={<HomePage /*books={books}*/ />} />
            <Route path="/books" element={<BookList /*books={books}*/ />} />
            <Route path="/books/:id" element={<BookPage />} />
          </Routes>
        </div>
      </BrowserRouter>
    </SearchProvider>
  );
}

export default App;

// clear search after submit
// display search results for SearchTerm
// if search term doesnt exist > prevent api call
