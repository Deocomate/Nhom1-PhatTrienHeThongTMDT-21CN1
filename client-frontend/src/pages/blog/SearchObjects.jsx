import React, {useState} from "react";
import {redirect} from "next/navigation";

export default function SearchObjects() {

    let [query, setQuery] = useState("")

    let handleSearch = async (e) => {
        e.preventDefault()
        redirect("/blog?title=" + query)
    }

    return (<>
        <div className="widget ltn__search-widget">
            <h4 className="ltn__widget-title ltn__widget-title-border-2">
                Tìm kiếm Blog
            </h4>
            <form action="#" onSubmit={handleSearch}>
                <input
                    type="text"
                    name="search"
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                    placeholder="Nhập từ khóa tìm kiếm ..."
                />
                <button type="submit">
                    <i className="fas fa-search"/>
                </button>
            </form>
        </div>
    </>);
}
