import React, { useState } from "react";
import useClickOutside from "../../useClickOutside";

const ProductSelect = () => {
  const [niceSelect, setNiceSelect] = useState(false);
  const [value, setValue] = useState("Sort by Newness");
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
      <span className="current">{value ? value : "Sort by Newness"}</span>
      <ul className="list">
        <li
          data-value="1"
          className="option selected focus"
          onClick={() => setValue("Sort by Newness")}
        >
          Sort by Newness
        </li>
        <li
          data-value="2"
          className="option"
          onClick={() => setValue("Sort by Name")}
        >
          Sort by Name
        </li>
        <li
          data-value="3"
          className="option"
          onClick={() => setValue("Sort by Rating")}
        >
          Sort by Rating
        </li>
        <li
          data-value="4"
          className="option"
          onClick={() => setValue("Sort by Price")}
        >
          Sort by Price
        </li>
      </ul>
    </div>
  );
};
export default ProductSelect;
