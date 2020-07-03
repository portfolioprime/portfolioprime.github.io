//Option 1 - Open Nav  
// Select element function
const selectElement = function (element) {
    return document.querySelector(element);
};

let menuToggler = selectElement('.menu-toggle');
let body = selectElement('body');

// 1. Open/Close menu on .menu-toggle click
menuToggler.addEventListener('click', function () {
    body.classList.toggle('open');
});

// 2. Select all nav elements function 
document.querySelectorAll('.nav a').forEach(el => el.addEventListener('click', function () {
    body.classList.remove('open');
}));



// 3. Select back-to-portfolio button function 
let goBack = selectElement('.back-to-portfolio');

// Open/Close back-to-portfolio on .back-to-portfolio click
goBack.addEventListener('click', function () {
  body.classList.toggle('go-back');
});


// //Option 2
// // Select element function
// const selectElement = (element) =>
//   document.querySelector(element);
// const getAllWithClass = (className) =>
//   document.getElementsByClassName(className);

// let body = selectElement('body');
// let menuClosers = Array.from(getAllWithClass("nav-link"));

// // Close menu on .nav-link click
// menuClosers.forEach(closer => {
//   closer.addEventListener('click', function() {
//     body.classList.remove('open');
//     // console.log("(No more blue background means it's closed)");
//   });
// });

// let menuClose = selectElement('.nav-link');

// // Close menu on .nav-link click
// menuClose.addEventListener('click', function () {
//     body.classList.remove('open');
// });