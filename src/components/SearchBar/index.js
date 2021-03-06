import React from "react";
import "./style.css";



const SearchBar = (props) => {
  return (
    <nav className="navbar navbar-light bg-light justify-content-center">
      <form className="form-inline m-2" onSubmit={props.handleFormSubmit}>
        <input
          className="form-control"
          value={props.value}
          name="search"

          // make it dynamic
          onChange={props.handleInputChange}
          
          type="search"
          placeholder="search..."
        />
      </form>
    </nav>
  );
};

export default SearchBar;
