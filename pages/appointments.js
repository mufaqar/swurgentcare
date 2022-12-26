import { gql } from "@apollo/client";
import { useFormik } from "formik";
import Head from "next/head";
import React, { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { Context } from "../context/signatureContext";
import { client } from "../lib/client";
import { appointment, GetAllServices } from "../lib/queries";
import PageBanner from "../src/components/PageBanner";
import Signature from "../src/components/signature";
import Layouts from "../src/layouts/Layouts";
import { signUpschema } from "../src/schemas/form";





const initialValues = {
  oppintment_date: '',
  name: '',
  email: '',
  birth_date: '',
  age: '',
  address: '',
  city: '',
  state: '',
  zipcode: '',
  gender: '',
  maritual_status: '',
  race: '',
  occupation: '',
  phone: '',
  home_phone: '',
  dl: '',
  ssn: '',
  medications: '',
  surgery: '',
  surgery_explain: '',
  allergy: '',
  allergy_explain: '',
  mediProblem: '',
  mediProblem_explain: '',
  smoking: '',
  smoking_explain: '',
  tabacco: '',
  tabacco_explain: '',
  drink: '',
  drink_explain: '',
  drugs: '',
  drugs_explain: '',
  pharmacy_name: '',
  pharmacy_phone: '',
  pharmacy_address: '',
  visit_for: '',
  rfirst_name: '',
  rlast_name: '',
  rphone: '',
  rname: '',
  relation: '',
  rphone2: '',
  about_us: '',

}

const Appointments = ({ appointment_page, all_services }) => {
  const { seo } = appointment_page;
  // const a = useContext(Context)
  // const { updateState } = a
  // //console.log("🚀 ~ file: appointments.js:16 ~ Appointments ~ a", a)


  // const {
  //   register,
  //   handleSubmit,
  //   formState: { errors },
  // } = useForm();

  // const onSubmit = (data) => {
  //   updateState("123")
  //   // fetch("/api/appoinment", {
  //   //   method: "POST",
  //   //   headers: {
  //   //     Accept: "application/json, text/plain, */*",
  //   //     "Content-Type": "application/json",
  //   //   },
  //   //   body: JSON.stringify(data),
  //   // }).then((res) => {
  //   //   console.log("Response received");
  //   //   if (res.status === 200) {
  //   //     console.log("Response succeeded!");
  //   //     alert("Message Successfully send.!");
  //   //   }
  //   // });
  // };

  const { values, errors, touched, handleBlur, handleChange, handleSubmit } = useFormik({
    initialValues,
    validationSchema: signUpschema,
    onSubmit: (values) => {
      console.log(values)
    }
  })

  console.log(errors)


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
              <form onSubmit={handleSubmit} action="#">
                <div className="row">

                  <div className="col-md-4">
                    <div className="input-field">
                      <input
                        type="text"
                        placeholder="Oppaintment Date"
                        name="oppintment_date"
                        value={values.oppintment_date}
                        onChange={handleChange}
                        onBlur={handleBlur}
                      />
                      {errors.oppintment_date && touched.oppintment_date ? (
                        <p>{errors.oppintment_date}</p>
                        ) : null }
                    </div>
                  </div>

                  <div className="col-md-4">
                    <div className="input-field">
                      <input
                        type="text"
                        placeholder="Your Full Name"
                        name="name"
                        value={values.name}
                        onChange={handleChange}
                        onBlur={handleBlur}
                      />
                      {errors.name && touched.name ? (
                        <p>{errors.name}</p>
                        ) : null }
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div className="input-field">
                      <input
                        type="email"
                        placeholder="Email Address"
                        name="email"
                        value={values.email}
                        onChange={handleChange}
                        onBlur={handleBlur}
                      />
                       {errors.email && touched.email ? (
                        <p>{errors.email}</p>
                        ) : null }
                    </div>
                  </div>

                  <div className="col-md-4">
                    <div className="input-field">
                      <input
                        type="text"
                        placeholder="Date of Birth"
                        name="birth_date"
                        value={values.birth_date}
                        onChange={handleChange}
                        onBlur={handleBlur}
                      />
                       {errors.birth_date && touched.birth_date ? (
                        <p>{errors.birth_date}</p>
                        ) : null }
                    </div>
                  </div>

                  <div className="col-md-4">
                    <div className="input-field">
                      <input
                        type="number"
                        placeholder="Age"
                        name="age"
                        value={values.age}
                        onChange={handleChange}
                        onBlur={handleBlur}
                      />
                      {errors.age && touched.age ? (
                        <p>{errors.age}</p>
                        ) : null }
                    </div>
                  </div>

                  <div className="col-md-4">
                    <div className="input-field">
                      <input
                        type="text"
                        placeholder="Address"
                        name="address"
                        value={values.address}
                        onChange={handleChange}
                        onBlur={handleBlur}
                      />
                       {errors.address && touched.address ? (
                        <p>{errors.address}</p>
                        ) : null }
                    </div>
                  </div>

                  <div className="col-md-4">
                    <div className="input-field">
                      <input
                        type="text"
                        placeholder="City"
                        name="city"
                        value={values.city}
                        onChange={handleChange}
                        onBlur={handleBlur}
                      />
                       {errors.city && touched.city ? (
                        <p>{errors.city}</p>
                        ) : null }
                    </div>
                  </div>

                  <div className="col-md-4">
                    <div className="input-field">
                      <input
                        type="text"
                        placeholder="State"
                        name="state"
                        value={values.state}
                        onChange={handleChange}
                        onBlur={handleBlur}
                      />
                      {errors.state && touched.state ? (
                        <p>{errors.state}</p>
                        ) : null }
                    </div>
                  </div>

                  <div className="col-md-4">
                    <div className="input-field">
                      <input
                        type="text"
                        placeholder="ZIP Code"
                        name="zipcode"
                        value={values.zipcode}
                        onChange={handleChange}
                        onBlur={handleBlur}
                      />
                      {errors.zipcode && touched.zipcode ? (
                        <p>{errors.zipcode}</p>
                        ) : null }
                    </div>
                  </div>

                  <div className="col-md-4 select_value">
                    <select name="gender"
                      value={values.gender}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      >
                      <option value="female" >female</option>
                      <option value="male">male</option>
                      <option value="other">other</option>
                    </select>
                  </div>

                  <div className="col-md-4 select_value">
                    <select name="maritual_status"
                      value={values.maritual_status}
                      onChange={handleChange}
                      onBlur={handleBlur} >
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
                        value={values.race}
                        onChange={handleChange}
                        onBlur={handleBlur}
                      />
                       {errors.race && touched.race ? (
                        <p>{errors.race}</p>
                        ) : null }
                    </div>
                  </div>

                  <div className="col-md-4">
                    <div className="input-field">
                      <input
                        type="text"
                        placeholder="Occupation"
                        name="occupation"
                        value={values.occupation}
                        onChange={handleChange}
                        onBlur={handleBlur}
                      />
                      {errors.occupation && touched.occupation ? (
                        <p>{errors.occupation}</p>
                        ) : null }
                    </div>
                  </div>

                  <div className="col-md-4">
                    <div className="input-field">
                      <input
                        type="tel"
                        placeholder="Cell Phone No"
                        name="phone"
                        value={values.phone}
                        onChange={handleChange}
                        onBlur={handleBlur}
                      />
                      {errors.phone && touched.phone ? (
                        <p>{errors.phone}</p>
                        ) : null }
                    </div>
                  </div>

                  <div className="col-md-4">
                    <div className="input-field">
                      <input
                        type="tel"
                        placeholder="Home Phone No"
                        name="home_phone"
                        value={values.home_phone}
                        onChange={handleChange}
                        onBlur={handleBlur}
                      />
                      {errors.home_phone && touched.home_phone ? (
                        <p>{errors.home_phone}</p>
                        ) : null }
                    </div>
                  </div>

                  <div className="col-md-4">
                    <div className="input-field">
                      <input
                        type="text"
                        placeholder="DL#"
                        name="dl"
                        value={values.dl}
                        onChange={handleChange}
                        onBlur={handleBlur}
                      />
                       {errors.dl && touched.dl ? (
                        <p>{errors.dl}</p>
                        ) : null }
                    </div>
                  </div>

                  <div className="col-md-4">
                    <div className="input-field">
                      <input
                        type="text"
                        placeholder="SSN"
                        name="ssn"
                        value={values.ssn}
                        onChange={handleChange}
                        onBlur={handleBlur}
                      />
                      {errors.ssn && touched.ssn ? (
                        <p>{errors.ssn}</p>
                        ) : null }
                    </div>
                  </div>

                  <div className="col-md-4">
                    <div className="input-field">
                      <input
                        type="text"
                        placeholder="MEDICATIONS CURRENTLY TAKING"
                        name="medications"
                        value={values.medications}
                        onChange={handleChange}
                        onBlur={handleBlur}
                      />
                      {errors.medications && touched.medications ? (
                        <p>{errors.medications}</p>
                        ) : null }
                    </div>
                  </div>

                  <div className="col-12 input-field">
                    <div className="align-items-center d-flex flex-md-row flex-column ">
                      <span className="tagline">HAVE YOU HAD ANY SURGERIES IN THE PAST?</span>
                      <div className="d-flex">
                        <div className="form-check form-check-inline">
                          <input className="form-check-input" type="radio" name="surgery" id="surgery_no" value="no"
                            onChange={handleChange}
                            defaultChecked={values.surgery === "no"} />
                          <label className="form-check-label" htmlFor="surgery_no">No</label>
                        </div>
                        <div className="form-check form-check-inline">
                          <input className="form-check-input" type="radio" name="surgery" id="surgery_yes" value="yes"
                            onChange={handleChange}
                            defaultChecked={values.surgery === "yes"} />
                          <label className="form-check-label" htmlFor="surgery_yes">Yes</label>
                        </div>
                      </div>

                      <input type="text"
                        name="surgery_explain"
                        placeholder="Explain" disabled />
                    </div>

                  </div>

                  <div className="col-12 input-field">
                    <div className="align-items-center d-flex flex-md-row flex-column ">
                      <span className="tagline">ARE YOU ALLERGIC TO ANY MEDICATIONS?</span>
                      <div className="d-flex">
                        <div className="form-check form-check-inline">
                          <input className="form-check-input" type="radio" name="allergy" id="allergy_no" value="no"
                            onChange={handleChange}
                            defaultChecked={values.allergy === "no"} />
                          <label className="form-check-label" htmlFor="allergy_no">No</label>
                        </div>
                        <div className="form-check form-check-inline">
                          <input className="form-check-input" type="radio" name="allergy" id="allergy_yes" value="yes"
                            onChange={handleChange}
                            defaultChecked={values.allergy === "yes"} />
                          <label className="form-check-label" htmlFor="allergy_yes">Yes</label>
                        </div>
                      </div>

                      <input type="text"
                        name="allergy_explain"
                        placeholder="IF YES, WHICH ONES" disabled />
                    </div>

                  </div>

                  <div className="col-12 input-field">
                    <div className="align-items-center d-flex flex-md-row flex-column ">
                      <span className="tagline">DO YOU HAVE ANY ONGOING MEDICAL PROBLEMS?</span>
                      <div className="d-flex">
                        <div className="form-check form-check-inline">
                          <input className="form-check-input" type="radio" name="mediProblem" id="mediProblem_no" value="no"
                            onChange={handleChange}
                            defaultChecked={values.mediProblem === "no"} />
                          <label className="form-check-label" htmlFor="mediProblem_no">No</label>
                        </div>
                        <div className="form-check form-check-inline">
                          <input className="form-check-input" type="radio" name="mediProblem" id="mediProblem_yes" value="yes"
                            onChange={handleChange}
                            defaultChecked={values.mediProblem === "yes"} />
                          <label className="form-check-label" htmlFor="mediProblem_yes">Yes</label>
                        </div>
                      </div>

                      <input type="text"
                        name="mediProblem_explain"
                        placeholder="Explain" disabled />
                    </div>

                  </div>



                  <div className="col-12 input-field">
                    <div className="align-items-center d-flex flex-md-row flex-column ">
                      <span className="tagline">DO YOU SMOKE?</span>
                      <div className="d-flex">
                        <div className="form-check form-check-inline">
                          <input className="form-check-input" type="radio" name="smoking" id="smoking_no" value="no"
                            onChange={handleChange}
                            defaultChecked={values.smoking === "no"} />
                          <label className="form-check-label" htmlFor="smoking_no">No</label>
                        </div>
                        <div className="form-check form-check-inline">
                          <input className="form-check-input" type="radio" name="smoking" id="smoking_yes" value="yes"
                            onChange={handleChange}
                            defaultChecked={values.smoking === "yes"} />
                          <label className="form-check-label" htmlFor="smoking_yes">Yes</label>
                        </div>
                      </div>

                      <input type="text"
                        name="smoking_explain"
                        placeholder="HOW MUCH" disabled />
                    </div>

                  </div>

                  <div className="col-12 input-field">
                    <div className="align-items-center d-flex flex-md-row flex-column ">
                      <span className="tagline">CHEW TOBACCO?</span>
                      <div className="d-flex">
                        <div className="form-check form-check-inline">
                          <input className="form-check-input" type="radio" name="tabacco" id="tabacco_no" value="no"
                            onChange={handleChange}
                            defaultChecked={values.tabacco === "no"} />
                          <label className="form-check-label" htmlFor="tabacco_no">No</label>
                        </div>
                        <div className="form-check form-check-inline">
                          <input className="form-check-input" type="radio" name="tabacco" id="tabacco_yes" value="yes"
                            onChange={handleChange}
                            defaultChecked={values.tabacco === "yes"} />
                          <label className="form-check-label" htmlFor="tabacco_yes">Yes</label>
                        </div>
                      </div>

                      <input type="text"
                        name="tabacco_explain"
                        placeholder="HOW MUCH" disabled />
                    </div>

                  </div>

                  <div className="col-12 input-field">
                    <div className="align-items-center d-flex flex-md-row flex-column ">
                      <span className="tagline">DO YOU DRINK ALCOHOL?</span>
                      <div className="d-flex">
                        <div className="form-check form-check-inline">
                          <input className="form-check-input" type="radio" name="drink" id="drink_no" value="no"
                            onChange={handleChange}
                            defaultChecked={values.drink === "no"} />
                          <label className="form-check-label" htmlFor="drink_no">No</label>
                        </div>
                        <div className="form-check form-check-inline">
                          <input className="form-check-input" type="radio" name="drink" id="drink_yes" value="yes"
                            onChange={handleChange}
                            defaultChecked={values.drink === "yes"} />
                          <label className="form-check-label" htmlFor="drink_yes">Yes</label>
                        </div>
                      </div>

                      <input type="text"
                        name="drink_explain"
                        placeholder="HOW MUCH" disabled />
                    </div>

                  </div>

                  <div className="col-12 input-field">
                    <div className="align-items-center d-flex flex-md-row flex-column ">
                      <span className="tagline">RECREATIONAL DRUGS?</span>
                      <div className="d-flex">
                        <div className="form-check form-check-inline">
                          <input className="form-check-input" type="radio" name="drugs" id="drugs_no" value="no"
                            onChange={handleChange}
                            defaultChecked={values.drugs === "no"} />
                          <label className="form-check-label" htmlFor="drugs_no">No</label>
                        </div>
                        <div className="form-check form-check-inline">
                          <input className="form-check-input" type="radio" name="drugs" id="drugs_yes" value="yes"
                            onChange={handleChange}
                            defaultChecked={values.drugs === "yes"} />
                          <label className="form-check-label" htmlFor="drugs_yes">Yes</label>
                        </div>
                      </div>

                      <input type="text"
                        name="drugs_explain"
                        placeholder="WHICH ONES" disabled />
                    </div>

                  </div>

                  <div className="col-md-6">
                    <div className="input-field">
                      <input
                        type="text"
                        placeholder="Your Pharmacy Name"
                        name="pharmacy_name"
                        value={values.pharmacy_name}
                        onChange={handleChange}
                        onBlur={handleBlur}
                      />
                    </div>
                  </div>

                  <div className="col-md-6">
                    <div className="input-field">
                      <input
                        type="tel"
                        placeholder="Your Pharmacy No"
                        name="pharmacy_phone"
                        value={values.pharmacy_phone}
                        onChange={handleChange}
                        onBlur={handleBlur}
                      />
                    </div>
                  </div>

                  <div className="col-md-6">
                    <div className="input-field">
                      <input
                        type="text"
                        placeholder="Your Pharmacy Address"
                        name="pharmacy_address"
                        value={values.pharmacy_address}
                        onChange={handleChange}
                        onBlur={handleBlur}
                      />
                    </div>
                  </div>

                  <div className="col-md-6">
                    <div className="input-field">
                      <input
                        type="text"
                        placeholder="Explain you visit for today"
                        name="visit_for"
                        value={values.visit_for}
                        onChange={handleChange}
                        onBlur={handleBlur}
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
                        value={values.rfirst_name}
                        onChange={handleChange}
                        onBlur={handleBlur}
                      />
                    </div>
                  </div>

                  <div className="col-md-4">
                    <div className="input-field">
                      <input
                        type="text"
                        placeholder="Last Name"
                        name="rlast_name"
                        value={values.rlast_name}
                        onChange={handleChange}
                        onBlur={handleBlur}
                      />
                    </div>
                  </div>

                  <div className="col-md-4">
                    <div className="input-field">
                      <input
                        type="tel"
                        placeholder="Phone"
                        name="rphone"
                        value={values.rphone}
                        onChange={handleChange}
                        onBlur={handleBlur}
                      />
                    </div>
                  </div>


                  <div className="col-12 input-field">
                    <div className="chkB0x">
                      <input className="" type="checkbox" id="authorize" name="authorize"
                        value={values.authorize}
                        onChange={handleChange}
                        onBlur={handleBlur}
                      />
                      <label className="" htmlFor="authorize">
                        I DO NOT AUTHORIZE SWUCFP TO DISCLOSE ANY INFORMATION.
                      </label>
                    </div>
                    <div className="chkB0x">
                      <input className="" type="checkbox" id="authorize2" name="authorize2"
                        value={values.authorize2}
                        onChange={handleChange}
                        onBlur={handleBlur}
                      />
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
                        value={values.rname}
                        onChange={handleChange}
                        onBlur={handleBlur}
                      />
                    </div>
                  </div>

                  <div className="col-md-4">
                    <div className="input-field">
                      <input
                        type="text"
                        placeholder="Relationship"
                        name="relation"
                        value={values.relation}
                        onChange={handleChange}
                        onBlur={handleBlur}
                      />
                    </div>
                  </div>

                  <div className="col-md-4">
                    <div className="input-field">
                      <input
                        type="tel"
                        placeholder="Phone"
                        name="rphone2"
                        value={values.rphone2}
                        onChange={handleChange}
                        onBlur={handleBlur}
                      />
                    </div>
                  </div>


                  <div className="col-12">
                    <div className="input-field">
                      <input
                        type="text"
                        placeholder="How did you hear about us?"
                        name="about_us"
                        value={values.about_us}
                        onChange={handleChange}
                        onBlur={handleBlur}
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
                    //onClick={handleSubmit(onSubmit)}
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
