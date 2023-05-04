import { gql } from '@apollo/client';
import Head from 'next/head';
import React, { useState } from 'react';
import { Accordion } from 'react-bootstrap';
import { client } from '../lib/client';
import { GetAllServices, helpAndFaq } from '../lib/queries';
import PageBanner from '../src/components/PageBanner';
import VideoPopup from '../src/components/VideoPopup';
import Layouts from '../src/layouts/Layouts';
import OwnImage from '../src/components/OwnImage';

const Faq = ({ all_services, all_Faqs }) => {
  const { seo, faq } = all_Faqs;
  const [active, setActive] = useState('collapse1');
  const active_ = (value) => (value === active ? 'active-accordion' : '');
  const [video, setVideo] = useState(false);
  var i;
  return (
    <Layouts footer={2} services={all_services}>
      <Head>
        <title>404 | SW Urgent Care</title>
        <meta name="description" content={seo?.metaDesc} />
        <meta property="og:description" content={seo?.metaDesc} />
        <meta property="og:title" content={seo?.title} />
        <meta name="keywords" content={seo?.metaKeywords}></meta>
      </Head>
      {video && <VideoPopup close={setVideo} />}
      <PageBanner title={'404 | Page not found'} />
      <section className="faq-section section-gap">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-12">
              <div className="faq-page-content pr-xl-4">
                <h3 className="faq-title">The page never existed.</h3>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layouts>
  );
};
export default Faq;

export async function getStaticProps() {
  const GET_FAQS = gql`
    ${helpAndFaq}
  `;
  const GET_SERVICES = gql`
    ${GetAllServices}
  `;
  // HOMEPAGE QUERY
  const response = await client.query({
    query: GET_FAQS,
  });
  // SERVICES QUERY
  const res = await client.query({
    query: GET_SERVICES,
  });

  const all_Faqs = response?.data.page;
  const all_services = res?.data?.services?.nodes;
  return {
    props: {
      all_Faqs,
      all_services,
    },
  };
}
