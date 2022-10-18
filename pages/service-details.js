import Link from "next/link";
import React from "react";
import PageBanner from "../src/components/PageBanner";
import Layouts from "../src/layouts/Layouts";

const ServiceDetails = () => {
  return (
    <Layouts footer={2}>
      <PageBanner title={"Service Details"} />
      <>
        <section className="services-area section-gap">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-8 order-lg-last">
                <div className="service-details-wrapper">
                  <div className="service-thumbnail mb-50">
                    <img
                      src="assets/img/service/service-details-1.jpg"
                      alt="Image"
                    />
                  </div>
                  <h2 className="service-title">Neurology Care</h2>
                  <p>
                    Sed ut perspiciatis unde omnis iste natus error sit
                    voluptatem accusantium doloremque laudantium totam rem
                    aperiam, eaque ipsa quae ab illo inventore veritatis et
                    quasi archite cto beatae vitae dicta sunt explicabo. Nemo
                    enim ipsam voluptatem quia voluptas sit aspe rnatur aut odit
                    aut fugit sed quia consequuntur magni dolores eos qui
                    ratione voluptatem sequi nesciunt. Neque porro quisquam est
                    qui dolorem ipsum quia dolor sit amet consect etur, adipisci
                    velit, sed quia non numquam eius modi tempora incidunt ut
                    labore et dolore magnam aliquam quaerat voluptatem. Ut enim
                    ad minima veniam, quis nostrum exercita tionem ullam
                    corporis suscipit laboriosam, nisi ut aliquid ex ea commodi
                    consequatur? Quis autem vel eum iure reprehenderit qui in ea
                    voluptate velit esse quam nihil molestiae cons equatur, vel
                    illum qui dolorem eum fugiat quo voluptas nulla pariatur
                  </p>
                  <blockquote className="mt-30">
                    Quis autem vel eum iure reprehenderit qui in voluptate velit
                    esse quam nihil molestiae consequatur, vel illum qui dolorem
                    eum fugiat quo voluptas nulla pariatur
                  </blockquote>
                  <div className="mb-50 mt-50">
                    <img
                      src="assets/img/service/service-details-2.jpg"
                      alt="Image"
                    />
                  </div>
                  <p>
                    Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut
                    odit aut fugit sed quia con sequuntur magni dolores eos qui
                    ratione voluptatem sequi nesciunt. Neque porro quisquam est
                    qui dolorem ipsum quia dolor sit amet consectetur, adipisci
                    velit, sed quia non numquam eius modi tempora incidunt ut
                    labore et dolore magnam
                  </p>
                  <ul className="check-list mt-35">
                    <li>
                      25-30% estimated savings in implementation when using
                      Mobile Health Clinics
                    </li>
                    <li>Activate Mobile Health Clinics in just weeks</li>
                    <li>Flexible, on-demand access to care services</li>
                    <li>
                      Supports referrals to provider networks and care
                      management programs
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-lg-4 col-md-10 order-lg-first">
                <div className="service-sidebar">
                  <div className="widget departments-list">
                    <h3 className="widget-title">Departments</h3>
                    <ul>
                      <li>
                        <a href="#">
                          <i className="far fa-angle-right" />
                          Orthopedic Care
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="far fa-angle-right" />
                          Gynecology Care
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="far fa-angle-right" />
                          Primary Care
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="far fa-angle-right" />
                          Cardiology Care
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="far fa-angle-right" />
                          Cancer Care
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="far fa-angle-right" />
                          Dentistry Care
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="far fa-angle-right" />
                          Gastrology Care
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="far fa-angle-right" />
                          Urgent Care
                        </a>
                      </li>
                    </ul>
                  </div>
                  <div className="widget appointment-form">
                    <h3 className="widget-title">Appointment</h3>
                    <p>
                      Consectetur adipiscing elit sed do eiusmod tempor
                      incididunt
                    </p>
                    <form onSubmit={(e) => e.preventDefault()} action="#">
                      <div className="input-field">
                        <input type="text" placeholder="Full Name" />
                      </div>
                      <div className="input-field">
                        <input type="text" placeholder="Departments" />
                      </div>
                      <div className="input-field">
                        <input type="text" placeholder="Choose Doctors" />
                      </div>
                      <div className="input-field">
                        <input type="text" placeholder="Date & Time" />
                      </div>
                      <div className="input-field">
                        <button type="submit" className="template-btn">
                          Appointment Now <i className="far fa-plus" />
                        </button>
                      </div>
                    </form>
                  </div>
                  <div className="widget working-schedule">
                    <h3 className="widget-title">Working Hour</h3>
                    <ul>
                      <li>
                        <span>
                          <i className="far fa-angle-right" />
                          Monday
                        </span>
                        <span>9:00-19:00</span>
                      </li>
                      <li>
                        <span>
                          <i className="far fa-angle-right" />
                          Tuesday
                        </span>
                        <span>9:00-19:00</span>
                      </li>
                      <li>
                        <span>
                          <i className="far fa-angle-right" />
                          Wednesday
                        </span>
                        <span>9:00-19:00</span>
                      </li>
                      <li>
                        <span>
                          <i className="far fa-angle-right" />
                          Thursday
                        </span>
                        <span>9:00-19:00</span>
                      </li>
                      <li>
                        <span>
                          <i className="far fa-angle-right" />
                          Friday
                        </span>
                        <span>9:00-19:00</span>
                      </li>
                      <li>
                        <span>
                          <i className="far fa-angle-right" />
                          Saturday
                        </span>
                        <span>9:00-19:00</span>
                      </li>
                      <li>
                        <span>
                          <i className="far fa-angle-right" />
                          Sunday
                        </span>
                        <span>9:00-19:00</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/*====== Service Area End ======*/}
        {/*====== Related Services Start ======*/}
        <section className="related-services bg-color-grey section-gap">
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
            <div className="row justify-content-center service-loop">
              <div className="col-lg-4 col-md-6 col-sm-8">
                <div className="iconic-box mt-30">
                  <div className="icon">
                    <img src="assets/img/icon/heart.png" alt="Icon" />
                  </div>
                  <h4 className="title">
                    <Link href="/service-details">Cardiology</Link>
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
                <div className="iconic-box mt-30">
                  <div className="icon">
                    <img src="assets/img/icon/lungs.png" alt="Icon" />
                  </div>
                  <h4 className="title">
                    <Link href="/service-details">Pulmonary</Link>
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
                <div className="iconic-box mt-30">
                  <div className="icon">
                    <img src="assets/img/icon/brain.png" alt="Icon" />
                  </div>
                  <h4 className="title">
                    <Link href="/service-details">Neurology</Link>
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
      </>
    </Layouts>
  );
};
export default ServiceDetails;
