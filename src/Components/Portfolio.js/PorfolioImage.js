import React from 'react'


function PorfolioImage({ image, alt, imageClass, divClass, divId,  }) {
  return (
    <div className={divClass} id={divId}  >
        <img className={imageClass} src={image} alt={alt}  />
    </div>
  )
}

export default PorfolioImage