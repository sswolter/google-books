import React, { useContext } from "react";
import { useState, useEffect } from "react";
import BookCard from "../../components/BookCard/BookCard";
import styles from "./BookList.module.scss";
import { SearchContext } from "../../context/SearchProvider";

const BookList = () => {
  const [books, setBooks] = useState([]);
  const { searchTerm } = useContext(SearchContext);

  const getBooks = async () => {
    const response = await fetch(
      `https://www.googleapis.com/books/v1/volumes?q=${searchTerm}`
    );
    const data = await response.json();
    // console.log(data.items, "data.item");
    setBooks(data.items);
  };

  console.log(books, "BOOKS");

  // fecthing when page loads or something
  useEffect(() => {
    getBooks(); // in here should be the search term
  }, [searchTerm]);

  return (
    <div>
      <h1>BookList Page</h1>
      <div className={styles.List}>
        {books.length === 0 ? (
          <p>searching...</p>
        ) : (
          books.map((book) => {
            return (
              <BookCard
                key={book.etag}
                id={book.id}
                title={book.volumeInfo?.title ?? "no title"}
                image={book.volumeInfo?.imageLinks?.thumbnail ?? "no image"}
                author={book.volumeInfo?.authors ?? "no author found"}
              />
            );
          })
        )}
      </div>
    </div>
  );
};

export default BookList;
