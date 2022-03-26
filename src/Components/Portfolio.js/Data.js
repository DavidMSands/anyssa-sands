function importAll(r) {
    let images = {};
     r.keys().forEach((item) => { images[item.replace('./', '')] = r(item); });
    return images
   }

   const images = importAll(require.context('../../Data/Portfolio', false, /\.(png|jpe?g|svg)$/))



// export const portfolioImages1 = [
//     {
//         id: 1,
//         image: images['savanna-union-station.jpg'],
//         alt: "union-station",
//         imageClass: "portfolio-column-outer-left",
//         divClass: "portfolio-container",
//         divID: null
//     },
//     {
//         id: 2,
//         image: images['suze-trey-gray-cuddle.jpg'],
//         alt: "couple-pic",
//         imageClass: "portfolio-column",
//         divClass: "portfolio-container",
//         divID: null
//     },
//     {
//         id: 3,
//         image: images['cake-close.jpg'],
//         alt: "wedding-cake",
//         imageClass: "portfolio-column-outer-right",
//         divClass: "portfolio-container",
//         divID: null
//     }
    
// ]

// export const portfolioImages2 = [
//     {
//         id: 1,
//         image: images['kait-snow.jpeg'],
//         alt: "woman-in-snow",
//         imageClass: "portfolio-column-outer-left-2",
//         divClass: "portfolio-container",
//         divID: null
//     },
//     {
//         id: 2,
//         image: images['couple-grey.jpg'],
//         alt: "couple-shot",
//         imageClass: "portfolio-column-2",
//         divClass: "portfolio-container",
//         divID: null
//     },
//     {
//         id: 3,
//         image: images['sam-baby.jpg'],
//         alt: "family-port",
//         imageClass: "portfolio-column-outer-right-2",
//         divClass: "portfolio-container",
//         divID: null
//     }
    
// ]
// export const portfolioImages3 = [
//     {
//         id: 1,
//         image: images['ice-flowers.jpg'],
//         alt: "ice-flowers",
//         imageClass: "portfolio-column-outer-lef",
//         divClass: "portfolio-container-2",
//         divID: "flowers"
//     }
    
// ]
// export const portfolioImages4 = [
//     {
//         id: 1,
//         image: images['josh-kristen.jpeg'],
//         alt: "couple",
//         imageClass: "portfolio-column-outer-left",
//         divClass: "portfolio-container",
//         divID: null
//     },
//     {
//         id: 2,
//         image: images['engagement.jpg'],
//         alt: "engagement",
//         imageClass: "portfolio-column",
//         divClass: "portfolio-container",
//         divID: null
//     },
//     {
//         id: 3,
//         image: images['portland-road.jpeg'],
//         alt: "portland",
//         imageClass: "portfolio-column-outer-right",
//         divClass: "portfolio-container",
//         divID: null
//     }
    
// ]
// export const portfolioImages5 = [
//     {
//         id: 1,
//         image: images['jk-bw.jpeg'],
//         alt: "jk-bw",
//         imageClass: "portfolio-column-outer-lef",
//         divClass: "portfolio-container-2",
//         divID: "bw-jk"
//     }
    
// ]
export const portfolioImages10 = [
    {
        id: 1,
        image: images['savanna-union-station.jpg'],
        alt: "union-station",
        imageClass: "portfolio-column-outer-left",
        divClass: "portfolio-container",
        divID: null
    },
    {
        id: 2,
        image: images['suze-trey-gray-cuddle.jpg'],
        alt: "couple-pic",
        imageClass: "portfolio-column",
        divClass: "portfolio-container",
        divID: null
    },
    {
        id: 3,
        image: images['cake-close.jpg'],
        alt: "wedding-cake",
        imageClass: "portfolio-column-outer-right",
        divClass: "portfolio-container",
        divID: null
    },
    {
        id: 1,
        image: images['kait-snow.jpeg'],
        alt: "woman-in-snow",
        imageClass: "portfolio-column-outer-left-2",
        divClass: "portfolio-container",
        divID: null
    },
    {
        id: 2,
        image: images['couple-grey.jpg'],
        alt: "couple-shot",
        imageClass: "portfolio-column-2",
        divClass: "portfolio-container",
        divID: null
    },
    {
        id: 3,
        image: images['sam-baby.jpg'],
        alt: "family-port",
        imageClass: "portfolio-column-outer-right-2",
        divClass: "portfolio-container",
        divID: null
    },
    {
        id: 1,
        image: images['ice-flowers.jpg'],
        alt: "ice-flowers",
        imageClass: "portfolio-column-outer-lef",
        divClass: "portfolio-container-2",
        divID: "flowers"
    },
    {
        id: 1,
        image: images['josh-kristen.jpeg'],
        alt: "couple",
        imageClass: "portfolio-column-outer-left",
        divClass: "portfolio-container",
        divID: null
    },
    {
        id: 2,
        image: images['engagement.jpg'],
        alt: "engagement",
        imageClass: "portfolio-column",
        divClass: "portfolio-container",
        divID: null
    },
    {
        id: 3,
        image: images['portland-road.jpeg'],
        alt: "portland",
        imageClass: "portfolio-column-outer-right",
        divClass: "portfolio-container",
        divID: null
    },  
    {
        id: 1,
        image: images['jk-bw.jpeg'],
        alt: "jk-bw",
        imageClass: "portfolio-column-outer-lef",
        divClass: "portfolio-container-2",
        divID: "bw-jk"
    }

]

