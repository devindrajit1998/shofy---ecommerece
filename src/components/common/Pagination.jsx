import React from "react";
import { Link } from "react-router-dom";

export default function Pagination() {
  return (
    <>
      <div className="tp-shop-pagination mt-20">
        <div className="tp-pagination">
          <nav>
            <ul>
              <li>
                <a
                  href="shop.html"
                  className="tp-pagination-prev prev page-numbers"
                >
                  <svg
                    width={15}
                    height={13}
                    viewBox="0 0 15 13"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M1.00017 6.77879L14 6.77879"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M6.24316 11.9999L0.999899 6.77922L6.24316 1.55762"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </a>
              </li>
              <li>
              <span className="current">1</span>
              </li>
              <li>
                <span className="">2</span>
              </li>
              <li>
              <span className="">3</span>
              </li>
              <li>
                <a href="shop.html" className="next page-numbers">
                  <svg
                    width={15}
                    height={13}
                    viewBox="0 0 15 13"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M13.9998 6.77883L1 6.77883"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M8.75684 1.55767L14.0001 6.7784L8.75684 12"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </>
  );
}
