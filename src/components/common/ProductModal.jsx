import React from "react";
import { useProductProvider } from "../context/ProductContex";
import ProductThumb from "./ProductThumb";
import Rating from "./Rating";
import QuantitySection from "./QuantitySection";
import CommonBtn from "./CommonBtn";


export default function ProductModal() {
  const { modalProduct } = useProductProvider();
  const common = modalProduct ? modalProduct.attributes : {};
  const { name, description, mainPrice, offerPrice, category, stock } = common || {};

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
              <div className="row">
                <div className="col-sm-5">
                  <ProductThumb />
                </div>
                <div className="col-sm-7">
                  <div className="tp-product-details-wrapper">
                    <div className="tp-product-details-category">
                      <span>{category?.data.attributes.name}</span>
                    </div>
                    <h3 className="tp-product-details-title">{name}</h3>
                    {/* inventory details */}
                    <div className="tp-product-details-inventory d-flex align-items-center mb-10">
                      <div className="tp-product-details-stock mb-10">
                        <span>{stock}</span>
                      </div>
                      <div className="tp-product-details-rating-wrapper d-flex align-items-center mb-10">
                        <Rating />
                        <div className="tp-product-details-reviews">
                          <span>(36 Reviews)</span>
                        </div>
                      </div>
                    </div>
                    <p className="limited_lines-4">{description}</p>
                    {/* price */}
                    <div className="tp-product-details-price-wrapper mb-20">
                      <span className="tp-product-details-price old-price">
                        ${mainPrice}
                      </span>
                      <span className="tp-product-details-price new-price">
                        ${offerPrice}
                      </span>
                    </div>
                    {/* actions */}
                    <div className="tp-product-details-action-wrapper">
                      <h3 className="tp-product-details-action-title">
                        Quantity
                      </h3>
                      <div className="tp-product-details-action-item-wrapper d-sm-flex align-items-center">
                        <div className="tp-product-details-quantity">
                          <QuantitySection />
                        </div>
                        <div className="tp-product-details-add-to-cart mb-15 w-100">
                          <CommonBtn
                            name="Add To Cart"
                            style="add-to-cart"
                            width="w-100"
                          />
                        </div>
                      </div>
                      <CommonBtn name="Buy Now" style="buy-now" width="w-100" />
                    </div>
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
