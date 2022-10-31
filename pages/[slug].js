import Link from "next/link";
import Image from "next/image";
import React from "react";
import PageBanner from "../src/components/PageBanner";
import Layouts from "../src/layouts/Layouts";
import { useRouter } from 'next/router'
import { sanityClient } from "../lib/studio";
import PortableText from "react-portable-text"


const ServicesQuery =`*[_type == "services"]{
  title,
  icon{
    asset->{
      url
    },
  },
  slug,
  poster{
    asset->{
      url
    },
  },
  content,
}`



const Slug = ({ service, services }) => {
  
  const router = useRouter()

  return (
    <Layouts footer={2} services={services}>
      <PageBanner title={service.title} />
      <>
        <section className="services-area section-gap">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-8 order-lg-last">
                <div className="service-details-wrapper">
                  <figure className="mt-b relative">
                    <img src={service?.poster.asset.url} alt="skin-infection"  />
                  </figure>
                  <div className="content_wrapper">
                    <PortableText
                      // Pass in block content straight from Sanity.io
                      content={service.content}
                      // Optionally override marks, decorators, blocks, etc. in a flat
                      // structure without doing any gymnastics
                      serializers={{
                        h1: props => <h1 style={{ color: "#D31F2C" }} {...props} />,
                        h2: props => <h1 style={{ color: "#D31F2C" }} {...props} />,
                        li: ({ children }) => <li className="special-list-item">{children}</li>
                      }}
                    />
                  </div>


                </div>
              </div>
              <div className="col-lg-4 col-md-10 order-lg-first">
                <div className="service-sidebar">
                  <div className="widget departments-list">
                    <h3 className="widget-title">Departments</h3>
                    <ul>
                      {
                        services.map((service, i) => (
                          <li key={i}>
                            <a className="cap" onClick={() => router.push(`/${service?.slug.current}`)}>
                              <i className="far fa-angle-right" />
                              {service.title}
                            </a>
                          </li>
                        ))
                      }
                    </ul>
                  </div>
                  <div className="widget appointment-form">
                    <h3 className="widget-title">Appointment</h3>
                    <p>
                      Consectetur adipiscing elit sed do eiusmod tempor
                      incididunt
                    </p>
                    <form onSubmit={(e) => e.preventDefault()} action="#">
                      <div className="input-field">
                        <input type="text" placeholder="Full Name" />
                      </div>
                      <div className="input-field">
                        <input type="text" placeholder="Departments" />
                      </div>
                      <div className="input-field">
                        <input type="text" placeholder="Choose Doctors" />
                      </div>
                      <div className="input-field">
                        <input type="text" placeholder="Date & Time" />
                      </div>
                      <div className="input-field">
                        <button type="submit" className="template-btn">
                          Appointment Now <i className="far fa-plus" />
                        </button>
                      </div>
                    </form>
                  </div>
                  <div className="widget working-schedule">
                    <h3 className="widget-title">Working Hour</h3>
                    <ul>
                      <li>
                        <span>
                          <i className="far fa-angle-right" />
                          Monday
                        </span>
                        <span>0 8.00 – 21.00</span>
                      </li>
                      <li>
                        <span>
                          <i className="far fa-angle-right" />
                          Tuesday
                        </span>
                        <span>0 8.00 – 21.00</span>
                      </li>
                      <li>
                        <span>
                          <i className="far fa-angle-right" />
                          Wednesday
                        </span>
                        <span>0 8.00 – 21.00</span>
                      </li>
                      <li>
                        <span>
                          <i className="far fa-angle-right" />
                          Thursday
                        </span>
                        <span>0 8.00 – 21.00</span>
                      </li>
                      <li>
                        <span>
                          <i className="far fa-angle-right" />
                          Friday
                        </span>
                        <span>08.00 – 17.00</span>
                      </li>
                      <li>
                        <span>
                          <i className="far fa-angle-right" />
                          Saturday
                        </span>
                        <span>08.00 – 17.00</span>
                      </li>
                      <li>
                        <span>
                          <i className="far fa-angle-right" />
                          Sunday
                        </span>
                        <span>08.00 – 17.00</span>
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
    </Layouts >
  );
};
export default Slug;




export const getServerSideProps = async (pageContext) => {
  const pageSlug = pageContext.query.slug;
  const query = `*[ _type == "services" && slug.current == $pageSlug ][0]{
    title,
    icon{
      asset->{
        url
      },
    },
    slug,
    poster{
      asset->{
        url
      },
    },
    content,
  }`;

  const service = await sanityClient.fetch(query, {pageSlug});
  const services = await sanityClient.fetch(ServicesQuery);
  return {
    props: {
      services,
        service
    },
  }
}; 