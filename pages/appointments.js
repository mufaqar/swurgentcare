import { gql } from "@apollo/client";
import Head from "next/head";
import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import { Context } from "../context/signatureContext";
import { client } from "../lib/client";
import { appointment, GetAllServices } from "../lib/queries";
import PageBanner from "../src/components/PageBanner";
import Signature from "../src/components/signature";
import Layouts from "../src/layouts/Layouts";


const Appointments = ({ appointment_page, all_services }) => {
  const { seo } = appointment_page;
  const a = useContext(Context)
  const { updateState } = a
  console.log("🚀 ~ file: appointments.js:16 ~ Appointments ~ a", a)


  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    updateState("123")
    // fetch("/api/appoinment", {
    //   method: "POST",
    //   headers: {
    //     Accept: "application/json, text/plain, */*",
    //     "Content-Type": "application/json",
    //   },
    //   body: JSON.stringify(data),
    // }).then((res) => {
    //   console.log("Response received");
    //   if (res.status === 200) {
    //     console.log("Response succeeded!");
    //     alert("Message Successfully send.!");
    //   }
    // });
  };


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
              style={{
                backgroundImage:
                  "url(assets/mildred-doctor-appointment-wait-times-ftr.jpeg)",
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

                <div className="col-md-4">
                    <div className="input-field">
                      <input
                        type="text"
                        placeholder="Oppaintment Date"
                        {...register("oppint_date", { required: true })}
                      />
                    </div>
                  </div>

                  <div className="col-md-4">
                    <div className="input-field">
                      <input
                        type="text"
                        placeholder="Your Full Name"
                        name="name"
                        {...register("name", { required: true })}
                      />
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div className="input-field">
                      <input
                        type="email"
                        placeholder="Email Address"
                        name="email"
                        {...register("email", { required: true })}
                      />
                    </div>
                  </div>

                  <div className="col-md-4">
                    <div className="input-field">
                      <input
                        type="text"
                        placeholder="Date of Birth"
                        {...register("date", { required: true })}
                      />
                    </div>
                  </div>

                  <div className="col-md-4">
                    <div className="input-field">
                      <input
                        type="number"
                        placeholder="Age"
                        name="age"
                        {...register("age", { required: true })}
                      />
                    </div>
                  </div>

                  <div className="col-md-4">
                    <div className="input-field">
                      <input
                        type="text"
                        placeholder="Address"
                        name="address"
                        {...register("address", { required: true })}
                      />
                    </div>
                  </div>

                  <div className="col-md-4">
                    <div className="input-field">
                      <input
                        type="text"
                        placeholder="City"
                        name="city"
                        {...register("city", { required: true })}
                      />
                    </div>
                  </div>

                  <div className="col-md-4">
                    <div className="input-field">
                      <input
                        type="text"
                        placeholder="State"
                        name="state"
                        {...register("state", { required: true })}
                      />
                    </div>
                  </div>

                  <div className="col-md-4">
                    <div className="input-field">
                      <input
                        type="text"
                        placeholder="ZIP Code"
                        name="zipcode"
                        {...register("zipcode", { required: true })}
                      />
                    </div>
                  </div>

                  <div className="col-md-4 select_value">
                    <select {...register("gender")}>
                      <option value="female">female</option>
                      <option value="male">male</option>
                      <option value="other">other</option>
                    </select>
                  </div>

                  <div className="col-md-4 select_value">
                    <select {...register("maritualstatus")}>
                      <option value="single">Single</option>
                      <option value="married">Married</option>
                    </select>
                  </div>

                  <div className="col-md-4">
                    <div className="input-field">
                      <input
                        type="text"
                        placeholder="Race"
                        name="race"
                        {...register("race", { required: true })}
                      />
                    </div>
                  </div>

                  <div className="col-md-4">
                    <div className="input-field">
                      <input
                        type="text"
                        placeholder="Occupation"
                        name="occupation"
                        {...register("occupation", { required: true })}
                      />
                    </div>
                  </div>

                  <div className="col-md-4">
                    <div className="input-field">
                      <input
                        type="tel"
                        placeholder="Cell Phone No"
                        name="phone"
                        {...register("phone", { required: true })}
                      />
                    </div>
                  </div>

                  <div className="col-md-4">
                    <div className="input-field">
                      <input
                        type="tel"
                        placeholder="Home Phone No"
                        name="phone"
                        {...register("phone", { required: true })}
                      />
                    </div>
                  </div>

                  <div className="col-md-4">
                    <div className="input-field">
                      <input
                        type="text"
                        placeholder="DL#"
                        name="dl"
                        {...register("dl", { required: true })}
                      />
                    </div>
                  </div>

                  <div className="col-md-4">
                    <div className="input-field">
                      <input
                        type="text"
                        placeholder="SSN"
                        name="ssn"
                        {...register("ssn", { required: true })}
                      />
                    </div>
                  </div>

                  <div className="col-md-4">
                    <div className="input-field">
                      <input
                        type="text"
                        placeholder="MEDICATIONS CURRENTLY TAKING"
                      />
                    </div>
                  </div>

                  <div className="col-12 input-field">
                    <div className="align-items-center d-flex flex-md-row flex-column ">
                      <span className="tagline">HAVE YOU HAD ANY SURGERIES IN THE PAST?</span>
                      <div className="d-flex">
                        <div className="form-check form-check-inline">
                          <input className="form-check-input" type="radio" name="surgery" id="surgery_no" value="option1" />
                          <label className="form-check-label" htmlFor="surgery_no">No</label>
                        </div>
                        <div className="form-check form-check-inline">
                          <input className="form-check-input" type="radio" name="surgery" id="surgery_yes" value="option2" />
                          <label className="form-check-label" htmlFor="surgery_yes">Yes</label>
                        </div>
                      </div>

                      <input type="text"
                        placeholder="Explain" disabled />
                    </div>

                  </div>

                  <div className="col-12 input-field">
                    <div className="align-items-center d-flex flex-md-row flex-column ">
                      <span className="tagline">ARE YOU ALLERGIC TO ANY MEDICATIONS?</span>
                      <div className="d-flex">
                        <div className="form-check form-check-inline">
                          <input className="form-check-input" type="radio" name="allergy" id="allergy_no" value="option1" />
                          <label className="form-check-label" htmlFor="allergy_no">No</label>
                        </div>
                        <div className="form-check form-check-inline">
                          <input className="form-check-input" type="radio" name="allergy" id="allergy_yes" value="option2" />
                          <label className="form-check-label" htmlFor="allergy_yes">Yes</label>
                        </div>
                      </div>

                      <input type="text"
                        placeholder="IF YES, WHICH ONES" disabled />
                    </div>

                  </div>

                  <div className="col-12 input-field">
                    <div className="align-items-center d-flex flex-md-row flex-column ">
                      <span className="tagline">DO YOU HAVE ANY ONGOING MEDICAL PROBLEMS?</span>
                      <div className="d-flex">
                        <div className="form-check form-check-inline">
                          <input className="form-check-input" type="radio" name="mediProblem" id="mediProblem_no" value="option1" />
                          <label className="form-check-label" htmlFor="mediProblem_no">No</label>
                        </div>
                        <div className="form-check form-check-inline">
                          <input className="form-check-input" type="radio" name="mediProblem" id="mediProblem_yes" value="option2" />
                          <label className="form-check-label" htmlFor="mediProblem_yes">Yes</label>
                        </div>
                      </div>

                      <input type="text"
                        placeholder="Explain" disabled />
                    </div>

                  </div>



                  <div className="col-12 input-field">
                    <div className="align-items-center d-flex flex-md-row flex-column ">
                      <span className="tagline">DO YOU SMOKE?</span>
                      <div className="d-flex">
                        <div className="form-check form-check-inline">
                          <input className="form-check-input" type="radio" name="smoking" id="smoking_no" value="option1" />
                          <label className="form-check-label" htmlFor="smoking_no">No</label>
                        </div>
                        <div className="form-check form-check-inline">
                          <input className="form-check-input" type="radio" name="smoking" id="smoking_yes" value="option2" />
                          <label className="form-check-label" htmlFor="smoking_yes">Yes</label>
                        </div>
                      </div>

                      <input type="text"
                        placeholder="HOW MUCH" disabled />
                    </div>

                  </div>

                  <div className="col-12 input-field">
                    <div className="align-items-center d-flex flex-md-row flex-column ">
                      <span className="tagline">CHEW TOBACCO?</span>
                      <div className="d-flex">
                        <div className="form-check form-check-inline">
                          <input className="form-check-input" type="radio" name="tabacco" id="tabacco_no" value="option1" />
                          <label className="form-check-label" htmlFor="tabacco_no">No</label>
                        </div>
                        <div className="form-check form-check-inline">
                          <input className="form-check-input" type="radio" name="tabacco" id="tabacco_yes" value="option2" />
                          <label className="form-check-label" htmlFor="tabacco_yes">Yes</label>
                        </div>
                      </div>

                      <input type="text"
                        placeholder="HOW MUCH" disabled />
                    </div>

                  </div>

                  <div className="col-12 input-field">
                    <div className="align-items-center d-flex flex-md-row flex-column ">
                      <span className="tagline">DO YOU DRINK ALCOHOL?</span>
                      <div className="d-flex">
                        <div className="form-check form-check-inline">
                          <input className="form-check-input" type="radio" name="drink" id="drink_no" value="option1" />
                          <label className="form-check-label" htmlFor="drink_no">No</label>
                        </div>
                        <div className="form-check form-check-inline">
                          <input className="form-check-input" type="radio" name="drink" id="drink_yes" value="option2" />
                          <label className="form-check-label" htmlFor="drink_yes">Yes</label>
                        </div>
                      </div>

                      <input type="text"
                        placeholder="HOW MUCH" disabled />
                    </div>

                  </div>

                  <div className="col-12 input-field">
                    <div className="align-items-center d-flex flex-md-row flex-column ">
                      <span className="tagline">RECREATIONAL DRUGS?</span>
                      <div className="d-flex">
                        <div className="form-check form-check-inline">
                          <input className="form-check-input" type="radio" name="drugs" id="drugs_no" value="option1" />
                          <label className="form-check-label" htmlFor="drugs_no">No</label>
                        </div>
                        <div className="form-check form-check-inline">
                          <input className="form-check-input" type="radio" name="drugs" id="drugs_yes" value="option2" />
                          <label className="form-check-label" htmlFor="drugs_yes">Yes</label>
                        </div>
                      </div>

                      <input type="text"
                        placeholder="WHICH ONES" disabled />
                    </div>

                  </div>

                  <div className="col-md-6">
                    <div className="input-field">
                      <input
                        type="text"
                        placeholder="Your Pharmacy Name"
                      />
                    </div>
                  </div>

                  <div className="col-md-6">
                    <div className="input-field">
                      <input
                        type="tel"
                        placeholder="Your Pharmacy No"
                        name="phone"
                        {...register("phone", { required: true })}
                      />
                    </div>
                  </div>

                  <div className="col-md-6">
                    <div className="input-field">
                      <input
                        type="text"
                        placeholder="Your Pharmacy Address"
                      />
                    </div>
                  </div>

                  <div className="col-md-6">
                    <div className="input-field">
                      <input
                        type="text"
                        placeholder="Explain you visit for today"
                      />
                    </div>
                  </div>

                  <div className="col-12 input-field">
                    <span className="tagline">EMERGENCY CONTACT:</span>
                  </div>

                  <div className="col-md-4">
                    <div className="input-field">
                      <input
                        type="text"
                        placeholder="First Name"
                        name="rfirst_name"
                        {...register("rfirst_name", { required: true })}
                      />
                    </div>
                  </div>

                  <div className="col-md-4">
                    <div className="input-field">
                      <input
                        type="text"
                        placeholder="Last Name"
                        name="rlast_name"
                        {...register("rlast_name", { required: true })}
                      />
                    </div>
                  </div>

                  <div className="col-md-4">
                    <div className="input-field">
                      <input
                        type="tel"
                        placeholder="Phone"
                        name="rphone"
                        {...register("rphone", { required: true })}
                      />
                    </div>
                  </div>


                  <div className="col-12 input-field">
                    <div className="chkB0x">
                      <input className="" type="checkbox" id="authorize" value="option1" />
                      <label className="" htmlFor="authorize">
                        I DO NOT AUTHORIZE SWUCFP TO DISCLOSE ANY INFORMATION.
                      </label>
                    </div>
                    <div className="chkB0x">
                      <input className="" type="checkbox" id="authorize2" value="option2" />
                      <label className="" htmlFor="authorize2">
                        I herby authorize SWUCFP to use and disclose health information to the following person:
                      </label>
                    </div>
                  </div>


                  <div className="col-md-4">
                    <div className="input-field">
                      <input
                        type="text"
                        placeholder="Name"
                        name="rname"
                        {...register("rname", { required: true })}
                      />
                    </div>
                  </div>

                  <div className="col-md-4">
                    <div className="input-field">
                      <input
                        type="text"
                        placeholder="Relationship"
                        name="relation"
                        {...register("relation", { required: true })}
                      />
                    </div>
                  </div>

                  <div className="col-md-4">
                    <div className="input-field">
                      <input
                        type="tel"
                        placeholder="Phone"
                        name="rphone"
                        {...register("rphone", { required: true })}
                      />
                    </div>
                  </div>


                  <div className="col-12">
                    <div className="input-field">
                      <input
                        type="text"
                        placeholder="How did you hear about us?"
                        name="hear_about_us"
                        {...register("hear_about_us", { required: true })}
                      />
                    </div>
                  </div>



                </div>
                <div>
                  <Signature />
                </div>
                <div className="col-md-6">
                  <div className="input-field">
                    <button
                      type="submit"
                      className="template-btn"
                      onClick={handleSubmit(onSubmit)}
                    >
                      Make an Appointment <i className="far fa-plus"></i>
                    </button>
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
