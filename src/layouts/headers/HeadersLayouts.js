import React, { Fragment } from "react";
import Header1 from "./Header1";

const HeadersLayouts = ({ headerTopbar, position }) => {
  return (
    <Fragment>
      <Header1 headerTopbar={headerTopbar} position={position} />
    </Fragment>
  );
};
export default HeadersLayouts;
