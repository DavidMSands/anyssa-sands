import React, { useState, useEffect } from 'react'

function Instagram() {
    const [instagram, setInstagram] = useState([])
    
    const instaKey = process.env.REACT_APP_INSTAGRAM_TOKEN

    useEffect(() => {
        fetch(`https://graph.instagram.com/me/media?fields=id,media_url,caption&access_token=${instaKey}`)
        .then(res => res.json())
        .then(data => setInstagram(data.data.slice(0,6)))
    
        }, [])

  return (
    <section id='instagram'>
        <div>
            {/* <a href='https://www.instagram.com/anyssa.sands.photography/' target="_blank">
            <img id='insta-icon' src='https://lh3.googleusercontent.com/pw/AM-JKLXZ9hkdutRd0MF-BvNqaITa5QorTZuGSyUtaILIJIReqEKiwQS9rRKP9VofSvUHe1ULobP74_wjvFTZ_WmfH2-pOebUeiTh2yDG7b_8Wt5pqDdF2OcgfDSgmMvNydytL8Pvhkiv1Q3C5RqZZI5IX1zg=s96-no?authuser=0' alt='icon' />
            </a> */}
            <p id='follow-me'>FOLLOW ME ON INSTAGRAM <a href='https://www.instagram.com/anyssa.sands.photography/' target="_blank">@anyssa.sands.photography</a> </p>
        </div>
        <div>
            {instagram.map(photo => (
                <img key={photo.id} className='insta-photos' src={photo.media_url} alt={photo.id}/>
            ))}
        </div>
    </section>
  )
}

export default Instagram