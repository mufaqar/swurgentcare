import React, { useState } from "react";
import useClickOutside from "../../useClickOutside";

const ChooseDoctor = () => {
  const [niceSelect, setNiceSelect] = useState(false);
  const [value, setValue] = useState("Choose Doctors");
  let domNode = useClickOutside(() => {
    setNiceSelect(false);
  });
  return (
    <div
      className={`nice-select ${niceSelect ? "open" : ""}`}
      tabIndex="0"
      onClick={() => setNiceSelect(!niceSelect)}
      ref={domNode}
    >
      <span className="current">{value ? value : "Choose Doctors"}</span>
      <ul className="list">
        <li data-value="1" className="option selected disabled focus">
          Choose Doctors
        </li>
        <li
          data-value="2"
          className="option"
          onClick={() => setValue("Doctor one")}
        >
          Doctor One
        </li>
        <li
          data-value="3"
          className="option"
          onClick={() => setValue("Doctor Two")}
        >
          Doctor Two
        </li>
        <li
          data-value="4"
          className="option"
          onClick={() => setValue("Doctor Three")}
        >
          Doctor Three
        </li>
        <li
          data-value="5"
          className="option"
          onClick={() => setValue("Doctor Four")}
        >
          Doctor Four
        </li>
      </ul>
    </div>
  );
};
export default ChooseDoctor;
