import React, { Fragment } from "react";
import Footer1 from "./Footer1";
import Footer2 from "./Footer2";

const Footer = ({ footer, noNewsletters }) => {
  const getFooter = () => {
    switch (footer) {
      case 1:
        return <Footer1 noNewsletters={noNewsletters} />;
      case 2:
        return <Footer2 noNewsletters={noNewsletters} />;
      default:
        return <Footer1 noNewsletters={noNewsletters} />;
    }
  };
  return <Fragment>{getFooter()}</Fragment>;
};
export default Footer;
