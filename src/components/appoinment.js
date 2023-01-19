import React from 'react'
import { useRouter } from 'next/router'
import Link from 'next/link';

export default function Appoinment() {
    const router = useRouter();
    
    return (
        <>
            <section className='container mx-auto d-flex row appoinment_section'>
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
                    <a href="https://www.solvhealth.com/r/book-online/AXj6Oj/9o5Ft-2I5TecBSvaTW8Ej/slots/today" target="_blank"><button>Get an appoinment</button></a>
                </div>
                <div className='col-md-3 _card'>
                    <h5 className="title"> <span className='last'>Saturday</span></h5>
                    <p>09:00 am to 03:00 pm</p>
                    <a href="https://www.solvhealth.com/r/book-online/AXj6Oj/9o5Ft-2I5TecBSvaTW8Ej/slots/today" target="_blank"><button>Get an appoinment</button></a>
                </div>
                <div className='col-md-3 _card'>
                    <h5 className="title"> <span className='last'>Sunday</span></h5>
                    <p>09:00 am to 01:00 pm</p>
                    <a href="https://www.solvhealth.com/r/book-online/AXj6Oj/9o5Ft-2I5TecBSvaTW8Ej/slots/today" target="_blank"><button>Get an appoinment</button></a>
                </div>

            </section>
        </>
    )
}
