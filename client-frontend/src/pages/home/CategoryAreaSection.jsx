import Link from "next/link";
import React from "react";

export const CategoryAreaSection = ({categories}) => {
    return (<>
        {/* CATEGORY AREA START */}
        <div className="ltn__category-area section-bg-1-- pt-30 pb-50">
            <div className="container">
                <div className="row ltn__category-slider-active-six slick-arrow-1 border-bottom">
                    {categories.length > 0 ? (categories.map((category) => (<div className="col-12" key={category.id}>
                        <div className="ltn__category-item ltn__category-item-6 text-center">
                            <div className="ltn__category-item-img">
                                <Link href={`/category/${category.slug}`}>
                                    <img src={category.thumbnail} alt={category.name}
                                         style={{width: '50px', height: '50px'}}/>
                                </Link>
                            </div>
                            <div className="ltn__category-item-name">
                                <h6>
                                    <Link href={`/category/${category.slug}`}>{category.name}</Link>
                                </h6>
                            </div>
                        </div>
                    </div>))) : (<div>Loading categories...</div> // Or a "No categories found" message
                    )}
                </div>
            </div>
        </div>
        {/* CATEGORY AREA END */}
    </>)
}
