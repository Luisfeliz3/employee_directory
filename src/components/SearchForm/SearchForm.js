import React from "react";

function SearchForm(props) {
  console.log(props);
  return (
    <form>
      <div className="form-group">
        <label htmlFor="search"></label>
        <input
          onChange={props.handleInputChange}
          value={props.searchTerm}
          name="searchTerm"
          type="text"
          className="form-control col-2 mx-auto"
          placeholder="Search"
          id="search"
        />
      
      </div>
    </form>
  );
}

export default SearchForm;
