import React, { useContext, useState, useEffect } from "react";
import { SearchContext } from "../../context/SearchProvider";
import { useNavigate } from "react-router-dom";
import styles from "./SearchBar.module.scss";

const SearchBar = () => {
  const [searchInput, setSearchInput] = useState("");
  const { searchTerm, setSearchTerm } = useContext(SearchContext);
  const navigate = useNavigate();

  const handleChange = (e) => {
    // console.log(e.target.value);
    setSearchInput(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSearchTerm(searchInput);
    navigate("/books");
    setSearchInput("");
  };

  // console.log(searchTerm, "SEARCH");
  return (
    <form onSubmit={handleSubmit} className={styles.Form}>
      <input
        className={styles.Form_Input}
        type="text"
        value={searchInput}
        onChange={handleChange}
        required
        placeholder="Search "
      />
      <button type="submit" className={styles.Form_Button}>
        <img
          src="./src/assets/search-svgrepo-com.svg"
          alt=""
          className={styles.Form_Button_Img}
        />
      </button>
      {/* <input type="submit" value="search" /> */}
    </form>
  );
};

export default SearchBar;
