import Head from 'next/head';
import React, { useState } from 'react';

import PageBanner from '../src/components/PageBanner';
import VideoPopup from '../src/components/VideoPopup';
import Layouts from '../src/layouts/Layouts';

const Faq = ({ all_services, all_Faqs }) => {
  return (
    <Layouts footer={2} services={all_services}>
      <Head>
        <title>404 | SW Urgent Care</title>
      </Head>

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
