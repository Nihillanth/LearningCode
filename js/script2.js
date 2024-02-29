let burg_btn = document.querySelector('.header__burger-btn');
burg_btn.addEventListener('click', function () {
    document.querySelector('.header').classList.toggle('open');
})


const lightboxBg = document.createElement('div');
lightboxBg.id = 'lightboxBg';
document.body.appendChild(lightboxBg);

const image = document.querySelectorAll('.lightbox__img');
image.forEach(image => {
    image.addEventListener('click', () => {
        lightboxBg.style.placeItems = 'center'
        lightboxBg.style.display = 'grid'
        const lightboxImg = document.createElement('img');
        lightboxImg.src = image.src;
        lightboxImg.id = "lightboxImg";
        while (lightboxBg.firstChild) {
            lightboxBg.removeChild(lightboxBg.firstChild)
        }
        lightboxBg.appendChild(lightboxImg);
    })
})

lightboxBg.addEventListener('click', () => {
    lightboxBg.style.display = 'none'
})