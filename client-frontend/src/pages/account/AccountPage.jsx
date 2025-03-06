import { useAuth } from "@/auth/AuthProvider";
import BreadCrumbDefault from "@/components/breadcrumbs/BreadCrumbDefault";
import React from "react";
import AccountDetail from "./AccountDetail";
export default function AccountPage() {

  let { user, logout } = useAuth()

  return (
    <>
      <BreadCrumbDefault name="Tài khoản của tôi"></BreadCrumbDefault>
      <div className="liton__wishlist-area pb-70">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              {/* PRODUCT TAB AREA START */}
              <div className="ltn__product-tab-area">
                <div className="container">
                  <div className="row">
                    <div className="col-lg-4">
                      <div className="ltn__tab-menu-list mb-50">
                        <div className="nav">
                          <a
                            className="active show"
                            data-bs-toggle="tab"
                            href="#liton_tab_1_1"
                          >
                            Dashboard <i className="fas fa-home" />
                          </a>
                          <a data-bs-toggle="tab" href="#liton_tab_1_2">
                            Orders <i className="fas fa-file-alt" />
                          </a>
                          <a data-bs-toggle="tab" href="#liton_tab_1_5">
                            Chi tiết tài khoản <i className="fas fa-user" />
                          </a>
                          <a href="#" onClick={() => { logout() }}>
                            Đăng xuất <i className="fas fa-sign-out-alt" />
                          </a>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-8">
                      <div className="tab-content">

                        <div className="tab-pane fade active show"
                          id="liton_tab_1_1">
                          <div className="ltn__myaccount-tab-content-inner">
                            <p>
                              Hello <strong>{user.fullName}</strong> (not{" "}
                              <strong>{user.fullName}</strong>?{" "}
                              <small>
                                <a href="">Log out</a>
                              </small>{" "}
                              )
                            </p>
                            <p>
                              From your account dashboard you can view your{" "}
                              <span>recent orders</span>, manage your{" "}
                              <span>shipping and billing addresses</span>, and{" "}
                              <span>
                                edit your password and account details
                              </span>
                              .
                            </p>
                          </div>
                        </div>
                        <div className="tab-pane fade" id="liton_tab_1_2">
                          <div className="ltn__myaccount-tab-content-inner">
                            <div className="table-responsive">
                              <table className="table">
                                <thead>
                                  <tr>
                                    <th>Order</th>
                                    <th>Date</th>
                                    <th>Status</th>
                                    <th>Total</th>
                                    <th>Action</th>
                                  </tr>
                                </thead>
                                <tbody>
                                  <tr>
                                    <td>1</td>
                                    <td>Jun 22, 2019</td>
                                    <td>Pending</td>
                                    <td>$3000</td>
                                    <td>
                                      <a href="cart.html">View</a>
                                    </td>
                                  </tr>
                                  <tr>
                                    <td>2</td>
                                    <td>Nov 22, 2019</td>
                                    <td>Approved</td>
                                    <td>$200</td>
                                    <td>
                                      <a href="cart.html">View</a>
                                    </td>
                                  </tr>
                                  <tr>
                                    <td>3</td>
                                    <td>Jan 12, 2020</td>
                                    <td>On Hold</td>
                                    <td>$990</td>
                                    <td>
                                      <a href="cart.html">View</a>
                                    </td>
                                  </tr>
                                </tbody>
                              </table>
                            </div>
                          </div>
                        </div>
                        <AccountDetail user={user}></AccountDetail>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* PRODUCT TAB AREA END */}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
