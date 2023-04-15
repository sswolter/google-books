import React, { useEffect, useState, useContext } from "react";
import { useParams } from "react-router-dom";
import { SearchContext } from "../../context/SearchProvider";

const BookPage = ({ books }) => {
  const { searchTerm } = useContext(SearchContext);
  console.log(useParams());
  const { id } = useParams();
  console.log(books);
  console.log(books2, "books 2 from book page");
  useEffect(() => {
    if (books && books.length > 0) {
      const foundBook = books.find((book) => book.id === id);
      setBook(foundBook);
    }
  }, [books, id]);

  return (
    <div>
      <h1>{book?.volumeInfo?.title ?? "No title found"}</h1>
      <img
        src={
          book?.volumeInfo?.imageLinks?.thumbnail ??
          "https://placekitten.com/200/300"
        }
        alt=""
      />
    </div>
  );
};

export default BookPage;
