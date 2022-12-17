const heroImages = [
    {
        src: 'https://pbs.twimg.com/media/FUvtYx4XEAI-UVv?format=jpg&name=large',
        bgSize: '100%',
    },
    {
        src: 'https://press-start.com.au/wp-content/uploads/2021/10/Far-Cry-6-Header-Right-770x433.jpg',
        bgSize: '110%'
    },
    {
        src: 'https://www.gematsu.com/wp-content/uploads/2022/03/Game-Page-Featured_Hyper-Light-Drifter.jpg',
        bgSize: '100%'
    },
    {
        src: 'https://www.ungeek.ph/wp-content/uploads/2022/06/valorant_episode_5_act_1.jpg',
        bgSize: '110%'
    }, {
        src: 'https://images8.alphacoders.com/710/thumb-1920-710284.png',
        bgSize: '100%'
    }
]

const heroSection = document.querySelector('#hero-section');
const heroImageDiscs = document.querySelectorAll('.hero-image-disc');

let imgIndex = 0;

heroImageDiscs.forEach(disc => disc.style.background = '#555');
heroImageDiscs[imgIndex].style.background = 'white';
heroSection.classList.add = 'moving-hero-bg';
heroSection.style.background = `url(${heroImages[imgIndex].src})`;
heroSection.style.backgroundSize = heroImages[imgIndex].bgSize;
heroSection.style.backgroundPosition = 'center';
heroSection.style.backgroundRepeat = 'no-repeat';

setInterval(() => {
    imgIndex++;
    if (imgIndex >= heroImages.length) imgIndex = 0;

    heroImageDiscs.forEach(disc => disc.style.background = '#555');

    heroImageDiscs[imgIndex].style.background = 'white';

    heroSection.classList.add = 'moving-hero-bg';
    heroSection.style.background = `url(${heroImages[imgIndex].src})`;
    heroSection.style.backgroundSize = heroImages[imgIndex].bgSize;
    heroSection.style.backgroundPosition = 'center';
    heroSection.style.backgroundRepeat = 'no-repeat';

}, 2700);