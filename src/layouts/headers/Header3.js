import Link from "next/link";
import React, { useState } from "react";
import { Blog, Doctor, Home, Pages, Services, Shop } from "./Menu";
import MobileMenu from "./MobileMenu";
import SlidePanel from "./SlidePanel";

const Header3 = () => {
  const [sidebarTrigger, setSidebarTrigger] = useState(false);
  const [mobileTrigger, setMobileTrigger] = useState(false);
  return (
    <header className="template-header header-three">
      <div className="header-top-list-one d-none d-lg-block">
        <div className="container">
          <div className="list-items">
            <div className="single-list-item">
              <div className="site-logo">
                <Link href="/">
                  <a>
                    <img src="assets/img/logo-white.png" alt="" />
                  </a>
                </Link>
              </div>
            </div>
            <div className="single-list-item">
              <div className="contact-info">
                <div className="icon">
                  <img src="assets/img/icon/map-white.png" alt="Icon" />
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
                  <img src="assets/img/icon/phone-white.png" alt="Icon" />
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
      <div className="container">
        <div className="header-navigation">
          <div className="header-left">
            <div className="site-logo d-lg-none">
              <Link href="/">
                <a>
                  <img src="assets/img/logo.png" alt="Seeva" />
                </a>
              </Link>
            </div>
            <nav className="site-menu item-extra-gap item-left d-none d-lg-block">
              <ul className="primary-menu">
                <li className="active">
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
                  <Link href="/about">About</Link>
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
                      <Link href="/service">
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
                  <Link href="/doctors">
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
                  <Link href="/blog-standard">
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
                  <Link href="/contact">
                    <a>Contact</a>
                  </Link>
                </li>
                <li>
                  <a href="#" className="search-btn">
                    <i className="far fa-search" />
                  </a>
                </li>
              </ul>
            </nav>
          </div>
          <div className="header-right">
            <ul className="extra-icons">
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
              <li className="d-none d-lg-block">
                <div
                  className="off-canvas-btn"
                  onClick={() => setSidebarTrigger(true)}
                >
                  <span />
                </div>
              </li>
              <li className="d-lg-none">
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
        </div>
      </div>
      <SlidePanel
        sidebarTrigger={sidebarTrigger}
        setSidebarTrigger={() => setSidebarTrigger(false)}
      />
      {/* End Off Canvas */}
      {/* Start Mobile Panel */}
      <MobileMenu
        mobileTrigger={mobileTrigger}
        setMobileTrigger={() => setMobileTrigger(false)}
      />
      {/* Start Mobile Panel */}
    </header>
  );
};
export default Header3;
