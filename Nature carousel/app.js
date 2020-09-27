/* Menu */
var toggler = document.querySelector('.toggler');
var nav = document.querySelector('nav');
var body = document.querySelector('body');

function menuToggle() {
  nav.classList.toggle('active');
}

toggler.addEventListener('click', menuToggle);



/* // My Carousel Attempt
// var & event-listener buttons
document.querySelector(".left").addEventListener("click", slideLeft);

document.querySelector(".right").addEventListener("click", slideRight);

// var item = document.querySelector('.carousel-item');


// Function slide left
function slideLeft() {
  document.querySelector('.glide__slides').style.left = '-274px';
}

function slideRight() {
  document.querySelector('.glide__slides').style.left = '0';
}
 */


 function heroChange(hmmm) {
  document.querySelector('.hero').style.background = hmmm;
 }
//  function number(hmmm) {
//   document.querySelector('.carousel-indicator').innerHTML = hmmm;
//  }