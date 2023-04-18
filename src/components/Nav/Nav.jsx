import { NavLink } from "react-router-dom";
import SearchBar from "../SearchBar/SearchBar";
import styles from "./Nav.module.scss";

const Nav = () => {
  return (
    <nav className={styles.Nav}>
      <NavLink to="/google-books" className={styles.Nav_Home}>
        <span>Book</span>Search
      </NavLink>
      {/* <NavLink to="/books">Books List</NavLink> */}
      <SearchBar />
    </nav>
  );
};

export default Nav;
