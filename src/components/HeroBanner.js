import React from 'react'

export default function HeroBanner() {
    return (
        <main className='hero_banner '>
            <div className='hero_wrapper row'>
                <div className='left col-md-6'>
                    <h2>SOUTHWEST URGENT CARE ENSURAING QUALITY CARE WITH COMPASSION</h2>
                </div>
                <section className="doctors-section col-md-6 right ">
                    <div className="container">
                        <div className="doctor-details-wrapper">
                            <div className="row justify-content-center con_">
                                <div className="working-hour-table mt-md-50 bgwhite">
                                    <div className="section-heading mb-30">
                                        <h2 className="title">Make an a appointment</h2>
                                        <h6 className='underline mt-2 mb-3'>(346) 341-7573</h6>
                                        <span className='_text'>Lorem ipsum dolor sit amet error soluta consectetur, adipisicing elit. 
                                            Quibusdam error soluta </span>
                                    </div>
                                    <ul>
                                        <li>
                                            <span>Monday - Thursday</span>
                                            <span>08:00 am to 21:00 pm</span>
                                        </li>
                                        <li>
                                            <span>Friday</span>
                                            <span>08:00 am to 17:00 pm</span>
                                        </li>
                                        <li>
                                            <span>Saturday</span>
                                            <span>08:00 am to 17:00 pm</span>
                                        </li>
                                        <li>
                                            <span>Sunday</span>
                                            <span>08:00 am to 17:00 pm</span>
                                        </li>
                                        
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </main>
    )
}
