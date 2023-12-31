import React from "react";

export default function CategoryCard() {
  return (
    <>
     <div className="col">
      <div className="tp-product-category-item text-center mb-40">
        <div className="tp-product-category-thumb fix">
          <a href="shop-category.html">
            <img
              src="img/product/category/product-cat-1.png"
              alt="product-category"
            />
          </a>
        </div>
        <div className="tp-product-category-content">
          <h3 className="tp-product-category-title">
            <a href="shop-category.html">Headphones</a>
          </h3>
          <p>20 Product</p>
        </div>
      </div>
      </div>
    </>
  );
}
