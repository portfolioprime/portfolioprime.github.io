// Select element function
const selectElement = function (element) {
    return document.querySelector(element);
};

let menuToggler = selectElement('.menu-toggle');
let body = selectElement('body');

// Open/Close menu on .menu-toggle click
menuToggler.addEventListener('click', function () {
    body.classList.toggle('open');
});

// Select all nav elements function 
document.querySelectorAll('.nav a').forEach(el => el.addEventListener('click', function () {
    body.classList.remove('open');
}));

// let menuClose = selectElement('.nav-link');

// // Close menu on .nav-link click
// menuClose.addEventListener('click', function () {
//     body.classList.remove('open');
// });