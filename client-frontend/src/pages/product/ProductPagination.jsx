import React from "react";

export const ProductPagination = ({currentPage, totalPages, onPageChange}) => {
    const pageNumbers = [];

    for (let i = 1; i <= totalPages; i++) {
        pageNumbers.push(i);
    }
    return (<div className="ltn__pagination-area text-center">
        <div className="ltn__pagination">
            <ul>
                {currentPage > 1 && (<li>
                    <a
                        href="#"
                        onClick={(e) => {
                            e.preventDefault();
                            onPageChange(currentPage - 1);
                        }}
                    >
                        <i className="fas fa-angle-double-left"/>
                    </a>
                </li>)}
                {currentPage > 1 && (<li>
                    <a
                        href="#"
                        onClick={(e) => {
                            e.preventDefault();
                            onPageChange(currentPage - 1);
                        }}
                    >
                        {currentPage - 1}
                    </a>
                </li>)}
                <li className="active">
                    <a href="#">{currentPage}</a>
                </li>
                {currentPage < totalPages && (<li>
                    <a
                        href="#"
                        onClick={(e) => {
                            e.preventDefault();
                            onPageChange(currentPage + 1);
                        }}
                    >
                        {currentPage + 1}
                    </a>
                </li>)}
                {currentPage < totalPages && (<li>
                    <a
                        href="#"
                        onClick={(e) => {
                            e.preventDefault();
                            onPageChange(currentPage + 1);
                        }}
                    >
                        <i className="fas fa-angle-double-right"/>
                    </a>
                </li>)}
            </ul>
        </div>
    </div>);
}
