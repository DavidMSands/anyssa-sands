import React, { useState, useEffect } from 'react'

function Form() {
const [name, setName] = useState('')
const [email, setEmail] = useState('')
const [session, setSession] = useState('Engagement')
const [date, setDate] = useState()
const [location, setLocation] = useState('')
const [story, setStory] = useState('')
const [intention, setIntention] = useState('')
const [hear ,setHear] = useState('')
const [details, setDetails] = useState('')
const [other, setOther] = useState(null)
const [isOther, setIsOther] = useState(false)
const [isReferral, setIsReferral] = useState(false)
const [whoReferred, setWhoReferred] = useState(null)

useEffect(() => {
    if(hear === 'Other') {
        setIsOther(true)  
        setIsReferral(false)
    } else if(hear === "Referral"){
        setIsReferral(true)
        setIsOther(false)
    } else {
        setIsReferral(false)
        setIsOther(false)
    }
}, [hear])



  return (
    <div id='inquireSection'>
    <form id="inquire" method="POST" action="https://formspree.io/f/xrgjbvkp">
        <div className="formClass">
            <label for="name">NAME:*</label>
            <input type="text" placeholder="Napoleon Dynamite" name="name" id="name" required value={name} onChange={(e) => setName(e.target.value)}/>
        </div>
        <div className="formClass">
            <label for="email">EMAIL:*</label>
            <input type="email" placeholder="voteforpedro@ilikeyoursleeves.com" name="email" id="email" required value={email} onChange={(e) => setEmail(e.target.value)} />
        </div>
        <div className="formClass">
            <label for="session" >SESSION TYPE:*</label><br/>

                <select name="session-types" id="session" value={session} onChange={(e) => setSession(e.target.value)}>
                    <option value="Engagement" >Couples/Engagement</option>
                    <option value="Family" >Family</option>
                    <option value="Individual Portraits" >Individual Portraits</option>
                </select>
                {/* value={session} onChange={(e) => setSession(e.target.value)} */}
        </div>
        <div className="formClass">
            <label for="date">DESIRED DATE:</label>
            <input type="date" placeholder="MM/DD/YYYY" name="date" id="date" value={date} onChange={(e) => setDate(e.target.value)} />
        </div>
        <div className="formClass">
            <label for="location">LOCATION:</label>
            <input type="text" placeholder="Rocky Mountain National Park" name="location" id="location" value={location} onChange={(e) => setLocation(e.target.value)} />
        </div>
        <div className="formClass">
            <label for="story">TELL ME A BIT ABOUT YOU:</label>
            <textarea name="story" placeholder="Anything about you! What do you love? What are some of your interests?" id="message" cols="30" rows="10" value={story} onChange={(e) => setStory(e.target.value)}></textarea>
        </div>
        <div className="formClass">
            <label for="intention">WHAT IS YOUR VISION FOR YOUR SESSION OR EVENT?</label>
            <textarea name="intention" placeholder="What are you hoping for in your photos?" id="intention" cols="30" rows="10" value={intention} onChange={(e) => setIntention(e.target.value)}></textarea>
        </div>
        <div className="formClass">
        <label for="wheredidyouhearme" >HOW DID YOU HEAR ABOUT ME?</label><br/>

            <select name="session-types" id="session" value={hear} onChange={(e) => setHear(e.target.value)}>
                <option value="Google" >Google</option>
                <option value="Referral" >Referral</option>
                <option value="Instagram" >Instagram</option>
                <option value="Other" >Other</option>
            </select>
        </div>
        {isOther 
        ? <div className="formClass">
            <label for="other">OTHER:</label>
            <input type="text" placeholder="Where did you hear about me?" name="other" id="other" value={other} onChange={(e) => setOther(e.target.value)} />
         </div> 
        : null }
        {isReferral 
        ?  <div className="formClass">
                <label for="who-referred">WHO CAN I THANK FOR REFERRING YOU?</label>
                <input type="text" placeholder="Who referred you?" name="who-referred" id="who-referred" value={whoReferred} onChange={(e) => setWhoReferred(e.target.value)} />
            </div>
        : null }   
        <div className="formClass">
            <label for="details">ANY OTHER DETAILS YOU WOULD LIKE ME TO KNOW ABOUT?</label>
            <textarea name="details" placeholder="" id="details" cols="30" rows="10" value={details} onChange={(e) => setDetails(e.target.value)}></textarea>
        </div>

        <button type="submit"> Submit</button>
    </form>
</div>
  )
}

export default Form