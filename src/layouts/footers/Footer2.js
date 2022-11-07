import Link from "next/link";

const Footer2 = ({ noNewsletters, services }) => {
  
  return (
    <footer
      className={`template-footer template-footer-white ${noNewsletters ? "" : "have-cta-boxes-two"
        }`}
    >
      <div className="footer-inner bg-color-primary">
        <div className="container">
          <div className="footer-widgets">
            <div className="row">
              <div className="col-lg-3 col-md-8">
                <div className="widget text-widget">
                  <div className="footer-logo">
                    <img src="assets/site-logo.png" alt="swurgentcare" />
                  </div>
                 
                  <ul className="content__list">
                    <li>
                      <a href="https://goo.gl/maps/inpkL6wUZqMR3opX7">
                        <i className="far fa-map-marker-alt" />
                          <p>5400 Promenade Wy Ste 1500, Sugar Land, TX 77478, United States</p>
                      </a>
                    </li> 
                    
                    <li>
                      <a href="tel:01267899">
                        <i className="far fa-phone" />
                        <p>(346) 341-7573</p>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="row justify-content-center">
                  <div className="col-xl-5 col-sm-6">
                    <div className="d-flex justify-content-lg-center">
                      <div className="widget nav-widget">
                        <h4 className="widget-title">Popular Services</h4>
                        <ul className="nav-links">
                          {
                            services?.slice(0, 7).map((item, i) => (
                              <li key={i} className="capatalize">
                                <Link href={item.slug.current}>{item.title}</Link>
                              </li>
                            ))
                          }
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div className="col-xl-5 col-sm-6">
                    <div className="d-flex justify-content-lg-center">
                      <div className="widget nav-widget">
                        <h4 className="widget-title pt-4 pb-2"></h4>
                        <ul className="nav-links">
                          {
                            services?.slice(7, services.length).map((item, i) => (
                              <li key={i} className="capatalize">
                                <Link href={item.slug.current}>{item.title}</Link>
                              </li>
                            ))
                          }
                          
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-10">
                <div className="widget newsletters-widget">
                  <h4 className="widget-title"><i className="far fa-clock" /> Opening Hours</h4>
                  
                  <ul className="opening-notice mt-30 nav-links">
                    <li className="">Monday: <span className="last">9:00 am to 8:00 pm</span></li>
                    <li className="">Tuesday: <span className="last">9:00 am to 8:00 pm</span></li>
                    <li className="">Wednesday: <span className="last">9:00 am to 8:00 pm</span></li>
                    <li className="">Thursday: <span className="last">9:00 am to 8:00 pm</span></li>
                    <li className="">Friday: <span className="last">9:00 am to 8:00 pm</span></li>
                    <li className="">Saturday: <span className="last">9:00 am to 3:00 pm</span></li>
                    <li className="">Sunday: <span className="last">9:00 am to 1:00 pm</span></li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="copyright-area">
            <p>
              © 2022 <Link href="/appointments">Southwest Urgent Care</Link>. All Rights Reserved
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};
export default Footer2;



