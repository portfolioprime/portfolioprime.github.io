// Select element function
const selectElement = function (element) {
    return document.querySelector(element);
};


// 1a. Define Variables for menu-toggle and body
let menuToggler = selectElement('.menu-toggle');
let body = selectElement('body');

// 1b. Open/Close back-to-portfolio Button
menuToggler.addEventListener('click', function () {
    body.classList.toggle('open');
});

// 2a. Define Variables for back-to=portfolio button
let goBack = selectElement('.back-to-portfolio');

// 2b. Open/Close back-to-portfolio on .back-to-portfolio click
goBack.addEventListener('click', function () {
  body.classList.toggle('go-back');
});


//Scroll reveal
window.sr = ScrollReveal();

sr.reveal('.animate-left', {
    origin: 'left',
    duration: 1000,
    distance: '25rem',
    delay: 300
});

sr.reveal('.animate-right', {
    origin: 'right',
    duration: 1000,
    distance: '25rem',
    delay: 600
});

sr.reveal('.animate-top', {
    origin: 'top',
    duration: 1000,
    distance: '25rem',
    delay: 600
});

sr.reveal('.animate-bottom', {
    origin: 'bottom',
    duration: 1000,
    distance: '25rem',
    delay: 900
});