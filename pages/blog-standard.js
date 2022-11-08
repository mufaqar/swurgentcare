import Link from "next/link";
import React, { useEffect, useState } from "react";
import { sanityClient } from "../lib/studio";
import PageBanner from "../src/components/PageBanner";
import Layouts from "../src/layouts/Layouts";
import { getPagination, pagination } from "../src/utils";

const  BlogStandard = ({services}) => {
  let sort = 2;
  const [active, setActive] = useState(1);
  const [state, setstate] = useState([]);
  useEffect(() => {
    pagination(".single-blog-post", sort, active);
    let list = document.querySelectorAll(".single-blog-post");
    setstate(getPagination(list.length, sort));
  }, [active]);
  return (
    <Layouts footer={2} services={services}>
      <PageBanner title={"Health Vault"} bgnone />

    </Layouts>
  );
};
export default  BlogStandard;


export async function getStaticProps() {
  const services = await sanityClient.fetch(`*[_type == "services"]{
    title,
    slug,
  }`);

  return {
    props: {
      services,
    }
  };
}