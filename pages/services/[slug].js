import Link from "next/link";
import React from "react";
import { serviceData } from "../../public/assets/data/servicesData";
import PageBanner from "../../src/components/PageBanner";
import Layouts from "../../src/layouts/Layouts";

const ServiceDetails = () => {
  return (
    <Layouts footer={2}>
      <PageBanner title={"SKIN INFACTION"} />
      <>
        <section className="services-area section-gap">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-8 order-lg-last">
                <div className="service-details-wrapper">
                  <h2 className="service-title">Treatments for Skin Rashes and Infections</h2>
                  <p>
                    No one likes having an itchy rash on their skin, or even worse,
                    a painful skin infection that can spread and get worse over time.
                    Besides feeling horrible, you may be worried about people seeing the rash or infection,
                    which could cause your skin to get bumpy, red, or worse.
                    Getting the right treatment is essential when your skin is plagued by one of these conditions.
                    Keep reading to find out what kinds of treatment you should seek.
                  </p>
                  <h2 className="mt-3 mb-3">Seek Immediate Care for Skin Conditions</h2>
                  <p>Because skin infections and rashes can be so common, it’s important to identify the cause of the irritation fast.
                    This process is sped up considerably when working with a healthcare provider that knows what they’re doing and have been
                    working in healthcare for long enough to have gained valuable experience.
                    If you have a skin rash, infection, or other form of irritation, you should seek immediate help from a healthcare professional.
                  </p>
                  <h2 className="mt-3 mb-3">What Are the Symptoms of Skin Rash and Infection? </h2>
                  <p>Our skin is the only layer of defense between our bodies and the germs and contaminants of the world.
                    It comes into contact with thousands of potential contaminants every single day, and most of the time, it’s able to protect us.
                    But when your skin becomes infected or irritated, its ability to protect us can be compromised.
                    That’s why it’s important to watch for telltale signs and symptoms that a skin infection or rash has occurred.
                    These include but are not limited to:
                  </p>

                  <ul className="check-list mt-4 mb-4">
                    <li>
                      Aches and Fever
                    </li>
                    <li>Irritation, swelling, or pain</li>
                    <li>Scaly, red, and itchy skin</li>
                    <li>
                      Sores, blisters, and bumps on the skin
                    </li>
                  </ul>

                  <p className="mt-3">If you notice one of these common symptoms somewhere on your skin, chances are you’ve contracted 
                  some kind of skin rash or infection and should seek medical help as soon as you can. </p>
                
                <h2 className="mt-3 mb-3">What Are the Causes? </h2>
                <p>As we mentioned briefly earlier in the article, there are any number of potential underlying causes
                  for skin rashes and infections. Some of these include clogged pores, allergic reactions,
                  disease of the autoimmune system, contact with fungus or virus, friction irritation,
                  insect bites or parasite bites, or reactions to medications.
                  These are not the only possible causes but are some of the most common we’ve seen.<br />
                  As it can be difficult to know exactly which one of these might be causing your symptoms,
                  it’s important to see an experienced healthcare provider as soon as possible.
                  They’ll be able to diagnose the issue and tell you how to prevent it from happening again.
                </p>
                <h2 className="mt-3 mb-3">How To Diagnose and Treat</h2>
                <p>A healthcare provider at Southwest Urgent Care will be able to set you up with an appointment
                  to see a trained medical professional who has seen these types of issues before in many patients.
                  They’ll start by digging into your medical history to see if the cause could come from a
                  pre-existing condition or allergy. They’ll then do testing on the sight of the rash or infection to
                  determine what is the cause and what treatment should be used.
                  Please call today at Soutwest Urgent Care at 346-341-7573 to book an appointment to be checked for skin infection.
                </p>

                {/* <blockquote className="mt-30">
                    Quis autem vel eum iure reprehenderit qui in voluptate velit
                    esse quam nihil molestiae consequatur, vel illum qui dolorem
                    eum fugiat quo voluptas nulla pariatur
                  </blockquote> */}


              </div>
            </div>
            <div className="col-lg-4 col-md-10 order-lg-first">
              <div className="service-sidebar">
                <div className="widget departments-list">
                  <h3 className="widget-title">Departments</h3>
                  <ul>
                    {
                      serviceData.map((service, i) => (
                        <li key={i}>
                          <a href="#">
                            <i className="far fa-angle-right" />
                            {service.name}
                          </a>
                        </li>
                      ))
                    }


                  </ul>
                </div>
                <div className="widget appointment-form">
                  <h3 className="widget-title">Appointment</h3>
                  <p>
                    Consectetur adipiscing elit sed do eiusmod tempor
                    incididunt
                  </p>
                  <form onSubmit={(e) => e.preventDefault()} action="#">
                    <div className="input-field">
                      <input type="text" placeholder="Full Name" />
                    </div>
                    <div className="input-field">
                      <input type="text" placeholder="Departments" />
                    </div>
                    <div className="input-field">
                      <input type="text" placeholder="Choose Doctors" />
                    </div>
                    <div className="input-field">
                      <input type="text" placeholder="Date & Time" />
                    </div>
                    <div className="input-field">
                      <button type="submit" className="template-btn">
                        Appointment Now <i className="far fa-plus" />
                      </button>
                    </div>
                  </form>
                </div>
                <div className="widget working-schedule">
                  <h3 className="widget-title">Working Hour</h3>
                  <ul>
                    <li>
                      <span>
                        <i className="far fa-angle-right" />
                        Monday
                      </span>
                      <span>0 8.00 – 21.00</span>
                    </li>
                    <li>
                      <span>
                        <i className="far fa-angle-right" />
                        Tuesday
                      </span>
                      <span>0 8.00 – 21.00</span>
                    </li>
                    <li>
                      <span>
                        <i className="far fa-angle-right" />
                        Wednesday
                      </span>
                      <span>0 8.00 – 21.00</span>
                    </li>
                    <li>
                      <span>
                        <i className="far fa-angle-right" />
                        Thursday
                      </span>
                      <span>0 8.00 – 21.00</span>
                    </li>
                    <li>
                      <span>
                        <i className="far fa-angle-right" />
                        Friday
                      </span>
                      <span>08.00 – 17.00</span>
                    </li>
                    <li>
                      <span>
                        <i className="far fa-angle-right" />
                        Saturday
                      </span>
                      <span>08.00 – 17.00</span>
                    </li>
                    <li>
                      <span>
                        <i className="far fa-angle-right" />
                        Sunday
                      </span>
                      <span>08.00 – 17.00</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/*====== Service Area End ======*/}
      {/*====== Related Services Start ======*/}

    </>
    </Layouts >
  );
};
export default ServiceDetails;
