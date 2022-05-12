import React from "react";

import "./search-bar.scss";

const SearchBar = ({ searchText, setSearchTerm }) => {
  const handleSearchTextChange = (event) => {
    setSearchTerm(event.target.value);
  };

  return (
    <div className="searchbar">
      <input
        className="searchbar__input"
        value={searchText}
        onChange={handleSearchTextChange}
        type="search"
        placeholder="Search by name, email or role"
      ></input>
    </div>
  );
};

export default SearchBar;
