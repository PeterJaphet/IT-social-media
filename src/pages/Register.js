import React, { Component, Fragment } from "react";

class Register extends Component {
  render() {
    return (
      <Fragment>
        <div className="main-wrap">
          <div className="nav-header bg-transparent shadow-none border-0">
            <div className="nav-top w-100">
              <a href="/">
                <i className="feather-zap text-success display1-size me-2 ms-0"></i>
                <span className="d-inline-block fredoka-font ls-3 fw-600 text-current font-xxl logo-text mb-0">
                  EMU-IT{" "}
                </span>{" "}
              </a>
              <button className="nav-menu me-0 ms-auto"></button>

              <a
                href="/login"
                className="header-btn d-none d-lg-block bg-dark fw-500 text-white font-xsss p-3 ms-auto w100 text-center lh-20 rounded-xl"
              >
                LOGIN
              </a>
              <a
                href="/register"
                className="header-btn d-none d-lg-block bg-current fw-500 text-white font-xsss p-3 ms-2 w100 text-center lh-20 rounded-xl"
              >
                REGISTER
              </a>
            </div>
          </div>

          <div className="row">
            <div
              className="col-xl-6 d-none d-xl-block p-0 vh-110 bg-image-cover bg-no-repeat"
              style={{
                backgroundImage: `url("https://i.ibb.co/2nXTr8V/800-emu-university-new-horizons.png")`,
              }}
            ></div>
            <div className="card shadow-none border-0 ms-auto me-auto login-card">
              <div className="card-body rounded-0 text-left">
                <h2 className="fw-700 display1-size display2-md-size mb-4">
                  CREATE YOUR ACCOUNT <br />
                </h2>
                <form>
                  <div className="form-group icon-input mb-3">
                    <i className="font-sm ti-user text-grey-500 pe-0"></i>
                    <input
                      type="text"
                      className="style2-input ps-5 form-control text-grey-900 font-xsss fw-600"
                      placeholder="Firstname"
                    />
                  </div>

                  <div className="form-group icon-input mb-3">
                    <i className="font-sm ti-user text-grey-500 pe-0"></i>
                    <input
                      type="text"
                      className="style2-input ps-5 form-control text-grey-900 font-xsss fw-600"
                      placeholder="Lastname"
                    />
                  </div>

                  <div className="form-group icon-input mb-3">
                    <i className="font-sm ti-email text-grey-500 pe-0"></i>
                    <input
                      type="email"
                      className="style2-input ps-5 form-control text-grey-900 font-xsss fw-600"
                      placeholder="Student Email Address"
                    />
                  </div>

                  <div className="form-group icon-input mb-3">
                    <i className="font-sm ti-user text-grey-500 pe-0"></i>
                    <input
                      type="text"
                      className="style2-input ps-5 form-control text-grey-900 font-xsss fw-600"
                      placeholder="Username"
                    />
                  </div>

                  <div className="form-group icon-input mb-3">
                    <i className="font-sm ti-mobile text-grey-500 pe-0"></i>
                    <input
                      type="text"
                      className="style2-input ps-5 form-control text-grey-900 font-xsss fw-600"
                      placeholder="Phone Number"
                    />
                  </div>

                  <div className="form-group icon-input mb-3">
                    <i className="font-sm ti-location-pin text-grey-500 pe-0"></i>
                    <input
                      type="text"
                      className="style2-input ps-5 form-control text-grey-900 font-xsss fw-600"
                      placeholder="Address"
                    />
                  </div>

                  <div className="form-group mb-3 ps-4">
                    <div><label className="form-label text-grey-900 font-xsss fw-600">Date of Birth</label></div>
                    <input type="Date" className="ps-5" />
                  </div>

                  <div className="form-group mb-3 ps-4">
                    <div className="form-label text-grey-900 font-xsss fw-600"><label>Gender</label></div>
                    <select className="form-form-select-sm">
                      <option value="none" selected disabled>Choose</option>
                      <option value="male">Male</option>
                      <option value="female">Female</option>
                      <option value="other">other</option>
                    </select>
                  </div>

                  <div className="form-group icon-input mb-3">
                    <i className="font-sm ti-lock text-grey-500 pe-0"></i>
                    <input
                      type="Password"
                      className="style2-input ps-5 form-control text-grey-900 font-xss ls-3"
                      placeholder="Password"
                    />
                  </div>
                  <div className="form-group icon-input mb-1">
                    <input
                      type="Password"
                      className="style2-input ps-5 form-control text-grey-900 font-xss ls-3"
                      placeholder="Confirm Password"
                    />
                    <i className="font-sm ti-lock text-grey-500 pe-0"></i>
                  </div>

                  <div className="form-check text-left mb-3">
                    <input
                      type="checkbox"
                      className="form-check-input mt-2"
                      id="exampleCheck2"
                    />
                    <label className="form-check-label font-xsss text-grey-500">
                      Accept Term and Conditions
                    </label>
                  </div>
                </form>

                <div className="col-sm-12 ps-0 text-left">
                  <div className="form-group mb-1">
                    <button className="btn-group btn-dark form-control text-center style2-input fw-600 p-0"><a className="text-center text-white"
                      href="/register">
                      SIGN UP
                    </a></button>
                  </div>
                  <h6 className="text-grey-500 font-xsss fw-500 mt-0 mb-0 lh-32">
                    Already have account{" "}
                    <a href="/login" className="fw-700 ms-1">
                      Login
                    </a>
                  </h6>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Fragment>
    );
  }
}

export default Register;
