import { Head, Html, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <body>
        <Main />
        <NextScript />

         {/* <section className="doctors-section section-gap">
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
        </section> */}
      </body>
    </Html>
  );
}
