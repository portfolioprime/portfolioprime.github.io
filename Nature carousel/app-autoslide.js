/* Menu */
var toggler = document.querySelector('.toggler');
var nav = document.querySelector('nav');
var body = document.querySelector('body');

function menuToggle() {
  nav.classList.toggle('active');
}

toggler.addEventListener('click', menuToggle);



// My Carousel Attempt
// var & event-listener buttons
document.querySelector(".left").addEventListener("click", slideLeft);
document.querySelector(".right").addEventListener("click", slideRight);

/* // Function slide left
function slideLeft(left) {
  document.querySelector('.glide__slides').style.left = left;
}
// Function slide left
function slideRight(right) {
  document.querySelector('.glide__slides').style.left = right;
}
 */

let marginLeft = 0;
const slides = document.querySelector('.glide__slides');

// Function slide left
function slideLeft() {
  marginLeft += 264;
  slides.style.marginLeft = marginLeft + 'px';
}
// Function slide Right
function slideRight() {
  marginLeft -= 264;
  slides.style.marginLeft = marginLeft + 'px';
}

var slideIndex = 0;
showSlides();

function showSlides() {
  marginLeft -= 264;
  var i;
  var slides = document.getElementsByClassName("glide__slides");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.marginLeft = marginLeft + 'px';
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}
  slides[slideIndex-1].style.marginLeft = marginLeft + 'px';
  setTimeout(showSlides, 5000); // Change image every 2 seconds
} 


/* Dirty functions */
// Change Hero Img
function heroChange(hmmm) {
  var hero = document.querySelector('.hero');
  hero.style.background = hmmm;
}

//  Change carousel indicators
function number(num) {
  document.querySelector('.carousel-indicator p span').innerHTML = num;
}

//  Change Hero Card Content
function h4(h4) {
  document.querySelector('.hero-content h4').innerHTML = h4;
}
function h1(h1) {
  document.querySelector('.hero-content h1').innerHTML = h1;
}

