import React from 'react'
import Layout from '../layout/Layout'
import Footer from '../common/Footer'
import Input from '../common/Input'

export default function Login() {
  return (
    <>
    <Layout/>
    <section className="tp-login-area pb-60 pt-120 p-relative z-index-1 fix">
  <div className="tp-login-shape">
    <img
      className="tp-login-shape-1"
      src="img/login/login-shape-1.png"
      alt=""
    />
    <img
      className="tp-login-shape-2"
      src="img/login/login-shape-2.png"
      alt=""
    />
    <img
      className="tp-login-shape-3"
      src="img/login/login-shape-3.png"
      alt=""
    />
    <img
      className="tp-login-shape-4"
      src="img/login/login-shape-4.png"
      alt=""
    />
  </div>
  <div className="container">
    <div className="row justify-content-center">
      <div className="col-xl-6 col-lg-8">
        <div className="tp-login-wrapper">
          <div className="tp-login-top text-center mb-30">
            <h3 className="tp-login-title">Login to Shofy.</h3>
            <p>
              Don’t have an account?{" "}
              <span>
                <a href="register.html">Create a free account</a>
              </span>
            </p>
          </div>
          <div className="tp-login-option">
            <div className="tp-login-social mb-10 d-flex flex-wrap align-items-center justify-content-center">
              <div className="tp-login-option-item has-google">
                <a href="#">
                  <img src="img/icon/login/google.svg" alt="" />
                  Sign in with google
                </a>
              </div>
              <div className="tp-login-option-item">
                <a href="#">
                  <img src="img/icon/login/facebook.svg" alt="" />
                </a>
              </div>
              <div className="tp-login-option-item">
                <a href="#">
                  <img
                    className="apple"
                    src="img/icon/login/apple.svg"
                    alt=""
                  />
                </a>
              </div>
            </div>
            <div className="tp-login-mail text-center mb-40">
              <p>
                or Sign in with <a href="#">Email</a>
              </p>
            </div>
            <div className="tp-login-input-wrapper">
            <Input
                      name="UserEmail"
                      placeholder="indrajit@gmail.com"
                      type="email"
                      label="Username"
                    />
                    <Input
                      name="UserPassword"
                      placeholder="Min. 8 character"
                      type="password"
                      label="Password"
                    />
                    
            </div>
            <div className="tp-login-suggetions d-sm-flex align-items-center justify-content-between mb-20">
              <div className="tp-login-remeber">
                <input id="remeber" type="checkbox" />
                <label htmlFor="remeber">Remember me</label>
              </div>
              <div className="tp-login-forgot">
                <a href="forgot.html">Forgot Password?</a>
              </div>
            </div>
            <div className="tp-login-bottom">
              <a href="profile.html" className="tp-login-btn w-100">
                Login
              </a>
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
