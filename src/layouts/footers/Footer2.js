import Link from "next/link";
import React from "react";
import { sanityClient } from "../../../lib/studio";




const Footer2 = ({ noNewsletters, services }) => {
  console.log("🚀 ~ file: Footer2.js ~ line 13 ~ Footer2 ~ services", services)
  return (
    <footer
      className={`template-footer template-footer-white ${noNewsletters ? "" : "have-cta-boxes-two"
        }`}
    >
      <div className="footer-inner bg-color-primary">
        <div className="container">
          <div className="footer-widgets">
            <div className="row">
              <div className="col-lg-3 col-md-8">
                <div className="widget text-widget">
                  <div className="footer-logo">
                    <img src="assets/site-logo.png" alt="swurgentcare" />
                  </div>
                  <p>
                    We are a creative company that specializes in strategy & design.
                    We like to create things with like – minded people who are serious about their passions
                  </p>
                  <ul className="contact-list">
                    {/* <li>
                      <a href="https://goo.gl/maps/inpkL6wUZqMR3opX7">
                        <i className="far fa-map-marker-alt" />
                        55 Main Road, USA
                      </a>
                    </li> */}
                    {/* <li>
                      <a href="mailto:support@gmail.com">
                        <i className="far fa-envelope" />
                        swurgentcare@outlook.com
                      </a>
                    </li> */}
                    <li>
                      <a href="tel:01267899">
                        <i className="far fa-phone" />
                        (346) 341-7573
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="row justify-content-center">
                  <div className="col-xl-5 col-sm-6">
                    <div className="d-flex justify-content-lg-center">
                      <div className="widget nav-widget">
                        <h4 className="widget-title">Popular Services</h4>
                        <ul className="nav-links">
                          {
                            services?.slice(0, 7).map((item, i) => (
                              <li key={i} className="capatalize">
                                <Link href={item.slug.current}>{item.title}</Link>
                              </li>
                            ))
                          }
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div className="col-xl-5 col-sm-6">
                    <div className="d-flex justify-content-lg-center">
                      <div className="widget nav-widget">
                        <h4 className="widget-title pt-4 pb-2"></h4>
                        <ul className="nav-links">
                          {
                            services?.slice(7, services.length).map((item, i) => (
                              <li key={i} className="capatalize">
                                <Link href={item.slug.current}>{item.title}</Link>
                              </li>
                            ))
                          }
                          
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-10">
                <div className="widget newsletters-widget">
                  <h4 className="widget-title">Newsletters</h4>
                  <p>
                    Join Our Newsletter
                  </p>
                  <form
                    onSubmit={(e) => e.preventDefault()}
                    action="#"
                    className="newsletters-form"
                  >
                    <input type="email" placeholder="Email Address" />
                    <button type="submit">
                      <i className="far fa-arrow-right" />
                    </button>
                  </form>
                  <div className="opening-notice mt-30">
                    <h6>
                      <i className="far fa-clock" /> Opening Hours
                    </h6>
                    <p>Sun - Thursday, 08:00 am - 05:00 pm</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="copyright-area">
            <p>
              © 2022 <a href="#">Southwest Urgent Care</a>. All Rights Reserved
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};
export default Footer2;



