import "./App.css";
import BooksPage from "./pages/BooksPage/BooksPage";
import HomePage from "./pages/HomePage/HomePage";
import Nav from "./components/Nav/Nav";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import BooksProvider from "./context/BooksProvider";
import { useEffect, useState } from "react";

function App() {
  console.log("APP PAGE");

  const [books, setBooks] = useState([]);

  const getBooks = async (searchTerm) => {
    const response = await fetch(
      `https://www.googleapis.com/books/v1/volumes?q=${searchTerm}`
    );

    const data = await response.json();
    // console.log(data, "this is data");
    // console.log(data.items, "this is the actual array of books data");
    setBooks(data.items.flat()); // sets books as array of 10 results
  };

  useEffect(() => {
    getBooks("may gibbs"); // search term
  }, []);

  return (
    // <BooksProvider>
    <BrowserRouter>
      <div className="App">
        <Nav />
        <h6>"main app page"</h6>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/books" element={<BooksPage books={books} />} />
          {/* passing books down to books page */}
        </Routes>
      </div>
    </BrowserRouter>
    // </BooksProvider>
  );
}

export default App;
