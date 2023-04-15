import React, { useContext, useState } from "react";
import { SearchContext } from "../../context/SearchProvider";
import { useNavigate } from "react-router-dom";

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
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={searchInput}
        onChange={handleChange}
        required
        placeholder="Search "
      />
      <input type="submit" value="search" />
    </form>
  );
};

export default SearchBar;
