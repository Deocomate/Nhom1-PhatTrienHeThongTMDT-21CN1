import React, {useState} from "react";
import {redirect} from "next/navigation";

export const SearchProductWidget = () => {

    let [query, setQuery] = useState("")

    let handleSearch = async (e) => {
        e.preventDefault()
        redirect("/products?title=" + query)
    }

    return (<>
        <div className="widget ltn__search-widget">
            <h4 className="ltn__widget-title ltn__widget-title-border">
                Tìm kiếm sản phẩm
            </h4>
            <form action="#" onSubmit={handleSearch}>
                <input
                    type="text"
                    name="search"
                    value={query}
                    onInput={(e) => setQuery(e.target.value)}
                    placeholder="Tìm kiếm theo từ khoá..."
                />
                <button type="submit">
                    <i className="fas fa-search"/>
                </button>
            </form>
        </div>
    </>)
}
