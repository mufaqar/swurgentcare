import Link from "next/link";
import React, { useState } from "react";
import { Blog, Doctor, Home, Pages, Services, Shop } from "./Menu";
import MobileMenu from "./MobileMenu";

const Header5 = () => {
  const [mobileTrigger, setMobileTrigger] = useState(false);
  return (
    <header className="template-header sticky-header sticky-header header-five">
      <div className="header-top-list-two d-none d-lg-block">
        <div className="container container-1300">
          <div className="list-items">
            <div className="single-list-item">
              <div className="contact-info">
                <div className="icon">
                  <img src="assets/img/icon/clock.png" alt="Icon" />
                </div>
                <div className="content">
                  <span className="info-title">Opening Hour</span>
                  <a href="#" className="info-desc">
                    Sun - Friday, 08 am - 09 pm
                  </a>
                </div>
              </div>
            </div>
            <div className="single-list-item">
              <div className="contact-info">
                <div className="icon">
                  <img src="assets/img/icon/map.png" alt="Icon" />
                </div>
                <div className="content">
                  <span className="info-title">Medical Address</span>
                  <a href="#" className="info-desc">
                    55 Main Road, USA
                  </a>
                </div>
              </div>
            </div>
            <div className="single-list-item">
              <div className="contact-info">
                <div className="icon">
                  <img src="assets/img/icon/phone.png" alt="Icon" />
                </div>
                <div className="content">
                  <span className="info-title">Phone Number</span>
                  <a href="#" className="info-desc">
                    +012(345) 456
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container container-1600">
        <div className="header-navigation">
          <div className="header-left">
            <div className="site-logo">
              <Link href="/">
                <a>
                  <img src="assets/img/logo-3.png" alt="" />
                </a>
              </Link>
            </div>
          </div>
          <div className="header-center ml-xl-0 ml-auto">
            <nav className="site-menu item-extra-gap d-none d-xl-block">
              <ul className="primary-menu">
                <li>
                  <Link href="/">
                    <a>
                      Home
                      <span className="dd-trigger">
                        <i className="far fa-plus" />
                      </span>
                    </a>
                  </Link>
                  <ul className="sub-menu">
                    <Home />
                  </ul>
                </li>
                <li>
                  <Link href="about">About</Link>
                </li>
                <li>
                  <a href="#">
                    Pages
                    <span className="dd-trigger">
                      <i className="far fa-plus" />
                    </span>
                  </a>
                  <ul className="sub-menu">
                    <li>
                      <Link href="service">
                        <a>
                          Services
                          <span className="dd-trigger">
                            <i className="far fa-plus" />
                          </span>
                        </a>
                      </Link>
                      <ul className="sub-menu">
                        <Services />
                      </ul>
                    </li>
                    <Pages />
                  </ul>
                </li>
                <li>
                  <Link href="/doctor">
                    <a>
                      Doctors
                      <span className="dd-trigger">
                        <i className="far fa-plus" />
                      </span>
                    </a>
                  </Link>
                  <ul className="sub-menu">
                    <Doctor />
                  </ul>
                </li>
                <li>
                  <Link href="blog-standard">
                    <a>
                      Blog
                      <span className="dd-trigger">
                        <i className="far fa-plus" />
                      </span>
                    </a>
                  </Link>
                  <ul className="sub-menu">
                    <Blog />
                  </ul>
                </li>
                <li>
                  <Link href="/shop">
                    <a>
                      Shop
                      <span className="dd-trigger">
                        <i className="far fa-plus" />
                      </span>
                    </a>
                  </Link>
                  <ul className="sub-menu">
                    <Shop />
                  </ul>
                </li>
                <li>
                  <Link href="/contact">Contact</Link>
                </li>
              </ul>
            </nav>
            <ul className="extra-icons">
              <li className="d-none d-sm-block">
                <a href="#" className="search-btn">
                  <i className="far fa-search" />
                </a>
              </li>
              <li className="d-none d-sm-block">
                <a href="#" className="cart-icon">
                  <i className="far fa-shopping-cart" />
                </a>
              </li>
              <li className="d-none d-sm-block">
                <a href="#" className="wishlist-icon">
                  <i className="far fa-heart" />
                </a>
              </li>
              <li className="d-xl-none">
                <a
                  href="#"
                  className="navbar-toggler"
                  onClick={() => setMobileTrigger(true)}
                >
                  <span />
                  <span />
                  <span />
                </a>
              </li>
            </ul>
          </div>
          <div className="header-right d-none d-lg-flex">
            <ul className="extra-icons">
              <li>
                <a href="#" className="template-btn template-btn-tertiary">
                  Get A Quote <i className="far fa-plus" />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <MobileMenu
        mobileTrigger={mobileTrigger}
        setMobileTrigger={() => setMobileTrigger(false)}
      />
    </header>
  );
};
export default Header5;
