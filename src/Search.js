import React from "react";
import "./Search.css";

export default function Search() {
  return (
    <div className="Search">
      <div class="row">
        <input
          type="search"
          class="form-control search-bar"
          id="city-input"
          placeholder="Type city"
          autocomplete="off"
        />
      </div>
      <div class="row">
        <div class=" d-md-block ">
          <button class=" btn-button" type="submit" value="search" id="submitCity">
            Search
          </button>
          <button class=" btn-button" type="button" id="requestLocation">
            Current city
          </button>
        </div>
      </div>
    </div>
  );
}