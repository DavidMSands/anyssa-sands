import React from 'react'

function InquirePhoto({ image, alt }) {
  return (
    <div className="column column-pics2">
        <img className="homepage" src={image} alt={alt} id="winter"/>
    </div>
  )
}

export default InquirePhoto