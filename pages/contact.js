import React from "react";
import { useForm } from "react-hook-form";
import { sanityClient } from "../lib/studio";
import PageBanner from "../src/components/PageBanner";
import Layouts from "../src/layouts/Layouts";
import Script from 'next/script'

const Contact = ({ services }) => {


  const { register, handleSubmit, watch, formState: { errors } } = useForm();
  const onSubmit = data => {
    // const config = {
    //   Host: "smtp.elasticemail.com",
    //   Username: "gillanix007@gmail.com",
    //   Password: "93B321429C0FC634776FF154C0E0172F5A7A",
    //   Port: 2525,
    //   SecureToken: 'ef957250-43e3-4a05-bc45-f4e95c33b573', // for secure connection
    //   To: `mufaqar@gmail.com, ${data.email}`,
    //   From: "gillanix007@gmail.com",
    //   Subject: "This is the subject",
    //   Body: `<h1>${data.email}<h1>`,
    //   Attachments : [
    //     {
    //       name : "smtpjs.png",
    //       path:"https://networkprogramming.files.wordpress.com/2017/11/smtpjs.png"
    //     }]
    // }

    // Email.send(config).then(
    //   message => alert(message)
    // );
    fetch('/api/contact', {
      method: 'POST',
      headers: {
        'Accept': 'application/json, text/plain, */*',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    })

  };

  return (
    <Layouts footer={2} services={services}>
      <script src="https://smtpjs.com/v3/smtp.js" />  {/* smtp js script */}

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
                      5900 Chimney Rock, Suite X Houston,<br /> Texas 77081
                    </p>
                  </div>
                  <div className="single-contact-info">
                    <h3 className="info-title">
                      <i className="fal fa-coffee" /> Get In Touch
                    </h3>
                    <ul className="contect_info">
                      <li>
                        <span>Phone Number</span>
                        <a className="text-white" href="tel:+012020200">(346) 341-7573</a>
                      </li>
                      <li>
                        <span>Email Address</span>
                        <a className="text-white" href="mailto:support@gmail.com">swurgentcare@outlook.com</a>
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
                    <p>
                      Sit amet consectetur adipiscing elit sed do eiusmod tempor
                      incididunt ut labore
                    </p>
                    <p className="social-icon">
                      <a href="#" className="p-2 rounded social_icon " >
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
      </section>
      {/*====== Contact Info Section End ======*/}
      {/*====== Contact Form Start ======*/}
      <section className="contact-form-area">
        <div className="contact-map">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d920898.2645108468!2d-96.82088754803496!3d29.30509874673538!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8640e1326d9c9c9b%3A0x647e15d838d4da0a!2s400%20Promenade%20Wy%2C%20Sugar%20Land%2C%20TX%2077478%2C%20USA!5e0!3m2!1sen!2s!4v1667198890592!5m2!1sen!2s"
            loading="lazy"
            zoom="15"
          />
        </div>
        <div className="section-gap">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-10">
                <div className="section-heading mb-60 text-center">
                  <span className="tagline">{`We're Ready To Help You`}</span>
                  <h2 className="title">Leave a Message</h2>
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
                        {errors.name && <span className="text-red-600">This field is required</span>}
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
                        {errors.email && <span className="text-red-600">This field is required</span>}
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
                        <button className="template-btn" onClick={handleSubmit(onSubmit)}>
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
  );
};
export default Contact;


export async function getStaticProps() {
  const services = await sanityClient.fetch(`*[_type == "services"]{
    title,
    slug,
  }`);

  return {
    props: {
      services,
    }
  };
}