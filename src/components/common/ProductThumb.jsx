import React, { useEffect, useState } from "react";
import { useProductProvider } from "../context/ProductContex";

export default function ProductThumb() {
  const { modalProduct, BASE_URL, TargetProduct } = useProductProvider();
  const altImg = modalProduct?.attributes?.alterImg;

  const [alter, setAlter] = useState();
  useEffect(() => {
    setAlter(altImg && altImg.data[0]);
  }, [TargetProduct]);
  const FindAlterImg = (id) => {
    const getAlter = altImg.data.find((item) => item.id === id);
    setAlter(altImg.data.find((item) => item.id === id));
  };
  // console.log("getAlter", alter);

  return (
    <>
      <div className="tp-product-details-thumb-wrapper tp-tab d-sm-flex">
        <nav>
          <div
            className="nav nav-tabs flex-sm-column "
            id="productDetailsNavThumb"
            role="tablist"
          >
            {altImg &&
              altImg.data.map((item) => {
                return (
                  <button
                    className="nav-link active"
                    key={item.id}
                    onClick={() => FindAlterImg(item.id)}
                  >
                    <img src={BASE_URL + item.attributes.url} alt="" />
                  </button>
                );
              })}
          </div>
        </nav>
        <div className="tab-content m-img" id="productDetailsNavContent">
          <div className="tab-pane fade show active">
            <div className="tp-product-details-nav-main-thumb">
              <img className="d-block mx-auto" src={`${BASE_URL}${alter && alter.attributes.url}`} alt="" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
