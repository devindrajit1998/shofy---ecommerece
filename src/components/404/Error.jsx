import React from "react";
import Layout from "../layout/Layout";
import Footer from "../common/Footer";

export default function Error() {
  return (
    <>
      <Layout />
      <section className="tp-error-area pt-110 pb-110">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-xl-6 col-lg-8 col-md-10">
              <div className="tp-error-content text-center">
                <div className="tp-error-thumb">
                  <img src="img/error/error.png" alt="" />
                </div>
                <h3 className="tp-error-title">Oops! Page not found</h3>
                <p>
                  Whoops, this is embarassing. Looks like the page you were
                  looking for wasn't found.
                </p>
                <a href="index.html" className="tp-error-btn">
                  Back to Home
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer/>
    </>
  );
}
