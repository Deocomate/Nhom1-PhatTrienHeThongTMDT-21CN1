import React from "react";

export default function ProductCardNoGrid({ product, index }) {
  const formatPrice = (price) => {
    return price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".") + " đ";
  };

  return (
    <div key={index} className="col-lg-12">
      <div className="ltn__product-item ltn__product-item-3">
        <div className="product-img">
          <a href="product-details.html">
            <img src={product.thumbnail} alt="#" />
          </a>
          {/* <div className="product-badge">
            <ul>
              <li className="sale-badge">New</li>
            </ul>
          </div> */}
        </div>
        <div className="product-info">
          <h2 className="product-title">
            <a href="product-details.html">{product.title}</a>
          </h2>
          <div className="product-price">
            <span>{formatPrice(product.price)}</span>
          </div>
          <div className="product-brief">
            <p>{product.description}</p>
          </div>
          <div className="product-hover-action">
            <ul>
              <li>
                <a
                  href="#"
                  title="Quick View"
                  data-bs-toggle="modal"
                  data-bs-target="#quick_view_modal"
                >
                  <i className="far fa-eye" />
                </a>
              </li>
              <li>
                <a
                  href="#"
                  title="Add to Cart"
                  data-bs-toggle="modal"
                  data-bs-target="#add_to_cart_modal"
                >
                  <i className="fas fa-shopping-cart" />
                </a>
              </li>
              <li>
                <a
                  href="#"
                  title="Wishlist"
                  data-bs-toggle="modal"
                  data-bs-target="#liton_wishlist_modal"
                >
                  <i className="far fa-heart" />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
