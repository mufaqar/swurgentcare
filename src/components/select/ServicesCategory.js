import React, { useState } from "react";
import useClickOutside from "../../useClickOutside";

const ServicesCategory = () => {
  const [select, setSelect] = useState(false);
  const [value, setValue] = useState("Services Category");
  let domNode = useClickOutside(() => {
    setSelect(false);
  });
  return (
    <div
      className={`nice-select ${select ? "open" : ""}`}
      tabIndex="0"
      onClick={() => setSelect(!select)}
      ref={domNode}
    >
      <span className="current">{value ? value : "Services Category"}</span>
      <ul className="list">
        <li data-value="1" className="option selected disabled">
          Services Category
        </li>
        <li
          data-value="2"
          className="option"
          onClick={() => setValue("Service One")}
        >
          Service One
        </li>
        <li
          data-value="3"
          className="option"
          onClick={() => setValue("Service Two")}
        >
          Service Two
        </li>
        <li
          data-value="4"
          className="option"
          onClick={() => setValue("Service Three")}
        >
          Service Three
        </li>
        <li
          data-value="5"
          className="option"
          onClick={() => setValue("Service Four")}
        >
          Service Four
        </li>
      </ul>
    </div>
  );
};
export default ServicesCategory;
