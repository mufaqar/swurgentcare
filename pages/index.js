import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";
import { sanityClient } from "../lib/studio";
import HeroBanner from "../src/components/HeroBanner";
import VideoPopup from "../src/components/VideoPopup";
import Layouts from "../src/layouts/Layouts";
import Testimonial from "../src/components/testimonial";
import Image from "next/image";
import OwnImage from "../src/components/OwnImage";
import Appoinment from "../src/components/appoinment";
import { client } from "../lib/client";
import { gql } from '@apollo/client';
import { GetAllServices } from "../lib/queries";

{
  /* <QUERY> */
}

const testimonial = `*[_type == "testimonial"]{
  review,
  name,
  designation,
  profile{
    asset->{
      url
    },
  },
}`;
// </QUERY>

const Index = ({ testimonials, all_services }) => {
  
  const [video, setVideo] = useState(false);
  const router = useRouter();

  const partner = [
    {
      image: "AETNA-LOGO.png",
    },
    {
      image: "bcbs-logo.jpg",
    },
    {
      image: "We-Accept_wellcare-health-plans-logo-1200x481.png",
    },
    {
      image: "We_Accept_cigna_Health_Plans_Logo_Logo.png",
    },
    {
      image: "We_Accept_Friday_Health_Plans_Logo_Logo.jpg",
    },
    {
      image: "We_Accept_medicare_Health_Plans_Logo_Logo.png",
    },
    {
      image: "We_Accept_Tricare_Health_Plans_Logo_Logo.jpg",
    },
    {
      image: "We_Accept_united health care_Health_Plans_Logo_Logo.png",
    },
    {
      image: "We-Accept Community-Health-Choice.png",
    },
    {
      image: "We-Accept_wellcare-health-plans-logo-1200x481.png",
    },
  ];

  return (
    <Layouts headerTopbar footer={2} noNewsletters services={all_services}>
      {video && <VideoPopup close={setVideo} />}
      <>
        {/*====== Hero Slider Start ======*/}

        <HeroBanner />
        <Appoinment />
        {/*====== Hero Slider End ======*/}
        {/*====== About Section Start ======*/}
        <section className="about-section section-gap">
          <div className="container">
            <div className="row align-items-center justify-content-center">
              <div className="col-md-6">
                <div className=" mb-xl-50">
                  <div
                    className="image-two wow fadeInDown _image"
                    data-wow-delay="0.4s"
                  >
                    <OwnImage path="/assets/family.jpg" radius="18px" />
                  </div>
                </div>
              </div>
              <div className="col-md-6">
                <div className="about-text">
                  <div className="section-heading mb-30">
                    {/* <span className="tagline">About Swurgentcare</span> */}
                    <h2 className="title">
                      Southwest Urgent Care Bringing Forth Quality{" "}
                      <span className="last2">On-Demand</span> Care
                    </h2>
                  </div>
                  <p>
                    Southwest Urgent care providing care for patients of all
                    ages. From infants to older adults, optimal medical care for
                    your whole family. If you are in need of medical assistance
                    regarding illness or injury which is not life threatening,
                    our physicians are capable of treating your sickness in the
                    most professional manner. Southwest Urgent Care provides a
                    wide range of services to help patients get well faster.
                  </p>

                  <a
                    className="template-btn sas mt-4 button"
                    data-wow-delay="0.5s"
                    href="#services"
                  >
                    See All Services <i className="far fa-plus" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/*====== About Section End ======*/}

        {/*====== Pediatric Care Start ======*/}
        <section className="about-section Pediatric section-gap ">
          <div className="container">
            <div className="row align-items-center justify-content-center">
              <div className="col-md-6">
                <div className="about-text">
                  <div className="section-heading mb-30">
                    {/* <span className="tagline">Pediatric Care</span> */}
                    <h2 className="title">
                      Are you looking for{" "}
                      <span className="last"> quality pediatric care?</span>{" "}
                      Well, your search ends at Southwest Urgent Care!
                    </h2>
                  </div>
                  <p>
                    Our Pediatric services are backed by outstanding expertise
                    and advanced diagnostic services to ensure effective
                    treatment and a streamlned care experience for kids.
                    Available 7 days a week, so you and your child don’t have to
                    spend hours in an emergency room. Southwest Urgent Care
                    provides a wide range of services for your Child's health.
                  </p>

                  <button
                    onClick={() => router.push("/appointments")}
                    className="template-btn sas mt-4 button btn_padding"
                    data-wow-delay="0.5s"
                  >
                    Learn More About Our Pediatric Care{" "}
                    <i className="far fa-plus" />
                  </button>
                </div>
              </div>
              <div className="col-md-6">
                {/* <div className=" mb-xl-50">

                  <div
                    className="image-two wow fadeInDown _image"
                    data-wow-delay="0.4s"
                  >
                    <OwnImage path="/assets/PEDIATRIC-CARE.jpg" radius="18px" />
                  </div>

                </div> */}
              </div>
            </div>
          </div>
        </section>
        {/*====== Pediatric Care End ======*/}

        {/*====== Virtual Urgent Care Start ======*/}
        <section className="about-section  section-gap ">
          <div className="container">
            <div className="row align-items-center justify-content-center">
              <div className="col-md-6">
                <div className=" mb-xl-50">
                  <div
                    className="image-two wow fadeInDown "
                    data-wow-delay="0.4s"
                  >
                    <OwnImage
                      path="/assets/TELEMEDICINE-(Without-Green-Background).jpg"
                      radius="0px"
                    />
                  </div>
                </div>
              </div>
              <div className="col-md-6">
                <div className="about-text">
                  <div className="section-heading mb-30">
                    {/* <span className="tagline">Virtual Urgent Care</span> */}
                    <h2 className="title">
                      <span className="last">Virtual</span> Urgent Care
                    </h2>
                    <div className="mt-3">
                      <div className="d-flex item-center">
                        <span className="mr-2 plus_sign">+</span>
                        <h6 className="pt-2">
                          Get face to face consultation from the comfort of your
                          home.
                        </h6>
                      </div>
                      <div className="d-flex item-center">
                        <span className="mr-2 plus_sign">+</span>
                        <h6 className="pt-2">
                          See a healthcare provider from anywhere at any time.
                        </h6>
                      </div>
                      <div className="d-flex item-center">
                        <span className="mr-2 plus_sign">+</span>
                        <h6 className="pt-2">
                          Real time conversation with your provider
                        </h6>
                      </div>
                      <div className="d-flex item-center">
                        <span className="mr-2 plus_sign">+</span>
                        <h6 className="pt-2">We Accept Most Insurance</h6>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/*====== Virtual Urgent Care End ======*/}

        {/*====== Services ======*/}
        <section id="services" className="section-gap services bg_">
          <div className="container mx-auto">
            <h2 className="title text-center">
              <span className="last">S</span>ervices
            </h2>
            <div className="row mt-5">
              {all_services.map((service, index) => (
                <Link href={`${service?.slug}`} key={index}>
                  <div className="col-md-3 col-6 service_card">
                    <img
                      src={service.servicesFields?.icon?.mediaItemUrl}
                      alt={service.title}
                      className="services_icon"
                    />
                    <h6 className="text-center ">{service.title}</h6>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
        {/*====== Services End ======*/}

        {/*====== esting or COVID-19 PCR Start ======*/}
        <section className="about-section section-gap covid19">
          <div className="container">
            <div className="row align-items-center justify-content-center">
              <div className="col-md-7">
                <div className="about-text">
                  <div className="section-heading mb-30">
                    <h2 className="title">
                      <span className="last" style={{ fontSize: "42px" }}>
                        Are you not feeling well ?
                      </span>
                      <br /> We offer rapid{" "}
                      <span className="last">COVID-19</span> antigen testing or{" "}
                      <span className="last">COVID-19</span> PCR testing for
                      your travel requirement 7 days a week. Call today to book
                      an appointment, set up a telemedicine appointment or just
                      simply walk-in at our urgent care.
                    </h2>
                    <button>See all COVID-19 Initiatives</button>
                  </div>
                </div>
              </div>
              <div className="col-md-5">
                <div className=" mb-xl-50">
                  <div
                    className="image-two wow fadeInDown"
                    data-wow-delay="0.4s"
                  >
                    {/* <img src="assets/covid-testing.jpg" alt="Image" style={{ borderRadius: '18px' }} /> */}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/*====== esting or COVID-19 PCR End ======*/}

        {/*====== Partners Section Start ======*/}
        <section className="partner-section section-gap">
          <div className="container">
            <div className="section-heading text-center mb-50">
              <h2 className="title">
                We accept most <span className="last">insurance plan </span>
              </h2>
              <span className="span tagline">
                Traditional Medicare & most commercial and local marketplace
                plans are accepted.
              </span>
            </div>
            <div className="partner-logo-grid">
              {partner.map((item, i) => (
                <div className="single-partner p-3" key={i}>
                  <a href="#">
                    <img src={`assets/partner/${item.image}`} alt="Partner" />
                  </a>
                </div>
              ))}
            </div>
          </div>
        </section>
        {/*====== Partners Section End ======*/}

        {/*====== Testimonials Section Start ======*/}

        <Testimonial testimonials={testimonials} />
        {/*====== Testimonials Section End ======*/}

        {/* contact us  */}
        <section className="container landind_contact_wrapper  mx-auto section-gap">
          <div className="row">
            <div className="landing_contact ">
              <h1 className="title">Contact Us</h1>
              <p className="mt-3">
                We believe that the experience you receive at Southwest Urgent
                Care Center matters. We listen to your concerns and help you
                resolve them in the best possible manner.
              </p>
              <div className="single-contact-info mt-4">
                <h3 className="info-title mb-2">
                  <i className="fal fa-coffee" /> Get In Touch
                </h3>
                <ul>
                  <li>
                    <strong>Phone Number:</strong>
                    <a href="tel:+012020200"> (346) 341-7573</a>
                  </li>
                  <li>
                    <strong>Email Address: </strong>
                    <a href="mailto:support@gmail.com">
                      {" "}
                      swurgentcare@outlook.com
                    </a>
                  </li>
                  {/* <li>
                        <span>Hotline</span>
                        <a href="tel:+12345678">12345678</a>
                      </li> */}
                </ul>
              </div>
            </div>
            <div className="contact-form-area landing-map ">
              <div className="contact-map">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d444003.0914019853!2d-95.649555!3d29.610251!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8640e1326d9c9c9b%3A0xe0b4d8112d2afe65!2s400%20Promenade%20Wy%20%231500%2C%20Sugar%20Land%2C%20TX%2077478!5e0!3m2!1sen!2sus!4v1666682796648!5m2!1sen!2sus"
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        </section>
      </>
    </Layouts>
  );
};
export default Index;

export async function getStaticProps() {
  const testimonials = await sanityClient.fetch(testimonial);
  const GET_SERVICES = gql`${GetAllServices}`;

  const response = await client.query({
    query: GET_SERVICES,
  });
  const all_services = response?.data?.services?.nodes;

  return {
    props: {
      testimonials,
      all_services,
    },
  };
}
