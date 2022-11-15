import React from 'react'

export default function HeroBanner({text}) {

    const bannerHeading = text.replace(/quality care/g, '<span class="last">quality care</span>');         

    return (
        <main className='hero_banner'>
            <div className='container mx-auto hero_wrapper row'>
            {text}
                <div className='left '>
                    <h2>{<div dangerouslySetInnerHTML={{ __html: bannerHeading}}></div>}</h2>
                </div>
                {/* <section className="doctors-section col-md-6 right ">
                    <div className="container">
                        <div className="doctor-details-wrapper">
                            <div className="row justify-content-center con_">
                                <div className="working-hour-table mt-md-50 bgwhite">
                                    <div className="section-heading mb-30">
                                        <h2 className="title">Make an a <span className='last'>appointment</span></h2>
                                        <h6 className='underline mb-3'>(346) 341-7573</h6>
                                        <span className='_text'>We believe that the experience you receive at Southwest Urgent Care Center matters. </span>
                                    </div>
                                    <ul>
                                        <li>
                                            <span>Monday - Friday</span>
                                            <span>9:00 am to 8:00 pm</span>
                                        </li>
                                        
                                        <li>
                                            <span>Saturday</span>
                                            <span>09:00 am to 03:00 pm</span>
                                        </li>
                                        <li>
                                            <span>Sunday</span>
                                            <span>09:00 am to 1:00 pm</span>
                                        </li>
                                        
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </section> */}
            </div>
        </main>
    )
}
