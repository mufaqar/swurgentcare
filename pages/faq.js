import React, { useState } from "react";
import { Accordion } from "react-bootstrap";
import { sanityClient } from "../lib/studio";
import PageBanner from "../src/components/PageBanner";
import VideoPopup from "../src/components/VideoPopup";
import Layouts from "../src/layouts/Layouts";

const Faq = ({services}) => {
  const [active, setActive] = useState("collapse1");
  const active_ = (value) => (value === active ? "active-accordion" : "");
  const [video, setVideo] = useState(false);
  return (
    <Layouts services={services}>
      {video && <VideoPopup close={setVideo} />}
      <PageBanner title={"Help & FAQ"} bgnone />
      {/* <section className="faq-section section-gap">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-7">
              <div className="faq-page-content pr-xl-4">
                <h3 className="faq-title">Frequently Asked Questions</h3>
                <p className="mb-35">
                  Amet consectetur adipiscing sed eiusmod tempor incididunt
                  labore et dolore magna aliqua. Quis ipsum suspendisse ultrices
                  gravida. Risus commodo viverra maecenas accumsan lacus vel
                  facilisis.
                </p>
                <Accordion
                  defaultActiveKey="collapse1"
                  className="accordion"
                  id="accordionFaq"
                >
                  <div className={`accordion-item ${active_("1")}`}>
                    <div className="accordion-header">
                      <Accordion.Toggle
                        as="h6"
                        eventKey="collapse1"
                        onClick={() => setActive("1")}
                        data-toggle="collapse"
                      >
                        <span>
                          There Is No Such Thing As A CSS Absolute Unit
                        </span>
                      </Accordion.Toggle>
                    </div>
                    <Accordion.Collapse eventKey="collapse1">
                      <div className="accordion-content">
                        <p>
                          Sed ut perspiciatis unde omnis iste natus error volup
                          cusantium doloremque laudantium, totam rem aperiam
                          eaque ipsa quae abillo inventore veritatis et quasi
                          architecto beatae
                        </p>
                      </div>
                    </Accordion.Collapse>
                  </div>
                  <div className={`accordion-item ${active_("2")}`}>
                    <div className="accordion-header">
                      <Accordion.Toggle
                        as="h6"
                        eventKey="collapse2"
                        onClick={() => setActive("2")}
                        data-toggle="collapse"
                      >
                        <span>Build An E-Commerce Site With Angular</span>
                      </Accordion.Toggle>
                    </div>
                    <Accordion.Collapse eventKey="collapse2">
                      <div className="accordion-content">
                        <p>
                          Sed ut perspiciatis unde omnis iste natus error volup
                          cusantium doloremque laudantium, totam rem aperiam
                          eaque ipsa quae abillo inventore veritatis et quasi
                          architecto beatae
                        </p>
                      </div>
                    </Accordion.Collapse>
                  </div>
                  <div className={`accordion-item ${active_("3")}`}>
                    <div className="accordion-header">
                      <Accordion.Toggle
                        as="h6"
                        eventKey="collapse3"
                        onClick={() => setActive("3")}
                        data-toggle="collapse"
                      >
                        <span>
                          There Is No Such Thing As A CSS Absolute Unit
                        </span>
                      </Accordion.Toggle>
                    </div>
                    <Accordion.Collapse eventKey="collapse3">
                      <div className="accordion-content">
                        <p>
                          Sed ut perspiciatis unde omnis iste natus error volup
                          cusantium doloremque laudantium, totam rem aperiam
                          eaque ipsa quae abillo inventore veritatis et quasi
                          architecto beatae
                        </p>
                      </div>
                    </Accordion.Collapse>
                  </div>
                  <div className={`accordion-item ${active_("4")}`}>
                    <div className="accordion-header">
                      <Accordion.Toggle
                        as="h6"
                        eventKey="collapse4"
                        onClick={() => setActive("4")}
                        data-toggle="collapse"
                      >
                        <span>
                          A Guide To Attracting Clients To Your Agency
                        </span>
                      </Accordion.Toggle>
                    </div>
                    <Accordion.Collapse eventKey="collapse4">
                      <div className="accordion-content">
                        <p>
                          Sed ut perspiciatis unde omnis iste natus error volup
                          cusantium doloremque laudantium, totam rem aperiam
                          eaque ipsa quae abillo inventore veritatis et quasi
                          architecto beatae
                        </p>
                      </div>
                    </Accordion.Collapse>
                  </div>
                  <div className={`accordion-item ${active_("5")}`}>
                    <div className="accordion-header">
                      <Accordion.Toggle
                        as="h6"
                        eventKey="collapse5"
                        onClick={() => setActive("5")}
                        data-toggle="collapse"
                      >
                        <span>
                          {` Useful Front-End boilerplate's And Starter Kits`}
                        </span>
                      </Accordion.Toggle>
                    </div>
                    <Accordion.Collapse eventKey="collapse5">
                      <div className="accordion-content">
                        <p>
                          Sed ut perspiciatis unde omnis iste natus error volup
                          cusantium doloremque laudantium, totam rem aperiam
                          eaque ipsa quae abillo inventore veritatis et quasi
                          architecto beatae
                        </p>
                      </div>
                    </Accordion.Collapse>
                  </div>
                  <div className={`accordion-item ${active_("6")}`}>
                    <div className="accordion-header">
                      <Accordion.Toggle
                        as="h6"
                        eventKey="collapse6"
                        onClick={() => setActive("6")}
                        data-toggle="collapse"
                      >
                        <span>
                          There Is No Such Thing As A CSS Absolute Unit
                        </span>
                      </Accordion.Toggle>
                    </div>
                    <Accordion.Collapse eventKey="collapse6">
                      <div className="accordion-content">
                        <p>
                          Sed ut perspiciatis unde omnis iste natus error volup
                          cusantium doloremque laudantium, totam rem aperiam
                          eaque ipsa quae abillo inventore veritatis et quasi
                          architecto beatae
                        </p>
                      </div>
                    </Accordion.Collapse>
                  </div>
                  <div className={`accordion-item ${active_("7")}`}>
                    <div className="accordion-header">
                      <Accordion.Toggle
                        as="h6"
                        eventKey="collapse7"
                        onClick={() => setActive("7")}
                        data-toggle="collapse"
                      >
                        <span>Primer On CSS Container Queries</span>
                      </Accordion.Toggle>
                    </div>
                    <Accordion.Collapse eventKey="collapse7">
                      <div className="accordion-content">
                        <p>
                          Sed ut perspiciatis unde omnis iste natus error volup
                          cusantium doloremque laudantium, totam rem aperiam
                          eaque ipsa quae abillo inventore veritatis et quasi
                          architecto beatae
                        </p>
                      </div>
                    </Accordion.Collapse>
                  </div>
                  <div className={`accordion-item ${active_("8")}`}>
                    <div className="accordion-header">
                      <Accordion.Toggle
                        as="h6"
                        eventKey="collapse8"
                        onClick={() => setActive("8")}
                        data-toggle="collapse"
                      >
                        <span>
                          Newly Supported, Modern CSS Pseudo-Class Selectors
                        </span>
                      </Accordion.Toggle>
                    </div>
                    <Accordion.Collapse eventKey="collapse8">
                      <div className="accordion-content">
                        <p>
                          Sed ut perspiciatis unde omnis iste natus error volup
                          cusantium doloremque laudantium, totam rem aperiam
                          eaque ipsa quae abillo inventore veritatis et quasi
                          architecto beatae
                        </p>
                      </div>
                    </Accordion.Collapse>
                  </div>
                  <div className={`accordion-item ${active_("9")}`}>
                    <div className="accordion-header">
                      <Accordion.Toggle
                        as="h6"
                        eventKey="collapse9"
                        onClick={() => setActive("9")}
                        data-toggle="collapse"
                      >
                        <span>
                          Useful VS Code Extensions For Front-End Developers
                        </span>
                      </Accordion.Toggle>
                    </div>
                    <Accordion.Collapse eventKey="collapse9">
                      <div className="accordion-content">
                        <p>
                          Sed ut perspiciatis unde omnis iste natus error volup
                          cusantium doloremque laudantium, totam rem aperiam
                          eaque ipsa quae abillo inventore veritatis et quasi
                          architecto beatae
                        </p>
                      </div>
                    </Accordion.Collapse>
                  </div>
                  <div className={`accordion-item ${active_("10")}`}>
                    <div className="accordion-header">
                      <Accordion.Toggle
                        as="h6"
                        eventKey="collapse10"
                        onClick={() => setActive("10")}
                        data-toggle="collapse"
                      >
                        <span>
                          There Is No Such Thing As A CSS Absolute Unit
                        </span>
                      </Accordion.Toggle>
                    </div>
                    <Accordion.Collapse eventKey="collapse10">
                      <div className="accordion-content">
                        <p>
                          Sed ut perspiciatis unde omnis iste natus error volup
                          cusantium doloremque laudantium, totam rem aperiam
                          eaque ipsa quae abillo inventore veritatis et quasi
                          architecto beatae
                        </p>
                      </div>
                    </Accordion.Collapse>
                  </div>
                  <div className={`accordion-item ${active_("11")}`}>
                    <div className="accordion-header">
                      <Accordion.Toggle
                        as="h6"
                        eventKey="collapse11"
                        onClick={() => setActive("11")}
                        data-toggle="collapse"
                      >
                        <span>Primer On CSS Container Queries</span>
                      </Accordion.Toggle>
                    </div>
                    <Accordion.Collapse eventKey="collapse11">
                      <div className="accordion-content">
                        <p>
                          Sed ut perspiciatis unde omnis iste natus error volup
                          cusantium doloremque laudantium, totam rem aperiam
                          eaque ipsa quae abillo inventore veritatis et quasi
                          architecto beatae
                        </p>
                      </div>
                    </Accordion.Collapse>
                  </div>
                  <div className={`accordion-item ${active_("11")}`}>
                    <div className="accordion-header">
                      <Accordion.Toggle
                        as="h6"
                        eventKey="collapse11"
                        onClick={() => setActive("11")}
                        data-toggle="collapse"
                      >
                        <span>
                          Newly Supported, Modern CSS Pseudo-Class Selectors
                        </span>
                      </Accordion.Toggle>
                    </div>
                    <Accordion.Collapse eventKey="collapse11">
                      <div className="accordion-content">
                        <p>
                          Sed ut perspiciatis unde omnis iste natus error volup
                          cusantium doloremque laudantium, totam rem aperiam
                          eaque ipsa quae abillo inventore veritatis et quasi
                          architecto beatae
                        </p>
                      </div>
                    </Accordion.Collapse>
                  </div>
                </Accordion>
              </div>
            </div>
            <div className="col-lg-5 col-md-10">
              <div className="faq-sidebar">
                <div className="search-widget mb-50">
                  <h3 className="search-title">Frequently Asked Questions</h3>
                  <form onSubmit={(e) => e.preventDefault()} action="#">
                    <input type="search" placeholder="Search Here" />
                    <button type="submit">
                      <i className="fas fa-search"></i>
                    </button>
                  </form>
                </div>
                <div className="video-widget">
                  <img src="assets/img/section-img/faq-video.jpg" alt="Image" />

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
      </section> */}
    </Layouts>
  );
};
export default Faq;


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