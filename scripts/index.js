const heroImages = [
    {
        src: '../res/images/hero-images/ghost.jpg',
        bgSize: '100%',
    },
    {
        src: '../res/images/hero-images/farcry6.jpg',
        bgSize: '110%'
    },
    {
        src: '../res/images/hero-images/hyperlight.jpg',
        bgSize: '100%'
    },
    {
        src: '../res/images/hero-images/valo2.jpg',
        bgSize: '110%'
    }, {
        src: '../res/images/hero-images/dishonored2.jpg',
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