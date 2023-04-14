import { NavLink } from "react-router-dom";
const Nav = () => {
  return (
    <nav>
      <NavLink to="/">Home</NavLink>
      <NavLink to="/books">books</NavLink>
    </nav>
  );
};

export default Nav;
