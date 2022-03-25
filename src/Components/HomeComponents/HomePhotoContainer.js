import React, {useEffect} from 'react'
import HomePhoto from './HomePhoto'
import Footer from './Footer'
import InquireButton from '../InquireButton'
import kaitOverShoulder from '../../Data/Home/kait-over-shoulder.jpg'
import suzeDetail from '../../Data/Home/suze detail.jpg'
import grayKait from '../../Data/Home/kait-gray-art.jpg'

function HomePhotoContainer() {
    const homePhotosArry =[
        {
            id: 1,
            image: kaitOverShoulder,
            alt: "winterKait"
          },
          {
            id: 2,
            image: suzeDetail,
            alt: "artisticTrey"
          },
          {
            id: 3,
            image: grayKait,
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