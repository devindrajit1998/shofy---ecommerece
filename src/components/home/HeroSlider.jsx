import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { useProductProvider } from "../context/ProductContex";
// Import Swiper styles
import "swiper/css";
export default function HeroSlider() {
  const { banner, BASE_URL } = useProductProvider();
  if(banner){
    // console.log("banner", banner[0].attributes);
  }

  return (
    <Swiper spaceBetween={50} slidesPerView={1} loop={true}>
      {banner
        ? banner.map((items) => {
            return (
              <SwiperSlide>
                <div className="tp-slider-item tp-slider-height d-flex align-items-center swiper-slide ">
                  <div className="tp-slider-shape">
                    <img
                      className="tp-slider-shape-1"
                      src="img/slider/shape/slider-shape-1.png"
                      alt="slider-shape"
                    />
                    <img
                      className="tp-slider-shape-2"
                      src="img/slider/shape/slider-shape-2.png"
                      alt="slider-shape"
                    />
                    <img
                      className="tp-slider-shape-3"
                      src="img/slider/shape/slider-shape-3.png"
                      alt="slider-shape"
                    />
                    <img
                      className="tp-slider-shape-4"
                      src="img/slider/shape/slider-shape-4.png"
                      alt="slider-shape"
                    />
                  </div>
                  <div className="container">
                    <div className="row align-items-center">
                      <div className="col-xl-5 col-lg-6 col-md-6">
                        <div className="tp-slider-content p-relative z-index-1">
                          <span>
                            Starting at <b>₹{items.attributes.price}</b>
                          </span>
                          <h3 className="tp-slider-title">
                          {items.attributes.title}
                          </h3>
                          <p>
                            Exclusive offer
                            <span>
                              -{items.attributes.discount}%
                              <svg
                                width={94}
                                height={20}
                                viewBox="0 0 94 20"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  d="M74.8576 4.63367L78.6048 5.11367C80.9097 5.35155 82.8309 5.75148 84.4483 5.97993L86.6581 6.31091L88.4262 6.63948C89.4684 6.81761 90.2699 6.9312 90.8805 6.99186C93.3213 7.24888 92.7011 6.63674 92.8183 6.12534C92.9355 5.61394 93.7175 5.37081 91.3267 4.45886C90.73 4.24001 89.9345 3.97481 88.8826 3.65818L87.1034 3.12577L84.8643 2.63282C83.236 2.28025 81.2402 1.82307 78.8684 1.52138L75.0177 0.981633C73.6188 0.823014 72.1417 0.730003 70.5389 0.582533C63.0297 0.0282543 55.4847 0.193022 48.0068 1.07459C39.9065 2.04304 31.9328 3.87384 24.2213 6.53586C18.0824 8.61764 12.1674 11.3089 6.56479 14.5692C4.88189 15.5255 3.25403 16.5756 1.68892 17.7145C0.568976 18.5077 -0.00964231 18.9932 0.0547097 19.0858C0.388606 19.6584 10.6194 13.1924 25.151 8.99361C32.789 6.72748 40.6283 5.20536 48.5593 4.44848C55.8569 3.76455 63.1992 3.69678 70.5082 4.24591L74.8223 4.62335"
                                  fill="currentColor"
                                />
                              </svg>
                            </span>
                            off this week
                          </p>
                          <div className="tp-slider-btn">
                            <a
                              href="shop.html"
                              className="tp-btn tp-btn-2 tp-btn-white"
                            >
                              Shop Now
                              <i className="fa-sharp fa-solid fa-arrow-right ms-2" />
                            </a>
                          </div>
                        </div>
                      </div>
                      <div className="col-xl-7 col-lg-6 col-md-6">
                        <div className="tp-slider-thumb text-end">
                          <img
                            src={`${BASE_URL}${items.attributes.img.data.attributes.url}`}
                            alt="slider-img"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            );
          })
        : banner}
    </Swiper>
  );
}
