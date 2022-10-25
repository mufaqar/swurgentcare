import Link from "next/link";
import React, { useState } from "react";
import { Blog, Doctor, Home, Pages, Services, Shop } from "./Menu";

const MobileMenu = ({ mobileTrigger, setMobileTrigger }) => {
  const [activeMenu, setActiveMenu] = useState("");
  const activeMenuSet = (value) =>
    setActiveMenu(activeMenu === value ? "" : value),
    activeLi = (value) =>
      value === activeMenu ? { display: "block" } : { display: "none" };
  return (
    <div
      className={`slide-panel mobile-slide-panel ${mobileTrigger ? "show-panel" : ""
        }`}
    >
      <div className="panel-overlay" onClick={() => setMobileTrigger()} />
      <div className="panel-inner">
        <div className="panel-logo">
          <img src="assets/img/logo.png" alt="" />
        </div>
        <nav className="mobile-menu">
          <ul className="primary-menu">
            <li className="active">
              <Link href="/">
                Home
              </Link>

            </li>
            <li>
              <a href="#">
                About Us
                <span
                  className="dd-trigger"
                  onClick={() => activeMenuSet("Pages")}
                >
                  <i className="fas fa-angle-down" />
                </span>
              </a>
              <ul className="sub-menu" style={activeLi("Pages")}>
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
        <a href="#" className="panel-close" onClick={() => setMobileTrigger()}>
          <i className="fal fa-times" />
        </a>
      </div>
    </div>
  );
};
export default MobileMenu;
