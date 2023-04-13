import BooksList from "../../containers/BooksList/BooksList";
import styles from "./BooksPage.module.scss";

const BooksPage = () => {
  return (
    <div className={styles.Page}>
      <h6>"BooksPage"</h6>
      <BooksList />
    </div>
  );
};

export default BooksPage;
