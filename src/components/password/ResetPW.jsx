import React from 'react'
import Layout from '../layout/Layout'
import Footer from '../common/Footer'

export default function ResetPW() {
  return (
   <>
   <Layout/>

   <section className="tp-login-area  pb-60 pt-120 p-relative z-index-1 fix">
  <div className="tp-login-shape">
    <img
      className="tp-login-shape-1"
      src="assets/img/login/login-shape-1.png"
      alt=""
    />
    <img
      className="tp-login-shape-2"
      src="assets/img/login/login-shape-2.png"
      alt=""
    />
    <img
      className="tp-login-shape-3"
      src="assets/img/login/login-shape-3.png"
      alt=""
    />
    <img
      className="tp-login-shape-4"
      src="assets/img/login/login-shape-4.png"
      alt=""
    />
  </div>
  <div className="container">
    <div className="row justify-content-center">
      <div className="col-xl-6 col-lg-8">
        <div className="tp-login-wrapper">
          <div className="tp-login-top text-center mb-30">
            <h3 className="tp-login-title">Reset Passowrd</h3>
            <p>Enter your email address to request password reset.</p>
          </div>
          <div className="tp-login-option">
            <div className="tp-login-input-wrapper">
              <div className="tp-login-input-box">
                <div className="tp-login-input">
                  <input id="email" type="email" placeholder="shofy@mail.com" />
                </div>
                <div className="tp-login-input-title">
                  <label htmlFor="email">Your Email</label>
                </div>
              </div>
            </div>
            <div className="tp-login-bottom mb-15">
              <button type="submit" className="tp-login-btn w-100">
                Send Mail
              </button>
            </div>
            <div className="tp-login-suggetions d-sm-flex align-items-center justify-content-center">
              <div className="tp-login-forgot">
                <span>
                  Remeber Passowrd? <a href="login.html"> Login</a>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
<Footer/>
   </>
  )
}
