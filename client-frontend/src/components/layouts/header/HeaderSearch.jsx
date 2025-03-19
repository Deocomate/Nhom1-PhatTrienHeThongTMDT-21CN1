import React, {useState} from "react";
import {router} from "next/client";
import {redirect} from "next/navigation";

export const HeaderSearch = () => {
    let [query, setQuery] = useState("")

    let handleSearch = async (e) => {
        e.preventDefault()
        redirect("/products?title=" + query)
    }

    return (<>
        <div className="header-search-2">
            <form id="#123" method="get" onSubmit={handleSearch}>
                <input
                    type="text"
                    name="search"
                    value={query}
                    onInput={(e) => setQuery(e.target.value)}
                    placeholder="Tìm kiếm sản phẩm..."
                />
                <button type="submit">
                    <span>
                        <i className="icon-search"/>
                    </span>
                </button>
            </form>
        </div>
    </>)
}
