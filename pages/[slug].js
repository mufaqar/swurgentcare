import Link from 'next/link';
import Image from 'next/image';
import React from 'react';
import PageBanner from '../src/components/PageBanner';
import Layouts from '../src/layouts/Layouts';
import { useRouter } from 'next/router';
import { sanityClient } from '../lib/studio';
import PortableText from 'react-portable-text';
import { client } from '../lib/client';
import { gql } from '@apollo/client';
import { GetAllServices } from '../lib/queries';
import Head from 'next/head';
import OwnImage from '../src/components/OwnImage';

const Slug = ({ service, all_services }) => {
  console.log('🚀 ~ file: [slug].js:16 ~ Slug ~ service', service);
  const router = useRouter();
  const { seo } = service;

  return (
    <Layouts footer={2} services={all_services}>
      <Head>
        <title>{seo?.title}</title>
        <meta name="description" content={seo?.metaDesc} />
        <meta
          property="og:image"
          content={service?.servicesFields.featureImage.mediaItemUrl}
        />
        <meta property="og:description" content={seo?.metaDesc} />
        <meta property="og:title" content={seo?.title} />
        <meta name="keywords" content={seo?.metaKeywords}></meta>
      </Head>
      <PageBanner title={service.title} />
      <>
        <section className="services-area section-gap">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-8 order-lg-last">
                <div className="service-details-wrapper">
                  <figure className="mt-b relative">
                    <OwnImage
                      path={service?.servicesFields.featureImage.mediaItemUrl}
                    />
                  </figure>
                  <div className="content_wrapper">
                    <div
                      className=""
                      dangerouslySetInnerHTML={{
                        __html: service.content,
                      }}
                    ></div>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-10 order-lg-first">
                <div className="service-sidebar">
                  <div className="widget departments-list">
                    <h3 className="widget-title">Departments</h3>
                    <ul>
                      {all_services.map((service, i) => (
                        <li key={i}>
                          <a
                            className="cap"
                            onClick={() => router.push(`/${service?.slug}`)}
                          >
                            <i className="far fa-angle-right" />
                            {service.title}
                          </a>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="widget working-schedule">
                    <h3 className="widget-title">Working Hour</h3>
                    <ul>
                      <li>
                        <span>
                          <i className="far fa-angle-right" />
                          Monday
                        </span>
                        <span>09.00 – 08.00</span>
                      </li>
                      <li>
                        <span>
                          <i className="far fa-angle-right" />
                          Tuesday
                        </span>
                        <span>09.00 – 08.00</span>
                      </li>
                      <li>
                        <span>
                          <i className="far fa-angle-right" />
                          Wednesday
                        </span>
                        <span>09.00 – 08.00</span>
                      </li>
                      <li>
                        <span>
                          <i className="far fa-angle-right" />
                          Thursday
                        </span>
                        <span>09.00 – 08.00</span>
                      </li>
                      <li>
                        <span>
                          <i className="far fa-angle-right" />
                          Friday
                        </span>
                        <span>09.00 – 08.00</span>
                      </li>
                      <li>
                        <span>
                          <i className="far fa-angle-right" />
                          Saturday
                        </span>
                        <span>09.00 – 03.00</span>
                      </li>
                      <li>
                        <span>
                          <i className="far fa-angle-right" />
                          Sunday
                        </span>
                        <span>09.00 – 01.00</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/*====== Service Area End ======*/}
        {/*====== Related Services Start ======*/}
      </>
    </Layouts>
  );
};
export default Slug;

// export const getServerSideProps = async (pageContext) => {
//   const pageSlug = pageContext.query.slug;
//   const query = `*[ _type == "services" && slug.current == $pageSlug ][0]{
//     title,
//     icon{
//       asset->{
//         url
//       },
//     },
//     slug,
//     poster{
//       asset->{
//         url
//       },
//     },
//     content,
//   }`;

//   const service = await sanityClient.fetch(query, {pageSlug});
//   const services = await sanityClient.fetch(ServicesQuery);
//   return {
//     props: {
//       services,
//         service
//     },
//   }
// };

const GET_POST = gql`
  query getSingleService($id: ID!) {
    service(id: $id, idType: URI) {
      id
      servicesFields {
        featureImage {
          mediaItemUrl
        }
        icon {
          mediaItemUrl
        }
      }
      content
      title
      slug
      seo {
        metaDesc
        metaKeywords
        title
        fullHead
      }
    }
  }
`;

export async function getStaticProps({ params }) {
  console.log(
    '🚀 ~ file: [slug].js ~ line 242 ~ getStaticProps ~ params',
    params
  );
  const response = await client.query({
    query: GET_POST,
    variables: {
      id: params.slug,
    },
  });

  const GET_SERVICES = gql`
    ${GetAllServices}
  `;
  const res = await client.query({
    query: GET_SERVICES,
  });
  // const response = await getPostByUri(params.uri)
  const service = response.data?.service;
  const all_services = res?.data?.services?.nodes;

  return {
    props: {
      service,
      all_services,
    },
  };
}

export async function getStaticPaths() {
  const paths = [];
  return {
    paths,
    fallback: 'blocking',
  };
}
