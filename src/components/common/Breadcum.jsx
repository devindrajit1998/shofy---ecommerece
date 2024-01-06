import React from "react";
import { Link } from "react-router-dom";

export default function Breadcum(props) {
  return (
    <>
      <section className="breadcrumb__area include-bg pt-50 ">
        <div className="container">
          <div className="row">
            <div className="col-xxl-12">
              <div className="breadcrumb__content p-relative z-index-1">
                {/* <h3 className="breadcrumb__title">{props.name}</h3> */}
                <div className="breadcrumb__list">
                  <span>
                    <Link to="/">Home</Link>
                  </span>
                  <span>{props.name}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
