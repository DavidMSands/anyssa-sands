import React, {useEffect, useState} from 'react'
import Footer from '../HomeComponents/Footer'
import {ThingsILove, MeetMyFamily, ColoradoLove} from './ConditionalRender'


function AboutContainer() {
    // const [aboutMeDisplay, setAboutMeDisplay] = useState('THINGS I LOVE')
    
    
    // function renderAboutMe() {
    //     console.log(aboutMeDisplay)
    //     if(aboutMeDisplay === 'THINGS I LOVE') {
    //         return <ThingsILove />
    //     } else if (aboutMeDisplay === 'MEET MY FAMILY') {
    //         return <MeetMyFamily />
    //     } else {
    //         return <ColoradoLove />
    //     }
    // }   
  
  return (
    <section id="about">
        <div className="row-2 split" >
            <div className="column2 photoprof">
                <div className="vl"></div>
                <img className="prof" src="https://lh3.googleusercontent.com/pw/AM-JKLWpLNWXSHLnfgbjtGwf_-LpmtMBQpE62l70Kv2FrkSDCPhp8gfvWV8SVsQOiVxwlmedJkQQ0NiPI2wl8dSB1lwpLVyNKfug7FRsrKQXy1kKdXrWJ4m5JBHKNmFUV7to2ozj36dYF_gMlHMKVAAT7k8r=w978-h1304-no?authuser=0" alt="profpic" id="profpic" />
            </div>
            <div className="column2" id="mainaboutp">
                <p id="hello"></p>
                <p id='anyssa-sands'>Hi, I'm Anyssa!</p>
                <p id="aboutme-p2">I grew up in Denver, CO, but have lived in Nashville, TN, and Southern California. Not long after marrying my husband (who also grew up in Denver), we moved right on back to Colorado where we now live with our two crazy Australian Shepherds. </p>
                <p id="aboutme-p3">I’m a creative at heart, with a background in commercial songwriting, so I love art that connects people through storytelling. As someone who has always enjoyed writing in its many forms, what I love about photography is that it tells a story visually, without any words at all, yet can still have a deeply emotional impact on the human soul. A photo is so much more than just an image…it freezes a specific moment in time that you can carry with you forever.</p>
                <p>My hope is to capture your story with authenticity and create something beautiful that you will hold onto for a lifetime! Photos are such sweet memories you can feel over and over again, and I want to give you something tangible and timeless you can pass down in your family for generations to come.</p>
                <hr id="aboutline" />
                <div id="buttonid">
                    <button type="button" id="inquireButton" onclick="location.href='inquire.html'">Let's connect!</button>
                </div>
            </div>
        </div>
        
        <div id='review-background'>
            <div id='review-1-container'>
                <p id='kind-words'>Kind Words</p>
                <p id='review-1'>"Anyssa was absolutely incredible to work with! I’m personally not very comfortable with having my picture taken and she was warm, encouraging and gave just the right amount of advice. She also gave us so many options and poses and locations in a pretty short span of time. Highly recommend!"</p>
                <p id='review-1-people'>~Thomas & Savanna</p>
            </div>
        </div>
        {/* <div id='fun-things-background'>
            <section id='fun-things'>
                <div className='split-3' id='about-selections'>
                    <div className='about-me-facts' >
                        <p className='about-me-fact' onClick={(e) => setAboutMeDisplay('THINGS I LOVE')}>THINGS I LOVE</p>
                    </div>
                    <div className='about-me-facts' >
                        <p className='about-me-fact' onClick={(e) => setAboutMeDisplay('MEET MY FAMILY')}>MEET MY FAMILY</p>
                    </div>
                    <div className='about-me-facts' >
                        <p className='about-me-fact' onClick={(e) => setAboutMeDisplay('COLORADO LOVE')}>COLORADO LOVE</p>
                    </div>
                </div>
                <div>
                    {renderAboutMe()}
                </div>
            </section>
        </div> */}
        <Footer />
    </section>
    
  )
}

export default AboutContainer

