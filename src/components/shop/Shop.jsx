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

      <section className="tp-shop-area pb-50">
        <div className="container">
          <div className="row">
            <div className="col-xl-12">
              <div className="tp-shop-main-wrapper">
                <div className="tp-shop-top mb-45">
                  <div className="row">
                    <div class="col-xl-6 col-lg-6 col-md-6"></div>
                    <div class="col-xl-6 col-lg-6 col-md-6">
                      <div className="tp-shop-top-right tp-shop-top-right-2 d-sm-flex align-items-center justify-content-xl-end">
                        <div className="tp-shop-top-filter">
                          <button
                            type="button"
                            className="tp-filter-btn filter-open-btn"
                          >
                            <span>
                              <svg
                                width={16}
                                height={15}
                                viewBox="0 0 16 15"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  d="M14.9998 3.45001H10.7998"
                                  stroke="currentColor"
                                  strokeWidth="1.5"
                                  strokeMiterlimit={10}
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                />
                                <path
                                  d="M3.8 3.45001H1"
                                  stroke="currentColor"
                                  strokeWidth="1.5"
                                  strokeMiterlimit={10}
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                />
                                <path
                                  d="M6.5999 5.9C7.953 5.9 9.0499 4.8031 9.0499 3.45C9.0499 2.0969 7.953 1 6.5999 1C5.2468 1 4.1499 2.0969 4.1499 3.45C4.1499 4.8031 5.2468 5.9 6.5999 5.9Z"
                                  stroke="currentColor"
                                  strokeWidth="1.5"
                                  strokeMiterlimit={10}
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                />
                                <path
                                  d="M15.0002 11.15H12.2002"
                                  stroke="currentColor"
                                  strokeWidth="1.5"
                                  strokeMiterlimit={10}
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                />
                                <path
                                  d="M5.2 11.15H1"
                                  stroke="currentColor"
                                  strokeWidth="1.5"
                                  strokeMiterlimit={10}
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                />
                                <path
                                  d="M9.4002 13.6C10.7533 13.6 11.8502 12.5031 11.8502 11.15C11.8502 9.79691 10.7533 8.70001 9.4002 8.70001C8.0471 8.70001 6.9502 9.79691 6.9502 11.15C6.9502 12.5031 8.0471 13.6 9.4002 13.6Z"
                                  stroke="currentColor"
                                  strokeWidth="1.5"
                                  strokeMiterlimit={10}
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                />
                              </svg>
                            </span>
                            Filter
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="tp-shop-items-wrapper tp-shop-item-primary">
                  <div className="tab-content" id="productTabContent">
                    <div
                      className="tab-pane fade show active"
                      id="grid-tab-pane"
                      role="tabpanel"
                      aria-labelledby="grid-tab"
                      tabIndex={0}>
                      <div className="row">
                        <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6">
                          <div className="tp-product-item-2 mb-40">
                            <ProductCard/>
                          </div>
                        </div>
                        <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6">
                          <div className="tp-product-item-2 mb-40">
                            <ProductCard/>
                          </div>
                        </div>
                        <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6">
                          <div className="tp-product-item-2 mb-40">
                            <ProductCard/>
                          </div>
                        </div>
                        <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6">
                          <div className="tp-product-item-2 mb-40">
                            <ProductCard/>
                          </div>
                        </div>
                        <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6">
                          <div className="tp-product-item-2 mb-40">
                            <ProductCard/>
                          </div>
                        </div>
                        <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6">
                          <div className="tp-product-item-2 mb-40">
                            <ProductCard/>
                          </div>
                        </div>
                        <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6">
                          <div className="tp-product-item-2 mb-40">
                            <ProductCard/>
                          </div>
                        </div>
                        <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6">
                          <div className="tp-product-item-2 mb-40">
                            <ProductCard/>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <Pagination/>
            </div>
          </div>
        </div>
      </section>
      <Footer/>
    </>
  );
}
