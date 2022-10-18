import Link from "next/link";
import React from "react";
import PageBanner from "../src/components/PageBanner";
import ChooseDoctor from "../src/components/select/ChooseDoctor";
import ServicesCategory from "../src/components/select/ServicesCategory";
import Layouts from "../src/layouts/Layouts";

const Service = () => {
  return (
    <Layouts footer={2}>
      <PageBanner title={"Our Services"} pageName="Services" />
      <section className="services-area section-gap-top-less bg-color-grey">
        <div className="container">
          <div className="row justify-content-center service-loop">
            <div className="col-lg-4 col-md-6 col-sm-8">
              <div className="fancy-content-box-two no-shadow mt-30">
                <div className="thumbnail">
                  <img src="assets/img/iconic-box/05.jpg" alt="Image" />
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
            <div className="col-lg-4 col-md-6 col-sm-8">
              <div className="fancy-content-box-two no-shadow mt-30">
                <div className="thumbnail">
                  <img src="assets/img/iconic-box/06.jpg" alt="Image" />
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
            <div className="col-lg-4 col-md-6 col-sm-8">
              <div className="fancy-content-box-two no-shadow mt-30">
                <div className="thumbnail">
                  <img src="assets/img/iconic-box/07.jpg" alt="Image" />
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
            <div className="col-lg-4 col-md-6 col-sm-8">
              <div className="fancy-content-box-two no-shadow mt-30">
                <div className="thumbnail">
                  <img src="assets/img/iconic-box/08.jpg" alt="Image" />
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
            <div className="col-lg-4 col-md-6 col-sm-8">
              <div className="fancy-content-box-two no-shadow mt-30">
                <div className="thumbnail">
                  <img src="assets/img/iconic-box/09.jpg" alt="Image" />
                </div>
                <div className="box-content">
                  <div className="icon">
                    <img src="assets/img/icon/bronchus.png" alt="" />
                  </div>
                  <div className="content">
                    <h4 className="title">
                      <Link href="/service-details">
                        <a>Orthopedics</a>
                      </Link>
                    </h4>
                    <p>Quis autem reprehe nderit voluptate</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-8">
              <div className="fancy-content-box-two no-shadow mt-30">
                <div className="thumbnail">
                  <img src="assets/img/iconic-box/10.jpg" alt="Image" />
                </div>
                <div className="box-content">
                  <div className="icon">
                    <img src="assets/img/icon/lungs.png" alt="" />
                  </div>
                  <div className="content">
                    <h4 className="title">
                      <Link href="/service-details">
                        <a>Pulmonary</a>
                      </Link>
                    </h4>
                    <p>Quis autem reprehe nderit voluptate</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <!--====== Service Area End ======--> */}

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
                    <ChooseDoctor />
                  </div>
                </div>
                <div className="col-sm-6">
                  <div className="input-field">
                    <ServicesCategory />
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

      {/* <!--====== Feature Section Start ======--> */}
      <section className="feature-section section-gap">
        <div className="container">
          <div className="row align-items-center justify-content-center">
            <div className="col-xl-7 col-lg-6 order-lg-last">
              <div className="feature-img text-center text-lg-right">
                <img src="assets/img/section-img/feature-img.jpg" alt="Image" />
              </div>
            </div>
            <div className="col-xl-5 col-lg-6 col-md-10">
              <div className="feature-text mt-md-50">
                <div className="section-heading mb-30">
                  <span className="tagline">How Can We Help</span>
                  <h2 className="title">
                    Flexible & Responsive to Changing Needs
                  </h2>
                </div>
                <p>
                  Sed ut perspiciatis unde omnis iste natus error voluptatem
                  accusantium doloremque laudantium totam rem aperieaqueys epsa
                  quae abillo inventore veritatis et quase
                </p>
                <div className="row">
                  <div className="col-lg-5 col-sm-6">
                    <div
                      className="simple-icon mt-40 wow fadeInUp"
                      data-wow-delay="0.3s"
                    >
                      <div className="icon">
                        <i className="flaticon-stethoscope"></i>
                      </div>
                      <h4 className="title">Professional Doctors</h4>
                      <p>Sed perspiciatis unde omnis natus error</p>
                    </div>
                  </div>
                  <div className="col-lg-5 col-sm-6">
                    <div
                      className="simple-icon mt-40 wow fadeInUp"
                      data-wow-delay="0.4s"
                    >
                      <div className="icon">
                        <i className="flaticon-checkup"></i>
                      </div>
                      <h4 className="title">Very Friendly Environment</h4>
                      <p>Sed perspiciatis unde omnis natus error</p>
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
export default Service;
