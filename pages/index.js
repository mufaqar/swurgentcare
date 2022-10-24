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
      image: ''
    }
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
        <section className="partner-section pt-5 pb-5 bg-color-grey section-map-overly-2">
          <div className="container">
            <div className="section-heading text-center mb-50">
              <h2 className="title">WE ACCEPT MOST INSURANCE PLANS </h2>
              <span className="span tagline">Traditional Medicare & most commercial and local marketplace plans are accepted.</span>
              <p>WE ACCEPT MOST INSURANCE PLANE</p>
              <span>Tradional Medicare, most commercial and local marketplace plans are accepted.</span>
            </div>
            <div className="partner-logo-grid">
              <div className="single-partner">
                <a href="#">
                  <img
                    src="assets/img/partner-logos/01-dark.png"
                    alt="Partner"
                  />
                </a>
              </div>
              
            </div>
          </div>
        </section>
        {/*====== Partners Section End ======*/}







        {/*====== Call to Action Start ======*/}
        <section
          className="cta-section bg-size-cover section-gap-100 bg-color-primary blend-mode-multiply"
          style={{
            backgroundImage: "url(assets/cta-section-bg.jpeg)",
          }}
        >
          <div className="container">
            <div className="row align-items-center">
              <div className="col-lg-5">
                <div className="section-heading heading-white">
                  <h2 className="title ">
                    BOOK AN APPOINTMENT
                  </h2>
                  <span className="tagline mt-2">We are located just 2 miles away from the galleria mall in Southwest Houston close to US 59 and Chimney Rock Rd. </span>
                </div>
              </div>
              <div className="col-lg-7">
                <ul className="cta-buttons d-sm-flex justify-content-lg-end mt-md-40 flex-wrap">
                  <li className="mb-3 mb-sm-0">
                    <a
                      href="#"
                      className="template-btn template-btn-white wow fadeInRight"
                      data-wow-delay="0.4s"
                    >
                      (346) 341-7573 <i className="far fa-phone" />
                    </a>
                  </li>
                  <li className="ml-sm-2 cursor-pointer">
                    <a
                      onClick={() => router.push('/appointments')}
                      className="template-btn template-btn-bordered wow fadeInRight"
                      data-wow-delay="0.5s"
                    >
                      Get Appointment <i className="far fa-plus" />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>
        {/*====== Call to Action End ======*/}
        {/*====== Feature Section Start ======*/}
        <section className="feature-section section-gap bg-color-grey">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-8">
                <div className="section-heading text-center mb-40">
                  <h2 className="title">What We Offer</h2>
                  <span className="mt-2">
                    Team of our Expert providers offering you the best treatment options for your unique medical needs.
                    The latest and most advanced treatment options and diagnosis and preventation of various types
                    diseases is part of our Services. Check our Services Section to know about some of the main services
                    provided at Southwest Urgent Care
                  </span>
                </div>
              </div>
            </div>
            <div className="row justify-content-center service-looop">
              <div className="col-lg-3 col-md-6 col-sm-10">
                <div
                  className="iconic-box-two mt-30 wow fadeInUp"
                  data-wow-delay="0.3s"
                >
                  <div className="icon">
                    <i className="flaticon-tooth-1" />
                  </div>
                  <h4 className="title">
                    <Link href="">Allergies</Link>
                  </h4>
                  <p>Perspiciatis unde omniste natus error volutatem</p>
                  <Link href="">
                    <a className="box-link">
                      <i className="far fa-plus" />
                    </a>
                  </Link>
                </div>
              </div>
              <div className="col-lg-3 col-md-6 col-sm-10">
                <div
                  className="iconic-box-two mt-30 wow fadeInUp"
                  data-wow-delay="0.4s"
                >
                  <div className="icon">
                    <i className="flaticon-tooth-2" />
                  </div>
                  <h4 className="title">
                    <Link href="">Asthma</Link>
                  </h4>
                  <p>Perspiciatis unde omniste natus error volutatem</p>
                  <Link href="">
                    <a className="box-link">
                      <i className="far fa-plus" />
                    </a>
                  </Link>
                </div>
              </div>
              <div className="col-lg-3 col-md-6 col-sm-10">
                <div
                  className="iconic-box-two mt-30 wow fadeInUp"
                  data-wow-delay="0.5s"
                >
                  <div className="icon">
                    <i className="flaticon-tooth-3" />
                  </div>
                  <h4 className="title">
                    <Link href="">Covid Testing</Link>
                  </h4>
                  <p>Perspiciatis unde omniste natus error volutatem</p>
                  <Link href="">
                    <a className="box-link">
                      <i className="far fa-plus" />
                    </a>
                  </Link>
                </div>
              </div>
              <div className="col-lg-3 col-md-6 col-sm-10">
                <div
                  className="iconic-box-two mt-30 wow fadeInUp"
                  data-wow-delay="0.6s"
                >
                  <div className="icon">
                    <i className="flaticon-tooth-4" />
                  </div>
                  <h4 className="title">
                    <Link href="">Cold & Flu</Link>
                  </h4>
                  <p>Perspiciatis unde omniste natus error volutatem</p>
                  <Link href="">
                    <a className="box-link">
                      <i className="far fa-plus" />
                    </a>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/*====== Feature Section End ======*/}

        {/*====== Video Section Start ======*/}
        <section className="video-section">
          <div className="video-with-content bg-color-primary">
            <div className="seeva-video">
              <div className="video-thumbnail">
                <img src="assets/hero-img-2.jpeg" alt="Image" />
              </div>
              <a
                href="#"
                className="video-popup"
                onClick={(e) => {
                  e.preventDefault();
                  setVideo(true);
                }}
              >
                <i className="fas fa-play" />
              </a>
            </div>
            <div className="container">
              <div className="row justify-content-lg-end justify-content-center">
                <div className="col-lg-5 col-md-9">
                  <div className="video-content">
                    <div className="section-heading mb-20">

                      <h2 className="title">
                        Make An Appointment Ready To Serve You Happily
                      </h2>
                    </div>
                    <p>
                      Zeeshan Iqbal Shaikh’s Practice has been awarded as a top Family Medicine
                      practice with some of <a href="https://www.opencare.com/dentists/houston-tx/#/tc24630280585">
                        Houston’s best Family Doctors.</a> Verified by
                      <a href="https://www.opencare.com/" target='_blank rel="noreferrer" '>Opencare.com</a>
                    </p>

                    <a
                      href="https://www.patientfusion.com/doctor/zeeshan-shaikh-md-68968"
                      target='_blank'
                      rel="noreferrer"
                      className="template-btn template-btn-bordered mt-40 wow fadeInUp"
                      data-wow-delay="0.5s"
                    >
                      Review<i className="far fa-plus" />
                    </a>
                    <a
                      href="https://swurgentcare.net/wp-content/uploads/2014/11/special_2014.pdf"
                      target='_blank'
                      rel="noreferrer"
                      className="template-btn ml-4 template-btn-bordered mt-40 wow fadeInUp"
                      data-wow-delay="0.5s"
                    >
                      Spacial <i className="far fa-plus" />
                    </a>

                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/*====== Video Section End ======*/}

        {/*====== Service Section Start ======*/}
        <section className="services-section section-gap">
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
          </div>
          <div className="container-fluid fluid-100">
            <div className="row justify-content-center custom-service-grid">
              <div className="col">
                <div className="fancy-content-box mt-30">
                  <div className="box-thumbnail">
                    <img src="assets/01-1.jpeg" alt="Image" />
                  </div>
                  <div className="box-content">
                    <h4 className="title">
                      <Link href="">
                        <a>Ear Infection</a>
                      </Link>
                    </h4>
                    <p>
                      Sed ut perspiciats undec omnise vluptate accusantium
                      dolore
                    </p>
                    <Link href="">
                      <a className="box-btn">
                        Read More <i className="far fa-plus" />
                      </a>
                    </Link>
                    <div className="box-icon">
                      <i className="flaticon-virus" />
                    </div>
                  </div>
                </div>
              </div>
              <div className="col">
                <div className="fancy-content-box mt-30">
                  <div className="box-thumbnail">
                    <img src="assets/01-1.jpeg" alt="Image" />
                  </div>
                  <div className="box-content">
                    <h4 className="title">
                      <Link href="">Flue Shot</Link>
                    </h4>
                    <p>
                      Sed ut perspiciats undec omnise vluptate accusantium
                      dolore
                    </p>
                    <Link href="">
                      <a className="box-btn">
                        Read More <i className="far fa-plus" />
                      </a>
                    </Link>
                    <div className="box-icon">
                      <i className="flaticon-virus" />
                    </div>
                  </div>
                </div>
              </div>
              <div className="col">
                <div className="fancy-content-box mt-30">
                  <div className="box-thumbnail">
                    <img src="assets/01-1.jpeg" alt="Image" />
                  </div>
                  <div className="box-content">
                    <h4 className="title">
                      <Link href="">
                        <a>Illness</a>
                      </Link>
                    </h4>
                    <p>
                      Sed ut perspiciats undec omnise vluptate accusantium
                      dolore
                    </p>
                    <Link href="">
                      <a className="box-btn">
                        Read More <i className="far fa-plus" />
                      </a>
                    </Link>
                    <div className="box-icon">
                      <i className="flaticon-virus" />
                    </div>
                  </div>
                </div>
              </div>
              <div className="col">
                <div className="fancy-content-box mt-30">
                  <div className="box-thumbnail">
                    <img src="assets/01-1.jpeg" alt="Image" />
                  </div>
                  <div className="box-content">
                    <h4 className="title">
                      <Link href="">Injury</Link>
                    </h4>
                    <p>
                      Sed ut perspiciats undec omnise vluptate accusantium
                      dolore
                    </p>
                    <Link href="">
                      <a className="box-btn">
                        Read More <i className="far fa-plus" />
                      </a>
                    </Link>
                    <div className="box-icon">
                      <i className="flaticon-virus" />
                    </div>
                  </div>
                </div>
              </div>
              <div className="col">
                <div className="fancy-content-box mt-30">
                  <div className="box-thumbnail">
                    <img src="assets/01-1.jpeg" alt="Image" />
                  </div>
                  <div className="box-content">
                    <h4 className="title">
                      <Link href="">
                        <a>Lab</a>
                      </Link>
                    </h4>
                    <p>
                      Sed ut perspiciats undec omnise vluptate accusantium
                      dolore
                    </p>
                    <Link href="">
                      <a className="box-btn">
                        Read More <i className="far fa-plus" />
                      </a>
                    </Link>
                    <div className="box-icon">
                      <i className="flaticon-virus" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/*====== Service Section End ======*/}

        {/*====== Testimonials Section Start ======*/}
        <section className="testimonial-section testimonial-shapes section-gap bg-color-primary polygon-pattern">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-6">
                <div className="section-heading text-center heading-white mb-70">
                  <span className="tagline">Our Testimonials</span>
                  <h2 className="title">
                    What Our Patients Say About Our Medical
                  </h2>
                </div>
              </div>
            </div>
            <Slider
              {...TestimonialsSliderTwo}
              className="row testimonial-slider-two"
            >
              <div>
                <div className="single-testimonial-slider">
                  <p className="content">
                    On the other hand we denounce riteous indignation and
                    dislike men wh beguiled and demoralized by the charms of
                    plsure of the moment, so blinded by desire that they cannot.
                  </p>
                  <div className="author-info-wrapper">
                    <div className="avatar">
                      <img src="assets/01.png" alt="Image" />
                    </div>
                    <div className="author-info">
                      <h5 className="name">Mark E. Kaminsky</h5>
                      <span className="title">Web Designer</span>
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <div className="single-testimonial-slider">
                  <p className="content">
                    On the other hand we denounce riteous indignation and
                    dislike men wh beguiled and demoralized by the charms of
                    plsure of the moment, so blinded by desire that they cannot.
                  </p>
                  <div className="author-info-wrapper">
                    <div className="avatar">
                      <img src="assets/01.png" alt="Image" />
                    </div>
                    <div className="author-info">
                      <h5 className="name">Ronald C. Kendall</h5>
                      <span className="title">Web Designer</span>
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <div className="single-testimonial-slider">
                  <p className="content">
                    On the other hand we denounce riteous indignation and
                    dislike men wh beguiled and demoralized by the charms of
                    plsure of the moment, so blinded by desire that they cannot.
                  </p>
                  <div className="author-info-wrapper">
                    <div className="avatar">
                      <img src="assets/01.png" alt="Image" />
                    </div>
                    <div className="author-info">
                      <h5 className="name">Mark E. Kaminsky</h5>
                      <span className="title">Web Designer</span>
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <div className="single-testimonial-slider">
                  <p className="content">
                    On the other hand we denounce riteous indignation and
                    dislike men wh beguiled and demoralized by the charms of
                    plsure of the moment, so blinded by desire that they cannot.
                  </p>
                  <div className="author-info-wrapper">
                    <div className="avatar">
                      <img src="assets/01.png" alt="Image" />
                    </div>
                    <div className="author-info">
                      <h5 className="name">Ronald C. Kendall</h5>
                      <span className="title">Web Designer</span>
                    </div>
                  </div>
                </div>
              </div>
            </Slider>
            <div className="testimonial-slider-arrow" />
          </div>
          <div className="shape-images">
            <div
              className="image-one animate-float-bob-y"
              style={{
                backgroundImage: "url(assets/bg-1.jpg)",
              }}
            ></div>
            <div
              className="image-two animate-float-bob-y"
              style={{ backgroundImage: "url(assets/bg.jpeg)" }}
            ></div>
          </div>
        </section>
        {/*====== Testimonials Section End ======*/}

        {/*====== Appointment Section Start ======*/}
        <section className="appointment-section">
          <div className="">
            <div className="appointment-form-two style-two">
              <div
                className="appointment-image"
                style={{
                  backgroundImage: "url(assets/mildred-doctor-appointment-wait-times-ftr.jpeg)",
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
                    <div className="col-md-6">
                      <div
                        className="input-field wow fadeInLeft"
                        data-wow-delay="0.3s"
                      >
                        <input type="text" placeholder="Your Full Name" />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div
                        className="input-field wow fadeInRight"
                        data-wow-delay="0.4s"
                      >
                        <input type="email" placeholder="Email Address" />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div
                        className="input-field wow fadeInLeft"
                        data-wow-delay="0.5s"
                      >
                        <select>
                          <option value={1} selected disabled>
                            Choose Doctors
                          </option>
                          <option value={2}>Doctor One</option>
                          <option value={3}>Doctor Two</option>
                          <option value={4}>Doctor Three</option>
                          <option value={5}>Doctor Four</option>
                        </select>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div
                        className="input-field wow fadeInRight"
                        data-wow-delay="0.6s"
                      >
                        <input type="date" />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div
                        className="input-field wow fadeInLeft"
                        data-wow-delay="0.7s"
                      >
                        <select>
                          <option value={1} selected disabled>
                            Services Category
                          </option>
                          <option value={2}>Service One</option>
                          <option value={3}>Service Two</option>
                          <option value={4}>Service Three</option>
                          <option value={5}>Service Four</option>
                        </select>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div
                        className="input-field wow fadeInRight"
                        data-wow-delay="0.8s"
                      >
                        <button type="submit" className="template-btn">
                          Make an Appointment <i className="far fa-plus" />
                        </button>
                      </div>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </section>
        {/*====== Appointment Section End ======*/}

      </>
    </Layouts>
  );
};
export default Index;
