import React, { useState } from 'react'
import investmentPhoto from '../../Data/Copy of Photography Pricing 120421-2 (1).png'
import Footer from '../HomeComponents/Footer'
import Pricing from './Pricing'

function Investment() {
const [isHidden, setIsHidden] = useState(true)


  setTimeout(() => {
    setIsHidden(false)
  }, 500)

  return (
    <div id='investment-main'>
      <div className=" split2" >
            <div className="investment" id='invest-photo'>
                <img className="" src={investmentPhoto} alt="profpic"  />
            </div>
            <div className="investment" id="pricing-guide">
              <h1 id='ivestment-port'>PORTRAIT</h1>
              <h2 id='invest-pricing'>pricing guide</h2><br/>
              {isHidden ? null : <Pricing />}
              
              {/* <div id='email-container'>
                <p id='email-add'>Don’t see what you’re looking for? Please fill out an inquiry with details about your project or event so we can create a custom package for you. Can’t wait to work with you and bring your vision to life! All other inquiries, please e-mail photography@anyssasands.com</p>
              </div> */}
            </div>
        </div>
        
        <Footer />
    </div>
  )
}

export default Investment