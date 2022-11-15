import { gql } from "@apollo/client";
import Link from "next/link";
import client from "../lib/client";
import React from "react";
import { GetAllServices, Providers } from "../lib/queries";
import PageBanner from "../src/components/PageBanner";
import Layouts from "../src/layouts/Layouts";

export default function doctor({ all_providers, all_services }) {
  const { seo } = all_providers;
  return (
    <div>
      <Layouts footer={2} services={all_services}>
        <PageBanner title={"Meet The Doctors"} />
      </Layouts>
    </div>
  );
}

export async function getStaticProps() {
  const GET_providers = gql`
    ${Providers}
  `;
  const GET_SERVICES = gql`
    ${GetAllServices}
  `;
  // HOMEPAGE QUERY
  const response = await client.query({
    query: GET_providers,
  });
  // SERVICES QUERY
  const res = await client.query({
    query: GET_SERVICES,
  });

  const all_providers = response?.data.page;
  const all_services = res?.data?.services?.nodes;
  return {
    props: {
      all_providers,
      all_services,
    },
  };
}
