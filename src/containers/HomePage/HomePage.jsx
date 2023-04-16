import React from "react";
import { useContext } from "react";
import styles from "./HomePage.module.scss";

const HomePage = () => {
  return (
    <div className={styles.Page}>
      <div className={styles.Page_Title}>
        <h1 className={styles.Page_Title_Main}>Google</h1>
        <h1>Books</h1>
      </div>

      <p>can search for books</p>
      <img
        src="./src/assets/autumn-of-reading-books-and-people-svgrepo-com.svg"
        alt=""
        className={styles.Page_Img}
      />
    </div>
  );
};

export default HomePage;
