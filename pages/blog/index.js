import { gql } from '@apollo/client';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { client } from '../../lib/client';
import { getAllBlogs, GetAllServices } from '../../lib/queries';
import PageBanner from '../../src/components/PageBanner';
import Layouts from '../../src/layouts/Layouts';

const Blog = ({ all_services, blogs }) => {
  return (
    <Layouts footer={2} services={all_services}>
      <PageBanner title={'Blogs'} />
      <section className="blog_posts container mx-auto mt-5 row gx-5">
        {blogs.map((blog, i) => {
          return (
            <div key={i} className="_blog col-md-6 col-lg-4">
              <Image
                src={blog.node.featuredImage?.node.mediaItemUrl}
                alt={blog.node.title}
                width={500}
                height={500}
              />
              <Link href={`/blog/${blog.node.slug}`} passHref>
                <h4 className="">{blog.node.title}</h4>
              </Link>
            </div>
          );
        })}
      </section>
    </Layouts>
  );
};

export default Blog;

export async function getServerSideProps() {
  const GET_POSTS = gql`
    ${getAllBlogs}
  `;
  const GET_SERVICES = gql`
    ${GetAllServices}
  `;

  const response = await client.query({
    query: GET_POSTS,
  });
  // SERVICES QUERY
  const res = await client.query({
    query: GET_SERVICES,
  });

  const blogs = response?.data?.posts?.edges;
  const all_services = res?.data?.services?.nodes;

  return {
    props: {
      blogs,
      all_services,
    },
  };
}
