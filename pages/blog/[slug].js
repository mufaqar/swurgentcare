import React from "react";
import PageBanner from "../../src/components/PageBanner";
import Layouts from "../../src/layouts/Layouts";
import { useRouter } from "next/router";
import PortableText from "react-portable-text";
import { client } from "../../lib/client";
import { gql } from "@apollo/client";
import { GetAllServices } from "../../lib/queries";
import Head from "next/head";
import OwnImage from "../../src/components/OwnImage";

const Slug = ({ post, all_services }) => {
  const router = useRouter();
  const { seo } = post;

  return (
    <Layouts footer={2} services={all_services}>
      <Head>
        <title>{seo?.title}</title>
        <meta name="description" content={seo?.metaDesc} />
        <meta
          property="og:image"
          content={post.featuredImage?.node.mediaItemUrl}
        />
        <meta property="og:description" content={seo?.metaDesc} />
        <meta property="og:title" content={seo?.title} />
        <meta name="keywords" content={seo?.metaKeywords}></meta>
      </Head>
      <PageBanner title={post?.title} />
      <>
        <section className="services-area section-gap">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-12 order-lg-last">
                <div className="service-details-wrapper">
                  <figure className="mt-b relative">
                    <OwnImage path={post.featuredImage?.node.mediaItemUrl} />
                  </figure>
                  <div className="content_wrapper blog_single">
                    <div
                      className=""
                      dangerouslySetInnerHTML={{
                        __html: post?.content,
                      }}
                    ></div>
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

const GET_POST = gql`
  query getSinglePost($id: ID!) {
    post(id: $id, idType: URI) {
      id
      title
      slug
      content
      seo {
        title
        metaDesc
        metaKeywords
      }
      featuredImage {
        node {
          mediaItemUrl
        }
      }
    }
  }
`;

export async function getStaticProps({ params }) {
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

  const post = response.data?.post;
  const all_services = res?.data?.services?.nodes;

  return {
    props: {
      post,
      all_services,
    },
  };
}

export async function getStaticPaths() {
  const paths = [];
  return {
    paths,
    fallback: "blocking",
  };
}
