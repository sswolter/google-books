import { NavLink } from "react-router-dom";
import SearchBar from "../SearchBar/SearchBar";
import styles from "./Nav.module.scss";

const Nav = () => {
  return (
    <nav className={styles.Nav}>
      <NavLink to="/" className={styles.Nav_Home}>
        <span>Google</span>Books
      </NavLink>
      {/* <NavLink to="/books">Books List</NavLink> */}
      <SearchBar />
    </nav>
  );
};

export default Nav;
