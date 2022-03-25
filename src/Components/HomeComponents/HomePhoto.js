import React, {useEffect} from 'react'

function HomePhoto({ image, alt }) {
    

  return (
    <div className="column column-pics">
        <img className="homepage" src={image} alt={alt} id="winter"/>
    </div>
  )
}

export default HomePhoto