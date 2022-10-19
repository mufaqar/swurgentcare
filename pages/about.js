import Link from "next/link";
import React, { useState } from "react";
import { Accordion } from "react-bootstrap";
import PageBanner from "../src/components/PageBanner";
import Layouts from "../src/layouts/Layouts";

const About = () => {
  const [toggle, setToggle] = useState(1);
  return (
    <Layouts footer={2}>
      <PageBanner title={"About"} />
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
                        src="assets/s1.jpeg"
                        alt=""
                      />
                    </div>
                    <div
                      className="single-img wow fadeInRight"
                      data-wow-delay="0.4s"
                    >
                      <img
                        src="assets/s3.jpeg"
                        alt=""
                      />
                    </div>
                  </div>
                  <div className="col-6 gallery-right">
                    <div
                      className="single-img wow fadeInRight"
                      data-wow-delay="0.5s"
                    >
                      <img
                        className="animate-float-bob-y"
                        src="assets/s2.jpeg"
                        alt=""
                      />
                    </div>
                    <div
                      className="single-img wow fadeInLeft"
                      data-wow-delay="0.6s"
                    >
                      <img
                        src="assets/s4.jpeg"
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
                  <span className="tagline">About Swurgentcare</span>
                  <h2 className="title">Houston’s Best Urgent Care Center!</h2>

                  <p>Strong Experience in Medical Services</p>
                </div>
                <p>
                We can provide instant care for a broad range of sicknesses and injuries, from colds, infections, coughs to cuts, broken bones, bruises, and burns. Besides treating a broad range of diseases and injuries, we are also equipped to manage your ongoing health needs, including preventative screenings, diagnostic tests, immunizations, and physical exams. Our Doctors are Trauma Certified and ACLS Certified (advanced cardiovascular life support).
                We are located just 2 miles away from the galleria mall in Southwest Houston close to US 59 and Chimney Rock Rd.
                </p>
                <Link href="/appointments">
                  <a className="template-btn mt-40">
                    Get Appointment <i className="far fa-plus"></i>
                  </a>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <!--====== About Section End ======--> */}


    </Layouts>
  );
};
export default About;
