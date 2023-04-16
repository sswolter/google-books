import React, { useContext } from "react";
import { useState, useEffect } from "react";
import BookCard from "../../components/BookCard/BookCard";
import styles from "./BookList.module.scss";
import { SearchContext } from "../../context/SearchProvider";

const BookList = () => {
  const [books, setBooks] = useState([]);
  const { searchTerm } = useContext(SearchContext);

  const getBooks = async () => {
    if (searchTerm === "") {
      console.log("page refreshed");
    } else {
      const response = await fetch(
        `https://www.googleapis.com/books/v1/volumes?q=${searchTerm}`
      );
      const data = await response.json();
      // console.log(data.items, "data.item");
      setBooks(data.items);
    }
  };

  console.log(books, "BOOKS");

  useEffect(() => {
    getBooks(); // in here should be the search term
  }, [searchTerm]);

  // console.log(searchTerm, "SEARCH TERM");

  return (
    <div>
      <div className={styles.Page}>
        {books === undefined ? (
          <p>No books found</p>
        ) : books.length < 1 ? (
          <p>searching..</p>
        ) : (
          <div>
            <p>Results for {searchTerm}</p>
            <div className={styles.Grid}>
              {books.map((book) => {
                return (
                  <div className={styles.Grid_Item}>
                    <BookCard
                      key={book.etag}
                      id={book.id}
                      title={book.volumeInfo?.title ?? "no title"}
                      image={
                        book.volumeInfo?.imageLinks?.thumbnail ?? "no image"
                      }
                      author={book.volumeInfo?.authors ?? "no author found"}
                    />
                  </div>
                );
              })}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default BookList;
