import React from "react";

export default function ShopWidget() {
  return (
    <>
      <div className="tp-shop-widget mb-50">
        <h3 className="tp-shop-widget-title">Product Status</h3>
        <div className="tp-shop-widget-content">
          <div className="tp-shop-widget-checkbox">
            <ul className="filter-items filter-checkbox">
              <li className="filter-item checkbox">
                <FilterInput cate="sale" name="On Sale Products" />
              </li>
              <li className="filter-item checkbox">
                <FilterInput cate="trend" name="Trending Products" />
              </li>
              <li className="filter-item checkbox">
                <FilterInput cate="feature" name="Feature Products" />
              </li>
            </ul>
            {/* .filter-items */}
          </div>
        </div>
      </div>
    </>
  );
}
