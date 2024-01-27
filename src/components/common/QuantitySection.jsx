import React from 'react'

export default function QuantitySection() {
  return (
    <>
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
    </>
  )
}
