import React, { useEffect } from "react";
import { scrollTopFun } from "../utils";

const ScrollTop = () => {
  useEffect(() => {
    scrollTopFun();
  }, []);
  const onClick = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  return (
    <a
      className="back-to-top"
      href="#"
      id="scroll-top"
      onClick={() => onClick()}
    >
      <i className="far fa-angle-up"></i>
    </a>
  );
};
export default ScrollTop;
