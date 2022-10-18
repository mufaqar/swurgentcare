import Link from "next/link";
import { useState } from "react";
import Slider from "react-slick";
import Counter from "../src/components/Counter";
import VideoPopup from "../src/components/VideoPopup";
import Layouts from "../src/layouts/Layouts";
import {
  heroSlider,
  partnerSlider,
  TestimonialsSliderTwo,
} from "../src/sliderProps";

const Index2 = () => {
  const [video, setVideo] = useState(false);
  return (
    <Layouts headerTopbar footer={2} noNewsletters>
      {video && <VideoPopup close={setVideo} />}
      <>
        {/*====== Hero Slider Start ======*/}
        <section className="hero-slider hero-slider-one">
          <Slider {...heroSlider} className="hero-slider-active">
            <div className="single-hero-slider">
              <div
                className="hero-slider-bg bg-size-cover"
                style={{
                  backgroundImage: "url(assets/img/hero-img/hero-slider-1.jpg)",
                }}
              />
              <div className="container container-1400">
                <div
                  className="slider-content-box"
                  data-animation="fadeInUp"
                  data-delay="0.4s"
                >
                  <h1
                    className="title"
                    data-animation="fadeInDown"
                    data-delay="0.7s"
                  >
                    We Care Medical &amp; Health{" "}
                  </h1>
                  <p data-animation="fadeInLeft" data-delay="0.8s">
                    Dolor sit amet consectetur adipiscing elitsedes eiusmod
                    tempor incididunt utlabore
                  </p>
                  <a
                    href="#"
                    className="template-btn"
                    data-animation="fadeInUp"
                    data-delay="0.9s"
                  >
                    Make an Appointment <i className="far fa-plus" />
                  </a>
                </div>
              </div>
            </div>
            <div className="single-hero-slider">
              <div
                className="hero-slider-bg bg-size-cover"
                style={{
                  backgroundImage: "url(assets/img/hero-img/hero-slider-2.jpg)",
                }}
              />
              <div className="container container-1400">
                <div
                  className="slider-content-box"
                  data-animation="fadeInUp"
                  data-delay="0.4s"
                >
                  <h1
                    className="title"
                    data-animation="fadeInDown"
                    data-delay="0.7s"
                  >
                    We Care Medical &amp; Health{" "}
                  </h1>
                  <p data-animation="fadeInLeft" data-delay="0.8s">
                    Dolor sit amet consectetur adipiscing elitsedes eiusmod
                    tempor incididunt utlabore
                  </p>
                  <a
                    href="#"
                    className="template-btn"
                    data-animation="fadeInUp"
                    data-delay="0.9s"
                  >
                    Make an Appointment <i className="far fa-plus" />
                  </a>
                </div>
              </div>
            </div>
            <div className="single-hero-slider">
              <div
                className="hero-slider-bg bg-size-cover"
                style={{
                  backgroundImage: "url(assets/img/hero-img/hero-slider-3.jpg)",
                }}
              />
              <div className="container container-1400">
                <div
                  className="slider-content-box"
                  data-animation="fadeInUp"
                  data-delay="0.4s"
                >
                  <h1
                    className="title"
                    data-animation="fadeInDown"
                    data-delay="0.7s"
                  >
                    We Care Medical &amp; Health{" "}
                  </h1>
                  <p data-animation="fadeInLeft" data-delay="0.8s">
                    Dolor sit amet consectetur adipiscing elitsedes eiusmod
                    tempor incididunt utlabore
                  </p>
                  <a
                    href="#"
                    className="template-btn"
                    data-animation="fadeInUp"
                    data-delay="0.9s"
                  >
                    Make an Appointment <i className="far fa-plus" />
                  </a>
                </div>
              </div>
            </div>
          </Slider>
          <div className="hero-slider-arrow" />
        </section>
        {/*====== Hero Slider End ======*/}
        {/*====== About Section Start ======*/}
        <section className="about-section section-gap">
          <div className="container">
            <div className="row align-items-center justify-content-center">
              <div className="col-xl-7 col-lg-9 col-md-11">
                <div className="tile-gallery mb-xl-50">
                  <div
                    className="image-one wow fadeInLeft"
                    data-wow-delay="0.3s"
                  >
                    <img
                      className="animate-float-bob-x"
                      src="assets/img/tile-gallery/01.jpg"
                      alt="Image"
                    />
                  </div>
                  <div
                    className="image-two wow fadeInDown"
                    data-wow-delay="0.4s"
                  >
                    <img src="assets/img/tile-gallery/02.jpg" alt="Image" />
                  </div>
                  <div
                    className="image-three wow fadeInUp"
                    data-wow-delay="0.5s"
                  >
                    <img src="assets/img/tile-gallery/03.jpg" alt="Image" />
                  </div>
                </div>
              </div>
              <div className="col-xl-5 col-lg-8 col-md-9">
                <div className="about-text">
                  <div className="section-heading mb-30">
                    <span className="tagline">About Seeva</span>
                    <h2 className="title">
                      25 Years We Caring Medical Services
                    </h2>
                  </div>
                  <p>
                    Sed ut perspiciatis unde omnis iste natus error voluptatem
                    accusantium doloremque laudantium totam rem aperieaquey ipsa
                    quae abillo inventore veritatis quasi architecto
                  </p>
                  <div className="row">
                    <div className="col-sm-6">
                      <div
                        className="simple-icon mt-40 wow fadeInUp"
                        data-wow-delay="0.3s"
                      >
                        <div className="icon">
                          <i className="flaticon-dental-care-1" />
                        </div>
                        <h4 className="title">Optimize Health Care Services</h4>
                        <p>Perspiciatis unde omniste natus error volutatem</p>
                      </div>
                    </div>
                    <div className="col-sm-6">
                      <div
                        className="simple-icon mt-40 wow fadeInUp"
                        data-wow-delay="0.4s"
                      >
                        <div className="icon">
                          <i className="flaticon-dental-care-2" />
                        </div>
                        <h4 className="title">
                          Accelerate Return On Investment
                        </h4>
                        <p>Perspiciatis unde omniste natus error volutatem</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/*====== About Section End ======*/}
        {/*====== Feature Section Start ======*/}
        <section className="feature-section section-gap bg-color-grey">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-8">
                <div className="section-heading text-center mb-40">
                  <span className="tagline">What We Offer</span>
                  <h2 className="title">
                    Breakthrough in Comprehensive, Flexible Care Models
                  </h2>
                </div>
              </div>
            </div>
            <div className="row justify-content-center service-looop">
              <div className="col-lg-3 col-md-6 col-sm-10">
                <div
                  className="iconic-box-two mt-30 wow fadeInUp"
                  data-wow-delay="0.3s"
                >
                  <div className="icon">
                    <i className="flaticon-tooth-1" />
                  </div>
                  <h4 className="title">
                    <Link href="/service-details">Medicine Care</Link>
                  </h4>
                  <p>Perspiciatis unde omniste natus error volutatem</p>
                  <Link href="/service-details">
                    <a className="box-link">
                      <i className="far fa-plus" />
                    </a>
                  </Link>
                </div>
              </div>
              <div className="col-lg-3 col-md-6 col-sm-10">
                <div
                  className="iconic-box-two mt-30 wow fadeInUp"
                  data-wow-delay="0.4s"
                >
                  <div className="icon">
                    <i className="flaticon-tooth-2" />
                  </div>
                  <h4 className="title">
                    <Link href="/service-details">Medicine Care</Link>
                  </h4>
                  <p>Perspiciatis unde omniste natus error volutatem</p>
                  <Link href="/service-details">
                    <a className="box-link">
                      <i className="far fa-plus" />
                    </a>
                  </Link>
                </div>
              </div>
              <div className="col-lg-3 col-md-6 col-sm-10">
                <div
                  className="iconic-box-two mt-30 wow fadeInUp"
                  data-wow-delay="0.5s"
                >
                  <div className="icon">
                    <i className="flaticon-tooth-3" />
                  </div>
                  <h4 className="title">
                    <Link href="/service-details">Dental Care</Link>
                  </h4>
                  <p>Perspiciatis unde omniste natus error volutatem</p>
                  <Link href="/service-details">
                    <a className="box-link">
                      <i className="far fa-plus" />
                    </a>
                  </Link>
                </div>
              </div>
              <div className="col-lg-3 col-md-6 col-sm-10">
                <div
                  className="iconic-box-two mt-30 wow fadeInUp"
                  data-wow-delay="0.6s"
                >
                  <div className="icon">
                    <i className="flaticon-tooth-4" />
                  </div>
                  <h4 className="title">
                    <Link href="/service-details">Child Care</Link>
                  </h4>
                  <p>Perspiciatis unde omniste natus error volutatem</p>
                  <Link href="/service-details">
                    <a className="box-link">
                      <i className="far fa-plus" />
                    </a>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/*====== Feature Section End ======*/}
        {/*====== Call to Action Start ======*/}
        <section
          className="cta-section bg-size-cover section-gap-100 bg-color-primary blend-mode-multiply"
          style={{
            backgroundImage: "url(assets/img/cta-img/cta-section-bg.jpg)",
          }}
        >
          <div className="container">
            <div className="row align-items-center">
              <div className="col-lg-5">
                <div className="section-heading heading-white">
                  <span className="tagline">Get Free Consultations</span>
                  <h2 className="title">
                    Looking a Doctors to Get Your Services
                  </h2>
                </div>
              </div>
              <div className="col-lg-7">
                <ul className="cta-buttons d-sm-flex justify-content-lg-end mt-md-40 flex-wrap">
                  <li className="mb-3 mb-sm-0">
                    <a
                      href="#"
                      className="template-btn template-btn-white wow fadeInRight"
                      data-wow-delay="0.4s"
                    >
                      Get Free Quote <i className="far fa-plus" />
                    </a>
                  </li>
                  <li className="ml-sm-2">
                    <a
                      href="#"
                      className="template-btn template-btn-bordered wow fadeInRight"
                      data-wow-delay="0.5s"
                    >
                      Get Appointment <i className="far fa-plus" />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>
        {/*====== Call to Action End ======*/}
        {/*====== Service Section Start ======*/}
        <section className="services-section section-gap">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-7 col-md-10">
                <div className="section-heading text-center mb-40">
                  <span className="tagline">Popular Medical Services</span>
                  <h2 className="title">
                    Benefit For Physical Mental and Virtual Care
                  </h2>
                </div>
              </div>
            </div>
          </div>
          <div className="container-fluid fluid-100">
            <div className="row justify-content-center custom-service-grid">
              <div className="col">
                <div className="fancy-content-box mt-30">
                  <div className="box-thumbnail">
                    <img src="assets/img/fancy-box/01.jpg" alt="Image" />
                  </div>
                  <div className="box-content">
                    <h4 className="title">
                      <Link href="/service-details">
                        <a>Cardiology</a>
                      </Link>
                    </h4>
                    <p>
                      Sed ut perspiciats undec omnise vluptate accusantium
                      dolore
                    </p>
                    <Link href="/service-details">
                      <a className="box-btn">
                        Read More <i className="far fa-plus" />
                      </a>
                    </Link>
                    <div className="box-icon">
                      <i className="flaticon-virus" />
                    </div>
                  </div>
                </div>
              </div>
              <div className="col">
                <div className="fancy-content-box mt-30">
                  <div className="box-thumbnail">
                    <img src="assets/img/fancy-box/02.jpg" alt="Image" />
                  </div>
                  <div className="box-content">
                    <h4 className="title">
                      <Link href="/service-details">Pulmonary</Link>
                    </h4>
                    <p>
                      Sed ut perspiciats undec omnise vluptate accusantium
                      dolore
                    </p>
                    <Link href="/service-details">
                      <a className="box-btn">
                        Read More <i className="far fa-plus" />
                      </a>
                    </Link>
                    <div className="box-icon">
                      <i className="flaticon-virus" />
                    </div>
                  </div>
                </div>
              </div>
              <div className="col">
                <div className="fancy-content-box mt-30">
                  <div className="box-thumbnail">
                    <img src="assets/img/fancy-box/03.jpg" alt="Image" />
                  </div>
                  <div className="box-content">
                    <h4 className="title">
                      <Link href="/service-details">
                        <a>Neurology</a>
                      </Link>
                    </h4>
                    <p>
                      Sed ut perspiciats undec omnise vluptate accusantium
                      dolore
                    </p>
                    <Link href="/service-details">
                      <a className="box-btn">
                        Read More <i className="far fa-plus" />
                      </a>
                    </Link>
                    <div className="box-icon">
                      <i className="flaticon-virus" />
                    </div>
                  </div>
                </div>
              </div>
              <div className="col">
                <div className="fancy-content-box mt-30">
                  <div className="box-thumbnail">
                    <img src="assets/img/fancy-box/04.jpg" alt="Image" />
                  </div>
                  <div className="box-content">
                    <h4 className="title">
                      <Link href="/service-details">Covid - 19</Link>
                    </h4>
                    <p>
                      Sed ut perspiciats undec omnise vluptate accusantium
                      dolore
                    </p>
                    <Link href="/service-details">
                      <a className="box-btn">
                        Read More <i className="far fa-plus" />
                      </a>
                    </Link>
                    <div className="box-icon">
                      <i className="flaticon-virus" />
                    </div>
                  </div>
                </div>
              </div>
              <div className="col">
                <div className="fancy-content-box mt-30">
                  <div className="box-thumbnail">
                    <img src="assets/img/fancy-box/05.jpg" alt="Image" />
                  </div>
                  <div className="box-content">
                    <h4 className="title">
                      <Link href="/service-details">
                        <a>Orthopedics</a>
                      </Link>
                    </h4>
                    <p>
                      Sed ut perspiciats undec omnise vluptate accusantium
                      dolore
                    </p>
                    <Link href="/service-details">
                      <a className="box-btn">
                        Read More <i className="far fa-plus" />
                      </a>
                    </Link>
                    <div className="box-icon">
                      <i className="flaticon-virus" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/*====== Service Section End ======*/}
        {/*====== Counter Section Start ======*/}
        <section className="counter-section">
          <div className="container">
            <div className="counter-inner-two mb-negative">
              <div className="row justify-content-between">
                <div className="col-lg-auto col-md-5 col-sm-6">
                  <div className="counter-item counter-white">
                    <div className="icon">
                      <i className="flaticon-stethoscope" />
                    </div>
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
                    <div className="icon">
                      <i className="flaticon-stethoscope" />
                    </div>
                    <div className="counter-wrap">
                      {" "}
                      <Counter end={85} />
                      {/* <span className="counter">85</span> */}
                      <span className="suffix">k+</span>
                    </div>
                    <h6 className="title">Saticfied Our Clients</h6>
                  </div>
                </div>
                <div className="col-lg-auto col-md-5 col-sm-6">
                  <div className="counter-item counter-white">
                    <div className="icon">
                      <i className="flaticon-stethoscope" />
                    </div>
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
                    <div className="icon">
                      <i className="flaticon-stethoscope" />
                    </div>
                    <div className="counter-wrap">
                      <Counter end={86} />
                      {/* <span className="counter">86</span> */}
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
        {/*====== Video Section Start ======*/}
        <section className="video-section">
          <div className="video-with-content bg-color-primary">
            <div className="seeva-video">
              <div className="video-thumbnail">
                <img src="assets/img/section-img/video.jpg" alt="Image" />
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
            <div className="container">
              <div className="row justify-content-lg-end justify-content-center">
                <div className="col-lg-5 col-md-9">
                  <div className="video-content">
                    <div className="section-heading mb-20">
                      <span className="tagline">How Can We Help</span>
                      <h2 className="title">
                        Flexible Responsive Changing Needs
                      </h2>
                    </div>
                    <p>
                      Sed ut perspiciatis unde omnis iste natus error volute
                      accusantium doloremque laudantium totam rem aperiea queys
                      epsa quae abillo inventore veritatis
                    </p>
                    <ul className="check-list mt-35 pr-xl-4">
                      <li className="wow fadeInUp" data-wow-delay="0.3s">
                        Estimated savings in implementation when using Mobile
                        Health Clinics
                      </li>
                      <li className="wow fadeInUp" data-wow-delay="0.4s">
                        Supports referrals to provider networks and care
                        management pr
                      </li>
                    </ul>
                    <a
                      href="#"
                      className="template-btn template-btn-bordered mt-40 wow fadeInUp"
                      data-wow-delay="0.5s"
                    >
                      Get Appointment <i className="far fa-plus" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/*====== Video Section End ======*/}
        {/*====== Doctor Section Start ======*/}
        <section className="doctors-section section-gap">
          <div className="container">
            <div className="row justify-content-between align-items-center mb-70">
              <div className="col-lg-5 col-md-6">
                <div className="section-heading">
                  <span className="tagline">Professional Doctors</span>
                  <h2 className="title">Meet Our Experience Doctors</h2>
                </div>
              </div>
              <div className="col-auto">
                <Link href="/doctors">
                  <a className="template-btn template-btn-primary mt-sm-30">
                    Make An Appointment <i className="far fa=plus" />
                  </a>
                </Link>
              </div>
            </div>
            <div className="doctor-bordered-wrapper">
              <div className="row doctors-loop justify-content-center">
                <div className="col-lg-3 col-sm-6">
                  <div
                    className="doctor-box-two mb-40 wow fadeInUp"
                    data-wow-delay="0.3s"
                  >
                    <div className="doctor-photo">
                      <img src="assets/img/doctors/14.jpg" alt="Image" />
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
                    <div className="doctor-information">
                      <h5 className="name">
                        <Link href="/doctor-details">
                          <a>Lee S. Williamson</a>
                        </Link>
                      </h5>
                      <span className="specialty">Cardiology</span>
                    </div>
                  </div>
                </div>
                <div className="col-lg-3 col-sm-6">
                  <div
                    className="doctor-box-two mb-40 wow fadeInUp"
                    data-wow-delay="0.4s"
                  >
                    <div className="doctor-photo">
                      <img src="assets/img/doctors/15.jpg" alt="Image" />
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
                    <div className="doctor-information">
                      <h5 className="name">
                        <Link href="/doctor-details">
                          <a>Greg S. Grinstead </a>
                        </Link>
                      </h5>
                      <span className="specialty">Neurology</span>
                    </div>
                  </div>
                </div>
                <div className="col-lg-3 col-sm-6">
                  <div
                    className="doctor-box-two mb-40 wow fadeInUp"
                    data-wow-delay="0.5s"
                  >
                    <div className="doctor-photo">
                      <img src="assets/img/doctors/16.jpg" alt="Image" />
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
                    <div className="doctor-information">
                      <h5 className="name">
                        <Link href="/doctor-details">Roger K. Jackson </Link>
                      </h5>
                      <span className="specialty">Orthopedics</span>
                    </div>
                  </div>
                </div>
                <div className="col-lg-3 col-sm-6">
                  <div
                    className="doctor-box-two mb-40 wow fadeInUp"
                    data-wow-delay="0.6s"
                  >
                    <div className="doctor-photo">
                      <img src="assets/img/doctors/17.jpg" alt="Image" />
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
                    <div className="doctor-information">
                      <h5 className="name">
                        <Link href="/doctor-details">Ray. M. Drake </Link>
                      </h5>
                      <span className="specialty">Cardiology</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/*====== Doctor Section End ======*/}
        {/*====== Appointment Section Start ======*/}
        <section className="appointment-section">
          <div className="container container-1500">
            <div className="appointment-form-two style-two">
              <div
                className="appointment-image"
                style={{
                  backgroundImage: "url(assets/img/appointment/03.jpg)",
                }}
              ></div>
              <div className="form-wrap">
                <div className="section-heading mb-50">
                  <span className="tagline">Make an Appointment</span>
                  <h2 className="title">
                    Fill-up The From to Get Our Medical Services{" "}
                  </h2>
                </div>
                <form onSubmit={(e) => e.preventDefault()} action="#">
                  <div className="row">
                    <div className="col-md-6">
                      <div
                        className="input-field wow fadeInLeft"
                        data-wow-delay="0.3s"
                      >
                        <input type="text" placeholder="Your Full Name" />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div
                        className="input-field wow fadeInRight"
                        data-wow-delay="0.4s"
                      >
                        <input type="email" placeholder="Email Address" />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div
                        className="input-field wow fadeInLeft"
                        data-wow-delay="0.5s"
                      >
                        <select>
                          <option value={1} selected disabled>
                            Choose Doctors
                          </option>
                          <option value={2}>Doctor One</option>
                          <option value={3}>Doctor Two</option>
                          <option value={4}>Doctor Three</option>
                          <option value={5}>Doctor Four</option>
                        </select>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div
                        className="input-field wow fadeInRight"
                        data-wow-delay="0.6s"
                      >
                        <input type="date" />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div
                        className="input-field wow fadeInLeft"
                        data-wow-delay="0.7s"
                      >
                        <select>
                          <option value={1} selected disabled>
                            Services Category
                          </option>
                          <option value={2}>Service One</option>
                          <option value={3}>Service Two</option>
                          <option value={4}>Service Three</option>
                          <option value={5}>Service Four</option>
                        </select>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div
                        className="input-field wow fadeInRight"
                        data-wow-delay="0.8s"
                      >
                        <button type="submit" className="template-btn">
                          Make an Appointment <i className="far fa-plus" />
                        </button>
                      </div>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </section>
        {/*====== Appointment Section End ======*/}
        {/*====== Testimonials Section Start ======*/}
        <section className="testimonial-section testimonial-shapes section-gap bg-color-primary polygon-pattern">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-6">
                <div className="section-heading text-center heading-white mb-70">
                  <span className="tagline">Our Testimonials</span>
                  <h2 className="title">
                    What Our Patients Say About Our Medical
                  </h2>
                </div>
              </div>
            </div>
            <Slider
              {...TestimonialsSliderTwo}
              className="row testimonial-slider-two"
            >
              <div>
                <div className="single-testimonial-slider">
                  <p className="content">
                    On the other hand we denounce riteous indignation and
                    dislike men wh beguiled and demoralized by the charms of
                    plsure of the moment, so blinded by desire that they cannot.
                  </p>
                  <div className="author-info-wrapper">
                    <div className="avatar">
                      <img src="assets/img/testimonial/01.png" alt="Image" />
                    </div>
                    <div className="author-info">
                      <h5 className="name">Mark E. Kaminsky</h5>
                      <span className="title">Web Designer</span>
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <div className="single-testimonial-slider">
                  <p className="content">
                    On the other hand we denounce riteous indignation and
                    dislike men wh beguiled and demoralized by the charms of
                    plsure of the moment, so blinded by desire that they cannot.
                  </p>
                  <div className="author-info-wrapper">
                    <div className="avatar">
                      <img src="assets/img/testimonial/02.png" alt="Image" />
                    </div>
                    <div className="author-info">
                      <h5 className="name">Ronald C. Kendall</h5>
                      <span className="title">Web Designer</span>
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <div className="single-testimonial-slider">
                  <p className="content">
                    On the other hand we denounce riteous indignation and
                    dislike men wh beguiled and demoralized by the charms of
                    plsure of the moment, so blinded by desire that they cannot.
                  </p>
                  <div className="author-info-wrapper">
                    <div className="avatar">
                      <img src="assets/img/testimonial/01.png" alt="Image" />
                    </div>
                    <div className="author-info">
                      <h5 className="name">Mark E. Kaminsky</h5>
                      <span className="title">Web Designer</span>
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <div className="single-testimonial-slider">
                  <p className="content">
                    On the other hand we denounce riteous indignation and
                    dislike men wh beguiled and demoralized by the charms of
                    plsure of the moment, so blinded by desire that they cannot.
                  </p>
                  <div className="author-info-wrapper">
                    <div className="avatar">
                      <img src="assets/img/testimonial/02.png" alt="Image" />
                    </div>
                    <div className="author-info">
                      <h5 className="name">Ronald C. Kendall</h5>
                      <span className="title">Web Designer</span>
                    </div>
                  </div>
                </div>
              </div>
            </Slider>
            <div className="testimonial-slider-arrow" />
          </div>
          <div className="shape-images">
            <div
              className="image-one animate-float-bob-y"
              style={{
                backgroundImage: "url(assets/img/testimonial/bg-1.jpg)",
              }}
            ></div>
            <div
              className="image-two animate-float-bob-y"
              style={{ backgroundImage: "url(assets/img/testimonial/bg.jpg)" }}
            ></div>
          </div>
        </section>
        {/*====== Testimonials Section End ======*/}
        {/*====== Latest Blog Start ======*/}
        <section className="latest-blog-section section-gap">
          <div className="container">
            <div className="row justify-content-between align-items-center mb-40">
              <div className="col-lg-6 col-md-7">
                <div className="section-heading">
                  <span className="tagline">Latest News &amp; Blog</span>
                  <h2 className="title">
                    Get Every Single Updates For Medical &amp; Health
                  </h2>
                </div>
              </div>
              <div className="col-auto">
                <Link href="/doctors">
                  <a className="template-btn mt-sm-30">
                    View More News <i className="far fa-plus" />
                  </a>
                </Link>
              </div>
            </div>
            <div className="row justify-content-center latest-blog-loop">
              <div className="col-lg-4 col-md-6 col-sm-10">
                <div className="latest-blog-two mt-30">
                  <div className="thumbnail">
                    <img src="assets/img/latest-blog/04.jpg" alt="Image" />
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
                        <a>Comprehensive Was Health Built Complete Guide</a>
                      </Link>
                    </h4>
                    <div className="blog-footer">
                      <a href="#">
                        <i className="far fa-user-circle" /> <span>By</span>{" "}
                        Jose S. Mahon
                      </a>
                      <a href="#">
                        <i className="far fa-heart" /> <span>Like</span>(5k)
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 col-sm-10">
                <div className="latest-blog-two mt-30">
                  <div className="thumbnail">
                    <img src="assets/img/latest-blog/05.jpg" alt="Image" />
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
                        <a>Why Content Such Fmental Design Process Compre</a>
                      </Link>
                    </h4>
                    <div className="blog-footer">
                      <a href="#">
                        <i className="far fa-user-circle" /> <span>By</span>{" "}
                        Jose S. Mahon
                      </a>
                      <a href="#">
                        <i className="far fa-heart" /> <span>Like</span>(5k)
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 col-sm-10">
                <div className="latest-blog-two mt-30">
                  <div className="thumbnail">
                    <img src="assets/img/latest-blog/06.jpg" alt="Image" />
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
                        <a>Comprehensive Was Health Built Complete Guide</a>
                      </Link>
                    </h4>
                    <div className="blog-footer">
                      <a href="#">
                        <i className="far fa-user-circle" /> <span>By</span>{" "}
                        Jose S. Mahon
                      </a>
                      <a href="#">
                        <i className="far fa-heart" /> <span>Like</span>(5k)
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/*====== Latest Blog End ======*/}
        {/*====== Partner Section Start ======*/}
        <div className="partner-section section-gap-80 bg-color-grey dots-map-pattern">
          <div className="container">
            <div className="section-heading text-center mb-50">
              <span className="tagline">Our Trusted Partners</span>
              <h2 className="title">We’ve 23563k+ Trusted Partners</h2>
            </div>
            <Slider {...partnerSlider} className="row partner-logo-slider">
              <div className="col partner-logo-box">
                <a href="#">
                  <img src="assets/img/partner-logos/09.png" alt="Logo" />
                </a>
              </div>
              <div className="col partner-logo-box">
                <a href="#">
                  <img src="assets/img/partner-logos/10.png" alt="Logo" />
                </a>
              </div>
              <div className="col partner-logo-box">
                <a href="#">
                  <img src="assets/img/partner-logos/11.png" alt="Logo" />
                </a>
              </div>
              <div className="col partner-logo-box">
                <a href="#">
                  <img src="assets/img/partner-logos/12.png" alt="Logo" />
                </a>
              </div>
              <div className="col partner-logo-box">
                <a href="#">
                  <img src="assets/img/partner-logos/13.png" alt="Logo" />
                </a>
              </div>
              <div className="col partner-logo-box">
                <a href="#">
                  <img src="assets/img/partner-logos/09.png" alt="Logo" />
                </a>
              </div>
              <div className="col partner-logo-box">
                <a href="#">
                  <img src="assets/img/partner-logos/10.png" alt="Logo" />
                </a>
              </div>
              <div className="col partner-logo-box">
                <a href="#">
                  <img src="assets/img/partner-logos/11.png" alt="Logo" />
                </a>
              </div>
              <div className="col partner-logo-box">
                <a href="#">
                  <img src="assets/img/partner-logos/12.png" alt="Logo" />
                </a>
              </div>
              <div className="col partner-logo-box">
                <a href="#">
                  <img src="assets/img/partner-logos/13.png" alt="Logo" />
                </a>
              </div>
            </Slider>
          </div>
        </div>
        {/*====== Partner Section End ======*/}
      </>
    </Layouts>
  );
};
export default Index2;
