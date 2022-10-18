function PrevArrow({ className, onClick, icon, extraClass }) {
  return (
    <button
      className={`${extraClass ? extraClass : className} slick-arrow`}
      onClick={onClick}
    >
      <i className={icon ? icon : "far fa-angle-left"}></i>
    </button>
  );
}

function NextArrow({ className, onClick, icon, extraClass }) {
  return (
    <button
      className={`${extraClass ? extraClass : className} slick-arrow`}
      onClick={onClick}
    >
      <i className={icon ? icon : "far fa-angle-right"}></i>
    </button>
  );
}
export const testimonialOne = {
  infinite: true,
  dots: true,
  arrows: false,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 5000,
};
export const heroSlider = {
  infinite: true,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: false,
  autoplaySpeed: 5000,
  speed: 500,
  arrows: true,
  fade: false,
  dots: false,
  swipe: true,
  nextArrow: <NextArrow extraClass={"next-arrow"} />,
  prevArrow: <PrevArrow extraClass={"prev-arrow"} />,
  // appendArrows: document && document.querySelector(".hero-slider-arrow"),
  responsive: [
    {
      breakpoint: 768,
      settings: {
        arrows: false,
      },
    },
  ],
};
export const TestimonialsSliderTwo = {
  infinite: true,
  dots: false,
  arrows: true,
  speed: 500,
  slidesToShow: 2,
  slidesToScroll: 1,
  autoplay: false,
  autoplaySpeed: 5000,
  nextArrow: <NextArrow extraClass={"next-arrow"} />,
  prevArrow: <PrevArrow extraClass={"prev-arrow"} />,
  // appendArrows: document && document.querySelector(".hero-slider-arrow"),
  responsive: [
    {
      breakpoint: 992,
      settings: {
        slidesToShow: 1,
      },
    },
  ],
};
export const partnerSlider = {
  infinite: true,
  dots: false,
  arrows: false,
  speed: 500,
  slidesToShow: 5,
  slidesToScroll: 1,
  autoplay: false,
  autoplaySpeed: 5000,
  responsive: [
    {
      breakpoint: 992,
      settings: {
        slidesToShow: 3,
      },
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 2,
      },
    },
    {
      breakpoint: 425,
      settings: {
        slidesToShow: 1,
      },
    },
  ],
};
export const ProductCarouselSlider = {
  infinite: true,
  dots: true,
  arrows: false,
  speed: 500,
  slidesToShow: 4,
  slidesToScroll: 1,
  autoplay: false,
  autoplaySpeed: 5000,
  // nextArrow:
  //   '<button className="slick-arrow next-arrow"><i className="far fa-angle-right"></i></button>',
  // prevArrow:
  //   '<button className="slick-arrow prev-arrow"><i className="far fa-angle-left"></i></button>',
  // appendArrows: sliderArrow,
  responsive: [
    {
      breakpoint: 992,
      settings: {
        slidesToShow: 2,
      },
    },
    {
      breakpoint: 576,
      settings: {
        slidesToShow: 1,
      },
    },
  ],
};
