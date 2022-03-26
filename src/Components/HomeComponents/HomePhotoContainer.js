import React, {useEffect} from 'react'
import HomePhoto from './HomePhoto'
import Footer from './Footer'
import InquireButton from '../InquireButton'
import kaitOverShoulder from '../../Data/Home/kait-over-shoulder.jpg'
import suzeStare from '../../Data/Home/suze detail.png'
import grayKait from '../../Data/Home/kait-gray-art.jpg'
import allie from '../../Data/Home/Allie.jpg'
import loriClose from '../../Data/Home/lori-close.jpg'

function HomePhotoContainer() {
    const homePhotosArry =[
        {
            id: 1,
            image: allie,
            alt: "winterKait"
          },
          {
            id: 2,
            image: suzeStare,
            alt: "artisticTrey"
          },
          {
            id: 3,
            image: loriClose,
            alt: "grayKait"
          }
    ]
  return (
      <>
    <section id="pics">
        <div className="row">
            {homePhotosArry.map(photo => (
                <HomePhoto image={photo.image} alt={photo.alt} />
            ))}
        </div>
    </section>
    <section>
        <div id="bobD">
            <p><i>"Take care of all your memories, for you cannot relive them."</i> -<i>Bob Dylan</i></p>
        </div>
        <div className="back-img"></div>
    </section>
    <div>
    <Footer />
    </div>
    </>
  )
}

export default HomePhotoContainer