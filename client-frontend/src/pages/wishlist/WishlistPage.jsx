import BreadCrumbDefault from "@/components/breadcrumbs/BreadCrumbDefault";
import React from "react";

export function WishlistPage() {
  return (
    <>
      <BreadCrumbDefault name="Wishlist"></BreadCrumbDefault>
      <div className="liton__wishlist-area mb-105">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="shoping-cart-inner">
                <div className="shoping-cart-table table-responsive">
                  <table className="table">
                    {/* <thead>
                              <th class="cart-product-remove">X</th>
                              <th class="cart-product-image">Image</th>
                              <th class="cart-product-info">Title</th>
                              <th class="cart-product-price">Price</th>
                              <th class="cart-product-quantity">Quantity</th>
                              <th class="cart-product-subtotal">Subtotal</th>
                          </thead> */}
                    <tbody>
                      <tr>
                        <td className="cart-product-remove">x</td>
                        <td className="cart-product-image">
                          <a href="product-details.html">
                            <img src="assets/img/product//1.png" alt="#" />
                          </a>
                        </td>
                        <td className="cart-product-info">
                          <h4>
                            <a href="product-details.html">
                              Digital Stethoscope
                            </a>
                          </h4>
                        </td>
                        <td className="cart-product-price">$85.00</td>
                        <td className="cart-product-stock">In Stock</td>
                        <td className="cart-product-add-cart">
                          <a
                            className="submit-button-1"
                            href="#"
                            title="Add to Cart"
                            data-bs-toggle="modal"
                            data-bs-target="#add_to_cart_modal"
                          >
                            Add to Cart
                          </a>
                        </td>
                      </tr>
                      <tr>
                        <td className="cart-product-remove">x</td>
                        <td className="cart-product-image">
                          <a href="product-details.html">
                            <img src="assets/img/product//2.png" alt="#" />
                          </a>
                        </td>
                        <td className="cart-product-info">
                          <h4>
                            <a href="product-details.html">Thermometer Gun</a>
                          </h4>
                        </td>
                        <td className="cart-product-price">$89.00</td>
                        <td className="cart-product-stock">In Stock</td>
                        <td className="cart-product-add-cart">
                          <a
                            className="submit-button-1"
                            href="#"
                            title="Add to Cart"
                            data-bs-toggle="modal"
                            data-bs-target="#add_to_cart_modal"
                          >
                            Add to Cart
                          </a>
                        </td>
                      </tr>
                      <tr>
                        <td className="cart-product-remove">x</td>
                        <td className="cart-product-image">
                          <a href="product-details.html">
                            <img src="assets/img/product//4.png" alt="#" />
                          </a>
                        </td>
                        <td className="cart-product-info">
                          <h4>
                            <a href="product-details.html">Tail Light Lens</a>
                          </h4>
                        </td>
                        <td className="cart-product-price">$149.00</td>
                        <td className="cart-product-stock">In Stock</td>
                        <td className="cart-product-add-cart">
                          <a
                            className="submit-button-1"
                            href="#"
                            title="Add to Cart"
                            data-bs-toggle="modal"
                            data-bs-target="#add_to_cart_modal"
                          >
                            Add to Cart
                          </a>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
