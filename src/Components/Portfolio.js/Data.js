function importAll(r) {
    let images = {};
     r.keys().forEach((item) => { images[item.replace('./', '')] = r(item); });
    return images
   }

   const images = importAll(require.context('../../Data/Portfolio', false, /\.(png|jpe?g|svg)$/))

export const portfolioImages10 = [
    {
        id: 1,
        image: images['allie-lean.jpg'],
        alt: "allie-lean",
    },
    {
        id: 2,
        image: images['berrie-fam.jpg'],
        alt: "suze-road",
    },
    {
        id: 3,
        image: images['krudden.jpg'],
        alt: "yosh-bw",
    },
    {
        id: 1,
        image: images['Kaitlyn 2.jpg'],
        alt: "krudden",
    },
    {
        id: 2,
        image: images['concert.jpg'],
        alt: "concert",
    },
    {
        id: 3,
        image: images['savanna-and-t.jpg'],
        
    },
    {
        id: 1,
        image: images['yosh-bw.jpg'],
        alt: "yosh-bw",
        
    },
    {
        id: 1,
        image: images['suze-road.jpg'],
        alt: "lori",
    },
    {
        id: 2,
        image: images['lori-serious.jpg'],
        alt: "suze",
        
    },
    {
        id: 3,
        image: images['allie-dress.jpg'],
        alt: "todd",
    },  
    {
        id: 2,
        image: images['Sharon and Todd (1 of 1)-3.jpg'],
        alt: "kait",
    },  
    {
        id: 1,
        image: images['allie-grad.jpg'],
        alt: "allie-dress",
    }

]

