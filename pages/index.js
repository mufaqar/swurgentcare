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
import { gql } from "@apollo/client";
import { GetAllServices, homePage, testimonials } from "../lib/queries";
import Head from "next/head";
import HeadSection from "../src/components/HeadSection";

const Index = ({ AllTestimonials, all_services, homePageResponse }) => {
  const [video, setVideo] = useState(false);
  const router = useRouter();

 
  const { seo, homePage } = homePageResponse;
  
  const IntroHeading = homePage.intro?.heading.replace(
    /On-Demand/g,
    '<span class="last">On-Demand</span>'
  );
  const PediatricHeading = homePage.qualityPediatricCareSection?.title.replace(
    /quality pediatric care?/g,
    '<span class="last">quality pediatric care</span>'
  );
  const Covid19 = homePage.covid19Section?.content.replace(
    /COVID-19/g,
    '<span class="last">COVID-19</span>'
  );

  const {virtualUrgentCareSection}  = homePage

  return (
    <Layouts headerTopbar footer={2} noNewsletters services={all_services}>
      <HeadSection seo={seo}/>
      {video && <VideoPopup close={setVideo} />}
      <>
        {/*====== Hero Slider Start ======*/}

        <HeroBanner text={homePage.mainText} />
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
                    
                    <h2 className="title">
                      {
                        <div
                          dangerouslySetInnerHTML={{ __html: IntroHeading }}
                        ></div>
                      }
                    </h2>
                  </div>
                  <p>{homePage.intro?.content}</p>

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
                      {
                        <div
                          dangerouslySetInnerHTML={{ __html: PediatricHeading }}
                        ></div>
                      }{" "}
                    </h2>
                  </div>
                  <p>{homePage.qualityPediatricCareSection?.content}</p>

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
                      {virtualUrgentCareSection.map((item, i) => (
                        <div className="d-flex item-center" key={i}>
                          <span className="mr-2 plus_sign">+</span>
                          <h6 className="pt-2">{item?.listItem}</h6>
                        </div>
                      ))}
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
            <div className="row align-items-center justify-content-center p-2">
              <div className="lg:col-md-7">
                <div className="about-text">
                  <div className="section-heading mb-30">
                    <h2 className="title">
                      <span className="last" style={{ fontSize: "42px" }}>
                        {homePage.covid19Section?.heading}
                      </span>
                      <br /> {<div
                        dangerouslySetInnerHTML={{ __html: Covid19 }}
                      ></div>}
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
              {homePage.insurancePlanSection.map((item, i) => (
                <div className="single-partner p-3" key={i}>
                  <a href="#">
                    <img src={item?.image.mediaItemUrl} alt="Partner" />
                  </a>
                </div>
              ))}
            </div>
          </div>
        </section>
        {/*====== Partners Section End ======*/}

        {/*====== Testimonials Section Start ======*/}

        <Testimonial testimonials={AllTestimonials} />
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
  const GET_SERVICES = gql`
    ${GetAllServices}
  `;
  const GET_HOMEPAGE_DATA = gql`
    ${homePage}
  `;
  const GET_TESTIMONIALS = gql`
    ${testimonials}
  `;
  // HOMEPAGE QUERY
  const res = await client.query({
    query: GET_HOMEPAGE_DATA,
  });
  // SERVICES QUERY
  const response = await client.query({
    query: GET_SERVICES,
  });
  // TESTIMONIALS QUERY
  const t_response = await client.query({
    query: GET_TESTIMONIALS,
  });

  const all_services = response?.data?.services?.nodes;
  const homePageResponse = res.data?.page;
  const AllTestimonials = t_response.data?.testimonials?.nodes;

  return {
    props: {
      AllTestimonials,
      all_services,
      homePageResponse,
    },
  };
}
