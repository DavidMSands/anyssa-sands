import React, { useState, lazy } from 'react'
import investmentPhoto from '../../Data/Copy of Photography Pricing 120421-2 (1).png'
import Footer from '../HomeComponents/Footer'
import Pricing from './Pricing'
import { motion } from 'framer-motion'

function Investment() {
const [isHidden, setIsHidden] = useState(true)


  setTimeout(() => {
    setIsHidden(false)
  }, 500)

  return (
    <motion.div initial={{opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
    <div id='investment-main'>
      <div className=" split2" >
            <div className="investment" id='invest-photo'>
                <img className="" src={investmentPhoto} alt="profpic"  />
            </div>
            <div className="investment" id="pricing-guide">
              <h1 id='ivestment-port'>PORTRAIT</h1>
              <h2 id='invest-pricing'>pricing guide</h2><br/>
              {isHidden ? null : <Pricing />}
            </div>
        </div>
        <div id='email-container'>
            <p className='email-add'>Don’t see what you’re looking for? Please fill out an inquiry with details about your project or event so we can create a custom package for you. I can’t wait to work with you and bring your vision to life!</p><br/>
            <p className='email-add'>For all other inquiries, please e-mail photography@anyssasands.com</p>
        </div>
        <Footer />
    </div>
    </motion.div>
  )
}

export default Investment