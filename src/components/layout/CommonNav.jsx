import React from "react";
import { Link } from "react-router-dom";

export default function CommonNav({ overlay, body, Open, mobile, OpenMobile }) {
  return (
    <>
      {/* pre loader area start */}
      {/* <div id="loading">
        <div id="loading-center">
          <div id="loading-center-absolute">
            <div className="tp-preloader-content">
              <div className="tp-preloader-logo">
                <div className="tp-preloader-circle">
                  <svg
                    width={190}
                    height={190}
                    viewBox="0 0 380 380"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <circle
                      stroke="!#D9D9D9"
                      cx={190}
                      cy={190}
                      r={180}
                      strokeWidth={6}
                      strokeLinecap="round"
                    />
                    <circle
                      stroke="red"
                      cx={190}
                      cy={190}
                      r={180}
                      strokeWidth={6}
                      strokeLinecap="round"
                    />
                  </svg>
                </div>
                <img src="img/logo/preloader/preloader-icon.svg" alt="" />
              </div>
              <h3 className="tp-preloader-title">Shofy</h3>
              <p className="tp-preloader-subtitle">Loading</p>
            </div>
          </div>
        </div>
      </div> */}
      {/* pre loader area end */}
      {/* back to top start */}
      <div className="back-to-top-wrapper">
        <button id="back_to_top" type="button" className="back-to-top-btn">
          <svg
            width={12}
            height={7}
            viewBox="0 0 12 7"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M11 6L6 1L1 6"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>
      </div>
      {/* back to top end */}
      {/* offcanvas area start */}
      <div className={`offcanvas__area offcanvas__radius ${mobile}`}>
        <div className="offcanvas__wrapper">
          <div className="offcanvas__close">
            <button className="offcanvas__close-btn offcanvas-close-btn" onClick={()=>OpenMobile()}>
              <svg
                width={12}
                height={12}
                viewBox="0 0 12 12"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M11 1L1 11"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M1 1L11 11"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
          </div>
          <div className="offcanvas__content">
            <div className="offcanvas__top mb-70 d-flex justify-content-between align-items-center">
              <div className="offcanvas__logo logo">
                <a href="!#">
                  <img src="img/logo/logo.svg" alt="logo" />
                </a>
              </div>
            </div>
            <div className="offcanvas__category pb-40">
              <button className="tp-offcanvas-category-toggle">
                <i className="fa-solid fa-bars" />
                All Categories
              </button>
              <div className="tp-category-mobile-menu"></div>
            </div>
            <div className="tp-main-menu-mobile fix d-lg-none mb-40" />
            <div className="offcanvas__contact align-items-center d-none">
              <div className="offcanvas__contact-icon mr-20">
                <span>
                  <img src="img/icon/contact.png" alt="" />
                </span>
              </div>
              <div className="offcanvas__contact-content">
                <h3 className="offcanvas__contact-title">
                  <a href="tel:098-852-987">004524865</a>
                </h3>
              </div>
            </div>
            <div className="offcanvas__btn">
              <Link to="" className="tp-btn-2 tp-btn-border-2">
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className={`body-overlay ${overlay}`} onClick={() => Open()} />
      {/* <div className={`body-overlay ${overlay}`} onClick={()=>OpenMobile()} /> */}
      {/* offcanvas area end */}
      {/* mobile menu area start */}
      <div id="tp-bottom-menu-sticky" className="tp-mobile-menu d-lg-none">
        <div className="container">
          <div className="row row-cols-5">
            <div className="col">
              <div className="tp-mobile-item text-center">
                <a href="!#" className="tp-mobile-item-btn">
                  <i className="flaticon-store" />
                  <span>Store</span>
                </a>
              </div>
            </div>
            <div className="col">
              <div className="tp-mobile-item text-center">
                <button className="tp-mobile-item-btn tp-search-open-btn">
                  <i className="flaticon-search-1" />
                  <span>Search</span>
                </button>
              </div>
            </div>
            <div className="col">
              <div className="tp-mobile-item text-center">
                <a href="!#" className="tp-mobile-item-btn">
                  <i className="flaticon-love" />
                  <span>Wishlist</span>
                </a>
              </div>
            </div>
            <div className="col">
              <div className="tp-mobile-item text-center">
                <a href="!#" className="tp-mobile-item-btn">
                  <i className="flaticon-user" />
                  <span>Account</span>
                </a>
              </div>
            </div>
            <div className="col">
              <div className="tp-mobile-item text-center">
                <button className="tp-mobile-item-btn tp-offcanvas-open-btn">
                  <i className="flaticon-menu-1" />
                  <span>Menu</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* mobile menu area end */}
      {/* search area start */}
      <section className="tp-search-area">
        <div className="container">
          <div className="row">
            <div className="col-xl-12">
              <div className="tp-search-form">
                <div className="tp-search-close text-center mb-20">
                  <button className="tp-search-close-btn tp-search-close-btn" />
                </div>
                <form action="!#">
                  <div className="tp-search-input mb-10">
                    <input type="text" placeholder="Search for product..." />
                    <button type="submit">
                      <i className="flaticon-search-1" />
                    </button>
                  </div>
                  <div className="tp-search-category">
                    <span>Search by : </span>
                    <a href="!#">Men, </a>
                    <a href="!#">Women, </a>
                    <a href="!#">Children, </a>
                    <a href="!#">Shirt, </a>
                    <a href="!#">Demin</a>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* search area end */}
      {/* cart mini area start */}
      <div className={`cartmini__area tp-all-font-roboto ${body}`}>
        <div className="cartmini__wrapper d-flex justify-content-between flex-column">
          <div className="cartmini__top-wrapper">
            <div className="cartmini__top p-relative">
              <div className="cartmini__top-title">
                <h4>Shopping cart</h4>
              </div>
              <div className="cartmini__close">
                <button
                  type="button"
                  className="cartmini__close-btn cartmini-close-btn"
                  onClick={() => Open()}
                >
                  <i className="fal fa-times" />
                </button>
              </div>
            </div>
            <div className="cartmini__shipping">
              <p>
                {" "}
                Free Shipping for all orders over <span>$50</span>
              </p>
              <div className="progress">
                <div
                  className="progress-bar progress-bar-striped progress-bar-animated"
                  role="progressbar"
                  data-width="70%"
                  aria-valuenow={70}
                  aria-valuemin={0}
                  aria-valuemax={100}
                />
              </div>
            </div>
            <div className="cartmini__widget">
              <div className="cartmini__widget-item">
                <div className="cartmini__thumb">
                  <a href="!#">
                    <img src="img/product/product-1.jpg" alt="" />
                  </a>
                </div>
                <div className="cartmini__content">
                  <h5 className="cartmini__title">
                    <a href="!#">Level Bolt Smart Lock</a>
                  </h5>
                  <div className="cartmini__price-wrapper">
                    <span className="cartmini__price">$46.00</span>
                    <span className="cartmini__quantity">x2</span>
                  </div>
                </div>
                <a href="!#" className="cartmini__del">
                  <i className="fa-regular fa-xmark" />
                </a>
              </div>
            </div>
            {/* for wp */}
            {/* if no item in cart */}
            <div className="cartmini__empty text-center d-none">
              <img src="img/product/cartmini/empty-cart.png" alt="" />
              <p>Your Cart is empty</p>
              <a href="!#" className="tp-btn">
                Go to Shop
              </a>
            </div>
          </div>
          <div className="cartmini__checkout">
            <div className="cartmini__checkout-title mb-30">
              <h4>Subtotal:</h4>
              <span>$113.00</span>
            </div>
            <div className="cartmini__checkout-btn">
              <a href="!#" className="tp-btn mb-10 w-100">
                {" "}
                view cart
              </a>
              <a href="!#" className="tp-btn tp-btn-border w-100">
                {" "}
                checkout
              </a>
            </div>
          </div>
        </div>
      </div>
      {/* cart mini area end */}
    </>
  );
}
