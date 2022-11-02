import React from 'react'

export default function Appoinment() {
    return (
        <>
            <section className='container mx-auto d-flex appoinment_section'>
                <div className='col-md-3 _card'>
                    <div className="section-heading">
                        <h2 className="title">Make an a <span className='last'>appointment</span></h2>
                        <h6 className='underline mb-3'>(346) 341-7573</h6>
                        <span className='_text'>We believe that the experience you receive at Southwest Urgent Care Center matters. </span>
                    </div>
                </div>
                <div className='col-md-3 _card'>
                    <h5 className="title"> <span className='last'>Monday - Friday</span></h5>
                    <p>9:00 am to 8:00 pm</p>
                    <button>Get an appoinment</button>
                </div>
                <div className='col-md-3 _card'>
                    <h5 className="title"> <span className='last'>Saturday</span></h5>
                    <p>09:00 am to 03:00 pm</p>
                    <button>Get an appoinment</button>
                </div>
                <div className='col-md-3 _card'>
                    <h5 className="title"> <span className='last'>Sunday</span></h5>
                    <p>09:00 am to 01:00 pm</p>
                    <button>Get an appoinment</button>
                </div>

            </section>
        </>
    )
}