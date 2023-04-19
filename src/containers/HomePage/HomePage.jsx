import styles from "./HomePage.module.scss";
import SearchBar from "../../components/SearchBar/SearchBar";

const HomePage = () => {
  return (
    <div className={styles.Wrapper}>
      <div className={styles.Page}>
        <div className={styles.Page_Title}>
          <h1>
            <span>Book</span>Search
          </h1>
        </div>
        <p>can search for books</p>
        <div className={styles.Search}>
          <SearchBar className={styles.SearchBar} />
          <img
            src="/assets/autumn-of-reading-books-and-people-svgrepo-com.svg"
            alt=""
            className={styles.Page_Img}
          />
        </div>
      </div>
    </div>
  );
};

export default HomePage;
