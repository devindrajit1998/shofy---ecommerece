import React from "react";
import { Link } from "react-router-dom";

export default function BottomNav() {
  return (
    <>
      <div className="tp-header-bottom tp-header-bottom-border d-none d-lg-block">
        <div className="container">
          <div className="tp-mega-menu-wrapper p-relative">
            <div className="row align-items-center">
              <div className="col-xl-3 col-lg-3">
                <div className="tp-header-category tp-category-menu tp-header-category-toggle">
                  <button className="tp-category-menu-btn tp-category-menu-toggle">
                    <span>
                      <svg
                        width={18}
                        height={14}
                        viewBox="0 0 18 14"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M0 1C0 0.447715 0.447715 0 1 0H15C15.5523 0 16 0.447715 16 1C16 1.55228 15.5523 2 15 2H1C0.447715 2 0 1.55228 0 1ZM0 7C0 6.44772 0.447715 6 1 6H17C17.5523 6 18 6.44772 18 7C18 7.55228 17.5523 8 17 8H1C0.447715 8 0 7.55228 0 7ZM1 12C0.447715 12 0 12.4477 0 13C0 13.5523 0.447715 14 1 14H11C11.5523 14 12 13.5523 12 13C12 12.4477 11.5523 12 11 12H1Z"
                          fill="currentColor"
                        />
                      </svg>
                    </span>
                    All Departments
                  </button>
                  <nav className="tp-category-menu-content">
                    <ul>
                      <li>
                        <a href="!#">
                          <span>
                            <svg
                              width={16}
                              height={17}
                              viewBox="0 0 16 17"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M5.90532 14.8316V12.5719C5.9053 11.9971 6.37388 11.5301 6.95443 11.5262H9.08101C9.66434 11.5262 10.1372 11.9944 10.1372 12.5719V12.5719V14.8386C10.1371 15.3266 10.5305 15.7254 11.0233 15.7368H12.441C13.8543 15.7368 15 14.6026 15 13.2035V13.2035V6.77525C14.9925 6.22482 14.7314 5.70794 14.2911 5.37171L9.44253 1.50496C8.59311 0.83168 7.38562 0.83168 6.5362 1.50496L1.70886 5.37873C1.26693 5.7136 1.00544 6.23133 1 6.78227V13.2035C1 14.6026 2.1457 15.7368 3.55899 15.7368H4.97671C5.48173 15.7368 5.89114 15.3315 5.89114 14.8316V14.8316"
                                stroke="currentColor"
                                strokeWidth="1.5"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              />
                            </svg>
                          </span>
                          New Arrivals
                        </a>
                      </li>
                    </ul>
                  </nav>
                </div>
              </div>
              <div className="col-xl-6 col-lg-6">
                <div className="main-menu menu-style-1">
                  <nav className="tp-main-menu-content">
                    <ul>
                      <li>
                        <Link to="/">Home</Link>
                      </li>
                      <li>
                        <Link to="/shop">Shop</Link>
                      </li>
                      <li className="has-dropdown has-mega-menu ">
                        <Link>Products</Link>
                        <ul className="tp-submenu tp-mega-menu mega-menu-style-2">
                          {/* first col */}
                          <li className="has-dropdown">
                            <a href="!#" className="mega-menu-title">
                              Shop Page
                            </a>
                            <ul className="tp-submenu">
                              <li>
                                <a href="shop-category.html">Only Categories</a>
                              </li>
                            </ul>
                          </li>
                          {/* third col */}
                          <li className="has-dropdown">
                            <a
                              href="product-details.html"
                              className="mega-menu-title"
                            >
                              Products
                            </a>
                            <ul className="tp-submenu">
                              <li>
                                <a href="product-details.html">
                                  Product Simple
                                </a>
                              </li>
                            </ul>
                          </li>
                          {/* third col */}
                          <li className="has-dropdown">
                            <a href="!#" className="mega-menu-title">
                              eCommerce
                            </a>
                            <ul className="tp-submenu">
                              <li>
                                <a href="cart.html">Shopping Cart</a>
                              </li>
                            </ul>
                          </li>
                          {/* second col */}
                          <li className="has-dropdown">
                            <a href="!#" className="mega-menu-title">
                              More Pages
                            </a>
                            <ul className="tp-submenu">
                              <li>
                                <a href="about.html">About</a>
                              </li>
                            </ul>
                          </li>
                        </ul>
                      </li>
                      <li>
                        <a href="coupon.html">Coupons</a>
                      </li>
                      <li >
                        <a href="!#">About</a>
                      </li>
                      <li>
                        <a href="!#">Contact</a>
                      </li>
                    </ul>
                  </nav>
                </div>
              </div>
              <div className="col-xl-3 col-lg-3">
                <div className="tp-header-contact d-flex align-items-center justify-content-end">
                  <div className="tp-header-contact-icon">
                    <span>
                      <svg
                        width={21}
                        height={20}
                        viewBox="0 0 21 20"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M1.96977 3.24859C2.26945 2.75144 3.92158 0.946726 5.09889 1.00121C5.45111 1.03137 5.76246 1.24346 6.01544 1.49057H6.01641C6.59631 2.05874 8.26011 4.203 8.35352 4.65442C8.58411 5.76158 7.26378 6.39979 7.66756 7.5157C8.69698 10.0345 10.4707 11.8081 12.9908 12.8365C14.1058 13.2412 14.7441 11.9219 15.8513 12.1515C16.3028 12.2459 18.4482 13.9086 19.0155 14.4894V14.4894C19.2616 14.7414 19.4757 15.0537 19.5049 15.4059C19.5487 16.6463 17.6319 18.3207 17.2583 18.5347C16.3767 19.1661 15.2267 19.1544 13.8246 18.5026C9.91224 16.8749 3.65985 10.7408 2.00188 6.68096C1.3675 5.2868 1.32469 4.12906 1.96977 3.24859Z"
                          stroke="currentColor"
                          strokeWidth={2}
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M12.936 1.23685C16.4432 1.62622 19.2124 4.39253 19.6065 7.89874"
                          stroke="currentColor"
                          strokeWidth={2}
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M12.936 4.59337C14.6129 4.92021 15.9231 6.23042 16.2499 7.90726"
                          stroke="currentColor"
                          strokeWidth={2}
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </span>
                  </div>
                  <div className="tp-header-contact-content">
                    <h5>Hotline:</h5>
                    <p>
                      <a href="tel:402-763-282-46">+(402) 763 282 46</a>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
