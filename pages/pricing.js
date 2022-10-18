import React from "react";
import PageBanner from "../src/components/PageBanner";
import Layouts from "../src/layouts/Layouts";

const Pricing = () => {
  return (
    <Layouts>
      <PageBanner title={"Pricing & Plan"} bgnone />
      <section className="pricing-section section-gap">
        <div className="container">
          <div className="row justify-content-center mb-40">
            <div className="col-lg-6 col-sm-10">
              <div className="section-heading text-center">
                <span className="tagline">Our Pricing Plan</span>
                <h2 className="title">
                  We Provide A Processional Pricing Package
                </h2>
              </div>
            </div>
          </div>

          <div className="row justify-content-center pricing-tables">
            <div className="col-lg-4 col-md-6 col-sm-9">
              <div className="pricing-table color-1 mt-30">
                <div className="pricing-header">
                  <div className="pricing-icon">
                    <img src="assets/img/icon/heart-3.png" alt="Icon" />
                  </div>
                  <h3 className="pricing-title">
                    Basic Plan
                    <span className="tagline">Save 25%</span>
                  </h3>
                </div>
                <div className="pricing-price">
                  <span className="currency">&#36;</span>
                  <span className="price">29.59</span>
                  <span className="duration">monthly</span>
                </div>
                <div className="pricing-btn">
                  <a href="#" className="template-btn">
                    Choose Plan <i className="far fa-plus"></i>
                  </a>
                </div>
                <ul className="pricing-feature">
                  <li>
                    <i className="far fa-arrow-right"></i>COVID-19
                  </li>
                  <li>
                    <i className="far fa-arrow-right"></i>Eye Infections
                  </li>
                  <li>
                    <i className="far fa-arrow-right"></i>Senior Care
                  </li>
                  <li>
                    <i className="far fa-arrow-right"></i>Cardiology
                  </li>
                  <li>
                    <i className="far fa-arrow-right"></i>Family
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-9">
              <div className="pricing-table featured-table color-2 mt-30">
                <div className="pricing-header">
                  <div className="pricing-icon">
                    <img src="assets/img/icon/heart-3.png" alt="Icon" />
                  </div>
                  <h3 className="pricing-title">
                    Silver Plan
                    <span className="tagline">Save 55%</span>
                  </h3>
                </div>
                <div className="pricing-price">
                  <span className="currency">&#36;</span>
                  <span className="price">59.59</span>
                  <span className="duration">monthly</span>
                </div>
                <div className="pricing-btn">
                  <a href="#" className="template-btn">
                    Choose Plan <i className="far fa-plus"></i>
                  </a>
                </div>
                <ul className="pricing-feature">
                  <li>
                    <i className="far fa-arrow-right"></i>COVID-19
                  </li>
                  <li>
                    <i className="far fa-arrow-right"></i>Eye Infections
                  </li>
                  <li>
                    <i className="far fa-arrow-right"></i>Senior Care
                  </li>
                  <li>
                    <i className="far fa-arrow-right"></i>Cardiology
                  </li>
                  <li>
                    <i className="far fa-arrow-right"></i>Family
                  </li>
                </ul>
                <span className="featured-tagline">Popular</span>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-9">
              <div className="pricing-table color-3 mt-30">
                <div className="pricing-header">
                  <div className="pricing-icon">
                    <img src="assets/img/icon/heart-3.png" alt="Icon" />
                  </div>
                  <h3 className="pricing-title">
                    Gold Plan
                    <span className="tagline">Save 63%</span>
                  </h3>
                </div>
                <div className="pricing-price">
                  <span className="currency">&#36;</span>
                  <span className="price">99.59</span>
                  <span className="duration">monthly</span>
                </div>
                <div className="pricing-btn">
                  <a href="#" className="template-btn">
                    Choose Plan <i className="far fa-plus"></i>
                  </a>
                </div>
                <ul className="pricing-feature">
                  <li>
                    <i className="far fa-arrow-right"></i>COVID-19
                  </li>
                  <li>
                    <i className="far fa-arrow-right"></i>Eye Infections
                  </li>
                  <li>
                    <i className="far fa-arrow-right"></i>Senior Care
                  </li>
                  <li>
                    <i className="far fa-arrow-right"></i>Cardiology
                  </li>
                  <li>
                    <i className="far fa-arrow-right"></i>Family
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <!--====== Pricing Section End ======--> */}

      {/* <!--====== Appointment Section Start ======--> */}
      <section className="appointment-section">
        <div className="appointment-form-three bg-color-secondary">
          <div
            className="appointment-image"
            style={{ backgroundImage: "url(assets/img/appointment/04.jpg)" }}
          ></div>
          <div className="form-wrap">
            <div className="section-heading text-center heading-white mb-60">
              <span className="tagline">Make an Appointment</span>
              <h2 className="title">
                Fill-up The From to Get Our Medical Services{" "}
              </h2>
            </div>
            <form onSubmit={(e) => e.preventDefault()} action="#">
              <div className="row">
                <div className="col-sm-6">
                  <div className="input-field">
                    <input type="text" placeholder="Your Full Name" />
                  </div>
                </div>
                <div className="col-sm-6">
                  <div className="input-field">
                    <input type="email" placeholder="Email Address" />
                  </div>
                </div>
                <div className="col-sm-6">
                  <div className="input-field">
                    <select>
                      <option value="1" selected disabled>
                        Choose Doctors
                      </option>
                      <option value="2">Doctor One</option>
                      <option value="3">Doctor Two</option>
                      <option value="4">Doctor Three</option>
                      <option value="5">Doctor Four</option>
                    </select>
                  </div>
                </div>
                <div className="col-sm-6">
                  <div className="input-field">
                    <select>
                      <option value="1" selected disabled>
                        Services Category
                      </option>
                      <option value="2">Service One</option>
                      <option value="3">Service Two</option>
                      <option value="4">Service Three</option>
                      <option value="5">Service Four</option>
                    </select>
                  </div>
                </div>
                <div className="col-sm-6">
                  <div className="input-field">
                    <input type="date" />
                  </div>
                </div>
                <div className="col-sm-6">
                  <div className="input-field">
                    <input type="text" placeholder="Phone Number" />
                  </div>
                </div>
                <div className="col-sm-12">
                  <div className="input-field">
                    <button
                      type="submit"
                      className="template-btn template-btn-primary"
                    >
                      Make an Appointment <i className="far fa-plus"></i>
                    </button>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </section>
      {/* <!--====== Appointment Section End ======--> */}

      {/* <!--====== Help Section Start ======--> */}
      <section className="help-section section-gap">
        <div className="container">
          <div className="row justify-content-center justify-content-lg-end align-items-center">
            <div className="col-xl-5 col-lg-6 col-md-8">
              <div className="help-text-wrapper">
                <div className="section-heading mb-20">
                  <span className="tagline">How Can We Help</span>
                  <h2 className="title">
                    Flexible & Responsive to Changing Need
                  </h2>
                </div>
                <p>
                  Sed ut perspiciatis unde omnis iste natus error voluptatem
                  accusantium doloremque laudantium totam rem aperieaqueys epsa
                  quae abillo inventore veritatis et quase
                </p>
                <ul className="check-list mt-35 pr-xl-4">
                  <li>
                    25-30% estimated savings in implementation when using Mobile
                    Health Clinics
                  </li>
                  <li>Activate Mobile Health Clinics in just weeks</li>
                  <li>Flexible, on-demand access to care services</li>
                  <li>
                    Supports referrals to provider networks and care management
                    programs
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="help-img text-center text-lg-right mt-md-50">
                <img
                  src="assets/img/section-img/help-section-img.jpg"
                  alt="Image"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layouts>
  );
};
export default Pricing;
