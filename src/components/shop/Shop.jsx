import React from "react";
import Layout from "../layout/Layout";
import Breadcum from "../common/Breadcum";
import ProductCard from "../common/ProductCard";
import Pagination from "../common/Pagination";
import Footer from "../common/Footer";

export default function Shop() {
  return (
    <>
      <Layout />
      <Breadcum name="Shop Page" />

      <section class="tp-shop-area pb-120">
        <div class="container container-shop">
          <div class="row">
            <div class="col-xl-2 col-lg-3">
              <div className="tp-shop-sidebar mr-10">
                
                <div className="tp-shop-widget mb-50">
                  <h3 className="tp-shop-widget-title">Product Status</h3>
                  <div className="tp-shop-widget-content">
                    <div className="tp-shop-widget-checkbox">
                      <ul className="filter-items filter-checkbox">
                        <li className="filter-item checkbox">
                          <input id="on_sale" type="checkbox" />
                          <label htmlFor="on_sale">On sale</label>
                        </li>
                        <li className="filter-item checkbox">
                          <input id="in_stock" type="checkbox" />
                          <label htmlFor="in_stock">In Stock</label>
                        </li>
                      </ul>
                      {/* .filter-items */}
                    </div>
                  </div>
                </div>
                {/* categories */}
                <div className="tp-shop-widget mb-50">
                  <h3 className="tp-shop-widget-title">Categories</h3>
                  <div className="tp-shop-widget-content">
                    <div className="tp-shop-widget-categories">
                      <ul>
                        <li>
                          <a href="#">
                            Leather <span>10</span>
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            Classic Watch <span>18</span>
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            Leather Man Wacth <span>22</span>
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            Trending Watch <span>17</span>
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            Google <span>22</span>
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            Woman Wacth <span>14</span>
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            Tables <span>19</span>
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            Electronics <span>29</span>
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            Phones <span>05</span>
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            Grocery <span>14</span>
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                {/* color */}
                <div className="tp-shop-widget mb-50">
                  <h3 className="tp-shop-widget-title">Filter by Color</h3>
                  <div className="tp-shop-widget-content">
                    <div className="tp-shop-widget-checkbox-circle-list">
                      <ul>
                        <li>
                          <div className="tp-shop-widget-checkbox-circle">
                            <input type="checkbox" id="red" />
                            <label htmlFor="red">Red</label>
                            <span
                              data-bg-color="#FF401F"
                              className="tp-shop-widget-checkbox-circle-self"
                            />
                          </div>
                          <span className="tp-shop-widget-checkbox-circle-number">
                            8
                          </span>
                        </li>
                        <li>
                          <div className="tp-shop-widget-checkbox-circle">
                            <input type="checkbox" id="dark_blue" />
                            <label htmlFor="dark_blue">Dark Blue</label>
                            <span
                              data-bg-color="#4666FF"
                              className="tp-shop-widget-checkbox-circle-self"
                            />
                          </div>
                          <span className="tp-shop-widget-checkbox-circle-number">
                            14
                          </span>
                        </li>
                        <li>
                          <div className="tp-shop-widget-checkbox-circle">
                            <input type="checkbox" id="oragnge" />
                            <label htmlFor="oragnge">Orange</label>
                            <span
                              data-bg-color="#FF9E2C"
                              className="tp-shop-widget-checkbox-circle-self"
                            />
                          </div>
                          <span className="tp-shop-widget-checkbox-circle-number">
                            18
                          </span>
                        </li>
                        <li>
                          <div className="tp-shop-widget-checkbox-circle">
                            <input type="checkbox" id="purple" />
                            <label htmlFor="purple">Purple</label>
                            <span
                              data-bg-color="#B615FD"
                              className="tp-shop-widget-checkbox-circle-self"
                            />
                          </div>
                          <span className="tp-shop-widget-checkbox-circle-number">
                            23
                          </span>
                        </li>
                        <li>
                          <div className="tp-shop-widget-checkbox-circle">
                            <input type="checkbox" id="yellow" />
                            <label htmlFor="yellow">Yellow</label>
                            <span
                              data-bg-color="#FFD747"
                              className="tp-shop-widget-checkbox-circle-self"
                            />
                          </div>
                          <span className="tp-shop-widget-checkbox-circle-number">
                            17
                          </span>
                        </li>
                        <li>
                          <div className="tp-shop-widget-checkbox-circle">
                            <input type="checkbox" id="green" />
                            <label htmlFor="green">Green</label>
                            <span
                              data-bg-color="#41CF0F"
                              className="tp-shop-widget-checkbox-circle-self"
                            />
                          </div>
                          <span className="tp-shop-widget-checkbox-circle-number">
                            15
                          </span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                {/* product rating */}
                <div className="tp-shop-widget mb-50">
                  <h3 className="tp-shop-widget-title">Top Rated Products</h3>
                  <div className="tp-shop-widget-content">
                    <div className="tp-shop-widget-product">
                      <div className="tp-shop-widget-product-item d-flex align-items-center">
                        <div className="tp-shop-widget-product-thumb">
                          <a href="product-details.html">
                            <img
                              src="assets/img/product/shop/sm/shop-sm-1.jpg"
                              alt=""
                            />
                          </a>
                        </div>
                        <div className="tp-shop-widget-product-content">
                          <div className="tp-shop-widget-product-rating-wrapper d-flex align-items-center">
                            <div className="tp-shop-widget-product-rating">
                              <span>
                                <svg
                                  width={12}
                                  height={12}
                                  viewBox="0 0 12 12"
                                  fill="none"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path
                                    d="M6 0L7.854 3.756L12 4.362L9 7.284L9.708 11.412L6 9.462L2.292 11.412L3 7.284L0 4.362L4.146 3.756L6 0Z"
                                    fill="currentColor"
                                  />
                                </svg>
                              </span>
                              <span>
                                <svg
                                  width={12}
                                  height={12}
                                  viewBox="0 0 12 12"
                                  fill="none"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path
                                    d="M6 0L7.854 3.756L12 4.362L9 7.284L9.708 11.412L6 9.462L2.292 11.412L3 7.284L0 4.362L4.146 3.756L6 0Z"
                                    fill="currentColor"
                                  />
                                </svg>
                              </span>
                              <span>
                                <svg
                                  width={12}
                                  height={12}
                                  viewBox="0 0 12 12"
                                  fill="none"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path
                                    d="M6 0L7.854 3.756L12 4.362L9 7.284L9.708 11.412L6 9.462L2.292 11.412L3 7.284L0 4.362L4.146 3.756L6 0Z"
                                    fill="currentColor"
                                  />
                                </svg>
                              </span>
                              <span>
                                <svg
                                  width={12}
                                  height={12}
                                  viewBox="0 0 12 12"
                                  fill="none"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path
                                    d="M6 0L7.854 3.756L12 4.362L9 7.284L9.708 11.412L6 9.462L2.292 11.412L3 7.284L0 4.362L4.146 3.756L6 0Z"
                                    fill="currentColor"
                                  />
                                </svg>
                              </span>
                              <span>
                                <svg
                                  width={12}
                                  height={12}
                                  viewBox="0 0 12 12"
                                  fill="none"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path
                                    d="M6 0L7.854 3.756L12 4.362L9 7.284L9.708 11.412L6 9.462L2.292 11.412L3 7.284L0 4.362L4.146 3.756L6 0Z"
                                    fill="currentColor"
                                  />
                                </svg>
                              </span>
                            </div>
                            <div className="tp-shop-widget-product-rating-number">
                              <span>(4.2)</span>
                            </div>
                          </div>
                          <h4 className="tp-shop-widget-product-title">
                            <a href="product-details.html">
                              Smart watches wood...
                            </a>
                          </h4>
                          <div className="tp-shop-widget-product-price-wrapper">
                            <span className="tp-shop-widget-product-price">
                              $150.00
                            </span>
                          </div>
                        </div>
                      </div>
                      <div className="tp-shop-widget-product-item d-flex align-items-center">
                        <div className="tp-shop-widget-product-thumb">
                          <a href="product-details.html">
                            <img
                              src="assets/img/product/shop/sm/shop-sm-2.jpg"
                              alt=""
                            />
                          </a>
                        </div>
                        <div className="tp-shop-widget-product-content">
                          <div className="tp-shop-widget-product-rating-wrapper d-flex align-items-center">
                            <div className="tp-shop-widget-product-rating">
                              <span>
                                <svg
                                  width={12}
                                  height={12}
                                  viewBox="0 0 12 12"
                                  fill="none"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path
                                    d="M6 0L7.854 3.756L12 4.362L9 7.284L9.708 11.412L6 9.462L2.292 11.412L3 7.284L0 4.362L4.146 3.756L6 0Z"
                                    fill="currentColor"
                                  />
                                </svg>
                              </span>
                              <span>
                                <svg
                                  width={12}
                                  height={12}
                                  viewBox="0 0 12 12"
                                  fill="none"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path
                                    d="M6 0L7.854 3.756L12 4.362L9 7.284L9.708 11.412L6 9.462L2.292 11.412L3 7.284L0 4.362L4.146 3.756L6 0Z"
                                    fill="currentColor"
                                  />
                                </svg>
                              </span>
                              <span>
                                <svg
                                  width={12}
                                  height={12}
                                  viewBox="0 0 12 12"
                                  fill="none"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path
                                    d="M6 0L7.854 3.756L12 4.362L9 7.284L9.708 11.412L6 9.462L2.292 11.412L3 7.284L0 4.362L4.146 3.756L6 0Z"
                                    fill="currentColor"
                                  />
                                </svg>
                              </span>
                              <span>
                                <svg
                                  width={12}
                                  height={12}
                                  viewBox="0 0 12 12"
                                  fill="none"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path
                                    d="M6 0L7.854 3.756L12 4.362L9 7.284L9.708 11.412L6 9.462L2.292 11.412L3 7.284L0 4.362L4.146 3.756L6 0Z"
                                    fill="currentColor"
                                  />
                                </svg>
                              </span>
                              <span>
                                <svg
                                  width={12}
                                  height={12}
                                  viewBox="0 0 12 12"
                                  fill="none"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path
                                    d="M6 0L7.854 3.756L12 4.362L9 7.284L9.708 11.412L6 9.462L2.292 11.412L3 7.284L0 4.362L4.146 3.756L6 0Z"
                                    fill="currentColor"
                                  />
                                </svg>
                              </span>
                            </div>
                            <div className="tp-shop-widget-product-rating-number">
                              <span>(4.5)</span>
                            </div>
                          </div>
                          <h4 className="tp-shop-widget-product-title">
                            <a href="product-details.html">
                              Decoration for panda.
                            </a>
                          </h4>
                          <div className="tp-shop-widget-product-price-wrapper">
                            <span className="tp-shop-widget-product-price">
                              $120.00
                            </span>
                          </div>
                        </div>
                      </div>
                      <div className="tp-shop-widget-product-item d-flex align-items-center">
                        <div className="tp-shop-widget-product-thumb">
                          <a href="product-details.html">
                            <img
                              src="assets/img/product/shop/sm/shop-sm-3.jpg"
                              alt=""
                            />
                          </a>
                        </div>
                        <div className="tp-shop-widget-product-content">
                          <div className="tp-shop-widget-product-rating-wrapper d-flex align-items-center">
                            <div className="tp-shop-widget-product-rating">
                              <span>
                                <svg
                                  width={12}
                                  height={12}
                                  viewBox="0 0 12 12"
                                  fill="none"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path
                                    d="M6 0L7.854 3.756L12 4.362L9 7.284L9.708 11.412L6 9.462L2.292 11.412L3 7.284L0 4.362L4.146 3.756L6 0Z"
                                    fill="currentColor"
                                  />
                                </svg>
                              </span>
                              <span>
                                <svg
                                  width={12}
                                  height={12}
                                  viewBox="0 0 12 12"
                                  fill="none"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path
                                    d="M6 0L7.854 3.756L12 4.362L9 7.284L9.708 11.412L6 9.462L2.292 11.412L3 7.284L0 4.362L4.146 3.756L6 0Z"
                                    fill="currentColor"
                                  />
                                </svg>
                              </span>
                              <span>
                                <svg
                                  width={12}
                                  height={12}
                                  viewBox="0 0 12 12"
                                  fill="none"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path
                                    d="M6 0L7.854 3.756L12 4.362L9 7.284L9.708 11.412L6 9.462L2.292 11.412L3 7.284L0 4.362L4.146 3.756L6 0Z"
                                    fill="currentColor"
                                  />
                                </svg>
                              </span>
                              <span>
                                <svg
                                  width={12}
                                  height={12}
                                  viewBox="0 0 12 12"
                                  fill="none"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path
                                    d="M6 0L7.854 3.756L12 4.362L9 7.284L9.708 11.412L6 9.462L2.292 11.412L3 7.284L0 4.362L4.146 3.756L6 0Z"
                                    fill="currentColor"
                                  />
                                </svg>
                              </span>
                              <span>
                                <svg
                                  width={12}
                                  height={12}
                                  viewBox="0 0 12 12"
                                  fill="none"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path
                                    d="M6 0L7.854 3.756L12 4.362L9 7.284L9.708 11.412L6 9.462L2.292 11.412L3 7.284L0 4.362L4.146 3.756L6 0Z"
                                    fill="currentColor"
                                  />
                                </svg>
                              </span>
                            </div>
                            <div className="tp-shop-widget-product-rating-number">
                              <span>(3.5)</span>
                            </div>
                          </div>
                          <h4 className="tp-shop-widget-product-title">
                            <a href="product-details.html">
                              Trending Watch for Man
                            </a>
                          </h4>
                          <div className="tp-shop-widget-product-price-wrapper">
                            <span className="tp-shop-widget-product-price">
                              $99.00
                            </span>
                          </div>
                        </div>
                      </div>
                      <div className="tp-shop-widget-product-item d-flex align-items-center">
                        <div className="tp-shop-widget-product-thumb">
                          <a href="product-details.html">
                            <img
                              src="assets/img/product/shop/sm/shop-sm-4.jpg"
                              alt=""
                            />
                          </a>
                        </div>
                        <div className="tp-shop-widget-product-content">
                          <div className="tp-shop-widget-product-rating-wrapper d-flex align-items-center">
                            <div className="tp-shop-widget-product-rating">
                              <span>
                                <svg
                                  width={12}
                                  height={12}
                                  viewBox="0 0 12 12"
                                  fill="none"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path
                                    d="M6 0L7.854 3.756L12 4.362L9 7.284L9.708 11.412L6 9.462L2.292 11.412L3 7.284L0 4.362L4.146 3.756L6 0Z"
                                    fill="currentColor"
                                  />
                                </svg>
                              </span>
                              <span>
                                <svg
                                  width={12}
                                  height={12}
                                  viewBox="0 0 12 12"
                                  fill="none"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path
                                    d="M6 0L7.854 3.756L12 4.362L9 7.284L9.708 11.412L6 9.462L2.292 11.412L3 7.284L0 4.362L4.146 3.756L6 0Z"
                                    fill="currentColor"
                                  />
                                </svg>
                              </span>
                              <span>
                                <svg
                                  width={12}
                                  height={12}
                                  viewBox="0 0 12 12"
                                  fill="none"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path
                                    d="M6 0L7.854 3.756L12 4.362L9 7.284L9.708 11.412L6 9.462L2.292 11.412L3 7.284L0 4.362L4.146 3.756L6 0Z"
                                    fill="currentColor"
                                  />
                                </svg>
                              </span>
                              <span>
                                <svg
                                  width={12}
                                  height={12}
                                  viewBox="0 0 12 12"
                                  fill="none"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path
                                    d="M6 0L7.854 3.756L12 4.362L9 7.284L9.708 11.412L6 9.462L2.292 11.412L3 7.284L0 4.362L4.146 3.756L6 0Z"
                                    fill="currentColor"
                                  />
                                </svg>
                              </span>
                              <span>
                                <svg
                                  width={12}
                                  height={12}
                                  viewBox="0 0 12 12"
                                  fill="none"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path
                                    d="M6 0L7.854 3.756L12 4.362L9 7.284L9.708 11.412L6 9.462L2.292 11.412L3 7.284L0 4.362L4.146 3.756L6 0Z"
                                    fill="currentColor"
                                  />
                                </svg>
                              </span>
                            </div>
                            <div className="tp-shop-widget-product-rating-number">
                              <span>(4.8)</span>
                            </div>
                          </div>
                          <h4 className="tp-shop-widget-product-title">
                            <a href="product-details.html">Minimal Backpack.</a>
                          </h4>
                          <div className="tp-shop-widget-product-price-wrapper">
                            <span className="tp-shop-widget-product-price">
                              $165.00
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {/* brand */}
                <div className="tp-shop-widget mb-50">
                  <h3 className="tp-shop-widget-title">Popular Brands</h3>
                  <div className="tp-shop-widget-content ">
                    <div className="tp-shop-widget-brand-list d-flex align-items-center justify-content-between flex-wrap">
                      <div className="tp-shop-widget-brand-item">
                        <a href="#">
                          <img
                            src="assets/img/product/shop/brand/logo_01.png"
                            alt=""
                          />
                        </a>
                      </div>
                      <div className="tp-shop-widget-brand-item">
                        <a href="#">
                          <img
                            src="assets/img/product/shop/brand/logo_02.png"
                            alt=""
                          />
                        </a>
                      </div>
                      <div className="tp-shop-widget-brand-item">
                        <a href="#">
                          <img
                            src="assets/img/product/shop/brand/logo_03.png"
                            alt=""
                          />
                        </a>
                      </div>
                      <div className="tp-shop-widget-brand-item">
                        <a href="#">
                          <img
                            src="assets/img/product/shop/brand/logo_04.png"
                            alt=""
                          />
                        </a>
                      </div>
                      <div className="tp-shop-widget-brand-item">
                        <a href="#">
                          <img
                            src="assets/img/product/shop/brand/logo_05.png"
                            alt=""
                          />
                        </a>
                      </div>
                      <div className="tp-shop-widget-brand-item">
                        <a href="#">
                          <img
                            src="assets/img/product/shop/brand/logo_06.png"
                            alt=""
                          />
                        </a>
                      </div>
                      <div className="tp-shop-widget-brand-item">
                        <a href="#">
                          <img
                            src="assets/img/product/shop/brand/logo_07.png"
                            alt=""
                          />
                        </a>
                      </div>
                      <div className="tp-shop-widget-brand-item">
                        <a href="#">
                          <img
                            src="assets/img/product/shop/brand/logo_08.png"
                            alt=""
                          />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}
