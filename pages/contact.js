import React from "react";
import { useForm } from "react-hook-form";
import PageBanner from "../src/components/PageBanner";
import Layouts from "../src/layouts/Layouts";
import Script from "next/script";
import { Contact_Us, GetAllServices } from "../lib/queries";
import { gql } from "@apollo/client";
import { client } from "../lib/client";
import Head from "next/head";

export default function Contact({ all_ContactUs, all_services }) {
  const { seo } = all_ContactUs;
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    fetch("/api/contact", {
      method: "POST",
      headers: {
        Accept: "application/json, text/plain, */*",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    }).then((res) => {
      console.log("Response received");
      if (res.status === 200) {
        console.log("Response succeeded!");
        alert("Message Successfully send.!");
      }
    });
  };

  return (
    <div>
      <Layouts footer={2} services={all_services}>
        <PageBanner title={"Contact Us"} />
        {/*====== Page Title End ======*/}
        {/*====== Contact Info Section Start ======*/}
        <section className="section-gap contact-top-wrappper">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-xl-5 col-lg-6 col-md-10">
                <div className="contact-info-wrapper">
                  <div className="single-contact-info">
                    <div className="single-contact-info">
                      <h3 className="info-title">
                        <i className="fal fa-map-marker-alt" /> Address
                      </h3>
                      <p>
                        400 Promenade Wy Ste 1500, Sugar Land, TX 77478,{" "}
                        <span className="last">United States</span>
                      </p>
                    </div>
                    <div className="single-contact-info">
                      <h3 className="info-title">
                        <i className="fal fa-coffee" /> Get In Touch
                      </h3>
                      <ul className="contect_info">
                        <li>
                          <span>Phone Number</span>
                          <a className="text-white" href="tel:+012020200">
                            (346) 341-7573
                          </a>
                        </li>
                        <li>
                          <span>Email Address</span>
                          <a
                            className="text-white"
                            href="mailto:support@gmail.com"
                          >
                            swurgentcare@outlook.com
                          </a>
                        </li>
                        {/* <li>
               <span>Hotline</span>
               <a href="tel:+12345678">12345678</a>
             </li> */}
                      </ul>
                    </div>
                    <div className="single-contact-info">
                      <h3 className="info-title">
                        <i className="fal fa-comments" /> Follow Us
                      </h3>

                      <p className="social-icon">
                        <a href="#" className="p-2 rounded social_icon ">
                          <i className="fab fa-facebook" />
                        </a>
                        <a href="#" className="p-2 rounded social_icon ">
                          <i className="fab fa-twitter-square" />
                        </a>
                        <a href="#" className="p-2 rounded social_icon ">
                          <i className="fab fa-linkedin" />
                        </a>
                        <a href="#" className="p-2 rounded social_icon ">
                          <i className="fab fa-youtube-square" />
                        </a>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xl-5 col-lg-6 col-md-10">
                <div className="working-hour-chart">
                  <h2 className="chart-title">Working Hour</h2>
                  <ul>
                    <li>
                      <span>
                        <i className="far fa-angle-right" />
                        Monday
                      </span>
                      <span className="last">9:00 am to 8:00 pm</span>
                    </li>
                    <li>
                      <span>
                        <i className="far fa-angle-right" />
                        Tuesday
                      </span>
                      <span className="last">9:00 am to 8:00 pm</span>
                    </li>
                    <li>
                      <span>
                        <i className="far fa-angle-right" />
                        Wednesday
                      </span>
                      <span className="last">9:00 am to 8:00 pm</span>
                    </li>
                    <li>
                      <span>
                        <i className="far fa-angle-right" />
                        Thursday
                      </span>
                      <span className="last">9:00 am to 8:00 pm</span>
                    </li>
                    <li>
                      <span>
                        <i className="far fa-angle-right" />
                        Friday
                      </span>
                      <span className="last">9:00 am to 8:00 pm</span>
                    </li>
                    <li>
                      <span>
                        <i className="far fa-angle-right" />
                        Saturday
                      </span>
                      <span className="last">09:00 am to 03:00 pm</span>
                    </li>
                    <li>
                      <span>
                        <i className="far fa-angle-right" />
                        Sunday
                      </span>
                      <span className="last">09:00 am to 01:00 pm</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/*====== Contact Info Section End ======*/}
        {/*====== Contact Form Start ======*/}
        <section className="contact-form-area">
          <div className="contact-map">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d920898.2645108468!2d-96.82088754803496!3d29.30509874673538!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8640e1326d9c9c9b%3A0x647e15d838d4da0a!2s400%20Promenade%20Wy%2C%20Sugar%20Land%2C%20TX%2077478%2C%20USA!5e0!3m2!1sen!2s!4v1667198890592!5m2!1sen!2s"
              loading="lazy"
            />
          </div>
          <div className="section-gap">
            <div className="container">
              <div className="row justify-content-center">
                <div className="col-lg-10">
                  <div className="section-heading mb-60 text-center">
                    <span className="tagline">{`We're Ready To Help You`}</span>
                    <h2 className="title">
                      Leave a <span className="last">Message</span>
                    </h2>
                  </div>
                  <form
                    // onSubmit={handleSubmit(onSubmit)}
                    className="contact-form"
                  >
                    <div className="row">
                      <div className="col-md-6">
                        <div className="input-field">
                          <label htmlFor="name">Your Full Name</label>
                          <input
                            type="text"
                            placeholder="Michael M. Smith"
                            id="name"
                            name="name"
                            {...register("name", { required: true })}
                          />
                          {errors.name && (
                            <span className="text-red-600">
                              This field is required
                            </span>
                          )}
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="input-field">
                          <label htmlFor="email">Email Address</label>
                          <input
                            type="email"
                            placeholder="support@gmail.com"
                            id="email"
                            name="email"
                            {...register("email", { required: true })}
                          />
                          {errors.email && (
                            <span className="text-red-600">
                              This field is required
                            </span>
                          )}
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="input-field">
                          <label htmlFor="number">Phone Number</label>
                          <input
                            type="text"
                            placeholder="+012 (345) 678 99"
                            id="number"
                            name="number"
                            {...register("number")}
                          />
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="input-field">
                          <label htmlFor="website">Website</label>
                          <input
                            type="url"
                            placeholder="www.swurgentcare.com"
                            id="website"
                            name="website"
                            {...register("website")}
                          />
                        </div>
                      </div>
                      <div className="col-lg-12">
                        <div className="input-field">
                          <label htmlFor="message">Write Message</label>
                          <textarea
                            id="message"
                            name="message"
                            placeholder="Write Message...."
                            defaultValue={""}
                            {...register("message")}
                          />
                        </div>
                      </div>
                      <div className="col-12">
                        <div className="text-center">
                          <button
                            className="template-btn"
                            onClick={handleSubmit(onSubmit)}
                          >
                            Send Us Message <i className="far fa-plus" />
                          </button>
                        </div>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </section>
      </Layouts>
    </div>
  );
}

export async function getStaticProps() {
  const GET_ContactUs = gql`
    ${Contact_Us}
  `;
  const GET_SERVICES = gql`
    ${GetAllServices}
  `;
  // HOMEPAGE QUERY
  const response = await client.query({
    query: GET_ContactUs,
  });
  // SERVICES QUERY
  const res = await client.query({
    query: GET_SERVICES,
  });

  const all_ContactUs = response?.data.page;
  const all_services = res?.data?.services?.nodes;
  return {
    props: {
      all_ContactUs,
      all_services,
    },
  };
}
