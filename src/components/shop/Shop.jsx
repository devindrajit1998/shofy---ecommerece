import React from "react";
import Layout from "../layout/Layout";
import Breadcum from "../common/Breadcum";
import Pagination from "../common/Pagination";
import Footer from "../common/Footer";
import FilterInput from "../common/FilterInput";
import { useProductProvider } from "../context/ProductContex";
import GridProductCard from "../common/GridProductCard";
import ListProductCard from "../common/ListProductCard";
import ProductModal from "../common/ProductModal";

export default function Shop() {
  const { category, product, saleFilter } = useProductProvider();
  return (
    <>
      <Layout />
      <Breadcum name="Shop Page" />

      <div className="container">
        <section class="tp-shop-area pb-120 mt-50">
          <div class="container container-shop">
            <div class="row">
              <div class="col-xl-3 col-lg-4">
                <div className="tp-shop-sidebar mr-10">
                  <div className="tp-shop-widget mb-50">
                    <h3 className="tp-shop-widget-title">Product Status</h3>
                    <div className="tp-shop-widget-content">
                      <div className="tp-shop-widget-checkbox">
                        <ul className="filter-items filter-checkbox">
                          <li className="filter-item checkbox">
                            <FilterInput cate="sale" name="On Sale Products" func={saleFilter}/>
                          </li>
                          <li className="filter-item checkbox">
                            <FilterInput
                              cate="trend"
                              name="Trending Products"
                            />
                          </li>
                          <li className="filter-item checkbox">
                            <FilterInput
                              cate="feature"
                              name="Feature Products"
                            />
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
                          {category
                            ? category.map((item) => {
                               
                                return (
                                  <>
                                    <li>
                                      <a href="#">
                                        {item.attributes.name}{" "}
                                        <span>
                                          {item.attributes.products.data.length}
                                        </span>
                                      </a>
                                    </li>
                                  </>
                                );
                              })
                            : category}
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xl-9 col-lg-8">
                <div className="tp-shop-main-wrapper">
                  <div className="tp-shop-top mb-45">
                    <div className="row">
                      <div className="col-xl-6">
                        <div className="tp-shop-top-left d-flex align-items-center ">
                          <div className="tp-shop-top-tab tp-tab">
                            <ul
                              className="nav nav-tabs"
                              id="productTab"
                              role="tablist"
                            >
                              <li className="nav-item" role="presentation">
                                <button
                                  className="nav-link active"
                                  id="grid-tab"
                                  data-bs-toggle="tab"
                                  data-bs-target="#grid-tab-pane"
                                  type="button"
                                  role="tab"
                                  aria-controls="grid-tab-pane"
                                  aria-selected="true"
                                >
                                  <svg
                                    width={18}
                                    height={18}
                                    viewBox="0 0 18 18"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                  >
                                    <path
                                      d="M16.3327 6.01341V2.98675C16.3327 2.04675 15.906 1.66675 14.846 1.66675H12.1527C11.0927 1.66675 10.666 2.04675 10.666 2.98675V6.00675C10.666 6.95341 11.0927 7.32675 12.1527 7.32675H14.846C15.906 7.33341 16.3327 6.95341 16.3327 6.01341Z"
                                      stroke="currentColor"
                                      strokeWidth="1.5"
                                      strokeLinecap="round"
                                      strokeLinejoin="round"
                                    />
                                    <path
                                      d="M16.3327 15.18V12.4867C16.3327 11.4267 15.906 11 14.846 11H12.1527C11.0927 11 10.666 11.4267 10.666 12.4867V15.18C10.666 16.24 11.0927 16.6667 12.1527 16.6667H14.846C15.906 16.6667 16.3327 16.24 16.3327 15.18Z"
                                      stroke="currentColor"
                                      strokeWidth="1.5"
                                      strokeLinecap="round"
                                      strokeLinejoin="round"
                                    />
                                    <path
                                      d="M7.33268 6.01341V2.98675C7.33268 2.04675 6.90602 1.66675 5.84602 1.66675H3.15268C2.09268 1.66675 1.66602 2.04675 1.66602 2.98675V6.00675C1.66602 6.95341 2.09268 7.32675 3.15268 7.32675H5.84602C6.90602 7.33341 7.33268 6.95341 7.33268 6.01341Z"
                                      stroke="currentColor"
                                      strokeWidth="1.5"
                                      strokeLinecap="round"
                                      strokeLinejoin="round"
                                    />
                                    <path
                                      d="M7.33268 15.18V12.4867C7.33268 11.4267 6.90602 11 5.84602 11H3.15268C2.09268 11 1.66602 11.4267 1.66602 12.4867V15.18C1.66602 16.24 2.09268 16.6667 3.15268 16.6667H5.84602C6.90602 16.6667 7.33268 16.24 7.33268 15.18Z"
                                      stroke="currentColor"
                                      strokeWidth="1.5"
                                      strokeLinecap="round"
                                      strokeLinejoin="round"
                                    />
                                  </svg>
                                </button>
                              </li>
                              <li className="nav-item" role="presentation">
                                <button
                                  className="nav-link"
                                  id="list-tab"
                                  data-bs-toggle="tab"
                                  data-bs-target="#list-tab-pane"
                                  type="button"
                                  role="tab"
                                  aria-controls="list-tab-pane"
                                  aria-selected="false"
                                >
                                  <svg
                                    width={16}
                                    height={15}
                                    viewBox="0 0 16 15"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                  >
                                    <path
                                      d="M15 7.11108H1"
                                      stroke="currentColor"
                                      strokeWidth={2}
                                      strokeLinecap="round"
                                      strokeLinejoin="round"
                                    />
                                    <path
                                      d="M15 1H1"
                                      stroke="currentColor"
                                      strokeWidth={2}
                                      strokeLinecap="round"
                                      strokeLinejoin="round"
                                    />
                                    <path
                                      d="M15 13.2222H1"
                                      stroke="currentColor"
                                      strokeWidth={2}
                                      strokeLinecap="round"
                                      strokeLinejoin="round"
                                    />
                                  </svg>
                                </button>
                              </li>
                            </ul>
                          </div>
                          <div className="tp-shop-top-result">
                            <p>Showing 1–14 of 26 results</p>
                          </div>
                        </div>
                      </div>
                      <div className="col-xl-6">
                        <div className="tp-shop-top-right d-sm-flex align-items-center justify-content-xl-end">
                          <div className="tp-shop-top-select">
                            <select style={{ display: "none" }}>
                              <option>Default Sorting</option>
                              <option>Low to Hight</option>
                              <option>High to Low</option>
                              <option>New Added</option>
                              <option>On Sale</option>
                            </select>
                            <div className="nice-select" tabIndex={0}>
                              <span className="current">Default Sorting</span>
                              <ul className="list">
                                <li
                                  data-value="Default Sorting"
                                  className="option selected"
                                >
                                  Default Sorting
                                </li>
                                <li
                                  data-value="Low to Hight"
                                  className="option"
                                >
                                  Low to Hight
                                </li>
                                <li data-value="High to Low" className="option">
                                  High to Low
                                </li>
                                <li data-value="New Added" className="option">
                                  New Added
                                </li>
                                <li data-value="On Sale" className="option">
                                  On Sale
                                </li>
                              </ul>
                            </div>
                          </div>
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
                        tabIndex={0}
                      >
                        <div className="row infinite-container">
                          {product
                            ? product.map((items) => {
                                // console.log("allshop", items.attributes);
                                const data = items.attributes;
                                return (
                                  <>
                                    <div className="col-xl-4 col-md-6 col-sm-6 infinite-item">
                                      <GridProductCard data={data} />
                                    </div>
                                  </>
                                );
                              })
                            : product}
                        </div>
                      </div>
                      <div
                        className="tab-pane fade"
                        id="list-tab-pane"
                        role="tabpanel"
                        aria-labelledby="list-tab"
                        tabIndex={0}
                      >
                        <div className="tp-shop-list-wrapper tp-shop-item-primary mb-70">
                          <div className="row">
                            <div className="col-xl-12">
                              {product
                                ? product.map((items) => {
                                    // console.log("allshop", items.attributes);
                                    const data = items.attributes;
                                    return (
                                      <>
                                        <ListProductCard data={data} />
                                      </>
                                    );
                                  })
                                : product}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <Pagination />
                </div>
              </div>
            </div>
          </div>
        </section>
        <ProductModal />
      </div>
      <Footer />
    </>
  );
}
