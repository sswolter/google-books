import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./containers/HomePage/HomePage";
import "./App.css";
import BookList from "./containers/BookList/BookList";
import SearchProvider from "./context/SearchProvider";

function App() {
  return (
    <SearchProvider>
      <BrowserRouter>
        <div className="App">
          {/* <Nav /> */}

          <Routes>
            <Route
              path="/google-books/"
              element={<HomePage /*books={books}*/ />}
            />
            <Route
              path="/google-books/books"
              element={<BookList /*books={books}*/ />}
            />
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
