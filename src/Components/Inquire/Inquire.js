import React from 'react'
import Form from './Form'
import { motion } from 'framer-motion'
import InquirePhoto from './InquirePhoto'
import suzeCute from '../../Data/Portfolio/suze-cute.jpg'
import kait from '../../Data/Portfolio/Kait 2.png'
import sharon from '../../Data/Portfolio/Sharon and Todd (3 of 4).jpg'


function Inquire() {
  const inquirePhotosArry =[
    {
        id: 1,
        image: suzeCute,
        alt: "winterKait"
      },
      {
        id: 2,
        image: kait,
        alt: "artisticTrey"
      },
      {
        id: 3,
        image: sharon,
        alt: "grayKait"
      }
]

  return (
    <motion.div initial={{opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
      <div id='inquire-main'>
        {/* <div id='contact-container'>
          <h1 id='contact-me'>Inquire</h1>
        </div> */}
      <div className="quote2">
            <p><i>“What you have caught on film is captured forever… It remembers little things, long after you have forgotten everything.”</i> <i>–Aaron Siskind</i></p><br/>
        </div>
      <section>
        <div className="row3">
            {inquirePhotosArry.map(photo => (
                <InquirePhoto image={photo.image} alt={photo.alt} />
            ))}
        </div>
    </section>
        <div id='inquire-text'>
          <p id='hello'>Please fill out the form below and I’ll be in touch within 48 hours. I can’t wait to meet you and capture your vision!</p>
          <p id='anyssa'>-Anyssa</p>
        </div>
        <Form />
      
          <div id='footer'>
            <div id="secondlogo"> <img src="https://lh3.googleusercontent.com/pw/AM-JKLWmN11s3psEDwdk5_bTuVGjZq9ieAhFaaYOtYHcJqfBtAo6qPulrAc-JfRR0zQE_WcF7zXlCoFpQkYHzK8aRpONl2fBkaxSC7Ub9awpGO7OTWYt_s4Z6gBafE3BbEPXpos9pMEO44YtKirD-Skfpj9x=s500-no?authuser=0" alt="aslogo" id="aslogo"/> </div>
            <a className='built' href="https://github.com/DavidMSands">Built by David Sands</a>
          </div>
      </div>
    </motion.div>
  )
}

export default Inquire