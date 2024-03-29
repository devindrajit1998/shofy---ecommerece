import React from "react";
import Layout from "../layout/Layout";
import Breadcum from "../common/Breadcum";
import { useProductProvider } from "../context/ProductContex";
import { Link } from "react-router-dom";

export default function Cart() {
  const { cart, BASE_URL, subTotal } = useProductProvider();
  return (
    <>
      <Layout />
      <Breadcum name="Shopping Cart" />
      <section className="tp-cart-area pb-120">
        <div className="container">
          <div className="row">
            <div className="col-xl-9 col-lg-8">
              <div className="tp-cart-list mb-25 mr-30">
                <table className="table">
                  <thead>
                    <tr>
                      <th colSpan={2} className="tp-cart-header-product">
                        Product
                      </th>
                      <th className="tp-cart-header-price">Price</th>
                      <th className="tp-cart-header-quantity">Quantity</th>
                      <th />
                    </tr>
                  </thead>
                  <tbody>
                    {cart.map((items) => {

                        const {name, thumbnail, offerPrice, quantity} = items.data.attributes;
                      return (
                        <>
                          <tr>
                            {/* img */}
                            <td className="tp-cart-img">
                              <a href="product-details.html">
                                {" "}
                                <img
                                  src={BASE_URL + thumbnail.data.attributes.url}
                                  alt=""
                                />
                              </a>
                            </td>
                            {/* title */}
                            <td className="tp-cart-title">
                              <Link>
                              {name}
                              </Link>
                            </td>
                            {/* price */}
                            <td className="tp-cart-price">
                              <span>₹{offerPrice}</span>
                            </td>
                            {/* quantity */}
                            <td className="tp-cart-quantity">
                              <div className="tp-product-quantity mt-10 mb-10">
                                <span className="tp-cart-minus">
                                  <svg
                                    width={10}
                                    height={2}
                                    viewBox="0 0 10 2"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                  >
                                    <path
                                      d="M1 1H9"
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
                                  value={quantity}
                                />
                                <span className="tp-cart-plus">
                                  <svg
                                    width={10}
                                    height={10}
                                    viewBox="0 0 10 10"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                  >
                                    <path
                                      d="M5 1V9"
                                      stroke="currentColor"
                                      strokeWidth="1.5"
                                      strokeLinecap="round"
                                      strokeLinejoin="round"
                                    />
                                    <path
                                      d="M1 5H9"
                                      stroke="currentColor"
                                      strokeWidth="1.5"
                                      strokeLinecap="round"
                                      strokeLinejoin="round"
                                    />
                                  </svg>
                                </span>
                              </div>
                            </td>
                            {/* action */}
                            <td className="tp-cart-action">
                              <button className="tp-cart-action-btn">
                                <svg
                                  width={10}
                                  height={10}
                                  viewBox="0 0 10 10"
                                  fill="none"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path
                                    fillRule="evenodd"
                                    clipRule="evenodd"
                                    d="M9.53033 1.53033C9.82322 1.23744 9.82322 0.762563 9.53033 0.46967C9.23744 0.176777 8.76256 0.176777 8.46967 0.46967L5 3.93934L1.53033 0.46967C1.23744 0.176777 0.762563 0.176777 0.46967 0.46967C0.176777 0.762563 0.176777 1.23744 0.46967 1.53033L3.93934 5L0.46967 8.46967C0.176777 8.76256 0.176777 9.23744 0.46967 9.53033C0.762563 9.82322 1.23744 9.82322 1.53033 9.53033L5 6.06066L8.46967 9.53033C8.76256 9.82322 9.23744 9.82322 9.53033 9.53033C9.82322 9.23744 9.82322 8.76256 9.53033 8.46967L6.06066 5L9.53033 1.53033Z"
                                    fill="currentColor"
                                  />
                                </svg>
                                <span>Remove</span>
                              </button>
                            </td>
                          </tr>
                        </>
                      );
                    })}
                  </tbody>
                </table>
              </div>
              <div className="tp-cart-bottom">
                <div className="row align-items-end">
                  <div className="col-xl-6 col-md-8">
                    <div className="tp-cart-coupon">
                      <form action="#">
                        <div className="tp-cart-coupon-input-box">
                          <label>Coupon Code:</label>
                          <div className="tp-cart-coupon-input d-flex align-items-center">
                            <input
                              type="text"
                              placeholder="Enter Coupon Code"
                            />
                            <button type="submit">Apply</button>
                          </div>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-lg-4 col-md-6">
              <div className="tp-cart-checkout-wrapper">
                <div className="tp-cart-checkout-top d-flex align-items-center justify-content-between">
                  <span className="tp-cart-checkout-top-title">Subtotal</span>
                  <span className="tp-cart-checkout-top-price">₹ {subTotal}</span>
                </div>
                <div className="tp-cart-checkout-shipping">
                  <h4 className="tp-cart-checkout-shipping-title">Shipping</h4>
                  <div className="tp-cart-checkout-shipping-option-wrapper">
                    <div className="tp-cart-checkout-shipping-option">
                      <input id="flat_rate" type="radio" name="shipping" />
                      <label htmlFor="flat_rate">
                        Flat rate: <span>$20.00</span>
                      </label>
                    </div>
                    <div className="tp-cart-checkout-shipping-option">
                      <input id="local_pickup" type="radio" name="shipping" />
                      <label htmlFor="local_pickup">
                        Local pickup: <span> $25.00</span>
                      </label>
                    </div>
                    <div className="tp-cart-checkout-shipping-option">
                      <input id="free_shipping" type="radio" name="shipping" />
                      <label htmlFor="free_shipping">Free shipping</label>
                    </div>
                  </div>
                </div>
                <div className="tp-cart-checkout-total d-flex align-items-center justify-content-between">
                  <span>Total</span>
                  <span>$724</span>
                </div>
                <div className="tp-cart-checkout-proceed">
                  <a
                    href="checkout.html"
                    className="tp-cart-checkout-btn w-100"
                  >
                    Proceed to Checkout
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
