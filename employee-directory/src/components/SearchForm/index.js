import React from "react";
import "./style.css";

// Using the datalist element we can create autofill suggestions based on the props.employees array
function SearchForm(props) {
  return (
    <form className="search">
      <div className="col-3 form-group">
        <input
          value={props.search}
          onChange={props.handleInputChange}
          className="form-control"
          placeholder="Search employees by name"
          id="employee"
        />
        <button
          type="submit"
          onClick={props.handleFormSubmit}
          className="btn btn-success"
        >
          Search
        </button>
      </div>
    </form>
  );
}

export default SearchForm;
