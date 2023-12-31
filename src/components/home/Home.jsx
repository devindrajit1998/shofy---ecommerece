import React from "react";
import Layout from "../layout/Layout";
import HeroSlider from "./HeroSlider";
import CategoryCard from "./CategoryCard";
import Service from "./Service";
import ProductCard from "../common/ProductCard";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import SectionTitle from "./SectionTitle";
import BannerCard from "./BannerCard";

export default function Home() {
  return (
    <>
      <Layout />
      <main>
        {/* slider area start  */}
        <section className="tp-slider-area p-relative z-index-1">
          <div className="tp-slider-active tp-slider-variation swiper-container">
            <div className="swiper-wrapper">
              <HeroSlider />
            </div>
          </div>
        </section>
        {/* slider area end  */}

        {/* product category area area start  */}
        <section className="tp-product-category pt-60 pb-15">
          <div className="container">
            <div className="row row-cols-xl-5 row-cols-lg-5 row-cols-md-4">
              <CategoryCard />
              <CategoryCard />
              <CategoryCard />
              <CategoryCard />
              <CategoryCard />
            </div>
          </div>
        </section>
        {/* product category area area end  */}
        {/* feature area start */}
        <Service />
        {/* feature area end */}
        <section className="tp-product-arrival-area pb-55">
          <div className="container">
            <SectionTitle title="Trending Products" />
            <div className="row">
              <div className="col-xl-12">
                <div className="tp-product-arrival-slider fix">
                  <div className="tp-product-arrival-active swiper-container">
                    <div className="swiper-wrapper">
                      <Swiper spaceBetween={50} slidesPerView={4} loop={true}>
                        <SwiperSlide>
                          <ProductCard />
                        </SwiperSlide>
                        <SwiperSlide>
                          <ProductCard />
                        </SwiperSlide>
                        <SwiperSlide>
                          <ProductCard />
                        </SwiperSlide>
                        <SwiperSlide>
                          <ProductCard />
                        </SwiperSlide>
                        <SwiperSlide>
                          <ProductCard />
                        </SwiperSlide>
                      </Swiper>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="tp-product-arrival-area pb-55">
          <div className="container">
            <SectionTitle title="Products On Sale" />
            <div className="row">
              <div className="col-xl-12">
                <div className="tp-product-arrival-slider fix">
                  <div className="tp-product-arrival-active swiper-container">
                    <div className="swiper-wrapper">
                      <Swiper
                        spaceBetween={50}
                        // slidesPerView={4}
                        loop={true}
                        breakpoints={{
                          1200: {
                            slidesPerView: 4,
                          },
                          992: {
                            slidesPerView: 3,
                          },
                          768: {
                            slidesPerView: 2,
                          },
                          767: {
                            slidesPerView: 2,
                          },
                          576: {
                            slidesPerView: 1,
                          },
                        }}
                      >
                        <SwiperSlide>
                          <ProductCard />
                        </SwiperSlide>
                        <SwiperSlide>
                          <ProductCard />
                        </SwiperSlide>
                        <SwiperSlide>
                          <ProductCard />
                        </SwiperSlide>
                        <SwiperSlide>
                          <ProductCard />
                        </SwiperSlide>
                        <SwiperSlide>
                          <ProductCard />
                        </SwiperSlide>
                      </Swiper>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <div className="tp-product-banner-area pb-90">
          <div className="container">
            <div className="tp-product-banner-slider fix">
              <div className="tp-product-banner-slider-active swiper-container">
                <div className="swiper-wrapper">
                  <Swiper
                    //  direction={'vertical'}
                    loop={true}
                    spaceBetween={50}
                    slidesPerView={1}
                  >
                    <SwiperSlide>
                      <BannerCard />
                    </SwiperSlide>
                    <SwiperSlide>
                      <BannerCard />
                    </SwiperSlide>
                    <SwiperSlide>
                      <BannerCard />
                    </SwiperSlide>
                  </Swiper>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
