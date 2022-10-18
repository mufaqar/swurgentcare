import Link from "next/link";
import React from "react";
import PageBanner from "../src/components/PageBanner";
import ProductSlider from "../src/components/ProductSlider";
import Layouts from "../src/layouts/Layouts";

const ProductDetails = () => {
  return (
    <Layouts>
      <PageBanner title={"Product Details"} pageName="Details" />
      <section className="shop-area section-gap">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-5 col-md-9 col-sm-11">
              <ProductSlider />
            </div>
            <div className="col-lg-6 col-md-10">
              <div className="product-short-summary">
                <div className="summary-top">
                  <div className="summary-top-left">
                    <h3 className="product-title">Medical Face Mask</h3>
                    <span>Feature flexible, Cotton-covered</span>
                  </div>
                  <div className="summary-top-right">
                    <span className="product-price">$75</span>
                    <ul className="product-rating">
                      <li>
                        <i className="fas fa-star"></i>
                      </li>
                      <li>
                        <i className="fas fa-star"></i>
                      </li>
                      <li>
                        <i className="fas fa-star"></i>
                      </li>
                      <li>
                        <i className="fas fa-star"></i>
                      </li>
                      <li>
                        <i className="far fa-star"></i>
                      </li>
                      <li className="rating-count">(012)</li>
                    </ul>
                  </div>
                </div>
                <ul className="color-filter">
                  <li>Color</li>
                  <li>
                    <span></span>
                  </li>
                  <li>
                    <span></span>
                  </li>
                  <li>
                    <span></span>
                  </li>
                  <li>
                    <span></span>
                  </li>
                  <li>
                    <span></span>
                  </li>
                </ul>
                <p className="short-info">
                  A collection of textile samples lay spread out on the table -
                  Samsa was travelling salesman - and above it there hung a
                  picture that he had recently cut out of an illustrated
                  magazine and housed in a nice, gilded frame. It showed a lady
                  fitted out with a fur hat and fur boa who sat upright, raising
                  a heavy.
                </p>
                <div className="row product-meta">
                  <div className="col-sm-6">
                    <ul className="categories">
                      <li>
                        <span>Categories:</span>
                      </li>
                      <li>
                        <a href="#">Essentials,</a>
                      </li>
                      <li>
                        <a href="#">Lights</a>
                      </li>
                    </ul>
                  </div>
                  <div className="col-sm-6">
                    <ul className="tags">
                      <li>
                        <span>Tags:</span>
                      </li>
                      <li>
                        <a href="#">Decor,</a>
                      </li>
                      <li>
                        <a href="#">Interior</a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="product-cart-form">
                  <form onSubmit={(e) => e.preventDefault()} action="#">
                    <div className="quantity-wrap">
                      <input type="number" value="1" className="quantity" />
                    </div>
                    <div className="submit-btn-wrap">
                      <button type="submit" className="template-btn">
                        Add to Cart
                      </button>
                    </div>
                    <div className="wishlist-btn-wrap">
                      <a href="#" className="wishlist-btn">
                        <i className="far fa-heart"></i>
                      </a>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
          <div className="description-wrapper">
            <div className="product-description">
              <h4 className="common-title">Description</h4>
              <p>
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
                quae ab illo inventore veritatis et quasi architecto beatae
                vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia
                voluptas sit aspernatur aut odit aut fugit, sed quia
                consequuntur magni dolores eos qui ratione voluptatem sequi
                nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor
                sit amet, consectetur, adipisci velit, sed quia non numquam eius
                modi tempora incidunt ut labore et dolore magnam aliquam quaerat
                voluptatem. Ut enim ad minima veniam, quis nostrum
                exercitationem ullam corporis suscipit laboriosam, nisi ut
                aliquid ex ea commodi consequatur? Quis autem vel eum iure
                reprehenderit qui in ea voluptate velit esse quam nihil
                molestiae consequatur, vel illum qui dolorem eum
              </p>
            </div>
            <div className="product-review">
              <h4 className="common-title">People Comments</h4>
              <ul className="review-list">
                <li>
                  <div className="review-body">
                    <div className="review-avatar">
                      <img
                        src="assets/img/shop/product-details/reviewer-01.jpg"
                        alt="Avatar"
                      />
                    </div>
                    <div className="review-content">
                      <h6 className="name">John F. Medina</h6>
                      <span className="date">25 May 2021</span>
                      <p>
                        Sed ut perspiciatis unde omnis iste natus error sit
                        voluptatem accusantium doloremque laudantium, totam rem
                        aperiam, eaque ipsa quae ab illo inventore veritatis et
                        quasi architecto beatae vitae dicta sunt explicabo.
                      </p>
                      <a href="#" className="reply-link">
                        Reply <i className="fas fa-long-arrow-right"></i>
                      </a>
                    </div>
                  </div>
                  <ul className="children">
                    <li>
                      <div className="review-body">
                        <div className="review-avatar">
                          <img
                            src="assets/img/shop/product-details/reviewer-02.jpg"
                            alt="Avatar"
                          />
                        </div>
                        <div className="review-content">
                          <h6 className="name">Jeffrey T. Kelly</h6>
                          <span className="date">25 May 2021</span>
                          <p>
                            Sed ut perspiciatis unde omnis iste natus error sit
                            voluptatem accusantium doloremque laudantium, totam
                            rem aperiam, eaque ipsa quae ab illo inventore
                            veritatis et quasi architecto beatae vitae dicta
                            sunt explicabo.
                          </p>
                          <a href="#" className="reply-link">
                            Reply <i className="fas fa-long-arrow-right"></i>
                          </a>
                        </div>
                      </div>
                    </li>
                  </ul>
                </li>
                <li>
                  <div className="review-body">
                    <div className="review-avatar">
                      <img
                        src="assets/img/shop/product-details/reviewer-03.jpg"
                        alt="Avatar"
                      />
                    </div>
                    <div className="review-content">
                      <h6 className="name">Richard B. Zellmer</h6>
                      <span className="date">25 May 2021</span>
                      <p>
                        Sed ut perspiciatis unde omnis iste natus error sit
                        voluptatem accusantium doloremque laudantium, totam rem
                        aperiam, eaque ipsa quae ab illo inventore veritatis et
                        quasi architecto beatae vitae dicta sunt explicabo.
                      </p>
                      <a href="#" className="reply-link">
                        Reply <i className="fas fa-long-arrow-right"></i>
                      </a>
                    </div>
                  </div>
                </li>
              </ul>
              <div className="review-form-area">
                <h4 className="common-title">Leave Your Review</h4>
                <form
                  onSubmit={(e) => e.preventDefault()}
                  action="#"
                  className="review-form"
                >
                  <div className="row">
                    <div className="col-12">
                      <ul className="rating-selection mb-30">
                        <li>
                          <span>Your Rating</span>
                        </li>
                        <li>
                          <i className="fas fa-star"></i>
                        </li>
                        <li>
                          <i className="fas fa-star"></i>
                        </li>
                        <li>
                          <i className="fas fa-star"></i>
                        </li>
                        <li>
                          <i className="fas fa-star"></i>
                        </li>
                        <li>
                          <i className="fas fa-star"></i>
                        </li>
                      </ul>
                    </div>
                    <div className="col-sm-6">
                      <div className="input-field mb-30">
                        <input type="text" placeholder="Full Name" />
                      </div>
                    </div>
                    <div className="col-sm-6">
                      <div className="input-field mb-30">
                        <input type="text" placeholder="Email Address" />
                      </div>
                    </div>
                    <div className="col-12">
                      <div className="input-field mb-30">
                        <textarea placeholder="Write Review"></textarea>
                      </div>
                    </div>
                    <div className="col-12">
                      <div className="input-field">
                        <button type="submit" className="template-btn">
                          Submit Review <i className="far fa-plus"></i>
                        </button>
                      </div>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
          <div className="related-products">
            <h2 className="related-title">Related Products</h2>
            <div className="product-loop row">
              <div className="col-lg-3 col-sm-6">
                <div className="single-product mt-40">
                  <div className="thumbnail">
                    <img src="assets/img/shop/products/01.jpg" alt="Product" />
                    <a href="#" className="wishlist-btn">
                      <i className="far fa-heart"></i>
                    </a>
                  </div>
                  <div className="content">
                    <div className="content-left">
                      <h6 className="name">
                        <Link href="/product-details">
                          <a>Rubber Glove Isolated</a>
                        </Link>
                      </h6>
                      <ul className="categories">
                        <li>
                          <a href="">Medical,</a>
                        </li>
                        <li>
                          <a href="">Covid - 19 </a>
                        </li>
                      </ul>
                    </div>
                    <div className="content-right">
                      <span className="price">$24</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-sm-6">
                <div className="single-product mt-40">
                  <div className="thumbnail">
                    <img src="assets/img/shop/products/02.jpg" alt="Product" />
                    <a href="#" className="wishlist-btn">
                      <i className="far fa-heart"></i>
                    </a>
                  </div>
                  <div className="content">
                    <div className="content-left">
                      <h6 className="name">
                        <Link href="/product-details">
                          <a>Medical Face Mask</a>
                        </Link>
                      </h6>
                      <ul className="categories">
                        <li>
                          <a href="">Medical,</a>
                        </li>
                        <li>
                          <a href="">Covid - 19 </a>
                        </li>
                      </ul>
                    </div>
                    <div className="content-right">
                      <span className="price">$24</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-sm-6">
                <div className="single-product mt-40">
                  <div className="thumbnail">
                    <img src="assets/img/shop/products/03.jpg" alt="Product" />
                    <a href="#" className="wishlist-btn">
                      <i className="far fa-heart"></i>
                    </a>
                  </div>
                  <div className="content">
                    <div className="content-left">
                      <h6 className="name">
                        <Link href="/product-details">
                          <a>Covid - 19 Face Mask</a>
                        </Link>
                      </h6>
                      <ul className="categories">
                        <li>
                          <a href="">Medical,</a>
                        </li>
                        <li>
                          <a href="">Covid - 19 </a>
                        </li>
                      </ul>
                    </div>
                    <div className="content-right">
                      <span className="price">$24</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-sm-6">
                <div className="single-product mt-40">
                  <div className="thumbnail">
                    <img src="assets/img/shop/products/04.jpg" alt="Product" />
                    <a href="#" className="wishlist-btn">
                      <i className="far fa-heart"></i>
                    </a>
                  </div>
                  <div className="content">
                    <div className="content-left">
                      <h6 className="name">
                        <Link href="/product-details">
                          <a>Rubber Glove Isolated</a>
                        </Link>
                      </h6>
                      <ul className="categories">
                        <li>
                          <a href="">Medical,</a>
                        </li>
                        <li>
                          <a href="">Covid - 19 </a>
                        </li>
                      </ul>
                    </div>
                    <div className="content-right">
                      <span className="price">$24</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layouts>
  );
};
export default ProductDetails;
