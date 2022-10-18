import Link from "next/link";
import React from "react";
import Slider from "react-slick";
import Counter from "../src/components/Counter";
import Layouts from "../src/layouts/Layouts";
import { testimonialOne } from "../src/sliderProps";

const Index = () => {
  return (
    <Layouts position={"absolute"}>
      <>
        {/*====== Hero Area Start ======*/}
        <section className="hero-area-one">
          <div className="container">
            <div className="row align-items-center justify-content-center">
              <div className="col-lg-5 col-md-8">
                <div className="hero-content">
                  <h1 className="title wow fadeInDown" data-wow-delay="0.3s">
                    We Care Medical &amp; Health
                  </h1>
                  <p className="wow fadeInLeft" data-wow-delay="0.4s">
                    Dolor sit amet consectetur adipiscing elitsedes eiusmod
                    tempor incididunt utlabore Lorem
                  </p>
                  <Link href="/contact">
                    <a
                      className="template-btn wow fadeInUp"
                      data-wow-delay="0.5s"
                    >
                      Make an Appointment <i className="far fa-plus" />
                    </a>
                  </Link>
                </div>
              </div>
              <div className="col-lg-7">
                <div className="hero-img wow fadeInUp" data-wow-delay="0.3s">
                  <img src="assets/img/hero-img/hero-img.png" alt="Hero" />
                </div>
              </div>
            </div>
          </div>
        </section>
        {/*====== Hero Area End ======*/}
        {/*====== Why Choose Section Start ======*/}
        <section className="wcu-section section-gap-top">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-md-10">
                <div className="section-heading heading-white text-center mb-40">
                  <span className="tagline">Why Choose Our Medical</span>
                  <h2 className="title">
                    Breakthrough in Comprehensive, Flexible Care Delivery Models
                  </h2>
                </div>
              </div>
            </div>
            <div className="row justify-content-center">
              <div
                className="col-lg-4 col-md-6 col-sm-9 wow fadeInUp"
                data-wow-delay="0.3s"
              >
                <div className="image-title-box mt-30">
                  <h4 className="title">
                    <Link href="/service">
                      <a>Optimize Your Health Care Services</a>
                    </Link>
                  </h4>
                  <div className="image">
                    <img src="assets/img/img-title-box/01.jpg" alt="Image" />
                  </div>
                </div>
              </div>
              <div
                className="col-lg-4 col-md-6 col-sm-9 wow fadeInUp"
                data-wow-delay="0.4s"
              >
                <div className="image-title-box mt-30">
                  <h4 className="title">
                    <Link href="/service">
                      <a>Boost Employee Engagement</a>
                    </Link>
                  </h4>
                  <div className="image">
                    <img src="assets/img/img-title-box/02.jpg" alt="Image" />
                  </div>
                </div>
              </div>
              <div
                className="col-lg-4 col-md-6 col-sm-9 wow fadeInUp"
                data-wow-delay="0.5s"
              >
                <div className="image-title-box mt-30">
                  <h4 className="title">
                    <Link href="/service">
                      <a>Accelerate Your Return On Investment</a>
                    </Link>
                  </h4>
                  <div className="image">
                    <img src="assets/img/img-title-box/03.jpg" alt="Image" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/*====== Why Choose Section End ======*/}
        {/*====== About Section Start ======*/}
        <section className="about-section section-gap">
          <div className="container">
            <div className="row justify-content-lg-between justify-content-center align-items-center">
              <div className="col-lg-6 col-md-10">
                <div className="circle-image-gallery mb-md-50">
                  <div className="row">
                    <div className="col-6 gallery-left">
                      <div
                        className="single-img wow fadeInLeft"
                        data-wow-delay="0.3s"
                      >
                        <img
                          src="assets/img/circle-image-gallery/01.jpg"
                          alt=""
                        />
                      </div>
                      <div
                        className="single-img wow fadeInRight"
                        data-wow-delay="0.4s"
                      >
                        <img
                          src="assets/img/circle-image-gallery/04.jpg"
                          alt=""
                        />
                      </div>
                    </div>
                    <div className="col-6 gallery-right">
                      <div
                        className="single-img wow fadeInLeft"
                        data-wow-delay="0.5s"
                      >
                        <img
                          className="animate-float-bob-y"
                          src="assets/img/circle-image-gallery/03.jpg"
                          alt=""
                        />
                      </div>
                      <div
                        className="single-img wow fadeInRight"
                        data-wow-delay="0.6s"
                      >
                        <img
                          src="assets/img/circle-image-gallery/02.jpg"
                          alt=""
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xl-5 col-lg-6 col-md-8">
                <div className="about-text">
                  <div className="section-heading mb-35">
                    <span className="tagline">About Seeva</span>
                    <h2 className="title">
                      All-in-One Worksite Health Solution
                    </h2>
                    <p>25 Years Of Experience in Medical Services</p>
                  </div>
                  <p>
                    Sed ut perspiciatis unde omnis iste natus error voluptatem
                    accusantium doloremque laudantium totam rem aperieaque ipsa
                    quae ab illo inventore veritatis et quasi architecto beatae
                    vitae dicta sunt explicabo. Nemo enim ipsam voluptatemsy
                    quia voluptas sit aspernatur aut odit aut fugit quia
                    conquntur magni dolores eos qui ratione voluptatem
                  </p>
                  <Link href="/about">
                    <a className="template-btn mt-40">
                      Learn More <i className="far fa-plus" />
                    </a>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/*====== About Section End ======*/}
        {/*====== Service Section Start ======*/}
        <section className="service-section bg-color-grey section-gap">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-xl-7 col-lg-8">
                <div className="section-heading text-center mb-40">
                  <span className="tagline">Popular Medical Services</span>
                  <h2 className="title">
                    Benefit For Physical Mental and Virtual Care
                  </h2>
                </div>
              </div>
            </div>
            <div className="row justify-content-center service-loop">
              <div className="col-lg-4 col-md-6 col-sm-8">
                <div
                  className="iconic-box mt-30 wow fadeInUp"
                  data-wow-delay="0.3s"
                >
                  <div className="icon">
                    <img src="assets/img/icon/heart.png" alt="Icon" />
                  </div>
                  <h4 className="title">
                    <Link href="/service-details">
                      <a>Cardiology</a>
                    </Link>
                  </h4>
                  <p>
                    Dolor sit amet consectetur ascing elitsed eiusmod tempor
                  </p>
                  <div className="box-link-wrap">
                    <span className="link-icon">
                      <i className="far fa-plus" />
                    </span>
                    <Link href="/service-details">
                      <a className="box-link">
                        Read More <i className="far fa-plus" />
                      </a>
                    </Link>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 col-sm-8">
                <div
                  className="iconic-box mt-30 wow fadeInUp"
                  data-wow-delay="0.4s"
                >
                  <div className="icon">
                    <img src="assets/img/icon/lungs.png" alt="Icon" />
                  </div>
                  <h4 className="title">
                    <Link href="/service-details">
                      <a>Pulmonary</a>
                    </Link>
                  </h4>
                  <p>
                    Dolor sit amet consectetur ascing elitsed eiusmod tempor
                  </p>
                  <div className="box-link-wrap">
                    <span className="link-icon">
                      <i className="far fa-plus" />
                    </span>
                    <Link href="/service-details">
                      <a className="box-link">
                        Read More <i className="far fa-plus" />
                      </a>
                    </Link>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 col-sm-8">
                <div
                  className="iconic-box mt-30 wow fadeInUp"
                  data-wow-delay="0.5s"
                >
                  <div className="icon">
                    <img src="assets/img/icon/brain.png" alt="Icon" />
                  </div>
                  <h4 className="title">
                    <Link href="/service-details">
                      <a>Neurology</a>
                    </Link>
                  </h4>
                  <p>
                    Dolor sit amet consectetur ascing elitsed eiusmod tempor
                  </p>
                  <div className="box-link-wrap">
                    <span className="link-icon">
                      <i className="far fa-plus" />
                    </span>
                    <Link href="/service-details">
                      <a className="box-link">
                        Read More <i className="far fa-plus" />
                      </a>
                    </Link>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 col-sm-8">
                <div
                  className="iconic-box mt-30 wow fadeInUp"
                  data-wow-delay="0.6s"
                >
                  <div className="icon">
                    <img src="assets/img/icon/stomach.png" alt="Icon" />
                  </div>
                  <h4 className="title">
                    <Link href="/service-details">
                      <a>Gastroenterology</a>
                    </Link>
                  </h4>
                  <p>
                    Dolor sit amet consectetur ascing elitsed eiusmod tempor
                  </p>
                  <div className="box-link-wrap">
                    <span className="link-icon">
                      <i className="far fa-plus" />
                    </span>
                    <Link href="/service-details">
                      <a className="box-link">
                        Read More <i className="far fa-plus" />
                      </a>
                    </Link>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 col-sm-8">
                <div
                  className="iconic-box mt-30 wow fadeInUp"
                  data-wow-delay="0.7s"
                >
                  <div className="icon">
                    <img src="assets/img/icon/virus.png" alt="Icon" />
                  </div>
                  <h4 className="title">
                    <Link href="/service-details">
                      <a>Covid - 19</a>
                    </Link>
                  </h4>
                  <p>
                    Dolor sit amet consectetur ascing elitsed eiusmod tempor
                  </p>
                  <div className="box-link-wrap">
                    <span className="link-icon">
                      <i className="far fa-plus" />
                    </span>
                    <Link href="/service-details">
                      <a className="box-link">
                        Read More <i className="far fa-plus" />
                      </a>
                    </Link>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 col-sm-8">
                <div
                  className="iconic-box mt-30 wow fadeInUp"
                  data-wow-delay="0.8s"
                >
                  <div className="icon">
                    <img src="assets/img/icon/bronchus.png" alt="Icon" />
                  </div>
                  <h4 className="title">
                    <Link href="/service-details">
                      <a>Orthopedics</a>
                    </Link>
                  </h4>
                  <p>
                    Dolor sit amet consectetur ascing elitsed eiusmod tempor
                  </p>
                  <div className="box-link-wrap">
                    <span className="link-icon">
                      <i className="far fa-plus" />
                    </span>
                    <Link href="/service-details">
                      <a className="box-link">
                        Read More <i className="far fa-plus" />
                      </a>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/*====== Service Section End ======*/}
        {/*====== Big Tagline Start ======*/}
        <section className="big-tagline">
          <div className="container-fluid">
            <h2 className="tagline">
              Learn better health outcomes, improve costs and increase
              productivity for your business
            </h2>
          </div>
        </section>
        {/*====== Big Tagline End ======*/}
        {/*====== Doctor Section Start ======*/}
        <section className="doctors-section section-gap">
          <div className="container">
            <div className="row justify-content-between align-items-center mb-40">
              <div className="col-lg-5 col-md-6">
                <div className="section-heading">
                  <span className="tagline">Professional Doctors</span>
                  <h2 className="title">Meet Our Experience Doctors</h2>
                </div>
              </div>
              <div className="col-auto">
                <Link href="/doctors">
                  <a
                    className="template-btn template-btn-primary mt-sm-30 wow fadeInRight"
                    data-wow-delay="0.3s"
                  >
                    Make An Appointment <i className="far fa-plus" />
                  </a>
                </Link>
              </div>
            </div>
            <div className="row doctors-loop justify-content-center">
              <div className="col-lg-3 col-md-6">
                <div
                  className="doctor-box-one bordered-style mt-30 wow fadeInUp"
                  data-wow-delay="0.3s"
                >
                  <div className="doctor-photo">
                    <img src="assets/img/doctors/10.jpg" alt="Image" />
                  </div>
                  <div className="doctor-information">
                    <h5 className="name">
                      <Link href="/doctor-details">
                        <a>Lee S. Williamson</a>
                      </Link>
                    </h5>
                    <span className="specialty">Cardiology</span>
                    <ul className="social-links">
                      <li>
                        <a href="#">
                          <i className="fab fa-facebook-f" />
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="fab fa-twitter" />
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="fab fa-youtube" />
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="fab fa-linkedin" />
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-6">
                <div
                  className="doctor-box-one bordered-style mt-30 wow fadeInUp"
                  data-wow-delay="0.4s"
                >
                  <div className="doctor-photo">
                    <img src="assets/img/doctors/11.jpg" alt="Image" />
                  </div>
                  <div className="doctor-information">
                    <h5 className="name">
                      <Link href="/doctor-details">
                        <a>Greg S. Grinstead</a>
                      </Link>
                    </h5>
                    <span className="specialty">Neurology</span>
                    <ul className="social-links">
                      <li>
                        <a href="#">
                          <i className="fab fa-facebook-f" />
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="fab fa-twitter" />
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="fab fa-youtube" />
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="fab fa-linkedin" />
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-6">
                <div
                  className="doctor-box-one bordered-style mt-30 wow fadeInUp"
                  data-wow-delay="0.5s"
                >
                  <div className="doctor-photo">
                    <img src="assets/img/doctors/12.jpg" alt="Image" />
                  </div>
                  <div className="doctor-information">
                    <h5 className="name">
                      <Link href="/doctor-details">
                        <a>Roger K. Jackson</a>
                      </Link>
                    </h5>
                    <span className="specialty">Orthopedics</span>
                    <ul className="social-links">
                      <li>
                        <a href="#">
                          <i className="fab fa-facebook-f" />
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="fab fa-twitter" />
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="fab fa-youtube" />
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="fab fa-linkedin" />
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-6">
                <div
                  className="doctor-box-one bordered-style mt-30 wow fadeInUp"
                  data-wow-delay="0.6s"
                >
                  <div className="doctor-photo">
                    <img src="assets/img/doctors/13.jpg" alt="Image" />
                  </div>
                  <div className="doctor-information">
                    <h5 className="name">
                      <Link href="/doctor-details">
                        <a>Raymudo M. Drake</a>
                      </Link>
                    </h5>
                    <span className="specialty">Covid - 19</span>
                    <ul className="social-links">
                      <li>
                        <a href="#">
                          <i className="fab fa-facebook-f" />
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="fab fa-twitter" />
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="fab fa-youtube" />
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="fab fa-linkedin" />
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/*====== Doctor Section End ======*/}
        {/*====== Appointment Section Start ======*/}
        <section className="appointment-section section-gap-bottom">
          <div className="container">
            <div className="appointment-form-two">
              <div className="form-wrap">
                <div className="section-heading mb-40">
                  <span className="tagline">Make an Appointment</span>
                  <h2 className="title">Make an Appointment to Doctor Visit</h2>
                </div>
                <form onSubmit={(e) => e.preventDefault()} action="#">
                  <div className="row">
                    <div className="col-12">
                      <div
                        className="input-field wow fadeInLeft"
                        data-wow-delay="0.3s"
                      >
                        <input type="text" placeholder="Your Full Name" />
                      </div>
                    </div>
                    <div className="col-12">
                      <div
                        className="input-field wow fadeInLeft"
                        data-wow-delay="0.4s"
                      >
                        <select>
                          <option data-dsplay={1} selected disabled="">
                            Services Category
                          </option>
                          <option value={2}>Service One</option>
                          <option value={3}>Service Two</option>
                          <option value={4}>Service Three</option>
                          <option value={5}>Service Four</option>
                        </select>
                      </div>
                    </div>
                    <div className="col-12">
                      <div
                        className="input-field wow fadeInLeft"
                        data-wow-delay="0.5s"
                      >
                        <select>
                          <option data-dsplay={1} selected disabled="">
                            Choose Doctors
                          </option>
                          <option value={2}>Doctor One</option>
                          <option value={3}>Doctor Two</option>
                          <option value={4}>Doctor Three</option>
                          <option value={5}>Doctor Four</option>
                        </select>
                      </div>
                    </div>
                    <div className="col-12">
                      <div
                        className="input-field wow fadeInLeft"
                        data-wow-delay="0.6s"
                      >
                        <input type="date" />
                      </div>
                    </div>
                    <div className="col-12">
                      <div
                        className="input-field wow fadeInLeft"
                        data-wow-delay="0.7s"
                      >
                        <button type="submit" className="template-btn">
                          Make an Appointment <i className="far fa-plus" />
                        </button>
                      </div>
                    </div>
                  </div>
                </form>
              </div>
              <div
                className="appointment-image"
                style={{
                  backgroundImage: "url(assets/img/appointment/07.jpg)",
                }}
              ></div>
            </div>
          </div>
        </section>
        {/*====== Appointment Section End ======*/}
        {/*====== Testimonials Section Start ======*/}
        <section className="testimonial-section bg-color-grey section-have-half-bg">
          <div className="container-fluid">
            <div className="row justify-content-end">
              <div className="col-lg-6">
                <div className="testimonial-one-wrap">
                  <div className="section-heading mb-50">
                    <span className="tagline">Our Testimonials</span>
                    <h2 className="title">
                      What Our Patients Say About Our Medical
                    </h2>
                  </div>
                  <Slider
                    {...testimonialOne}
                    className="testimonial-slider-one"
                  >
                    <div className="single-testimonial-slider">
                      <div className="testimonial-inner">
                        <div className="avatar">
                          <img
                            src="assets/img/testimonial/01.png"
                            alt="Avatar"
                          />
                        </div>
                        <div className="content-wrap">
                          <p className="testimonial-desc">
                            Sed ut perspiciatis unde omnis natusy error
                            voluptatem accusantium doloreue laudan totam rem
                            aperiam eaquip quae abillo inventore veritatis quasi
                            architecto beatae vitae dicta sunt explicabo
                          </p>
                          <div className="author-info">
                            <h5 className="name">Mark E. Kaminsky</h5>
                            <span className="title">Web Designer</span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="single-testimonial-slider">
                      <div className="testimonial-inner">
                        <div className="avatar">
                          <img
                            src="assets/img/testimonial/01.png"
                            alt="Avatar"
                          />
                        </div>
                        <div className="content-wrap">
                          <p className="testimonial-desc">
                            Sed ut perspiciatis unde omnis natusy error
                            voluptatem accusantium doloreue laudan totam rem
                            aperiam eaquip quae abillo inventore veritatis quasi
                            architecto beatae vitae dicta sunt explicabo
                          </p>
                          <div className="author-info">
                            <h5 className="name">Mark E. Kaminsky</h5>
                            <span className="title">Web Designer</span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="single-testimonial-slider">
                      <div className="testimonial-inner">
                        <div className="avatar">
                          <img
                            src="assets/img/testimonial/01.png"
                            alt="Avatar"
                          />
                        </div>
                        <div className="content-wrap">
                          <p className="testimonial-desc">
                            Sed ut perspiciatis unde omnis natusy error
                            voluptatem accusantium doloreue laudan totam rem
                            aperiam eaquip quae abillo inventore veritatis quasi
                            architecto beatae vitae dicta sunt explicabo
                          </p>
                          <div className="author-info">
                            <h5 className="name">Mark E. Kaminsky</h5>
                            <span className="title">Web Designer</span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="single-testimonial-slider">
                      <div className="testimonial-inner">
                        <div className="avatar">
                          <img
                            src="assets/img/testimonial/01.png"
                            alt="Avatar"
                          />
                        </div>
                        <div className="content-wrap">
                          <p className="testimonial-desc">
                            Sed ut perspiciatis unde omnis natusy error
                            voluptatem accusantium doloreue laudan totam rem
                            aperiam eaquip quae abillo inventore veritatis quasi
                            architecto beatae vitae dicta sunt explicabo
                          </p>
                          <div className="author-info">
                            <h5 className="name">Mark E. Kaminsky</h5>
                            <span className="title">Web Designer</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </Slider>
                </div>
              </div>
            </div>
          </div>
          <div
            className="section-half-bg"
            style={{
              backgroundImage: "url(assets/img/section-bg/half-bg-img-01.jpg)",
            }}
          />
        </section>
        {/*====== Testimonials Section End ======*/}
        {/*====== Counter Section Start ======*/}
        <section className="counter-section section-gap">
          <div className="container">
            <div className="counter-inner">
              <div className="row justify-content-between">
                <div className="col-lg-auto col-md-5 col-sm-6">
                  <div className="counter-item">
                    <div className="counter-wrap">
                      {/* <span className="counter">359</span> */}
                      <Counter end={359} />
                      <span className="suffix">+</span>
                    </div>
                    <h6 className="title">Professional Doctors</h6>
                  </div>
                </div>
                <div className="col-lg-auto col-md-5 col-sm-6">
                  <div className="counter-item">
                    <div className="counter-wrap">
                      <Counter end={85} />
                      {/* <span className="counter">85</span> */}
                      <span className="suffix">k+</span>
                    </div>
                    <h6 className="title">Saticfied Our Clients</h6>
                  </div>
                </div>
                <div className="col-lg-auto col-md-5 col-sm-6">
                  <div className="counter-item">
                    <div className="counter-wrap">
                      <Counter end={863} />
                      {/* <span className="counter">863</span> */}
                      <span className="suffix">+</span>
                    </div>
                    <h6 className="title">Win International Awards</h6>
                  </div>
                </div>
                <div className="col-lg-auto col-md-5 col-sm-6">
                  <div className="counter-item">
                    <div className="counter-wrap">
                      <Counter end={86} />
                      <span className="suffix">k+</span>
                    </div>
                    <h6 className="title">4.9 Star Reviews</h6>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/*====== Counter Section End ======*/}
        {/*====== Help Section Start ======*/}
        <section className="help-section section-gap-bottom">
          <div className="container">
            <div className="row justify-content-center justify-content-lg-end align-items-center">
              <div className="col-xl-5 col-lg-6 col-md-8">
                <div className="help-text-wrapper">
                  <div className="section-heading mb-20">
                    <span className="tagline">How Can We Help</span>
                    <h2 className="title">
                      Flexible &amp; Responsive to Changing Need
                    </h2>
                  </div>
                  <p>
                    Sed ut perspiciatis unde omnis iste natus error voluptatem
                    accusantium doloremque laudantium totam rem aperieaqueys
                    epsa quae abillo inventore veritatis et quase
                  </p>
                  <ul className="check-list mt-35 pr-xl-4">
                    <li className="wow fadeInUp" data-wow-delay="0.3s">
                      25-30% estimated savings in implementation when using
                      Mobile Health Clinics
                    </li>
                    <li className="wow fadeInUp" data-wow-delay="0.4s">
                      Activate Mobile Health Clinics in just weeks
                    </li>
                    <li className="wow fadeInUp" data-wow-delay="0.5s">
                      Flexible, on-demand access to care services
                    </li>
                    <li className="wow fadeInUp" data-wow-delay="0.6s">
                      Supports referrals to provider networks and care
                      management programs
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
        {/*====== Help Section End ======*/}
        {/*====== Partners Section Start ======*/}
        <section className="partner-section section-gap bg-color-secondary section-map-overly">
          <div className="container">
            <div className="section-heading heading-white text-center mb-50">
              <span className="span tagline">Our Trusted Partners</span>
              <h2 className="title">We’ve 23563k+ Trusted Partners</h2>
            </div>
            <div className="partner-logo-grid grid-border-white">
              <div className="single-partner">
                <a href="#">
                  <img src="assets/img/partner-logos/01.png" alt="Partner" />
                </a>
              </div>
              <div className="single-partner">
                <a href="#">
                  <img src="assets/img/partner-logos/02.png" alt="Partner" />
                </a>
              </div>
              <div className="single-partner">
                <a href="#">
                  <img src="assets/img/partner-logos/03.png" alt="Partner" />
                </a>
              </div>
              <div className="single-partner">
                <a href="#">
                  <img src="assets/img/partner-logos/04.png" alt="Partner" />
                </a>
              </div>
              <div className="single-partner">
                <a href="#">
                  <img src="assets/img/partner-logos/05.png" alt="Partner" />
                </a>
              </div>
              <div className="single-partner">
                <a href="#">
                  <img src="assets/img/partner-logos/06.png" alt="Partner" />
                </a>
              </div>
              <div className="single-partner">
                <a href="#">
                  <img src="assets/img/partner-logos/07.png" alt="Partner" />
                </a>
              </div>
              <div className="single-partner">
                <a href="#">
                  <img src="assets/img/partner-logos/08.png" alt="Partner" />
                </a>
              </div>
            </div>
          </div>
        </section>
        {/*====== Partners Section End ======*/}
        {/*====== Latest Blog Start ======*/}
        <section className="latest-blog-section section-gap">
          <div className="container">
            <div className="row">
              <div className="col-lg-6 col-md-8">
                <div className="section-heading mb-40">
                  <span className="tagline">Latest News &amp; Blog</span>
                  <h2 className="title">
                    Get Every Single Updates For Medical &amp; Health
                  </h2>
                </div>
              </div>
            </div>
            <div className="row justify-content-center latest-blog-loop">
              <div className="col-lg-4 col-md-6 col-sm-10">
                <div className="latest-blog-one mt-30">
                  <div className="blog-thumb">
                    <img src="assets/img/latest-blog/01.jpg" alt="Thumb" />
                  </div>
                  <div className="blog-content">
                    <div className="blog-meta">
                      <a href="#" className="blog-category">
                        Health
                      </a>
                      <a href="#" className="blog-date">
                        <i className="far fa-calendar-alt" /> 25 Aug 2021
                      </a>
                    </div>
                    <h4 className="blog-title">
                      <Link href="/blog-details">
                        <a>Comprehensive Worksite Health Program Built</a>
                      </Link>
                    </h4>
                    <div className="btn-area">
                      <Link href="/blog-details">
                        <a className="read-more-btn">
                          Read More <i className="far fa-plus" />
                        </a>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 col-sm-10">
                <div className="latest-blog-one mt-30">
                  <div className="blog-thumb">
                    <img src="assets/img/latest-blog/02.jpg" alt="Thumb" />
                  </div>
                  <div className="blog-content">
                    <div className="blog-meta">
                      <a href="#" className="blog-category">
                        Medical
                      </a>
                      <a href="#" className="blog-date">
                        <i className="far fa-calendar-alt" /> 26 Aug 2021
                      </a>
                    </div>
                    <h4 className="blog-title">
                      <Link href="/blog-details">
                        <a>Speeding Up The Return on Your Healthcare</a>
                      </Link>
                    </h4>
                    <div className="btn-area">
                      <Link href="/blog-details">
                        <a className="read-more-btn">
                          Read More <i className="far fa-plus" />
                        </a>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 col-sm-10">
                <div className="latest-blog-one mt-30">
                  <div className="blog-thumb">
                    <img src="assets/img/latest-blog/03.jpg" alt="Thumb" />
                  </div>
                  <div className="blog-content">
                    <div className="blog-meta">
                      <a href="#" className="blog-category">
                        Health
                      </a>
                      <a href="#" className="blog-date">
                        <i className="far fa-calendar-alt" /> 25 Aug 2021
                      </a>
                    </div>
                    <h4 className="blog-title">
                      <Link href="/blog-details">
                        <a>Comprehensive Worksite Health Program Built</a>
                      </Link>
                    </h4>
                    <div className="btn-area">
                      <Link href="/blog-details">
                        <a className="read-more-btn">
                          Read More <i className="far fa-plus" />
                        </a>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/*====== Latest Blog End ======*/}
      </>
    </Layouts>
  );
};
export default Index;
