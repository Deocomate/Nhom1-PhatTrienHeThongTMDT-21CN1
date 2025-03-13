import React from "react";

export default function SearchObjects() {
  return (
    <>
      <div className="widget ltn__search-widget">
        <h4 className="ltn__widget-title ltn__widget-title-border-2">
          Tìm kiếm log
        </h4>
        <form action="#">
          <input
            type="text"
            name="search"
            placeholder="Nhập từ khóa tìm kiếm ..."
          />
          <button type="submit">
            <i className="fas fa-search" />
          </button>
        </form>
      </div>
    </>
  );
}
