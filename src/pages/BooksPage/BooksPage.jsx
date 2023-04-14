import styles from "./BooksPage.module.scss";
import { useEffect } from "react";
import { BooksContext } from "../../context/BooksProvider";
import BookCard from "../../components/BookCard/BookCard";

const BooksPage = ({ books }) => {
  console.log("BOOKS PAGE");
  console.log(books, "OUTCOME OF SEARCH");
  console.log(books.volumeInfo?.authors ?? "no authors");

  return (
    <div className={styles.Page}>
      <h6>"BooksPage"</h6>
      <div className={styles.List}>
        {books &&
          books.map((book) => {
            // console.log(book);

            return (
              <BookCard
                key={book.etag}
                title={book.volumeInfo?.title ?? "no title"}
                image={book.volumeInfo?.imageLinks?.thumbnail ?? "no image"}
                info={book.searchInfo?.textSnippet}
                description={
                  book.volumeInfo?.description ?? "no decription provided"
                }
                author={book.volumeInfo?.authors ?? "no author found"}
              />
            );
          })}
      </div>
    </div>
  );
};

export default BooksPage;
