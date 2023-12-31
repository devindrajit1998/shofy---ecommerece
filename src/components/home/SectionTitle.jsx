import React from "react";

export default function SectionTitle(props) {
  return (
    <>
      <div className="row align-items-end">
        <div className="col-xl-5 col-sm-6">
          <div className="tp-section-title-wrapper mb-40">
            <h3 className="tp-section-title">
              {props.title}
              <svg
                width={114}
                height={35}
                viewBox="0 0 114 35"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M112 23.275C1.84952 -10.6834 -7.36586 1.48086 7.50443 32.9053"
                  stroke="currentColor"
                  strokeWidth={4}
                  strokeMiterlimit="3.8637"
                  strokeLinecap="round"
                />
              </svg>
            </h3>
          </div>
        </div>
        <div className="col-xl-7 col-sm-6">
          <div className="tp-product-arrival-more-wrapper d-flex justify-content-end">
            <div className="tp-product-arrival-arrow tp-swiper-arrow mb-40 text-end tp-product-arrival-border">
              <button type="button" className="tp-arrival-slider-button-prev">
                <svg
                  width={8}
                  height={14}
                  viewBox="0 0 8 14"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M7 13L1 7L7 1"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
              <button type="button" className="tp-arrival-slider-button-next">
                <svg
                  width={8}
                  height={14}
                  viewBox="0 0 8 14"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M1 13L7 7L1 1"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
