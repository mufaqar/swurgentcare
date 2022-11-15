import { gql } from "@apollo/client";
import Head from "next/head";
import React from "react";
import { client } from "../lib/client";
import { appointment, GetAllServices } from "../lib/queries";
import PageBanner from "../src/components/PageBanner";
import Layouts from "../src/layouts/Layouts";

const Appointments = ({appointment_page, all_services}) => {
  const {seo} = appointment_page

  return (
    <Layouts footer={2} services={all_services}>
      <Head>
        <title>{seo?.title}</title>
        <meta name="description" content={seo?.metaDesc} />
        <meta property="og:description" content={seo?.metaDesc} />
        <meta property="og:title" content={seo?.title} />
        <meta name="keywords" content={seo?.metaKeywords}></meta>
      </Head>
      <PageBanner title={"Appointment"} />
      <section className="appointment-section section-gap">
        <div className="container container-1500">
          <div className="appointment-form-two style-two">
            <div
              className="appointment-image"
              style={{ backgroundImage: "url(assets/mildred-doctor-appointment-wait-times-ftr.jpeg)" }}
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
                    <div className="input-field">
                      <input type="text" placeholder="Your Full Name" />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="input-field">
                      <input type="email" placeholder="Email Address" />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="input-field">
                      <select>
                        <option value="1" selected disabled>
                          Choose Doctors
                        </option>
                        <option value="2">Doctor One</option>
                        <option value="3">Doctor Two</option>
                        <option value="4">Doctor Three</option>
                        <option value="5">Doctor Four</option>
                      </select>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="input-field">
                      <input type="date" />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="input-field">
                      <select>
                        <option value="1" selected disabled>
                          Services Category
                        </option>
                        <option value="2">Service One</option>
                        <option value="3">Service Two</option>
                        <option value="4">Service Three</option>
                        <option value="5">Service Four</option>
                      </select>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="input-field">
                      <button type="submit" className="template-btn">
                        Make an Appointment <i className="far fa-plus"></i>
                      </button>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
      {/* <!--====== Appointment Section End ======--> */}
   
    </Layouts>
  );
};
export default Appointments;


export async function getStaticProps() {
  const GET_Appointment_Page = gql`
    ${appointment}
  `;
  const GET_SERVICES = gql`
    ${GetAllServices}
  `;

  // SERVICES QUERY
  const response = await client.query({
    query: GET_SERVICES,
  });

  // Appointment QUERY
  const res = await client.query({
    query: GET_Appointment_Page,
  });

  const appointment_page = res?.data.page;
  const all_services = response?.data?.services?.nodes;
  return {
    props: {
      appointment_page,
      all_services,
    },
  };
}
