import React, { useContext } from "react";
import { useState, useEffect } from "react";
import BookCard from "../../components/BookCard/BookCard";
import styles from "./BookList.module.scss";
import { SearchContext } from "../../context/SearchProvider";
import Nav from "../../components/Nav/Nav";
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

  useEffect(() => {
    getBooks();
  }, [searchTerm]);

  // console.log(searchTerm, "SEARCH TERM");

  return (
    <div>
      <Nav />
      <div className={styles.Page}>
        {books === undefined ? (
          <p className={styles.Page_Results}>No books found</p>
        ) : books.length < 1 ? (
          <p className={styles.Page_Results}>Searching..</p>
        ) : (
          <div>
            <p className={styles.Page_Results}>Results for "{searchTerm}"</p>
            <div className={styles.Grid}>
              {books.map((book) => {
                return (
                  <div className={styles.Grid_Item} key={book.id}>
                    <BookCard
                      title={book.volumeInfo?.title ?? "no title"}
                      image={
                        book.volumeInfo?.imageLinks?.thumbnail ??
                        "/assets/x-square-svgrepo-com.svg"
                      }
                      author={
                        book.volumeInfo.authors === undefined
                          ? "No author found"
                          : book?.volumeInfo?.authors.join(", ")
                      }
                      snippet={
                        book?.searchInfo?.textSnippet ??
                        "Description unavailable"
                      }
                      description={
                        book?.volumeInfo?.description ??
                        "Description unavailable"
                      }
                      date={book?.volumeInfo?.publishedDate ?? "No year found"}
                      publisher={
                        book?.volumeInfo?.publisher ?? "No publisher found"
                      }
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
