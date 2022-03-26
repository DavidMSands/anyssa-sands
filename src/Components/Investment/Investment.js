import React from 'react'
import investmentPhoto from '../../Data/Copy of Photography Pricing 120421-2 (1).png'
import Footer from '../HomeComponents/Footer'

function Investment() {
  return (
    <div id='investment-main'>
      <div className=" split2" >
            <div className="investment" id='invest-photo'>
                <img className="" src={investmentPhoto} alt="profpic"  />
            </div>
            <div className="investment" id="pricing-guide">
              <h1 id='ivestment-port'>PORTRAIT</h1>
              <h2 id='invest-pricing'>pricing guide</h2><br/>
              <h3>CLASSIC</h3>
              <p><i>Starting at $200</i></p><br/>
              <ul>
                <li>~ 1 hour session</li>
                <li>~ 1 location</li>
                <li>~ 1-2 outfits</li>
                <li>~ 25+ edited images & online gallery</li>
                <li>~ Turnaround time is 2 weeks</li>
              </ul><br/>
              <h3>DELUXE</h3>
              <p><i>Starting at $375</i></p><br/>
              <ul>
                <li>~ 2 hour session</li>
                <li>~ 2 location</li>
                <li>~ 2 outfits</li>
                <li>~ 50+ edited images & online gallery</li>
                <li>~ Turnaround time is 4 weeks</li>
              </ul><br/>
              <h3>LUXURY</h3>
              <p><i>Starting at $550</i></p><br/>
              <ul>
                <li>~ 3 hour session</li>
                <li>~ 2-3 location</li>
                <li>~ 2-3 outfits</li>
                <li>~ 75+ edited images & online gallery</li>
                <li>~ Turnaround time is 5 weeks</li>
              </ul>
            </div>
        </div>
        <Footer />
    </div>
  )
}

export default Investment