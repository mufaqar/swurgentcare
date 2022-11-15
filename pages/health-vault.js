import { gql } from "@apollo/client";
import Head from "next/head";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { client } from "../lib/client";
import { GetAllServices, Health_Vault } from "../lib/queries";
import { sanityClient } from "../lib/studio";
import PageBanner from "../src/components/PageBanner";
import Layouts from "../src/layouts/Layouts";
import { getPagination, pagination } from "../src/utils";

const HealthVault = ({ all_Health_Vault, all_services }) => {
  console.log(
    "🚀 ~ file: health-vault.js ~ line 13 ~ HealthVault ~ all_Health_Vault",
    all_Health_Vault
  );

  const { seo } = all_Health_Vault;

  return (
    <Layouts footer={2} services={all_services}>
      <Head>
        <title>{seo?.title}</title>
        <meta name="description" content={seo?.metaDesc} />
        <meta property="og:description" content={seo?.metaDesc} />
        <meta property="og:title" content={seo?.title} />
        <meta name="keywords" content={seo?.metaKeywords}></meta>
      </Head>
      <PageBanner title={"Health Vault"} />
      <div className="content_wrapper container mx-auto mb-5 mt-5">
        <div
          className=""
          dangerouslySetInnerHTML={{
            __html: all_Health_Vault.content,
          }}
        ></div>
      </div>
    </Layouts>
  );
};
export default HealthVault;

export async function getStaticProps() {
  const GET_Health_Vault = gql`
    ${Health_Vault}
  `;
  const GET_SERVICES = gql`
    ${GetAllServices}
  `;
  // HOMEPAGE QUERY
  const response = await client.query({
    query: GET_Health_Vault,
  });
  // SERVICES QUERY
  const res = await client.query({
    query: GET_SERVICES,
  });

  const all_Health_Vault = response?.data.page;
  const all_services = res?.data?.services?.nodes;
  return {
    props: {
      all_Health_Vault,
      all_services,
    },
  };
}
