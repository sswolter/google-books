import { NavLink } from "react-router-dom";
import SearchBar from "../SearchBar/SearchBar";

const Nav = () => {
  return (
    <nav>
      <NavLink to="/">Home </NavLink>
      {/* <NavLink to="/books">Books List</NavLink> */}
      <SearchBar />
    </nav>
  );
};

export default Nav;
