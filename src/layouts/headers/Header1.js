import Link from "next/link";
import React, { useState } from "react";
import OwnImage from "../../components/OwnImage";
import {Pages} from "./Menu";
import MobileMenu from "./MobileMenu";
import SlidePanel from "./SlidePanel";

const Header1 = ({ headerTopbar, position }) => {
  const [sidebarTrigger, setSidebarTrigger] = useState(false);
  const [mobileTrigger, setMobileTrigger] = useState(false);

  const origin = typeof window !== 'undefined' && window.location.origin ? window.location.origin : '';
  const URL = `${origin}`;

  return (
    <header
      className={`template-header sticky-header header-one ${position ? position + "-header" : "" }`}
    >
      {headerTopbar && (
        <>
        <div className="header-topbar d-none d-md-block">
          <div className="container-fluid container-1400">
            <div className="row align-items-center justify-content-between">
              <div className="col-lg-6">
                <div className="topbar-menu">
                  <span style={{ listStyle: 'none' }} >
                    400 Promenade Wy Ste 1500, Sugar Land, TX 77478, <span className="last">United States</span>
                  </span>
                </div>
              </div>
              <div className="col-lg-6">
                <ul className="contact-info">
                 
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
        </>
      )}

      <div className="container-fluid container-1400">
        <div className="header-navigation">
          <div className="header-left">
            <div className="site-logo">
              <Link href="/" passHref>
                <OwnImage path="/assets/site-logo.png" alt="swurgentcare" />
              </Link>
            </div>

          </div>
          <div className="header-right">
            <ul className="extra-icons">
              <nav className="site-menu menu-gap-left d-none d-xl-block">
                <ul className="primary-menu">
                  <li>
                    <Link href="/">
                      <a>Home</a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/about">
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
                    <a href={`${URL}/#services`}>
                      Services
                    </a>
                  </li>
                  <li>
                    <Link href={`${URL}/blog`}>
                      <a>Blogs</a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/doctor">
                      <a>
                        Providers
                      </a>
                    </Link>
                  </li>
                  <li>
                    <Link href="health-vault">
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
