// TAB
document.querySelectorAll('.tab-trigger').forEach((item) =>
    item.addEventListener('click', function (e) {
        e.preventDefault();
        const id = e.target.getAttribute('href').replace('#', '');
        document.querySelectorAll('.servicesmenu__element').forEach(
            (child) => child.classList.remove('services__item-active')
        );
        document.querySelectorAll('.tab-trigger').forEach(
            (child) => child.classList.remove('tab-trigger__active')
        );
        item.classList.add('tab-trigger__active');
        document.getElementById(id).classList.add('services__item-active');
    }) 
);
document.querySelector('.tab-trigger').click();
// Company carousel
const slides = [
    'img/lavazza.png',
    'img/folgers.png',
    'img/frontier.png',
    'img/melitta.png',
    'img/greenmountain.png',
    'img/monarch.png',
    'img/costa.png'
]
let currentSlide = [0, 1, 2, 3, 4];
function showCurrentSlide() {
    const slideTarget = document.querySelector('.current-slide');
    // slideTarget.classList.add('border');
    slideTarget.src = slides[currentSlide];
}

function nextSlide() {
    currentSlide++;
    if (currentSlide >= slides.length) currentSlide = 0;
    showCurrentSlide();
}

function prevSlide() {
    currentSlide--;
    if (currentSlide < 0) currentSlide = slides.length - 1;
    showCurrentSlide();
}

document.querySelector('.next').addEventListener('click', nextSlide);
document.querySelector('.prev').addEventListener('click', prevSlide);

showCurrentSlide();
setInterval(nextSlide, 3000);