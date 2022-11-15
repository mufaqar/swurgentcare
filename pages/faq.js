import { gql } from "@apollo/client";
import Head from "next/head";
import React, { useState } from "react";
import { Accordion } from "react-bootstrap";
import { client } from "../lib/client";
import { GetAllServices, helpAndFaq } from "../lib/queries";
import PageBanner from "../src/components/PageBanner";
import VideoPopup from "../src/components/VideoPopup";
import Layouts from "../src/layouts/Layouts";
import OwnImage from '../src/components/OwnImage'

const Faq = ({ all_services, all_Faqs }) => {
  const { seo, faq } = all_Faqs;
  const [active, setActive] = useState("collapse1");
  const active_ = (value) => (value === active ? "active-accordion" : "");
  const [video, setVideo] = useState(false);
  var i;
  return (
    <Layouts footer={2} services={all_services}>
      <Head>
        <title>{seo?.title}</title>
        <meta name="description" content={seo?.metaDesc} />
        <meta property="og:description" content={seo?.metaDesc} />
        <meta property="og:title" content={seo?.title} />
        <meta name="keywords" content={seo?.metaKeywords}></meta>
      </Head>
      {video && <VideoPopup close={setVideo} />}
      <PageBanner title={"Help & FAQ"} />
      <section className="faq-section section-gap">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-7">
              <div className="faq-page-content pr-xl-4">
                <h3 className="faq-title">Frequently Asked Questions</h3>

                <Accordion
                  defaultActiveKey={`collapse${i + 1}`}
                  className="accordion"
                  id="accordionFaq"
                >
                  {faq.faqs?.map((item, i) => (
                    <div
                      className={`accordion-item ${active_(`${i + 1}`)}`}
                      key={i}
                    >
                      <div className="accordion-header">
                        <Accordion.Toggle
                          as="h6"
                          eventKey={`collapse${i + 1}`}
                          onClick={() => setActive(`${i + 1}`)}
                          data-toggle="collapse"
                        >
                          <span>{item.question}</span>
                        </Accordion.Toggle>
                      </div>
                      <Accordion.Collapse eventKey={`collapse${i + 1}`}>
                        <div className="accordion-content">
                          <p>{item.answer}</p>
                        </div>
                      </Accordion.Collapse>
                    </div>
                  ))}
                </Accordion>
              </div>
            </div>
            <div className="col-lg-5 col-md-10">
              <div className="faq-sidebar">
                {/* <div className="search-widget mb-50">
                  <h3 className="search-title">Frequently Asked Questions</h3>
                  <form onSubmit={(e) => e.preventDefault()} action="#">
                    <input type="search" placeholder="Search Here" />
                    <button type="submit">
                      <i className="fas fa-search"></i>
                    </button>
                  </form>
                    </div> */}
                <div className="video-widget">
                  <OwnImage path="/assets/img/section-img/faq-video.jpg" alt="Image" />
                  <a
                    href="#"
                    className="video-popup"
                    onClick={(e) => {
                      e.preventDefault();
                      setVideo(true);
                    }}
                  >
                    <i className="fas fa-play"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layouts>
  );
};
export default Faq;


export async function getStaticProps() {
  const GET_FAQS = gql`
    ${helpAndFaq}
  `;
  const GET_SERVICES = gql`
    ${GetAllServices}
  `;
  // HOMEPAGE QUERY
  const response = await client.query({
    query: GET_FAQS,
  });
  // SERVICES QUERY
  const res = await client.query({
    query: GET_SERVICES,
  });

  const all_Faqs = response?.data.page;
  const all_services = res?.data?.services?.nodes;
  return {
    props: {
      all_Faqs,
      all_services,
    },
  };
}
