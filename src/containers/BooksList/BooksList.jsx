import BookCard from "../../components/BookCard/BookCard";
import styles from "./BooksList.module.scss";

const BooksList = () => {
  return (
    <>
      <h6>"BooksList"</h6>
      <div className={styles.List}>
        <BookCard />
        <BookCard />
        <BookCard />
      </div>
    </>
  );
};

export default BooksList;
