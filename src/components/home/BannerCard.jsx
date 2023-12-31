import React from "react";

export default function BannerCard() {
  return (
    <>
      <div className="tp-product-banner-inner theme-bg p-relative z-index-1 fix swiper-slide">
        <h4 className="tp-product-banner-bg-text">tablet</h4>
        <div className="row align-items-center">
          <div className="col-xl-6 col-lg-6">
            <div className="tp-product-banner-content p-relative z-index-1">
              <span className="tp-product-banner-subtitle">
                Tablet Collection 2023
              </span>
              <h3 className="tp-product-banner-title">
                Samsung Galaxy Tab S6, Wifi Tablet
              </h3>
              <div className="tp-product-banner-price mb-40">
                <span className="old-price">$1240.00</span>
                <p className="new-price">$975.00</p>
              </div>
              <div className="tp-product-banner-btn">
                <a href="shop.html" className="tp-btn tp-btn-2">
                  Shop now
                </a>
              </div>
            </div>
          </div>
          <div className="col-xl-6 col-lg-6">
            <div className="tp-product-banner-thumb-wrapper p-relative">
              <div className="tp-product-banner-thumb-shape">
                <span className="tp-product-banner-thumb-gradient" />
                <img
                  className="tp-offer-shape"
                  src="img/banner/banner-slider-offer.png"
                  alt=""
                />
              </div>
              <div className="tp-product-banner-thumb text-end p-relative z-index-1">
                <img src="img/banner/banner-slider-1.png" alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
