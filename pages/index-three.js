import Link from "next/link";
import React from "react";
import Header3 from "../src/layouts/headers/Header3";
import Layouts from "../src/layouts/Layouts";

const Index3 = () => {
  return (
    <Layouts footer={2} noheader>
      <Header3 />
      <>
        {/*====== Hero Area Start ======*/}
        <section className="hero-area-two">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-lg-6">
                <div className="hero-content">
                  <span className="tagline wow fadeInUp" data-wow-delay="0.3s">
                    Love Respect &amp; Care
                  </span>
                  <h1 className="title wow fadeInRight" data-wow-delay="0.4s">
                    Family Care Solutions
                  </h1>
                  <p className="wow fadeInLeft" data-wow-delay="0.5s">
                    Dolor sit amet consectetur adipiscing elitsedes eiusmod
                    tempor incididunt utlabore
                  </p>
                  <a
                    href="#"
                    className="template-btn wow fadeInDown"
                    data-wow-delay="0.6s"
                  >
                    Explore Our Service <i className="far fa-plus" />
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div
            className="hero-img"
            style={{
              backgroundImage: "url(assets/img/hero-img/hero-img-2.jpg)",
            }}
          />
        </section>
        {/*====== Hero Area End ======*/}
        {/*====== Appointment Section Start ======*/}
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
              <form
                onSubmit={(e) => e.preventDefault()}
                action="#"
                className="wow fadeInUp"
                data-wow-delay="0.3s"
              >
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
                  <div className="col-sm-6">
                    <div className="input-field">
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
                        Make an Appointment <i className="far fa-plus" />
                      </button>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </section>
        {/*====== Appointment Section End ======*/}
        {/*====== Service Section Start ======*/}
        <div className="service-with-cta">
          {/*====== Service Section Start ======*/}
          <section className="services-section bg-color-grey">
            <div className="container container-1600">
              <div className="row justify-content-center">
                <div className="col-lg-6 col-md-8">
                  <div className="section-heading text-center mb-70">
                    <span className="tagline">Popular Medical Services</span>
                    <h2 className="title">
                      Benefit For Physical Mental and Virtual Care
                    </h2>
                  </div>
                </div>
              </div>
              <div className="row justify-content-center">
                <div
                  className="col-12 col-md-12 col-sm-9 wow fadeInUp"
                  data-wow-delay="0.3s"
                >
                  <div className="row service-loop service-slider">
                    <div className="col">
                      <div className="fancy-content-box-two no-shadow">
                        <div className="thumbnail">
                          <img src="assets/img/iconic-box/01.jpg" alt="Image" />
                        </div>
                        <div className="box-content">
                          <div className="icon">
                            <img src="assets/img/icon/heart-2.png" alt="" />
                          </div>
                          <div className="content">
                            <h4 className="title">
                              <Link href="/service-details">
                                <a>Cardiology</a>
                              </Link>
                            </h4>
                            <p>Amet consect ascnge eiusmod tempors</p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col">
                      <div className="fancy-content-box-two no-shadow">
                        <div className="thumbnail">
                          <img src="assets/img/iconic-box/02.jpg" alt="Image" />
                        </div>
                        <div className="box-content">
                          <div className="icon">
                            <img src="assets/img/icon/brain-2.png" alt="" />
                          </div>
                          <div className="content">
                            <h4 className="title">
                              <Link href="/service-details">
                                <a>Neurology</a>
                              </Link>
                            </h4>
                            <p>Quis autem reprehe nderit voluptate</p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col">
                      <div className="fancy-content-box-two no-shadow">
                        <div className="thumbnail">
                          <img src="assets/img/iconic-box/03.jpg" alt="Image" />
                        </div>
                        <div className="box-content">
                          <div className="icon">
                            <img src="assets/img/icon/stomach-2.png" alt="" />
                          </div>
                          <div className="content">
                            <h4 className="title">
                              <Link href="/service-details">
                                <a>Orthopedics</a>
                              </Link>
                            </h4>
                            <p>Amet consect ascnge eiusmod tempors</p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col">
                      <div className="fancy-content-box-two no-shadow">
                        <div className="thumbnail">
                          <img src="assets/img/iconic-box/04.jpg" alt="Image" />
                        </div>
                        <div className="box-content">
                          <div className="icon">
                            <img src="assets/img/icon/virus-2.png" alt="" />
                          </div>
                          <div className="content">
                            <h4 className="title">
                              <Link href="/service-details">
                                <a>Covid 19</a>
                              </Link>
                            </h4>
                            <p>Quis autem reprehe nderit voluptate</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          {/*====== Service Section End ======*/}
          {/*====== Call to action Start ======*/}
          <section className="cta-section cta-boxed-three">
            <div className="container">
              <div className="cta-inner">
                <div className="row align-items-center justify-content-center">
                  <div className="col-lg-6 order-lg-last">
                    <div
                      className="cta-img text-center text-lg-right wow fadeInUp"
                      data-wow-delay="0.3s"
                    >
                      <img
                        className="animate-float-bob-y"
                        src="assets/img/cta-img/illustration.png"
                        alt="Image"
                      />
                    </div>
                  </div>
                  <div className="col-lg-6 col-md-10">
                    <div className="cta-content">
                      <div className="section-heading heading-white">
                        <span className="tagline">
                          Get Our Doctors Consultations
                        </span>
                        <h2 className="title">
                          Find Your Best Doctors With Our Medical
                        </h2>
                      </div>
                      <a href="#" className="template-btn mt-30">
                        Make an Appointment <i className="far fa-plus" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          {/*====== Call to action End ======*/}
        </div>
        {/*====== Service Section End ======*/}
        {/*====== About Section Start ======*/}
        <section className="about-section section-gap">
          <div className="container">
            <div className="row align-items-center justify-content-center">
              <div className="col-lg-7 col-md-10">
                <div className="bordered-icon-wrapper">
                  <img
                    src="assets/img/section-img/about-img.jpg"
                    alt="AboutImg"
                  />
                  <div className="border-icon">
                    <img src="assets/img/icon/shield.png" alt="Icon" />
                  </div>
                </div>
              </div>
              <div className="col-lg-5 col-md-9">
                <div className="about-content">
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
                    vitae dicta sunt explica boemo enim ipsam
                  </p>
                  <a href="#" className="template-btn mt-40">
                    Learn More <i className="far fa-plus" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/*====== About Section End ======*/}
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
        {/*====== Gallery Section Start ======*/}
        <section className="gallery-section section-gap-top">
          <div className="container-fluid fluid-70">
            <div className="section-heading text-center mb-40">
              <span className="tagline">Medical Photo Gallery</span>
              <h2 className="title">Medical Services &amp; Inside Views</h2>
            </div>
            <div className="row gallery-loop justify-content-center">
              <div className="col-xl-3 col-lg-4 col-sm-6">
                <div className="gallery-item-one mt-30">
                  <div className="gallery-thumbnail">
                    <img src="assets/img/gallery/01.jpg" alt="Image" />
                  </div>
                  <div className="gallery-caption">
                    <div>
                      <a href="#" className="plus-icon" />
                      <h3 className="title">
                        <a href="#">Medical Doctors</a>
                      </h3>
                      <p>259+ Doctors Available</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xl-3 col-lg-4 col-sm-6">
                <div className="gallery-item-one mt-30">
                  <div className="gallery-thumbnail">
                    <img src="assets/img/gallery/02.jpg" alt="Image" />
                  </div>
                  <div className="gallery-caption">
                    <div>
                      <a href="#" className="plus-icon" />
                      <h3 className="title">
                        <a href="#">Medical Doctors</a>
                      </h3>
                      <p>259+ Doctors Available</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xl-3 col-lg-4 col-sm-6">
                <div className="gallery-item-one mt-30">
                  <div className="gallery-thumbnail">
                    <img src="assets/img/gallery/03.jpg" alt="Image" />
                  </div>
                  <div className="gallery-caption">
                    <div>
                      <a href="#" className="plus-icon" />
                      <h3 className="title">
                        <a href="#">Medical Doctors</a>
                      </h3>
                      <p>259+ Doctors Available</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xl-3 col-lg-4 col-sm-6">
                <div className="gallery-item-one mt-30">
                  <div className="gallery-thumbnail">
                    <img src="#" alt="Image" />
                  </div>
                  <div className="gallery-caption">
                    <div>
                      <a href="#" className="plus-icon" />
                      <h3 className="title">
                        <a href="#">Medical Doctors</a>
                      </h3>
                      <p>259+ Doctors Available</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xl-3 col-lg-4 col-sm-6">
                <div className="gallery-item-one mt-30">
                  <div className="gallery-thumbnail">
                    <img src="assets/img/gallery/05.jpg" alt="Image" />
                  </div>
                  <div className="gallery-caption">
                    <div>
                      <a href="#" className="plus-icon" />
                      <h3 className="title">
                        <a href="#">Medical Doctors</a>
                      </h3>
                      <p>259+ Doctors Available</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xl-3 col-lg-4 col-sm-6">
                <div className="gallery-item-one mt-30">
                  <div className="gallery-thumbnail">
                    <img src="assets/img/gallery/06.jpg" alt="Image" />
                  </div>
                  <div className="gallery-caption">
                    <div>
                      <a href="#" className="plus-icon" />
                      <h3 className="title">
                        <a href="#">Medical Doctors</a>
                      </h3>
                      <p>259+ Doctors Available</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xl-3 col-lg-4 col-sm-6">
                <div className="gallery-item-one mt-30">
                  <div className="gallery-thumbnail">
                    <img src="assets/img/gallery/07.jpg" alt="Image" />
                  </div>
                  <div className="gallery-caption">
                    <div>
                      <a href="#" className="plus-icon" />
                      <h3 className="title">
                        <a href="#">Medical Doctors</a>
                      </h3>
                      <p>259+ Doctors Available</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xl-3 col-lg-4 col-sm-6">
                <div className="gallery-item-one mt-30">
                  <div className="gallery-thumbnail">
                    <img src="assets/img/gallery/08.jpg" alt="Image" />
                  </div>
                  <div className="gallery-caption">
                    <div>
                      <a href="#" className="plus-icon" />
                      <h3 className="title">
                        <a href="#">Medical Doctors</a>
                      </h3>
                      <p>259+ Doctors Available</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/*====== Gallery Section End ======*/}
        <div className="doctors-with-testimonial">
          {/*====== Doctor Section Start ======*/}
          <section className="doctors-section">
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
                      Make An Appointment <i className="far fa-plus" />
                    </a>
                  </Link>
                </div>
              </div>
              <div className="row doctors-loop doctors-slider-two">
                <div className="col-lg-4 col-md-6 col-sm-9">
                  <div className="doctor-box-one mb-50">
                    <div className="doctor-photo">
                      <img src="assets/img/doctors/01.jpg" alt="Image" />
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
                <div className="col-lg-4 col-md-6 col-sm-9">
                  <div className="doctor-box-one mb-50">
                    <div className="doctor-photo">
                      <img src="assets/img/doctors/02.jpg" alt="Image" />
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
                <div className="col-lg-4 col-md-6 col-sm-9">
                  <div className="doctor-box-one mb-50">
                    <div className="doctor-photo">
                      <img src="assets/img/doctors/03.jpg" alt="Image" />
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
                <div className="col-lg-4 col-md-6 col-sm-9">
                  <div className="doctor-box-one mb-50">
                    <div className="doctor-photo">
                      <img src="assets/img/doctors/04.jpg" alt="Image" />
                    </div>
                    <div className="doctor-information">
                      <h5 className="name">
                        <Link href="/doctor-details">
                          <a>Rudolph V. Spitler</a>
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
                <div className="col-lg-4 col-md-6 col-sm-9">
                  <div className="doctor-box-one mb-50">
                    <div className="doctor-photo">
                      <img src="assets/img/doctors/05.jpg" alt="Image" />
                    </div>
                    <div className="doctor-information">
                      <h5 className="name">
                        <Link href="/doctor-details">
                          <a>Frank T. Grimsley</a>
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
                <div className="col-lg-4 col-md-6 col-sm-9">
                  <div className="doctor-box-one mb-50">
                    <div className="doctor-photo">
                      <img src="assets/img/doctors/06.jpg" alt="Image" />
                    </div>
                    <div className="doctor-information">
                      <h5 className="name">
                        <Link href="/doctor-details">
                          <a>Johnny R. Atterberry</a>
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
                <div className="col-lg-4 col-md-6 col-sm-9">
                  <div className="doctor-box-one mb-50">
                    <div className="doctor-photo">
                      <img src="assets/img/doctors/07.jpg" alt="Image" />
                    </div>
                    <div className="doctor-information">
                      <h5 className="name">
                        <Link href="/doctor-details">
                          <a>Erik R. Faulkner</a>
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
                <div className="col-lg-4 col-md-6 col-sm-9">
                  <div className="doctor-box-one mb-50">
                    <div className="doctor-photo">
                      <img src="assets/img/doctors/08.jpg" alt="Image" />
                    </div>
                    <div className="doctor-information">
                      <h5 className="name">
                        <Link href="/doctor-details">
                          <a>Phillip L. Williams</a>
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
                <div className="col-lg-4 col-md-6 col-sm-9">
                  <div className="doctor-box-one mb-50">
                    <div className="doctor-photo">
                      <img src="assets/img/doctors/09.jpg" alt="Image" />
                    </div>
                    <div className="doctor-information">
                      <h5 className="name">
                        <Link href="/doctor-details">
                          <a>Michael I. Johnson</a>
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
              </div>
            </div>
          </section>
          {/*====== Doctor Section End ======*/}
          {/*====== Testimonial Section Start ======*/}
          <section className="testimonial-section">
            <div className="container">
              <div className="row justify-content-center">
                <div className="col-lg-6">
                  <div className="section-heading text-center mb-40">
                    <span className="tagline">Our Testimonial</span>
                    <h2 className="title">
                      What our Patients Say About Our Medical
                    </h2>
                  </div>
                </div>
              </div>
              <div className="row justify-content-start">
                <div className="col-xl-8 col-lg-9">
                  <div className="row justify-content-center">
                    <div className="col-md-6 col-sm-10">
                      <div
                        className="testimonial-box mt-30 wow fadeInUp"
                        data-wow-delay="0.3s"
                      >
                        <div className="author-info-wrapper">
                          <div className="avatar">
                            <img
                              src="assets/img/testimonial/01.png"
                              alt="Images"
                            />
                          </div>
                          <div className="author-info">
                            <h5 className="name">Mark E. Kaminsky</h5>
                            <span className="title">Web Designer</span>
                            <ul className="rating">
                              <li>
                                <i className="fas fa-star" />
                              </li>
                              <li>
                                <i className="fas fa-star" />
                              </li>
                              <li>
                                <i className="fas fa-star" />
                              </li>
                              <li>
                                <i className="fas fa-star" />
                              </li>
                              <li>
                                <i className="fas fa-star-half-alt" />
                              </li>
                            </ul>
                          </div>
                        </div>
                        <p className="content">
                          Sed ut perspiciatis unde omnis natusy error volupta
                          tem accusantium doloreue laudan totam rem aperiam
                          eaquip abillo inventore
                        </p>
                        <span className="quote-icon">
                          <img
                            src="assets/img/icon/right-quote.png"
                            alt="Quote"
                          />
                        </span>
                      </div>
                    </div>
                    <div className="col-md-6 col-sm-10">
                      <div
                        className="testimonial-box mt-30 wow fadeInUp"
                        data-wow-delay="0.4s"
                      >
                        <div className="author-info-wrapper">
                          <div className="avatar">
                            <img
                              src="assets/img/testimonial/03.png"
                              alt="Images"
                            />
                          </div>
                          <div className="author-info">
                            <h5 className="name">Andrew K. Allen</h5>
                            <span className="title">Web Designer</span>
                            <ul className="rating">
                              <li>
                                <i className="fas fa-star" />
                              </li>
                              <li>
                                <i className="fas fa-star" />
                              </li>
                              <li>
                                <i className="fas fa-star" />
                              </li>
                              <li>
                                <i className="fas fa-star" />
                              </li>
                              <li>
                                <i className="fas fa-star-half-alt" />
                              </li>
                            </ul>
                          </div>
                        </div>
                        <p className="content">
                          Sed ut perspiciatis unde omnis natusy error volupta
                          tem accusantium doloreue laudan totam rem aperiam
                          eaquip abillo inventore
                        </p>
                        <span className="quote-icon">
                          <img
                            src="assets/img/icon/right-quote.png"
                            alt="Quote"
                          />
                        </span>
                      </div>
                    </div>
                    <div className="col-md-6 col-sm-10">
                      <div
                        className="testimonial-box mt-30 wow fadeInUp"
                        data-wow-delay="0.5s"
                      >
                        <div className="author-info-wrapper">
                          <div className="avatar">
                            <img
                              src="assets/img/testimonial/04.png"
                              alt="Images"
                            />
                          </div>
                          <div className="author-info">
                            <h5 className="name">V. Thomas</h5>
                            <span className="title">Web Designer</span>
                            <ul className="rating">
                              <li>
                                <i className="fas fa-star" />
                              </li>
                              <li>
                                <i className="fas fa-star" />
                              </li>
                              <li>
                                <i className="fas fa-star" />
                              </li>
                              <li>
                                <i className="fas fa-star" />
                              </li>
                              <li>
                                <i className="fas fa-star-half-alt" />
                              </li>
                            </ul>
                          </div>
                        </div>
                        <p className="content">
                          Sed ut perspiciatis unde omnis natusy error volupta
                          tem accusantium doloreue laudan totam rem aperiam
                          eaquip abillo inventore
                        </p>
                        <span className="quote-icon">
                          <img
                            src="assets/img/icon/right-quote.png"
                            alt="Quote"
                          />
                        </span>
                      </div>
                    </div>
                    <div className="col-md-6 col-sm-10">
                      <div
                        className="testimonial-box mt-30 wow fadeInUp"
                        data-wow-delay="0.6s"
                      >
                        <div className="author-info-wrapper">
                          <div className="avatar">
                            <img
                              src="assets/img/testimonial/05.png"
                              alt="Images"
                            />
                          </div>
                          <div className="author-info">
                            <h5 className="name">Rudolph Spitler</h5>
                            <span className="title">Web Designer</span>
                            <ul className="rating">
                              <li>
                                <i className="fas fa-star" />
                              </li>
                              <li>
                                <i className="fas fa-star" />
                              </li>
                              <li>
                                <i className="fas fa-star" />
                              </li>
                              <li>
                                <i className="fas fa-star" />
                              </li>
                              <li>
                                <i className="fas fa-star-half-alt" />
                              </li>
                            </ul>
                          </div>
                        </div>
                        <p className="content">
                          Sed ut perspiciatis unde omnis natusy error volupta
                          tem accusantium doloreue laudan totam rem aperiam
                          eaquip abillo inventore
                        </p>
                        <span className="quote-icon">
                          <img
                            src="assets/img/icon/right-quote.png"
                            alt="Quote"
                          />
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          {/*====== Testimonial Section End ======*/}
          <div className="section-image">
            <img
              src="assets/img/section-img/doctor-with-prescription.jpg"
              alt="Image"
            />
          </div>
        </div>
        {/*====== Latest Blog Start ======*/}
        <section className="latest-blog-section latest-blog-section-bg section-gap bg-color-secondary-10">
          <div className="container">
            <div className="row justify-content-lg-end justify-content-center">
              <div className="col-lg-6 col-md-10 col-sm-11">
                <div className="row">
                  <div className="col-xl-10 col-lg-12 col-md-10">
                    <div className="section-heading mb-60">
                      <span className="tagline">Latest News &amp; Blog</span>
                      <h2 className="title">
                        Every Single Updates Our News &amp; Blog
                      </h2>
                    </div>
                  </div>
                </div>
                <div className="latest-blog-list">
                  <div
                    className="single-post wow fadeInUp"
                    data-wow-delay="0.3s"
                  >
                    <div className="post-meta">
                      <a href="#" className="blog-category">
                        Health
                      </a>
                      <a href="#" className="blog-date">
                        <i className="far fa-calendar-alt" /> 25 Aug 2021
                      </a>
                    </div>
                    <h4 className="post-title">
                      <Link href="/blog-details">
                        <a>
                          Comprehensive Worksite Health Program Built Decades of
                          Clinical Expertise
                        </a>
                      </Link>
                    </h4>
                  </div>
                  <div
                    className="single-post wow fadeInUp"
                    data-wow-delay="0.4s"
                  >
                    <div className="post-meta">
                      <a href="#" className="blog-category">
                        Covid 19
                      </a>
                      <a href="#" className="blog-date">
                        <i className="far fa-calendar-alt" /> 25 Aug 2021
                      </a>
                    </div>
                    <h4 className="post-title">
                      <Link href="/blog-details">
                        <a>
                          Make Ove Toward Improved Employee Health Speed Return
                          Healthcare Investment
                        </a>
                      </Link>
                    </h4>
                  </div>
                  <div
                    className="single-post wow fadeInUp"
                    data-wow-delay="0.5s"
                  >
                    <div className="post-meta">
                      <a href="#" className="blog-category">
                        Covid 19
                      </a>
                      <a href="#" className="blog-date">
                        <i className="far fa-calendar-alt" /> 25 Aug 2021
                      </a>
                    </div>
                    <h4 className="post-title">
                      <Link href="/blog-details">
                        <a>
                          Flexible and Responsive to Your Changing Seen
                          Needs&nbsp;Make Ove Toward Improved
                        </a>
                      </Link>
                    </h4>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            className="section-bg d-none d-lg-block"
            style={{
              backgroundImage: "url(assets/img/section-bg/half-bg-img-02.jpg)",
            }}
          />
        </section>
        {/*====== Latest Blog End ======*/}
        {/*====== Partners Section Start ======*/}
        <section className="partner-section section-gap bg-color-grey section-map-overly-2">
          <div className="container">
            <div className="section-heading text-center mb-50">
              <span className="span tagline">Our Trusted Partners</span>
              <h2 className="title">We’ve 23563k+ Trusted Partners</h2>
            </div>
            <div className="partner-logo-grid">
              <div className="single-partner">
                <a href="#">
                  <img
                    src="assets/img/partner-logos/01-dark.png"
                    alt="Partner"
                  />
                </a>
              </div>
              <div className="single-partner">
                <a href="#">
                  <img
                    src="assets/img/partner-logos/02-dark.png"
                    alt="Partner"
                  />
                </a>
              </div>
              <div className="single-partner">
                <a href="#">
                  <img
                    src="assets/img/partner-logos/03-dark.png"
                    alt="Partner"
                  />
                </a>
              </div>
              <div className="single-partner">
                <a href="#">
                  <img
                    src="assets/img/partner-logos/04-dark.png"
                    alt="Partner"
                  />
                </a>
              </div>
              <div className="single-partner">
                <a href="#">
                  <img
                    src="assets/img/partner-logos/05-dark.png"
                    alt="Partner"
                  />
                </a>
              </div>
              <div className="single-partner">
                <a href="#">
                  <img
                    src="assets/img/partner-logos/06-dark.png"
                    alt="Partner"
                  />
                </a>
              </div>
              <div className="single-partner">
                <a href="#">
                  <img
                    src="assets/img/partner-logos/07-dark.png"
                    alt="Partner"
                  />
                </a>
              </div>
              <div className="single-partner">
                <a href="#">
                  <img
                    src="assets/img/partner-logos/08-dark.png"
                    alt="Partner"
                  />
                </a>
              </div>
            </div>
          </div>
        </section>
        {/*====== Partners Section End ======*/}
      </>
    </Layouts>
  );
};
export default Index3;
