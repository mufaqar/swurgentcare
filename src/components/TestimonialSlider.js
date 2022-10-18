import React, { Fragment, useEffect, useState } from "react";
import Slider from "react-slick";

const TestimonialSlider = () => {
  const [nav1, setNav1] = useState(null);
  const [nav2, setNav2] = useState(null);
  const [slider1, setSlider1] = useState(null);
  const [slider2, setSlider2] = useState(null);
  useEffect(() => {
    setNav1(slider1);
    setNav2(slider2);
  });
  return (
    <Fragment>
      <div className="col-lg-4 col-md-7 col-sm-9">
        <Slider
          asNavFor={nav1}
          ref={(slider) => setSlider2(slider)}
          infinite={true}
          dots={false}
          arrows={false}
          speed={500}
          slidesToShow={3}
          slidesToScroll={1}
          autoplay={false}
          autoplaySpeed={5000}
          centerMode={true}
          centerPadding={"0"}
          focusOnSelect={true}
          className="thumb-wrapper"
        >
          <div className="single-thumb">
            <img src="assets/img/testimonial/06.jpg" alt="Thumb" />
          </div>
          <div className="single-thumb">
            <img src="assets/img/testimonial/07.jpg" alt="Thumb" />
          </div>
          <div className="single-thumb">
            <img src="assets/img/testimonial/08.jpg" alt="Thumb" />
          </div>
          <div className="single-thumb">
            <img src="assets/img/testimonial/06.jpg" alt="Thumb" />
          </div>
          <div className="single-thumb">
            <img src="assets/img/testimonial/07.jpg" alt="Thumb" />
          </div>
          <div className="single-thumb">
            <img src="assets/img/testimonial/08.jpg" alt="Thumb" />
          </div>
        </Slider>
      </div>
      <div className="col-lg-9 col-md-10">
        <Slider
          asNavFor={nav2}
          ref={(slider) => setSlider1(slider)}
          infinite={true}
          dots={false}
          arrows={false}
          speed={500}
          slidesToShow={1}
          slidesToScroll={1}
          autoplay={false}
          autoplaySpeed={5000}
          className="content-wrapper"
        >
          <div className="single-item-wrap">
            <p className="content">
              Sed ut perspiciatis unde omnis natusy error voluptatem accusantium
              doloreue laudan totam rem aperiam eaquip quae abillo inventore
              veritatis quasi architecto beatae vitae dicta sunt explicabo
            </p>
            <div className="author-info">
              <h5 className="name">Mark E. Kaminsky</h5>
              <span className="title">Web Designer</span>
            </div>
          </div>
          <div className="single-item-wrap">
            <p className="content">
              Sed ut perspiciatis unde omnis natusy error voluptatem accusantium
              doloreue laudan totam rem aperiam eaquip quae abillo inventore
              veritatis quasi architecto beatae vitae dicta sunt explicabo
            </p>
            <div className="author-info">
              <h5 className="name">Mark E. Kaminsky</h5>
              <span className="title">Web Designer</span>
            </div>
          </div>
          <div className="single-item-wrap">
            <p className="content">
              Sed ut perspiciatis unde omnis natusy error voluptatem accusantium
              doloreue laudan totam rem aperiam eaquip quae abillo inventore
              veritatis quasi architecto beatae vitae dicta sunt explicabo
            </p>
            <div className="author-info">
              <h5 className="name">Mark E. Kaminsky</h5>
              <span className="title">Web Designer</span>
            </div>
          </div>
          <div className="single-item-wrap">
            <p className="content">
              Sed ut perspiciatis unde omnis natusy error voluptatem accusantium
              doloreue laudan totam rem aperiam eaquip quae abillo inventore
              veritatis quasi architecto beatae vitae dicta sunt explicabo
            </p>
            <div className="author-info">
              <h5 className="name">Mark E. Kaminsky</h5>
              <span className="title">Web Designer</span>
            </div>
          </div>
          <div className="single-item-wrap">
            <p className="content">
              Sed ut perspiciatis unde omnis natusy error voluptatem accusantium
              doloreue laudan totam rem aperiam eaquip quae abillo inventore
              veritatis quasi architecto beatae vitae dicta sunt explicabo
            </p>
            <div className="author-info">
              <h5 className="name">Mark E. Kaminsky</h5>
              <span className="title">Web Designer</span>
            </div>
          </div>
          <div className="single-item-wrap">
            <p className="content">
              Sed ut perspiciatis unde omnis natusy error voluptatem accusantium
              doloreue laudan totam rem aperiam eaquip quae abillo inventore
              veritatis quasi architecto beatae vitae dicta sunt explicabo
            </p>
            <div className="author-info">
              <h5 className="name">Mark E. Kaminsky</h5>
              <span className="title">Web Designer</span>
            </div>
          </div>
        </Slider>
      </div>
    </Fragment>
  );
};
export default TestimonialSlider;
