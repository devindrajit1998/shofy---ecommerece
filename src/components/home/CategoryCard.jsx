import React from "react";
import { useProductProvider } from "../context/ProductContex";
import { Link } from "react-router-dom";

export default function CategoryCard(items) {

const {BASE_URL} = useProductProvider()
const common = items.items.attributes;
  return (
    <>
     <div className="col">
      <div className="tp-product-category-item text-center mb-40">
        <div className="tp-product-category-thumb fix">
          <Link >
            <img
              src={`${BASE_URL}${common.img.data.attributes.url}`}
              alt="product-category"
              height={100}
            />
          </Link>
        </div>
        <div className="tp-product-category-content">
          <h3 className="tp-product-category-title">
            <Link>{common.name}</Link>
          </h3>
          <p>{common.products.data.length} Products</p>
        </div>
      </div>
      </div>
    </>
  );
}
