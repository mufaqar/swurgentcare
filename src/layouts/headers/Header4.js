import Link from "next/link";
import React, { useState } from "react";
import { Blog, Doctor, Home, Pages, Services, Shop } from "./Menu";
import MobileMenu from "./MobileMenu";
import SlidePanel from "./SlidePanel";

const Header4 = () => {
  const [sidebarTrigger, setSidebarTrigger] = useState(false);
  const [mobileTrigger, setMobileTrigger] = useState(false);
  return (
    <header className="template-header sticky-header sticky-secondary-bg absolute-header header-four">
      <div className="header-top-note">
        <div className="container container-1450">
          <p>
            Looking For a Dental Specialists ? Right Place We Are Here For
            <a href="#">
              <i className="far fa-phone"></i>
              <strong>Call US</strong>: +012 (345) 6789
            </a>
          </p>
        </div>
      </div>
      <div className="container container-1450">
        <div className="header-navigation navigation-white-color">
          <div className="header-left">
            <div className="site-logo">
              <Link href="/">
                <a>
                  <img src="assets/img/logo-white.png" alt="" />
                </a>
              </Link>
            </div>
            <nav className="site-menu menu-gap-left item-extra-gap d-none d-xl-block">
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
          </div>
          <div className="header-right">
            <ul className="extra-icons">
              <li className="d-none d-sm-block">
                <a href="#" className="cart-icon">
                  <i className="far fa-shopping-cart"></i>
                </a>
              </li>
              <li className="d-none d-sm-block">
                <a href="#" className="wishlist-icon">
                  <i className="far fa-heart"></i>
                </a>
              </li>
              <li className="d-none d-xl-block">
                <div
                  className="off-canvas-btn"
                  onClick={() => setSidebarTrigger(true)}
                >
                  <span></span>
                </div>
              </li>
              <li className="d-xl-none">
                <a
                  href="#"
                  className="navbar-toggler"
                  onClick={() => setMobileTrigger(true)}
                >
                  <span></span>
                  <span></span>
                  <span></span>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      {/* Start Off Canvas */}
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
export default Header4;
