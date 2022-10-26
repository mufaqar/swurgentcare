import React, { Component } from "react";
import Slider from "react-slick";
import { testimonialOne } from "../sliderProps";
// import { connect } from 'react-redux'
// import {valueChange} from '../../lib/TestimonialSlice'
import { BiLeftArrow, BiRightArrow } from 'react-icons/bi'

class Testimonial extends React.Component {

    constructor(props) {
        super(props);
        this.next = this.next.bind(this);
        this.previous = this.previous.bind(this);
        this.state = {
            'value': 0,
            'color': 'bg1'
        };
    }

    // slick-active 
    next(event) {
        const el = document.querySelector('.slick-active');
        const index = el.getAttribute("data-index");
        this.slider.slickNext();
        this.setState({ 'value': index, 'color': `bg${index}` })
        this.forceUpdate()
    }
    previous() {
        const el = document.querySelector('.slick-active');
        const index = el.getAttribute("data-index");
        this.slider.slickPrev();
        this.setState({ 'value': index, 'color': `bg${index}` })
        this.forceUpdate()
    }



    render() {

        return (
            <section id='testimonial-section' className={`testimonial-section bg-color-grey section-have-half-bg ${this.state.color}`}>
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
                                    ref={c => (this.slider = c)} {...testimonialOne}
                                    className="testimonial-slider-one"
                                >
                                    {
                                        [1, 2, 3, 4].map((testimonial, i) => {
                                            return (
                                                <div className="single-testimonial-slider" key={i}>
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
                                            )
                                        })
                                    }

                                </Slider>
                                <div className="nav_btn">
                                    <div style={{ textAlign: "center" }}>
                                        <button className="button" onClick={this.previous}>
                                            <BiLeftArrow />
                                        </button>
                                        <button className="button" onClick={this.next}>
                                            <BiRightArrow />
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        );
    }
}

// const mapStateToProps = (state) => ({
//     testimonialSlice: state.testimonialSlice.value
// });
export default (Testimonial);