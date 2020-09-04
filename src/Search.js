import React from "react";

export default function Search() {
  return (
    <div className="search-form">
      <input
        type="search"
        className="form-control"
        id="city-input"
        placeholder="Enter city here"
        autoComplete="off"
      />
    </div>
  );
}
