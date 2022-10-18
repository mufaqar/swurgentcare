import Link from "next/link";
import React, { useEffect, useState } from "react";
import PageBanner from "../src/components/PageBanner";
import ProductSelect from "../src/components/select/ProductSelect";
import Layouts from "../src/layouts/Layouts";
import { getPagination, pagination } from "../src/utils";

const Shop = () => {
  let sort = 6;
  const [active, setActive] = useState(1);
  const [state, setstate] = useState([]);
  useEffect(() => {
    pagination(".single-product__", sort, active);
    let list = document.querySelectorAll(".single-product__");
    setstate(getPagination(list.length, sort));
  }, [active]);
  console.log(active, active * sort);
  return (
    <Layouts>
      <PageBanner title={"Our Shop"} pageName={"Shop"} bgnone />
      <section className="shop-area section-gap">
        <div className="container">
          <div className="row">
            <div className="col-lg-9">
              <div className="product-loop-topbar">
                <div className="row align-items-center justify-content-lg-between">
                  <div className="col-sm-6">
                    <div className="product-loop-count">
                      <p>
                        Showing {active === 1 ? active : (active + 1) * 2} of{" "}
                        {active * sort} Result
                      </p>
                    </div>
                  </div>
                  <div className="col-sm-6">
                    <div className="product-loop-filter">
                      <ProductSelect />
                    </div>
                  </div>
                </div>
              </div>
              <div className="product-loop row">
                <div className="col-xl-4 col-sm-6 single-product__">
                  <div className="single-product mb-40">
                    <div className="thumbnail">
                      <img
                        src="assets/img/shop/products/01.jpg"
                        alt="Product"
                      />
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
                <div className="col-xl-4 col-sm-6 single-product__">
                  <div className="single-product mb-40">
                    <div className="thumbnail">
                      <img
                        src="assets/img/shop/products/02.jpg"
                        alt="Product"
                      />
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
                <div className="col-xl-4 col-sm-6 single-product__">
                  <div className="single-product mb-40">
                    <div className="thumbnail">
                      <img
                        src="assets/img/shop/products/03.jpg"
                        alt="Product"
                      />
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
                <div className="col-xl-4 col-sm-6 single-product__">
                  <div className="single-product mb-40">
                    <div className="thumbnail">
                      <img
                        src="assets/img/shop/products/04.jpg"
                        alt="Product"
                      />
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
                <div className="col-xl-4 col-sm-6 single-product__">
                  <div className="single-product mb-40">
                    <div className="thumbnail">
                      <img
                        src="assets/img/shop/products/05.jpg"
                        alt="Product"
                      />
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
                <div className="col-xl-4 col-sm-6 single-product__">
                  <div className="single-product mb-40">
                    <div className="thumbnail">
                      <img
                        src="assets/img/shop/products/06.jpg"
                        alt="Product"
                      />
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
                <div className="col-xl-4 col-sm-6 single-product__">
                  <div className="single-product mb-40">
                    <div className="thumbnail">
                      <img
                        src="assets/img/shop/products/07.jpg"
                        alt="Product"
                      />
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
                <div className="col-xl-4 col-sm-6 single-product__">
                  <div className="single-product mb-40">
                    <div className="thumbnail">
                      <img
                        src="assets/img/shop/products/08.jpg"
                        alt="Product"
                      />
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
                <div className="col-xl-4 col-sm-6 single-product__">
                  <div className="single-product mb-40">
                    <div className="thumbnail">
                      <img
                        src="assets/img/shop/products/09.jpg"
                        alt="Product"
                      />
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
                <div className="col-xl-4 col-sm-6 single-product__">
                  <div className="single-product mb-40">
                    <div className="thumbnail">
                      <img
                        src="assets/img/shop/products/10.jpg"
                        alt="Product"
                      />
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
                <div className="col-xl-4 col-sm-6 single-product__">
                  <div className="single-product mb-40">
                    <div className="thumbnail">
                      <img
                        src="assets/img/shop/products/11.jpg"
                        alt="Product"
                      />
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
                <div className="col-xl-4 col-sm-6 single-product__">
                  <div className="single-product mb-40">
                    <div className="thumbnail">
                      <img
                        src="assets/img/shop/products/12.jpg"
                        alt="Product"
                      />
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
              </div>
              <ul className="pagination product-pagination">
                <li>
                  <a
                    href="#"
                    onClick={(e) => {
                      e.preventDefault();
                      setActive(active === 1 ? 1 : active - 1);
                    }}
                  >
                    <i className="far fa-angle-left" />
                  </a>
                </li>
                {state &&
                  state.map((s, i) => (
                    <li key={i}>
                      <a
                        className={` ${active === s ? "active" : ""}`}
                        href="#"
                        onClick={(e) => {
                          e.preventDefault();
                          setActive(s);
                        }}
                      >
                        {s}
                      </a>
                    </li>
                  ))}
                <li>
                  <a
                    href="#"
                    onClick={(e) => {
                      e.preventDefault();
                      setActive(
                        active === state.length ? state.length : active + 1
                      );
                    }}
                  >
                    <i className="far fa-angle-right" />
                  </a>
                </li>
              </ul>
            </div>
            <div className="col-lg-3">
              <div className="shop-sidebar">
                <div className="widget categories-widget">
                  <h5 className="widget-title">Product Categories</h5>
                  <ul>
                    <li>
                      <a href="#">Canvas Basket</a>
                    </li>
                    <li>
                      <a href="#">Decoration</a>
                    </li>
                    <li>
                      <a href="#">Essentials</a>
                    </li>
                    <li>
                      <a href="#">Furniture</a>
                    </li>
                    <li>
                      <a href="#">Interior</a>
                    </li>
                    <li>
                      <a href="#">Light</a>
                    </li>
                    <li>
                      <a href="#">Outdoor</a>
                    </li>
                  </ul>
                </div>
                <div className="widget price-filter-widget">
                  <h5 className="widget-title">Filter by Price</h5>
                </div>
                <div className="widget product-widget">
                  <h5 className="widget-title">Sale Product</h5>
                  <ul>
                    <li>
                      <div className="thumbnail">
                        <img
                          src="assets/img/shop/products/sidebar-1.jpg"
                          alt="Thumbnail"
                        />
                      </div>
                      <div className="content">
                        <h6 className="title">
                          <a href="#">Face Mask</a>
                        </h6>
                        <span className="price">65</span>
                      </div>
                    </li>
                    <li>
                      <div className="thumbnail">
                        <img
                          src="assets/img/shop/products/sidebar-2.jpg"
                          alt="Thumbnail"
                        />
                      </div>
                      <div className="content">
                        <h6 className="title">
                          <a href="#">Medical Glove</a>
                        </h6>
                        <span className="price">65</span>
                      </div>
                    </li>
                    <li>
                      <div className="thumbnail">
                        <img
                          src="assets/img/shop/products/sidebar-3.jpg"
                          alt="Thumbnail"
                        />
                      </div>
                      <div className="content">
                        <h6 className="title">
                          <a href="#">Body Belts</a>
                        </h6>
                        <span className="price">65</span>
                      </div>
                    </li>
                  </ul>
                </div>
                <div className="widget tags-widget">
                  <h5 className="widget-title">Product Tags</h5>
                  <ul>
                    <li>
                      <a href="#">Contemporary</a>
                    </li>
                    <li>
                      <a href="#">Medical</a>
                    </li>
                    <li>
                      <a href="#">Minimal</a>
                    </li>
                    <li>
                      <a href="#">Face Mask</a>
                    </li>
                    <li>
                      <a href="#">Covid 19</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layouts>
  );
};
export default Shop;
