import React from "react";

export default function SearchObjects() {
  return (
    <>
      <div className="widget ltn__search-widget">
        <h4 className="ltn__widget-title ltn__widget-title-border-2">
          Search Objects
        </h4>
        <form action="#">
          <input
            type="text"
            name="search"
            placeholder="Search your keyword..."
          />
          <button type="submit">
            <i className="fas fa-search" />
          </button>
        </form>
      </div>
    </>
  );
}
