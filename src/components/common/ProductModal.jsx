import React, { useEffect, useState } from "react";
import { useProductProvider } from "../context/ProductContex";

export default function ProductModal() {
  const { modalProduct, BASE_URL, TargetProduct } = useProductProvider();
  const common = modalProduct ? modalProduct.attributes : {};
  const { name, description, mainPrice, offerPrice, alterImg } = common || {};
  // console.log("alterImg=============>", BASE_URL)
  const [alter, setAlter] = useState();
  useEffect(() => {
    setAlter( alterImg && alterImg.data[0]);
  }, [TargetProduct]);
  const FindAlterImg = (id) => {
    // const getAlter = alterImg.data.find((item) => item.id === id);
    setAlter(alterImg.data.find((item) => item.id === id));
  };
  console.log("getAlter", alter);
  return (
    <>
      <div
        className="modal fade tp-product-modal"
        id="producQuickViewModal"
        tabIndex={-1}
        aria-labelledby="producQuickViewModal"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="tp-product-modal-content d-lg-flex align-items-start">
              <button
                type="button"
                className="tp-product-modal-close-btn"
                data-bs-toggle="modal"
                data-bs-target="#producQuickViewModal"
              >
                <i className="fa-regular fa-xmark" />
              </button>
              <div className="tp-product-details-thumb-wrapper tp-tab d-sm-flex">
                <nav>
                  <div
                    className="nav nav-tabs flex-sm-column "
                    id="productDetailsNavThumb"
                    role="tablist"
                  >
                    {alterImg &&
                      alterImg.data.map((item) => {
                        // console.log("sdfsdgsfdgfgfg", item)
                        return (
                          <button
                            className="nav-link active"
                            type="button"
                            role="tab"
                            key={item.id}
                            onClick={() => FindAlterImg(item.id)}
                          >
                            <img src={BASE_URL + item.attributes.url} alt="" />
                          </button>
                        );
                      })}
                  </div>
                </nav>
                <div
                  className="tab-content m-img"
                  id="productDetailsNavContent"
                >
                  <div
                    className="tab-pane fade show active"
                    role="tabpanel"
                    aria-labelledby="nav-1-tab"
                  >
                    <div className="tp-product-details-nav-main-thumb">
                      <img
                        src={`${BASE_URL}${alter && alter.attributes.url}`}
                        alt=""
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="tp-product-details-wrapper">
                <div className="tp-product-details-category">
                  <span>Computers &amp; Tablets</span>
                </div>
                <h3 className="tp-product-details-title">{name}</h3>
                {/* inventory details */}
                <div className="tp-product-details-inventory d-flex align-items-center mb-10">
                  <div className="tp-product-details-stock mb-10">
                    <span>In Stock</span>
                  </div>
                  <div className="tp-product-details-rating-wrapper d-flex align-items-center mb-10">
                    <div className="tp-product-details-rating">
                      <span>
                        <i className="fa-solid fa-star" />
                      </span>
                      <span>
                        <i className="fa-solid fa-star" />
                      </span>
                      <span>
                        <i className="fa-solid fa-star" />
                      </span>
                      <span>
                        <i className="fa-solid fa-star" />
                      </span>
                      <span>
                        <i className="fa-solid fa-star" />
                      </span>
                    </div>
                    <div className="tp-product-details-reviews">
                      <span>(36 Reviews)</span>
                    </div>
                  </div>
                </div>
                <p>{description}</p>
                {/* price */}
                <div className="tp-product-details-price-wrapper mb-20">
                  <span className="tp-product-details-price old-price">
                    ${mainPrice}
                  </span>
                  <span className="tp-product-details-price new-price">
                    ${offerPrice}
                  </span>
                </div>
                {/* variations */}
                <div className="tp-product-details-variation">
                  {/* single item */}
                  <div className="tp-product-details-variation-item">
                    <h4 className="tp-product-details-variation-title">
                      Color :
                    </h4>
                    <div className="tp-product-details-variation-list">
                      <button
                        type="button"
                        className="color tp-color-variation-btn"
                      >
                        <span data-bg-color="#F8B655" />
                        <span className="tp-color-variation-tootltip">
                          Yellow
                        </span>
                      </button>
                      <button
                        type="button"
                        className="color tp-color-variation-btn active"
                      >
                        <span data-bg-color="#CBCBCB" />
                        <span className="tp-color-variation-tootltip">
                          Gray
                        </span>
                      </button>
                      <button
                        type="button"
                        className="color tp-color-variation-btn"
                      >
                        <span data-bg-color="#494E52" />
                        <span className="tp-color-variation-tootltip">
                          Black
                        </span>
                      </button>
                      <button
                        type="button"
                        className="color tp-color-variation-btn"
                      >
                        <span data-bg-color="#B4505A" />
                        <span className="tp-color-variation-tootltip">
                          Brown
                        </span>
                      </button>
                    </div>
                  </div>
                </div>
                {/* actions */}
                <div className="tp-product-details-action-wrapper">
                  <h3 className="tp-product-details-action-title">Quantity</h3>
                  <div className="tp-product-details-action-item-wrapper d-sm-flex align-items-center">
                    <div className="tp-product-details-quantity">
                      <div className="tp-product-quantity mb-15 mr-15">
                        <span className="tp-cart-minus">
                          <svg
                            width={11}
                            height={2}
                            viewBox="0 0 11 2"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M1 1H10"
                              stroke="currentColor"
                              strokeWidth="1.5"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                          </svg>
                        </span>
                        <input
                          className="tp-cart-input"
                          type="text"
                          value={1}
                        />
                        <span className="tp-cart-plus">
                          <svg
                            width={11}
                            height={12}
                            viewBox="0 0 11 12"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M1 6H10"
                              stroke="currentColor"
                              strokeWidth="1.5"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                            <path
                              d="M5.5 10.5V1.5"
                              stroke="currentColor"
                              strokeWidth="1.5"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                          </svg>
                        </span>
                      </div>
                    </div>
                    <div className="tp-product-details-add-to-cart mb-15 w-100">
                      <button className="tp-product-details-add-to-cart-btn w-100">
                        Add To Cart
                      </button>
                    </div>
                  </div>
                  <button className="tp-product-details-buy-now-btn w-100">
                    Buy Now
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
