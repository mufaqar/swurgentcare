import Link from "next/link";
import React, { useState } from "react";
import Slider from "react-slick";
import Counter from "../src/components/Counter";
import TestimoinalSlider from "../src/components/TestimonialSlider";
import VideoPopup from "../src/components/VideoPopup";
import Header4 from "../src/layouts/headers/Header4";
import Layouts from "../src/layouts/Layouts";
import { heroSlider } from "../src/sliderProps";

const Index4 = () => {
  const [video, setVideo] = useState(false);
  return (
    <Layouts noheader footer={2}>
      {video && <VideoPopup close={setVideo} />}
      <Header4 />
      <>
        <section className="hero-slider hero-slider-two">
          <Slider {...heroSlider} className="hero-slider-active">
            <div className="single-hero-slider">
              <div
                className="hero-slider-bg bg-size-cover"
                style={{
                  backgroundImage: "url(assets/img/hero-img/hero-slider-4.jpg)",
                }}
              />
              <div className="container">
                <div className="row justify-content-center">
                  <div className="col-lg-10 col-md-9">
                    <div className="hero-content text-center">
                      <span
                        className="tagline"
                        data-animation="fadeInDown"
                        data-delay="0.5s"
                      >
                        Love Respect &amp; Care
                      </span>
                      <h1
                        className="title"
                        data-animation="fadeInLeft"
                        data-delay="0.6s"
                      >
                        Trusted Dental Care Center
                      </h1>
                      <a
                        href="#"
                        className="template-btn"
                        data-animation="fadeInUp"
                        data-delay="0.7s"
                      >
                        Explore Our Service <i className="far fa-plus" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="single-hero-slider">
              <div
                className="hero-slider-bg bg-size-cover"
                style={{
                  backgroundImage: "url(assets/img/hero-img/hero-slider-5.jpg)",
                }}
              />
              <div className="container">
                <div className="row justify-content-center">
                  <div className="col-lg-10 col-md-9">
                    <div className="hero-content text-center">
                      <span
                        className="tagline"
                        data-animation="fadeInDown"
                        data-delay="0.5s"
                      >
                        Love Respect &amp; Care
                      </span>
                      <h1
                        className="title"
                        data-animation="fadeInLeft"
                        data-delay="0.6s"
                      >
                        Trusted Dental Care Center
                      </h1>
                      <a
                        href="#"
                        className="template-btn"
                        data-animation="fadeInUp"
                        data-delay="0.7s"
                      >
                        Explore Our Service <i className="far fa-plus" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Slider>
          <div className="hero-slider-arrow" />
        </section>
        {/*====== Hero Slider End ======*/}
        {/*====== Why Choose Section Start ======*/}
        <section className="wcu-section-two">
          <div className="container-fluid">
            <div className="container">
              <div className="row">
                <div className="col-lg-8 col-md-10">
                  <div className="section-heading mb-40">
                    <span className="tagline">Why Choose Our Medical</span>
                    <h2 className="title">
                      Breakthrough in Comprehensive, Flexible Care Models
                    </h2>
                  </div>
                </div>
              </div>
              <div className="row justify-content-center">
                <div className="col-lg-4 col-md-6 col-sm-6">
                  <div
                    className="simple-icon mt-30 wow fadeInUp"
                    data-wow-delay="0.3s"
                  >
                    <div className="icon">
                      <i className="flaticon-dental-care-1" />
                    </div>
                    <h4 className="title">
                      <a href="#">Tooth Protection</a>
                    </h4>
                    <p>
                      Sed ut perspiciatis unde omnis natusserror voluptatem
                      accusantium doloremque laudan tium totam rem aperiam eaque
                      quae
                    </p>
                  </div>
                </div>
                <div className="col-lg-4 col-md-6 col-sm-6">
                  <div
                    className="simple-icon mt-30 wow fadeInUp"
                    data-wow-delay="0.4s"
                  >
                    <div className="icon">
                      <i className="flaticon-dental-care-2" />
                    </div>
                    <h4 className="title">
                      <a href="#">Teeth Whitening</a>
                    </h4>
                    <p>
                      Sed ut perspiciatis unde omnis natusserror voluptatem
                      accusantium doloremque laudan tium totam rem aperiam eaque
                      quae
                    </p>
                  </div>
                </div>
                <div className="col-lg-4 col-md-6 col-sm-8">
                  <div
                    className="simple-icon mt-30 wow fadeInUp"
                    data-wow-delay="0.5s"
                  >
                    <div className="icon">
                      <i className="flaticon-dental-care" />
                    </div>
                    <h4 className="title">
                      <a href="#">Cosmetic Dentistry</a>
                    </h4>
                    <p>
                      Sed ut perspiciatis unde omnis natusserror voluptatem
                      accusantium doloremque laudan tium totam rem aperiam eaque
                      quae
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/*====== Why Choose Section End ======*/}
        {/*====== About Section Start ======*/}
        <section className="about-section section-gap-top">
          <div className="container">
            <div className="row align-items-end justify-content-center">
              <div className="col-xl-5 col-lg-8 col-sm-10">
                <div className="about-content about-content-gap">
                  <div className="section-heading mb-35">
                    <span className="tagline">About Jarred M. Castaneda</span>
                    <h2 className="title">Hello This Is Jarred M. Castaneda</h2>
                    <p>Professional Dental Specialist (25 Years)</p>
                  </div>
                  <p>
                    Sed ut perspiciatis unde omnis iste natus error sit volupta
                    tem accusantium doloremque laudantium totam rem aperiam
                    eaque ipsa quae abillo inventore veritatis et quasi
                    architecto beatae vitae dicta sunt explicabo.
                  </p>
                  <Link href="/doctor-details">
                    <a
                      className="template-btn mt-40 wow fadeInUp"
                      data-wow-delay="0.3s"
                    >
                      Learn More <i className="far fa-plus" />
                    </a>
                  </Link>
                </div>
              </div>
              <div className="col-xl-7 col-lg-8 col-md-8 order-xl-first">
                <div className="bordered-icon-wrapper hide-icon-md">
                  <img
                    src="assets/img/section-img/about-img-2.png"
                    alt="AboutImg"
                  />
                  <div className="border-icon">
                    <img src="assets/img/icon/shield.png" alt="Icon" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/*====== About Section End ======*/}
        {/*====== Service Section Start ======*/}
        <section className="service-section bg-color-primary section-gap-top">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-6 col-md-10">
                <div className="section-heading heading-white text-center mb-70">
                  <span className="tagline">Popular Dental Services</span>
                  <h2 className="title">
                    Benefit FOr Physical Mental and Virtual Care
                  </h2>
                </div>
              </div>
            </div>
            <div className="iconic-boxes-big-image">
              <div className="row justify-content-lg-between justify-content-center first-row">
                <div className="col-xl-3 col-lg-4 col-md-6 col-sm-8 first-column">
                  <div
                    className="single-iconic-item wow fadeInLeft"
                    data-wow-delay="0.4s"
                  >
                    <div className="icon">
                      <i className="flaticon-tooth-1" />
                    </div>
                    <h4 className="title">
                      <a href="#">Teeth Fitting</a>
                    </h4>
                    <p>Sed ut perspic unde omnis serror voluptatem</p>
                  </div>
                </div>
                <div className="col-xl-3 col-lg-4 col-md-6 col-sm-8 second-column">
                  <div
                    className="single-iconic-item wow fadeInRight"
                    data-wow-delay="0.4s"
                  >
                    <div className="icon">
                      <i className="flaticon-tooth-1" />
                    </div>
                    <h4 className="title">
                      <a href="#">Orthodontics</a>
                    </h4>
                    <p>Sed ut perspic unde omnis serror voluptatem</p>
                  </div>
                </div>
              </div>
              <div className="row justify-content-lg-between justify-content-center second-row">
                <div className="col-xl-3 col-lg-4 col-md-6 col-sm-8 first-column">
                  <div
                    className="single-iconic-item wow fadeInLeft"
                    data-wow-delay="0.5s"
                  >
                    <div className="icon">
                      <i className="flaticon-tooth-1" />
                    </div>
                    <h4 className="title">
                      <a href="#">Orthodontics</a>
                    </h4>
                    <p>Sed ut perspic unde omnis serror voluptatem</p>
                  </div>
                </div>
                <div className="col-xl-3 col-lg-4 col-md-6 col-sm-8 second-column">
                  <div
                    className="single-iconic-item wow fadeInRight"
                    data-wow-delay="0.5s"
                  >
                    <div className="icon">
                      <i className="flaticon-tooth-1" />
                    </div>
                    <h4 className="title">
                      <a href="#">Tooth Extractions</a>
                    </h4>
                    <p>Sed ut perspic unde omnis serror voluptatem</p>
                  </div>
                </div>
              </div>
              <img
                src="assets/img/iconic-box/tooth.png"
                alt="Image"
                className="big-image"
              />
              <img
                src="assets/img/iconic-box/border-line.png"
                alt="Image"
                className="border-image"
              />
            </div>
          </div>
        </section>
        {/*====== Service Section End ======*/}
        {/*====== Appointment Section Start ======*/}
        <section className="appointment-section section-gap">
          <div className="container">
            <div className="appointment-form-two">
              <div className="form-wrap">
                <div className="section-heading mb-40">
                  <span className="tagline">Make an Appointment</span>
                  <h2 className="title">Make an Appointment to Doctor Visit</h2>
                </div>
                <form
                  onSubmit={(e) => e.preventDefault()}
                  action="#"
                  className="wow fadeInUp"
                  data-wow-delay="0.3s"
                >
                  <div className="row">
                    <div className="col-12">
                      <div className="input-field">
                        <input type="text" placeholder="Your Full Name" />
                      </div>
                    </div>
                    <div className="col-12">
                      <div className="input-field">
                        <select>
                          <option value={1} selected disabled="">
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
                      <div className="input-field">
                        <select>
                          <option value={1} selected disabled="">
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
                      <div className="input-field">
                        <input type="date" />
                      </div>
                    </div>
                    <div className="col-12">
                      <div className="input-field">
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
                  backgroundImage: "url(assets/img/appointment/05.jpg)",
                }}
              ></div>
            </div>
          </div>
        </section>
        {/*====== Appointment Section End ======*/}
        {/*====== Doctors With Counter Start ======*/}
        <div className="doctors-with-counter">
          {/*====== Doctor Section Start ======*/}
          <section className="doctors-section bg-color-grey polygon-pattern-2">
            <div className="container">
              <div className="row justify-content-center">
                <div className="col-lg-6">
                  <div className="section-heading text-center mb-40">
                    <span className="tagline">Professional Team</span>
                    <h2 className="title">Meet Our Experience Team Members</h2>
                  </div>
                </div>
              </div>
              <div className="row justify-content-center doctors-loop">
                <div className="col-xl-3 col-lg-4 col-sm-6">
                  <div
                    className="doctor-box-three mt-30 wow fadeInUp"
                    data-wow-delay="0.3s"
                  >
                    <div className="doctor-photo">
                      <img src="assets/img/doctors/18.jpg" alt="Image" />
                    </div>
                    <div className="doctor-information">
                      <h5 className="name">
                        <Link href="/doctor-details">
                          <a>Allan K. Simons</a>
                        </Link>
                      </h5>
                      <span className="specialty">Dental Specialist</span>
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
                      <span className="plus-icon">
                        <i className="far fa-plus" />
                      </span>
                    </div>
                  </div>
                </div>
                <div className="col-xl-3 col-lg-4 col-sm-6">
                  <div
                    className="doctor-box-three mt-30 wow fadeInUp"
                    data-wow-delay="0.4s"
                  >
                    <div className="doctor-photo">
                      <img src="assets/img/doctors/19.jpg" alt="Image" />
                    </div>
                    <div className="doctor-information">
                      <h5 className="name">
                        <Link href="/doctor-details">
                          <a>Marcus K. Staton</a>
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
                      <span className="plus-icon">
                        <i className="far fa-plus" />
                      </span>
                    </div>
                  </div>
                </div>
                <div className="col-xl-3 col-lg-4 col-sm-6">
                  <div
                    className="doctor-box-three mt-30 wow fadeInUp"
                    data-wow-delay="0.5s"
                  >
                    <div className="doctor-photo">
                      <img src="assets/img/doctors/20.jpg" alt="Image" />
                    </div>
                    <div className="doctor-information">
                      <h5 className="name">
                        <Link href="/doctor-details">
                          <a>Travis A. Costillo</a>
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
                      <span className="plus-icon">
                        <i className="far fa-plus" />
                      </span>
                    </div>
                  </div>
                </div>
                <div className="col-xl-3 col-lg-4 col-sm-6">
                  <div
                    className="doctor-box-three mt-30 wow fadeInUp"
                    data-wow-delay="0.6s"
                  >
                    <div className="doctor-photo">
                      <img src="assets/img/doctors/21.jpg" alt="Image" />
                    </div>
                    <div className="doctor-information">
                      <h5 className="name">
                        <Link href="/doctor-details">
                          <a>M.Calhoun</a>
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
                      <span className="plus-icon">
                        <i className="far fa-plus" />
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          {/*====== Doctor Section End ======*/}
          {/*====== Counter Section Start ======*/}
          <section className="counter-section">
            <div className="container">
              <div className="counter-inner-three bg-color-secondary">
                <div className="row justify-content-between">
                  <div className="col-lg-auto col-md-5 col-sm-6">
                    <div className="counter-item counter-white">
                      <div className="counter-wrap">
                        {/* <span className="counter">359</span> */}
                        <Counter end={359} />
                        <span className="suffix">+</span>
                      </div>
                      <h6 className="title">Professional Doctors</h6>
                    </div>
                  </div>
                  <div className="col-lg-auto col-md-5 col-sm-6">
                    <div className="counter-item counter-white">
                      <div className="counter-wrap">
                        <Counter end={85} />
                        {/* <span className="counter">85</span> */}
                        <span className="suffix">k+</span>
                      </div>
                      <h6 className="title">Saticfied Our Clients</h6>
                    </div>
                  </div>
                  <div className="col-lg-auto col-md-5 col-sm-6">
                    <div className="counter-item counter-white">
                      <div className="counter-wrap">
                        <Counter end={863} />
                        {/* <span className="counter">863</span> */}
                        <span className="suffix">+</span>
                      </div>
                      <h6 className="title">Win International Awards</h6>
                    </div>
                  </div>
                  <div className="col-lg-auto col-md-5 col-sm-6">
                    <div className="counter-item counter-white">
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
        </div>
        {/*====== Doctors With Counter End ======*/}
        {/*====== Help Section Start ======*/}
        <section className="help-section section-gap">
          <div className="container">
            <div className="row justify-content-center justify-content-lg-between align-items-center">
              <div className="col-lg-6 col-md-10">
                <div className="seeva-video mb-md-50">
                  <div className="video-thumbnail">
                    <img
                      src="assets/img/section-img/help-video.jpg"
                      alt="Image"
                    />
                  </div>
                  <a
                    href="#"
                    className="video-popup"
                    onClick={(e) => {
                      e.preventDefault();
                      setVideo(true);
                    }}
                  >
                    <i className="fas fa-play" />
                  </a>
                </div>
              </div>
              <div className="col-xl-5 col-lg-6 col-md-8">
                <div className="help-content">
                  <div className="section-heading mb-30">
                    <span className="tagline">How Can We Help</span>
                    <h2 className="title">
                      Flexible &amp; Responsive to Changing Needs
                    </h2>
                  </div>
                  <p>
                    Sed ut perspiciatis unde omnis iste natus error voluptatem
                    accusantium doloremque laudantium totam aperiam eaqueds ipsa
                    quae ab illo inventore veritatis et quasi architecto beatae
                    vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia
                    voluptas sit aspernatur aut odit aut fugit sed amet
                  </p>
                  <a
                    href="#"
                    className="template-btn mt-40 wow fadeInUp"
                    data-wow-delay="0.3s"
                  >
                    Learn More <i className="far fa-plus" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/*====== Help Section End ======*/}
        {/*====== Testimonial Section Start ======*/}
        <section className="testimonial-section testimonial-two-bg section-gap bg-color-primary">
          <div className="container">
            <div className="testimonial-slider-three">
              <div className="row justify-content-center">
                <TestimoinalSlider />
              </div>
              <div className="slider-arrows" />
            </div>
          </div>
          <div
            className="bg-one"
            style={{ backgroundImage: "url(assets/img/testimonial/bg-2.jpg)" }}
          />
          <div
            className="bg-two"
            style={{ backgroundImage: "url(assets/img/testimonial/bg-3.jpg)" }}
          />
        </section>
        {/*====== Testimonial Section End ======*/}
        {/*====== Latest Blog Start ======*/}
        <section className="latest-blog-section section-gap">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-6 col-md-9">
                <div className="section-heading text-center mb-40">
                  <span className="tagline">Latest News &amp; Blog</span>
                  <h2 className="title">
                    Get Every Single Updates For Medical &amp; Health
                  </h2>
                </div>
              </div>
            </div>
            <div className="row justify-content-center latest-blog-loop">
              <div className="col-lg-4 col-md-6 col-sm-10">
                <div className="latest-blog-two no-radius mt-30">
                  <div className="thumbnail">
                    <img src="assets/img/latest-blog/07.jpg" alt="Image" />
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
                        <a>Comprehensive Worksire Health Progranm Built</a>
                      </Link>
                    </h4>
                    <p>
                      Sed perspiciatis unde omnis natus error voluptatem
                      accusantium dolore mque laudantium totam rem
                    </p>
                    <Link href="/blog-details">
                      <a className="template-btn">
                        Read More <i className="far fa-plus" />
                      </a>
                    </Link>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 col-sm-10">
                <div className="latest-blog-two no-radius mt-30">
                  <div className="thumbnail">
                    <img src="assets/img/latest-blog/08.jpg" alt="Image" />
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
                        <a>Front-End Performance Checklist 2021 PDF</a>
                      </Link>
                    </h4>
                    <p>
                      Sed perspiciatis unde omnis natus error voluptatem
                      accusantium dolore mque laudantium totam rem
                    </p>
                    <Link href="/blog-details">
                      <a className="template-btn">
                        Read More <i className="far fa-plus" />
                      </a>
                    </Link>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 col-sm-10">
                <div className="latest-blog-two no-radius mt-30">
                  <div className="thumbnail">
                    <img src="assets/img/latest-blog/09.jpg" alt="Image" />
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
                        <a>DevTools Debugging Tips Shortcut Chrome Fire</a>
                      </Link>
                    </h4>
                    <p>
                      Sed perspiciatis unde omnis natus error voluptatem
                      accusantium dolore mque laudantium totam rem
                    </p>
                    <Link href="/blog-details">
                      <a className="template-btn">
                        Read More <i className="far fa-plus" />
                      </a>
                    </Link>
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
export default Index4;
