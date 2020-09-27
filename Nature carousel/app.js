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


// Function slide left
function slideLeft(left) {
  document.querySelector('.glide__slides').style.left = left;
}

function slideRight(right) {
  document.querySelector('.glide__slides').style.left = right;
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

