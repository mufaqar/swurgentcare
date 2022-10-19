import Link from "next/link";
import React, { useState } from "react";
import { Blog, Doctor, Home, Pages, Services, Shop } from "./Menu";
import MobileMenu from "./MobileMenu";
import SlidePanel from "./SlidePanel";

const Header1 = ({ headerTopbar, position }) => {
  const [sidebarTrigger, setSidebarTrigger] = useState(false);
  const [mobileTrigger, setMobileTrigger] = useState(false);
  return (
    <header
      className={`template-header sticky-header header-one ${
        position ? position + "-header" : ""
      }`}
    >
      {headerTopbar && (
        <div className="header-topbar d-none d-md-block">
          <div className="container-fluid container-1400">
            <div className="row align-items-center justify-content-between">
              <div className="col-lg-4">
                <ul className="topbar-menu">
                  <li style={{listStyle:'none'}}>
                    5900 Chimney Rock, Suite X Houston, Texas 77081
                  </li>
                </ul>
              </div>
              <div className="col-lg-8">
                <ul className="contact-info">
                  <li>
                    <a href="#">
                      <i className="far fa-envelope" /> Email :
                      swurgentcare@outlook.com
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="far fa-phone" /> Call US : (346) 341-7573
                    </a>
                  </li>
                  <li>
                    <div className="social-icons">
                      <a href="#">
                        <i className="fab fa-facebook-f" />
                      </a>
                      <a href="#">
                        <i className="fab fa-twitter" />
                      </a>
                      <a href="#">
                        <i className="fab fa-youtube" />
                      </a>
                      <a href="#">
                        <i className="fab fa-linkedin-in" />
                      </a>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      )}

      <div className="container-fluid container-1400">
        <div className="header-navigation">
          <div className="header-left">
            <div className="site-logo">
              <Link href="/">
                <img src="assets/img/logo.png" alt="swurgentcare" />
              </Link>
            </div>
            <nav className="site-menu menu-gap-left d-none d-xl-block">
              <ul className="primary-menu">
                <li>
                  <Link href="/index-two">
                    <a>Home</a>
                  </Link>
                </li>
                <li>
                  <Link href="about">
                    <a>
                      About
                      <span className="dd-trigger">
                        <i className="far fa-plus" />
                      </span>
                    </a>
                  </Link>
                  <ul className="sub-menu">
                    <Pages />
                  </ul>
                </li>
                <li>
                  <a href="#">
                    Services
                  </a>
                </li>
                <li>
                  <Link href="/doctor">
                    <a>
                      Providers
                    </a>
                  </Link>
                </li>
                <li>
                  <Link href="blog-standard">
                    <a>
                      Health Vault
                    </a>
                  </Link>
                </li>
                <li>
                  <Link href="/contact">Contact Us</Link>
                </li>
              </ul>
            </nav>
          </div>
          <div className="header-right">
            <ul className="extra-icons">
              <li className="d-none d-sm-block">
                <div className="header-search-area">
                  <form onSubmit={(e) => e.preventDefault()} action="#">
                    <input type="search" placeholder="Search Here" />
                    <button type="submit">
                      <i className="far fa-search" />
                    </button>
                  </form>
                </div>
              </li>
              <li className="d-none d-xl-block">
                <div
                  className="off-canvas-btn style-two"
                  onClick={() => setSidebarTrigger(true)}
                >
                  <span />
                </div>
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
export default Header1;
