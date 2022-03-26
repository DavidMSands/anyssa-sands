import React from 'react'
import Form from './Form'
import Instagram from '../Instagram'
import benchFlowers from '../../Data/bench-flowers.jpg'

function Inquire() {
  return (
    <div id='inquire-main'>
      <div id='inquire-photo-container'>
        <img src={benchFlowers} alt='bench-flowers' id='inquire-photo' />
      </div>
      <div id='inquire-text'>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer dignissim vestibulum lacus. Donec ac hendrerit sapien. Sed a pretium diam. Donec eu lorem eget lectus aliquet faucibus. Mauris rutrum ullamcorper pharetra. Praesent ut condimentum ante. Maecenas blandit magna sit amet justo consequat, vitae fringilla leo ultricies. Duis eget magna at dui tempor convallis egestas eu est. Mauris rhoncus imperdiet turpis nec auctor.</p><br/>
        <p>Pellentesque finibus elit non lacus vestibulum sagittis. Quisque diam tellus, lobortis sit amet diam sit amet, ultricies consequat metus. Donec eget malesuada erat. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.</p>
      </div>
      <Form />
     
        <div id="secondlogo"> <img src="https://lh3.googleusercontent.com/pw/AM-JKLWmN11s3psEDwdk5_bTuVGjZq9ieAhFaaYOtYHcJqfBtAo6qPulrAc-JfRR0zQE_WcF7zXlCoFpQkYHzK8aRpONl2fBkaxSC7Ub9awpGO7OTWYt_s4Z6gBafE3BbEPXpos9pMEO44YtKirD-Skfpj9x=s500-no?authuser=0" alt="aslogo" id="aslogo"/> </div>
        <a href="https://github.com/DavidMSands">Built by David Sands</a>
    </div>
  )
}

export default Inquire