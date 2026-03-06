
// Nav bar for mobile
const navToggle = document.querySelector(".mobile-nav-toggle");
const primaryNav = document.querySelector(".primary-navigation");


navToggle.addEventListener('click', () => {
    if (primaryNav.hasAttribute('data-visible')) {
        navToggle.setAttribute('aria-expanded', false);
    } else {
        navToggle.setAttribute('aria-expanded', true);
    }
    primaryNav.toggleAttribute("data-visible");
    });
    

const parent = document.querySelector(".mega-parent");
const menu = document.querySelector(".mega-menu");

parent.addEventListener("click", function(e) {
    if (!BigInt.contains(e.target) && !menu.contains(e.target)){
        menu.classList.remove("active");
    }

});
// Carousel



// https://www.youtube.com/watch?v=gBzsE0oieio


const track = document.querySelector('.carousel-track');
const slides =  Array.from(track.children);
const nextButton = document.querySelector('.carousel__bttn--right');
const prevButton = document.querySelector('.carousel__bttn--left');
const dotsNav = document.querySelector('.carousel-nav');
const dots = Array.from(dotsNav.children);

const slideWidth = slides[0].getBoundingClientRect().width;


// arrange the slides next to one another
const setSlidePosition = (slide, index) => {
    slide.style.left = slideWidth * index + 'px';
};
slides.forEach(setSlidePosition);

const moveToSlide = (track, currentSlide, targetSlide) => {
    track.style.transform = 'translateX(-' + targetSlide.style.left + ')';
    currentSlide.classList.remove('current-slide');
    targetSlide.classList.add('current-slide');
}

// when I click right, move slides to the Left
prevButton.addEventListener('click', e =>{
    const currentSlide = track.querySelector('.current-slide');
    const prevSlide = currentSlide.previousElementSibling;

    moveToSlide(track, currentSlide, prevSlide);

// (UPDATED)
//     prevButton.addEventListener('click', e =>{
//     const currentSlide = track.querySelector('.current-slide');
//     const currentDot = dotsNav.querySelector('.current-slide');

//     const prevSlide = currentSlide.previousElementSibling;
//     const prevDot = currentDot.previousElementSibling;

//     if (!prevSlide) return;

//     moveToSlide(track, currentSlide, prevSlide);

//     currentDot.classList.remove('current-slide');
//     prevDot.classList.add('current-slide');
// });
});


// when I click right, move slides to the right
nextButton.addEventListener('click', e => {
    const currentSlide = track.querySelector('.current-slide');
    const nextSlide = currentSlide.nextElementSibling;

    moveToSlide(track, currentSlide, nextSlide);

    // (UPDATED)
//     nextButton.addEventListener('click', e => {
//     const currentSlide = track.querySelector('.current-slide');
//     const currentDot = dotsNav.querySelector('.current-slide');

//     const nextSlide = currentSlide.nextElementSibling;
//     const nextDot = currentDot.nextElementSibling;

//     if (!nextSlide) return; // optional safety

//     moveToSlide(track, currentSlide, nextSlide);

//     currentDot.classList.remove('current-slide');
//     nextDot.classList.add('current-slide');
// });

});

//     const amountToMove = nextSlide.style.left;

// // // move to the next slide (FOR REVIEW PURPOSES)
//     track.style.transform = 'translateX(-' + amountToMove + ')';
//     currentSlide.classList.remove('current-slide');
//     nextSlide.classList.add('current-slide');
    



// when i click the nav indicators, move to that slide
dotsNav.addEventListener('click', e => {
    // what indicator was clicked on?
    const targetDot = e.target.closest('button');
   
    if (!targetDot) return;

    const currentSlide = track.querySelector('.current-slide');
    const currentDot = dotsNav.querySelector('.current-slide');
    const targetIndex = dots.findIndex(dot => dot === targetDot);
    const targetSlide = slides[targetIndex];

    moveToSlide(track, currentSlide, targetSlide);

      currentDot.classList.remove('current-slide');
      targetDot.classList.add('current-slide');

});
//  AUTOPLAY
const autoPlay = () => {
    const currentSlide = track.querySelector('.current-slide');
    const currentDot = dotsNav.querySelector('.current-slide');

    let nextSlide = currentSlide.nextElementSibling;
    let nextDot = currentDot.nextElementSibling;

    if (!nextSlide) {
        nextSlide = slides[0];
        nextDot = dots[0];
    }

    moveToSlide(track, currentSlide, nextSlide);

    currentDot.classList.remove('current-slide');
    nextDot.classList.add('current-slide');
};

setInterval(autoPlay, 3000);
