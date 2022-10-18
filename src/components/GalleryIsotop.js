import Isotope from "isotope-layout";
import React, { useEffect, useRef, useState } from "react";

const GalleryIsotop = () => {
  // Isotope
  const isotope = useRef();
  const [filterKey, setFilterKey] = useState("*");
  const [activeClass, setActiveClass] = useState("*");
  useEffect(() => {
    setTimeout(() => {
      isotope.current = new Isotope(".gallery-loop", {
        itemSelector: ".single-gallery",
        layoutMode: "fitRows",
      });
    }, 300);
    return () => isotope.current.destroy();
  }, []);
  useEffect(() => {
    if (isotope.current) {
      filterKey === "*"
        ? isotope.current.arrange({ filter: `*` })
        : isotope.current.arrange({ filter: `.${filterKey}` });
    }
  }, [filterKey]);
  const handleFilterKeyChange = (key) => () => {
    setFilterKey(key);
    setActiveClass(key);
  };
  return (
    <section className="gallery-section section-gap">
      <div className="container">
        <div className="gallery-filter mb-30">
          <ul>
            <li
              className={activeClass == "*" ? "active" : ""}
              data-filter="*"
              onClick={handleFilterKeyChange("*")}
            >
              Show All
            </li>
            <li
              className={activeClass == "medical" ? "active" : ""}
              data-filter=".medical"
              onClick={handleFilterKeyChange("medical")}
            >
              Medical
            </li>
            <li
              className={activeClass == "senior-care" ? "active" : ""}
              onClick={handleFilterKeyChange("senior-care")}
              data-filter=".senior-care"
            >
              Senior Care
            </li>
            <li
              className={activeClass == "family-care" ? "active" : ""}
              onClick={handleFilterKeyChange("family-care")}
              data-filter=".family-care"
            >
              Family Care
            </li>
            <li
              className={activeClass == "dental-care" ? "active" : ""}
              onClick={handleFilterKeyChange("dental-care")}
              data-filter=".dental-care"
            >
              Dental Care
            </li>
          </ul>
        </div>
        <div className="row gallery-loop gallery-filter-item">
          <div className="col-lg-4 col-sm-6 single-gallery medical dental-care">
            <div className="gallery-item-two mt-30">
              <div className="gallery-thumbnail">
                <img src="assets/img/gallery/09.jpg" alt="Image" />
              </div>
              <div className="gallery-caption">
                <div>
                  <a href="#" className="plus-icon">
                    <i className="far fa-plus"></i>
                  </a>
                  <h3 className="title">
                    <a href="#">
                      Covid Vaccine <br /> Testing
                    </a>
                  </h3>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-sm-6 single-gallery senior-care medical">
            <div className="gallery-item-two mt-30">
              <div className="gallery-thumbnail">
                <img src="assets/img/gallery/10.jpg" alt="Image" />
              </div>
              <div className="gallery-caption">
                <div>
                  <a href="#" className="plus-icon">
                    <i className="far fa-plus"></i>
                  </a>
                  <h3 className="title">
                    <a href="#">
                      Covid Vaccine <br /> Testing
                    </a>
                  </h3>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-sm-6 single-gallery family-care dental-care">
            <div className="gallery-item-two mt-30">
              <div className="gallery-thumbnail">
                <img src="assets/img/gallery/11.jpg" alt="Image" />
              </div>
              <div className="gallery-caption">
                <div>
                  <a href="#" className="plus-icon">
                    <i className="far fa-plus"></i>
                  </a>
                  <h3 className="title">
                    <a href="#">
                      Covid Vaccine <br /> Testing
                    </a>
                  </h3>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-sm-6 single-gallery medical family-care">
            <div className="gallery-item-two mt-30">
              <div className="gallery-thumbnail">
                <img src="assets/img/gallery/12.jpg" alt="Image" />
              </div>
              <div className="gallery-caption">
                <div>
                  <a href="#" className="plus-icon">
                    <i className="far fa-plus"></i>
                  </a>
                  <h3 className="title">
                    <a href="#">
                      Covid Vaccine <br /> Testing
                    </a>
                  </h3>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-sm-6 single-gallery senior-care dental-care">
            <div className="gallery-item-two mt-30">
              <div className="gallery-thumbnail">
                <img src="assets/img/gallery/13.jpg" alt="Image" />
              </div>
              <div className="gallery-caption">
                <div>
                  <a href="#" className="plus-icon">
                    <i className="far fa-plus"></i>
                  </a>
                  <h3 className="title">
                    <a href="#">
                      Covid Vaccine <br /> Testing
                    </a>
                  </h3>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-sm-6 single-gallery family-care">
            <div className="gallery-item-two mt-30">
              <div className="gallery-thumbnail">
                <img src="assets/img/gallery/14.jpg" alt="Image" />
              </div>
              <div className="gallery-caption">
                <div>
                  <a href="#" className="plus-icon">
                    <i className="far fa-plus"></i>
                  </a>
                  <h3 className="title">
                    <a href="#">
                      Covid Vaccine <br /> Testing
                    </a>
                  </h3>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-sm-6 single-gallery medical senior-care">
            <div className="gallery-item-two mt-30">
              <div className="gallery-thumbnail">
                <img src="assets/img/gallery/15.jpg" alt="Image" />
              </div>
              <div className="gallery-caption">
                <div>
                  <a href="#" className="plus-icon">
                    <i className="far fa-plus"></i>
                  </a>
                  <h3 className="title">
                    <a href="#">
                      Covid Vaccine <br /> Testing
                    </a>
                  </h3>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-sm-6 single-gallery senior-care dental-care">
            <div className="gallery-item-two mt-30">
              <div className="gallery-thumbnail">
                <img src="assets/img/gallery/16.jpg" alt="Image" />
              </div>
              <div className="gallery-caption">
                <div>
                  <a href="#" className="plus-icon">
                    <i className="far fa-plus"></i>
                  </a>
                  <h3 className="title">
                    <a href="#">
                      Covid Vaccine <br /> Testing
                    </a>
                  </h3>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-sm-6 single-gallery medical family-care">
            <div className="gallery-item-two mt-30">
              <div className="gallery-thumbnail">
                <img src="assets/img/gallery/17.jpg" alt="Image" />
              </div>
              <div className="gallery-caption">
                <div>
                  <a href="#" className="plus-icon">
                    <i className="far fa-plus"></i>
                  </a>
                  <h3 className="title">
                    <a href="#">
                      Covid Vaccine <br /> Testing
                    </a>
                  </h3>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="read-more text-center mt-60">
          <a href="#" className="template-btn">
            View More Gallery <i className="far fa-plus"></i>
          </a>
        </div>
      </div>
    </section>
  );
};
export default GalleryIsotop;
