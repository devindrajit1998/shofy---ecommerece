import React from "react";
import Layout from "../layout/Layout";
import HeroSlider from "./HeroSlider";
import CategoryCard from "./CategoryCard";
import Service from "./Service";
import ProductCard from "../common/ProductCard";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/swiper-bundle.css";
import SectionTitle from "./SectionTitle";
import BannerCard from "./BannerCard";
import Footer from "../common/Footer";
import { useProductProvider } from "../context/ProductContex";
import ProductModal from "../common/ProductModal";

export default function Home(id) {
  const { category,  trending , sale} = useProductProvider();

  return (
    <>
      <Layout />
      <main>
        {/* slider area start  */}
        <section className="tp-slider-area p-relative z-index-1">
          <div className="tp-slider-active tp-slider-variation swiper-container">
            <div className="swiper-wrapper green-dark-bg">
              <HeroSlider />
            </div>
          </div>
        </section>
        {/* slider area end  */}

        {/* product category area area start  */}
        <section className="tp-product-category pt-60 pb-15">
          <div className="container">
            <div className="row">
              <Swiper
                spaceBetween={20}
                loop={true}
                autoplay={{
                  delay: 1000,
                  disableOnInteraction: false,
                }}
                breakpoints={{
                  1200: {
                    slidesPerView: 5,
                  },
                  992: {
                    slidesPerView: 4,
                  },
                  768: {
                    slidesPerView: 3,
                  },
                  767: {
                    slidesPerView: 2,
                  },
                  576: {
                    slidesPerView: 1,
                  },
                }}
              >
                {category
                  ? category.map((items, index) => {
                      return (
                        <SwiperSlide key={index}>
                          <CategoryCard items={items} />
                        </SwiperSlide>
                      );
                    })
                  : category}
              </Swiper>
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
                      <Swiper
                        spaceBetween={50}
                        loop={true}
                        navigation={{
                          nextEl: ".tp-arrival-slider-button-next",
                          prevEl: ".tp-arrival-slider-button-prev",
                        }}
                        breakpoints={{
                          1200: {
                            slidesPerView: 5,
                          },
                          992: {
                            slidesPerView: 4,
                          },
                          768: {
                            slidesPerView: 3,
                          },
                          767: {
                            slidesPerView: 2,
                          },
                          576: {
                            slidesPerView: 1,
                          },
                        }}
                      >
                        {trending
                          ? trending.map((items) => {
                            const data = items.attributes;
                            // console.log("new data",data)
                              return (
                                <SwiperSlide key={items.id}>
                                  <ProductCard data={data} state="Trending" id={id}/>
                                </SwiperSlide>
                              );
                            })
                          : trending} 
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
                        loop={true}
                        breakpoints={{
                          1200: {
                            slidesPerView: 5,
                          },
                          992: {
                            slidesPerView: 4,
                          },
                          768: {
                            slidesPerView: 3,
                          },
                          767: {
                            slidesPerView: 2,
                          },
                          576: {
                            slidesPerView: 1,
                          },
                        }}
                      >
                         {sale
                          ? sale.map((items) => {
                            const data = items.attributes;
                            // console.log("new data",data)
                              return (
                                <SwiperSlide key={items.id}>
                                  <ProductCard data={data} state="Sale" />
                                </SwiperSlide>
                              );
                            })
                          : sale}
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
        <ProductModal />
      </main>
      <Footer />
    </>
  );
}
