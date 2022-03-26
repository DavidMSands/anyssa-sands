import React, { useState, useEffect } from 'react'
import {portfolioImages10, portfolioImages2, portfolioImages3, portfolioImages4, portfolioImages5 } from './Data'
import PorfolioImage from './PorfolioImage'


function PortfolioImageContainer() {
    
  return (
    <>
    <section id='portfolio-container'>
        {/* <div className='split-3'>
            {portfolioImages1.map(image => (
                <PorfolioImage 
                image={image.image} 
                alt={image.alt} 
                imageClass={image.imageClass}
                divClass={image.divClass}
                divId={image.divID}
                setSelectedImage={setSelectedImage}
                />
            ))}
        </div>
        
        <div className='split-3 padding'>
            {portfolioImages3.map(image => (
                <PorfolioImage 
                image={image.image} 
                alt={image.alt} 
                imageClass={image.imageClass}
                divClass={image.divClass}
                divId={image.divID}
                setSelectedImage={setSelectedImage}
                />
            ))}
        </div>
        
        <div className='split-3 padding'>
            {portfolioImages4.map(image => (
                <PorfolioImage 
                image={image.image} 
                alt={image.alt} 
                imageClass={image.imageClass}
                divClass={image.divClass}
                divId={image.divID}
                setSelectedImage={setSelectedImage}
                />
            ))}
        </div>
        <div className='split-3 padding'>
            {portfolioImages2.map(image => (
                <PorfolioImage 
                image={image.image} 
                alt={image.alt} 
                imageClass={image.imageClass}
                divClass={image.divClass}
                divId={image.divID}
                setSelectedImage={setSelectedImage}
                />
            ))}
        </div>
        <div className='split-3 padding'>
            {portfolioImages5.map(image => (
                <PorfolioImage 
                image={image.image} 
                alt={image.alt} 
                imageClass={image.imageClass}
                divClass={image.divClass}
                divId={image.divID}
                setSelectedImage={setSelectedImage}
                />
            ))}
        </div> */}
        <div id='photos'>
            {portfolioImages10.map(image => (
                <PorfolioImage 
                image={image.image} 
                alt={image.alt} 
                imageClass={image.imageClass}
                divClass={image.divClass}
                divId={image.divID}
                />
            ))}
        </div>
    </section>    
    </> 
            
  )
}

export default PortfolioImageContainer