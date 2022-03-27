import React from 'react'
import InquireButton from '../InquireButton'
import Instagram from '../Instagram'

function Footer() {
  return (
    <footer>
    
      <InquireButton />
      <Instagram />
        <div id="secondlogo"> <img src="https://lh3.googleusercontent.com/pw/AM-JKLWmN11s3psEDwdk5_bTuVGjZq9ieAhFaaYOtYHcJqfBtAo6qPulrAc-JfRR0zQE_WcF7zXlCoFpQkYHzK8aRpONl2fBkaxSC7Ub9awpGO7OTWYt_s4Z6gBafE3BbEPXpos9pMEO44YtKirD-Skfpj9x=s500-no?authuser=0" alt="aslogo" id="aslogo"/> </div>
        <a className='built' href="https://github.com/DavidMSands">Built by David Sands</a>
   </footer>
  )
}

export default Footer