import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";
import Slider from "react-slick";
import Counter from "../src/components/Counter";
import HeroBanner from "../src/components/HeroBanner";
import VideoPopup from "../src/components/VideoPopup";
import Layouts from "../src/layouts/Layouts";
import {
  heroSlider,
  partnerSlider,
  TestimonialsSliderTwo,
} from "../src/sliderProps";
import { testimonialOne } from "../src/sliderProps";


const Index = () => {
  const [video, setVideo] = useState(false);
  const router = useRouter();
  const serviceData = [
    {
      id: 1,
      name: "Allergies",
      icon: 'leaf.png'
    },
    {
      id: 2,
      name: "asthma",
      icon: 'inhalator.png'
    },
    {
      id: 3,
      name: "Cold & flu",
      icon: 'fever.png'
    },
    {
      id: 4,
      name: "Covid-19 Testing",
      icon: 'coronavirus.png'
    },
    {
      id: 5,
      name: "Ear infaction",
      icon: 'ear.png'
    },
    {
      id: 6,
      name: "Flu Shot",
      icon: 'secure-shield.png'
    },
    {
      id: 7,
      name: "Illness",
      icon: 'stethoscope.png'
    },
    {
      id: 8,
      name: "Injury",
      icon: 'syringe.png'
    },
    {
      id: 9,
      name: "Pediatrics",
      icon: 'pediatrics.png'
    },
    {
      id: 10,
      name: "Lab",
      icon: 'flask.png'
    },
    {
      id: 11,
      name: "Skin infaction & Rash",
      icon: 'disease.png'
    },
    {
      id: 12,
      name: "Sore & strep Throat",
      icon: 'sore-throat.png'
    },
    {
      id: 13,
      name: "Sports clearance exam",
      icon: 'running.png'
    },
    {
      id: 14,
      name: "STD treatment & testing ",
      icon: 'test-tubes.png'
    },
    {
      id: 15,
      name: "Telemedicine ",
      icon: 'first-aid-kit.png'
    },

    {
      id: 16,
      name: "Urinary Tract Infaction ",
      icon: 'washroom.png'
    },
    {
      id: 17,
      name: "X-Ray",
      icon: 'x-rays.png'
    },
  ]

  const partner = [
    {
      image: 'AETNA-LOGO.png'
    },
    {
      image: 'bcbs-logo.jpg'
    },
    {
      image: 'We-Accept_wellcare-health-plans-logo-1200x481.png'
    },
    {
      image: 'We_Accept_cigna_Health_Plans_Logo_Logo.png'
    },
    {
      image: 'We_Accept_Friday_Health_Plans_Logo_Logo.jpg'
    },
    {
      image: 'We_Accept_medicare_Health_Plans_Logo_Logo.png'
    },
    {
      image: 'We_Accept_Tricare_Health_Plans_Logo_Logo.jpg'
    },
    {
      image: 'We_Accept_united health care_Health_Plans_Logo_Logo.png'
    },
    {
      image: 'We-Accept Community-Health-Choice.png'
    },
    {
      image: 'We-Accept_wellcare-health-plans-logo-1200x481.png'
    },
  ]

  return (
    <Layouts headerTopbar footer={2} noNewsletters>
      {video && <VideoPopup close={setVideo} />}
      <>
        {/*====== Hero Slider Start ======*/}

        <HeroBanner />
        {/*====== Hero Slider End ======*/}
        {/*====== About Section Start ======*/}
        <section className="about-section section-gap">
          <div className="container">
            <div className="row align-items-center justify-content-center">
              <div className="col-md-5">
                <div className=" mb-xl-50">

                  <div
                    className="image-two wow fadeInDown"
                    data-wow-delay="0.4s"
                  >
                    <img src="assets/family.jpg" alt="Image" style={{ borderRadius: '18px' }} />
                  </div>

                </div>
              </div>
              <div className="col-md-7">
                <div className="about-text">
                  <div className="section-heading mb-30">
                    {/* <span className="tagline">About Swurgentcare</span> */}
                    <h2 className="title">
                      Southwest Urgent Care Bringing Forth Quality On-Demand Care
                    </h2>
                  </div>
                  <p>
                    Southwest Urgent care providing care for patients of all ages. From infants to older adults, optimal
                    medical care for your whole family. If you are in need of medical assistance regarding
                    illness or injury which is not life threatening, our physicians are capable of treating
                    your sickness in the most professional manner. Southwest Urgent Care provides a wide range of services
                    to help patients get well faster.
                  </p>

                  <a
                    onClick={() => router.push('/appointments')}
                    className="template-btn sas mt-4"
                    data-wow-delay="0.5s"
                  >
                    See All Services <i className="far fa-plus" />
                  </a>

                  {/* <div className="mt-3">
                    <div className="d-flex item-center">
                      <span className="mr-2 plus_sign">+</span>
                      <h6 className="pt-2">Affordable Rates ($50 doctor’s consultation fee)</h6>
                    </div>
                    <div className="d-flex item-center">
                      <span className="mr-2 plus_sign">+</span>
                      <h6 className="pt-2">Open 7 Days a Week.</h6>
                    </div>
                    <div className="d-flex item-center">
                      <span className="mr-2 plus_sign">+</span>
                      <h6 className="pt-2">Walk-in Clinic. No Waiting / Overcrowding.</h6>
                    </div>
                    <div className="d-flex item-center">
                      <span className="mr-2 plus_sign">+</span>
                      <h6 className="pt-2">Medicaid & Medicare Accepted.</h6>
                    </div>
                    <div className="d-flex item-center">
                      <span className="mr-2 plus_sign">+</span>
                      <h6 className="pt-2">
                        Accept Most Insurance Plans.</h6>
                    </div>
                    <div className="d-flex item-center">
                      <span className="mr-2 plus_sign">+</span>
                      <h6 className="pt-2">
                        Serve Non-insured Patients. (Insurance is not required to be our patient)</h6>
                    </div>
                  </div> */}
                </div>
              </div>
            </div>
          </div>
        </section>
        {/*====== About Section End ======*/}

        {/*====== Pediatric Care Start ======*/}
        <section className="about-section section-gap bg_">
          <div className="container">
            <div className="row align-items-center justify-content-center">
              <div className="col-md-7">
                <div className="about-text">
                  <div className="section-heading mb-30">
                    <span className="tagline">Pediatric Care</span>
                    <h2 className="title">
                      Are you looking for quality pediatric care? Well, your search ends at Southwest Urgent Care!
                    </h2>
                  </div>
                  <p>
                    Our Pediatric services are backed by outstanding expertise and advanced diagnostic
                    services to ensure effective treatment and a streamlned care experience for kids.
                    Available 7 days a week, so you and your child don’t have to spend hours in an emergency room.
                    Southwest Urgent Care provides a wide range of services for your Child's health.
                  </p>

                  <a
                    onClick={() => router.push('/appointments')}
                    className="template-btn sas mt-4"
                    data-wow-delay="0.5s"
                  >
                    Learn More About Our Pediatric Care <i className="far fa-plus" />
                  </a>
                </div>
              </div>
              <div className="col-md-5">
                <div className=" mb-xl-50">

                  <div
                    className="image-two wow fadeInDown"
                    data-wow-delay="0.4s"
                  >
                    <img src="assets/PEDIATRIC-CARE.jpg" alt="Image" style={{ borderRadius: '18px' }} />
                  </div>

                </div>
              </div>
            </div>
          </div>
        </section>
        {/*====== Pediatric Care End ======*/}

        {/*====== Virtual Urgent Care Start ======*/}
        <section className="about-section section-gap ">
          <div className="container">
            <div className="row align-items-center justify-content-center">
              <div className="col-md-6">
                <div className=" mb-xl-50">

                  <div
                    className="image-two wow fadeInDown"
                    data-wow-delay="0.4s"
                  >
                    <img src="assets/TELEMEDICINE-(Without-Green-Background).jpg" alt="Image" style={{ borderRadius: '18px' }} />
                  </div>

                </div>
              </div>
              <div className="col-md-6">
                <div className="about-text">
                  <div className="section-heading mb-30">
                    {/* <span className="tagline">Virtual Urgent Care</span> */}
                    <h2 className="title">
                      Virtual Urgent Care
                    </h2>
                    <div className="mt-3">
                      <div className="d-flex item-center">
                        <span className="mr-2 plus_sign">+</span>
                        <h6 className="pt-2">Get face to face consultation from the comfort of your home.</h6>
                      </div>
                      <div className="d-flex item-center">
                        <span className="mr-2 plus_sign">+</span>
                        <h6 className="pt-2">See a healthcare provider from anywhere at any time.</h6>
                      </div>
                      <div className="d-flex item-center">
                        <span className="mr-2 plus_sign">+</span>
                        <h6 className="pt-2">Real time conversation with your provider</h6>
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
        <section className="container mx-auto section-gap services pt-0">
          <h2 className="title text-center"> Virtual Urgent Care </h2>
          <div className="row mt-5">
            {
              serviceData.map((service, index) => (
                <div className="col-md-3 col-6 service_card" key={index}>
                  <img src={`/assets/services/${service.icon}`} alt={service.name} className="services_icon" />
                  <h6 className="text-center">{service.name}</h6>
                </div>
              ))
            }
          </div>
        </section>
        {/*====== Services End ======*/}

        {/*====== esting or COVID-19 PCR Start ======*/}
        <section className="about-section section-gap bg_">
          <div className="container">
            <div className="row align-items-center justify-content-center">
              <div className="col-md-7">
                <div className="about-text">
                  <div className="section-heading mb-30">
                    <h2 className="title">
                      Are you not feeling well ? We offer rapid COVID-19 antigen testing or COVID-19 PCR testing
                      for your travel requirement 7 days a week. Call today to book an appointment,
                      set up a telemedicine appointment or just  simply walk-in at our  urgent care.
                    </h2>
                  </div>

                </div>
              </div>
              <div className="col-md-5">
                <div className=" mb-xl-50">

                  <div
                    className="image-two wow fadeInDown"
                    data-wow-delay="0.4s"
                  >
                    <img src="assets/covid-testing.jpg" alt="Image" style={{ borderRadius: '18px' }} />
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
              <h2 className="title">WE ACCEPT MOST INSURANCE PLANS </h2>
              <span className="span tagline">Traditional Medicare & most commercial and local marketplace plans are accepted.</span>
              <p>WE ACCEPT MOST INSURANCE PLANE</p>
              <span>Tradional Medicare, most commercial and local marketplace plans are accepted.</span>
            </div>
            <div className="partner-logo-grid">
              {
                partner.map((item, i) => (
                  <div className="single-partner p-3">
                    <a href="#">
                      <img
                        src={`assets/partner/${item.image}`}
                        alt="Partner"
                      />
                    </a>
                  </div>
                ))
              }


            </div>
          </div>
        </section>
        {/*====== Partners Section End ======*/}

        {/*====== Testimonials Section Start ======*/}
        <section className="testimonial-section bg-color-grey section-have-half-bg">
          <div className="container-fluid">
            <div className="row justify-content-end">
              <div className="col-lg-12">
                <div className="testimonial-one-wrap">
                  <div className="section-heading mb-50">
                    <span className="tagline">Our Testimonials</span>
                    <h2 className="title">
                      What Our Patients Say About Our Medical
                    </h2>
                  </div>
                  <Slider
                    {...testimonialOne}
                    className="testimonial-slider-one"
                  >
                    <div className="single-testimonial-slider">
                      <div className="testimonial-inner">
                        <div className="avatar">
                          <img
                            src="assets/01.png"
                            alt="Avatar"
                          />
                        </div>
                        <div className="content-wrap">
                          <p className="testimonial-desc">
                            Sed ut perspiciatis unde omnis natusy error
                            voluptatem accusantium doloreue laudan totam rem
                            aperiam eaquip quae abillo inventore veritatis quasi
                            architecto beatae vitae dicta sunt explicabo
                          </p>
                          <div className="author-info">
                            <h5 className="name">Mark E. Kaminsky</h5>
                            <span className="title">Web Designer</span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="single-testimonial-slider">
                      <div className="testimonial-inner">
                        <div className="avatar">
                          <img
                            src="assets/01.png"
                            alt="Avatar"
                          />
                        </div>
                        <div className="content-wrap">
                          <p className="testimonial-desc">
                            Sed ut perspiciatis unde omnis natusy error
                            voluptatem accusantium doloreue laudan totam rem
                            aperiam eaquip quae abillo inventore veritatis quasi
                            architecto beatae vitae dicta sunt explicabo
                          </p>
                          <div className="author-info">
                            <h5 className="name">Mark E. Kaminsky</h5>
                            <span className="title">Web Designer</span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="single-testimonial-slider">
                      <div className="testimonial-inner">
                        <div className="avatar">
                          <img
                            src="assets/01.png"
                            alt="Avatar"
                          />
                        </div>
                        <div className="content-wrap">
                          <p className="testimonial-desc">
                            Sed ut perspiciatis unde omnis natusy error
                            voluptatem accusantium doloreue laudan totam rem
                            aperiam eaquip quae abillo inventore veritatis quasi
                            architecto beatae vitae dicta sunt explicabo
                          </p>
                          <div className="author-info">
                            <h5 className="name">Mark E. Kaminsky</h5>
                            <span className="title">Web Designer</span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="single-testimonial-slider">
                      <div className="testimonial-inner">
                        <div className="avatar">
                          <img
                            src="assets/01.png"
                            alt="Avatar"
                          />
                        </div>
                        <div className="content-wrap">
                          <p className="testimonial-desc">
                            Sed ut perspiciatis unde omnis natusy error
                            voluptatem accusantium doloreue laudan totam rem
                            aperiam eaquip quae abillo inventore veritatis quasi
                            architecto beatae vitae dicta sunt explicabo
                          </p>
                          <div className="author-info">
                            <h5 className="name">Mark E. Kaminsky</h5>
                            <span className="title">Web Designer</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </Slider>
                </div>
              </div>
            </div>
          </div>

        </section>
        {/*====== Testimonials Section End ======*/}

        {/* contect us  */}

        <section className="container  mx-auto section-gap">
          <div className="row">
            <div className="landing_contact ">
              <h1 className="title">Contact Us</h1>
              <p className="mt-3">Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Quia voluptatum deleniti culpa harum quos veniam ex eius, eligendi accusamus aliquam!</p>
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
                    <a href="mailto:support@gmail.com"> swurgentcare@outlook.com</a>
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
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3465.0698715806884!2d-95.48070708527048!3d29.717735240887784!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8640c22a14ce8355%3A0x35bc1bec9466aac4!2s5900%20Chimney%20Rock%20Rd%2C%20Houston%2C%20TX%2077081%2C%20USA!5e0!3m2!1sen!2s!4v1666086007916!5m2!1sen!2s"
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
