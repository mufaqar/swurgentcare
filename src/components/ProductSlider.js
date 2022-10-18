import React, { useEffect, useState } from "react";
import Slider from "react-slick";

const ProductSlider = () => {
  const [nav1, setNav1] = useState(null);
  const [nav2, setNav2] = useState(null);
  const [slider1, setSlider1] = useState(null);
  const [slider2, setSlider2] = useState(null);
  useEffect(() => {
    setNav1(slider1);
    setNav2(slider2);
  });

  return (
    <div className="product-gallery-wrapper">
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
        className="main-gallery"
      >
        <div className="single-image">
          <img src="assets/img/shop/product-details/01.jpg" alt="Image" />
        </div>
        <div className="single-image">
          <img src="assets/img/shop/product-details/02.jpg" alt="Image" />
        </div>
        <div className="single-image">
          <img src="assets/img/shop/product-details/03.jpg" alt="Image" />
        </div>
        <div className="single-image">
          <img src="assets/img/shop/product-details/02.jpg" alt="Image" />
        </div>
      </Slider>
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
        centerMode={false}
        focusOnSelect={true}
        className="thumb-gallery"
      >
        <div className="single-image">
          <img src="assets/img/shop/product-details/01-thumb.jpg" alt="Image" />
        </div>
        <div className="single-image">
          <img src="assets/img/shop/product-details/02-thumb.jpg" alt="Image" />
        </div>
        <div className="single-image">
          <img src="assets/img/shop/product-details/03-thumb.jpg" alt="Image" />
        </div>
        <div className="single-image">
          <img src="assets/img/shop/product-details/02-thumb.jpg" alt="Image" />
        </div>
      </Slider>
    </div>
  );
};
export default ProductSlider;
