import Link from "next/link";
import React from "react";
import PageBanner from "../src/components/PageBanner";
import Layouts from "../src/layouts/Layouts";

const Doctor = () => {
  return (
    <Layouts>
      <PageBanner title={"Meet The Doctors"} bgnone />
      <section className="doctors-section section-gap">
        <div className="container">
          <div className="row doctors-loop justify-content-center">
            <div className="col-lg-4 col-md-6 col-sm-9">
              <div className="doctor-box-one mb-30">
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
                        <i className="fab fa-facebook-f"></i>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fab fa-twitter"></i>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fab fa-youtube"></i>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fab fa-linkedin"></i>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-9">
              <div className="doctor-box-one mb-30">
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
                        <i className="fab fa-facebook-f"></i>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fab fa-twitter"></i>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fab fa-youtube"></i>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fab fa-linkedin"></i>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-9">
              <div className="doctor-box-one mb-30">
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
                        <i className="fab fa-facebook-f"></i>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fab fa-twitter"></i>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fab fa-youtube"></i>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fab fa-linkedin"></i>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-9">
              <div className="doctor-box-one mb-30">
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
                        <i className="fab fa-facebook-f"></i>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fab fa-twitter"></i>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fab fa-youtube"></i>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fab fa-linkedin"></i>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-9">
              <div className="doctor-box-one mb-30">
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
                        <i className="fab fa-facebook-f"></i>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fab fa-twitter"></i>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fab fa-youtube"></i>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fab fa-linkedin"></i>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-9">
              <div className="doctor-box-one mb-30">
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
                        <i className="fab fa-facebook-f"></i>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fab fa-twitter"></i>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fab fa-youtube"></i>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fab fa-linkedin"></i>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-9">
              <div className="doctor-box-one mb-30">
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
                        <i className="fab fa-facebook-f"></i>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fab fa-twitter"></i>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fab fa-youtube"></i>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fab fa-linkedin"></i>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-9">
              <div className="doctor-box-one mb-30">
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
                        <i className="fab fa-facebook-f"></i>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fab fa-twitter"></i>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fab fa-youtube"></i>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fab fa-linkedin"></i>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-9">
              <div className="doctor-box-one mb-30">
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
                        <i className="fab fa-facebook-f"></i>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fab fa-twitter"></i>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fab fa-youtube"></i>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fab fa-linkedin"></i>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="load-more-doctors text-center mt-40">
            <a href="#" className="template-btn template-btn-primary">
              Male An Appointment <i className="far fa-plus"></i>{" "}
            </a>
          </div>
        </div>
      </section>
      {/* <!--====== Doctor Section End ======--> */}

      {/* <!--====== Skill Section Start ======--> */}
      <section className="skill-section section-gap border-top-primary">
        <div className="container">
          <div className="row justify-content-center justify-content-lg-between align-items-center">
            <div className="col-lg-6 col-md-10">
              <div className="tile-gallery-two pr-lg-3">
                <div className="image-one">
                  <img src="assets/img/tile-gallery/04.jpg" alt="Image" />
                </div>
                <div
                  className="image-two text-right wow fadeInUp"
                  data-wow-delay="0.3s"
                >
                  <img src="assets/img/tile-gallery/05.jpg" alt="Image" />
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-md-9">
              <div className="skill-content pl-xl-5 mt-md-50">
                <div className="section-heading mb-20">
                  <span className="tagline">Professional Skills</span>
                  <h2 className="title">
                    25 Years Of Experience In Medical Services
                  </h2>
                </div>
                <p>
                  Sed ut perspiciatis unde omnis natus error voluptatem santium
                  doloremque laudantium totam rem aperieaque ipsa quae abillo
                  ven veritatis et quasi architecto beatae vitae dicta.
                </p>
                <div
                  className="skills-items mt-50 wow fadeInUp"
                  data-wow-delay="0.4s"
                >
                  <div
                    className="progress-bar-wrapper mb-40"
                    data-percentage="89"
                    data-line-color="#499afa"
                    data-line-bg="#e4f0fe"
                  >
                    <div className="progress-title-wrap">
                      <h5 className="progress-title">Medical Care</h5>
                      <span className="progress-percentage">89%</span>
                    </div>
                    <div className="progress-line-wrap">
                      <div className="progress-line"></div>
                    </div>
                  </div>
                  <div
                    className="progress-bar-wrapper mb-40"
                    data-percentage="64"
                    data-line-color="#ffae00"
                    data-line-bg="#fff3d9"
                  >
                    <div className="progress-title-wrap">
                      <h5 className="progress-title">Family Care</h5>
                      <span className="progress-percentage">64%</span>
                    </div>
                    <div className="progress-line-wrap">
                      <div className="progress-line"></div>
                    </div>
                  </div>
                  <div
                    className="progress-bar-wrapper mb-40"
                    data-percentage="78"
                    data-line-color="#b505ff"
                    data-line-bg="#f4daff"
                  >
                    <div className="progress-title-wrap">
                      <h5 className="progress-title">Child Care</h5>
                      <span className="progress-percentage">78%</span>
                    </div>
                    <div className="progress-line-wrap">
                      <div className="progress-line"></div>
                    </div>
                  </div>
                  <div
                    className="progress-bar-wrapper mb-40"
                    data-percentage="85"
                    data-line-color="#ff3000"
                    data-line-bg="#ffe0d9"
                  >
                    <div className="progress-title-wrap">
                      <h5 className="progress-title">Senior Care</h5>
                      <span className="progress-percentage">85%</span>
                    </div>
                    <div className="progress-line-wrap">
                      <div className="progress-line"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layouts>
  );
};
export default Doctor;
