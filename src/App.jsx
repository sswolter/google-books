import { useEffect, useState, useContext } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Nav from "./components/Nav/Nav";
import HomePage from "./containers/HomePage/HomePage";
import "./App.css";
import BookList from "./containers/BookList/BookList";
import BookPage from "./containers/BookPage/BookPage";
import SearchProvider from "./context/SearchProvider";
import { SearchContext } from "./context/SearchProvider";

// fetch from api
// set state for books

function App() {
  // const { searchTerm } = useContext(SearchContext);

  // const getBooks = async () => {
  //   const response = await fetch(
  //     `https://www.googleapis.com/books/v1/volumes?q=${searchTerm}`
  //   );
  //   const data = await response.json();
  //   // console.log(data.items, "data.item");
  //   setBooks(data.items.flat());
  // };

  // console.log(books, "BOOKS");

  // // fecthing when page loads or something
  // useEffect(() => {
  //   getBooks(); // in here should be the search term
  // }, [searchTerm]);

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
