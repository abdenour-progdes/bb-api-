import React from "react";

const SearchBar = (props) => {
  return (
    <form className="form-inline float-right" onSubmit={props.getSearch}>
      <input
        type="text"
        placeholder="search a character"
        className="form-control"
        onChange={props.onSearch}
        value={props.search}
      />
    </form>
  );
};

export default SearchBar;
