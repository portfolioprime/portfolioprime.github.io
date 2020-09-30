/* Menu */
var toggler = document.querySelector('.toggler');
var nav = document.querySelector('nav');
var body = document.querySelector('body');

function menuToggle() {
  nav.classList.toggle('active');
}

toggler.addEventListener('click', menuToggle);



// My Carousel Attempt
var hero = document.querySelector('.hero');
var intro = document.querySelector('.intro');


// we put the two lots of text and the image url for each slide in an array in the order they are to be shown
// this makes it easier to maintain when you want to add or remove a slide or change their order
// we only have one slider at the moment but this makes it more general

// these are the offsets in the array describing a slide. Done as indexes rather than named as easier to set up sliders array
const img = 0;
const pos = 1;
const text1 = 2;
const text2 = 3;

const sliders = [
  [
    ['images/02.jpg', 'bottom/cover no-repeat', 'Shire', 'Valley<br> of Dreams'],
    ['images/03.jpg', 'bottom/cover no-repeat', 'Westwood', 'Misty<br> Woodlands'],
    ['images/05.jpg', 'top/cover no-repeat', 'France', 'Beautiful<br> Slopes'],
    ['images/04.jpg', 'top/cover no-repeat', 'Olympus', 'A Slice<br> of Heaven'],
    ['images/01.jpg', 'center/cover no-repeat', 'UK', 'Cliffs<br> of Green'],
    ['images/06.jpg', 'top/cover no-repeat', 'Nowhere', 'Ocean\'s<br> Edge'],
    ['images/08.jpg', 'top/cover no-repeat', 'Germany', 'Hidden<br> Paradise'],
    ['images/4.jpg', 'center/cover no-repeat', 'Switzerland', 'Seabreeze<br> Lake'],
    ['images/01.jpg', 'top/cover no-repeat', 'Spain', 'Green<br> Mountain'],
    ['images/07.jpg', 'center/cover no-repeat', 'Lost', 'Paradise<br> Island']
  ]
];

// go through each slider and create its outer divs and its ul element
sliders.forEach(createSlider);

function createSlider(slider, sliderno) {
  const div1 = document.createElement('DIV');
  const div2 = document.createElement('DIV');
  const ul = document.createElement('UL');

  div1.classList.add("glide", "hero-carousel");
  div2.classList.add("glide_track");
  div2.setAttribute("data-glide-el", "track");

  div1.appendChild(div2);
  div2.appendChild(ul);
  intro.appendChild(div1);

  ul.classList.add("glide__slides");

  ul.addEventListener("animationend", animationEnd);

  slider.forEach(createLi);

  function createLi(slide, slideNo) {
    const li = document.createElement('LI');
    li.classList.add("glide__slide", "carousel-item");
    li.style.backgroundImage = 'url(' + slide[img] + ')';
    li.addEventListener("click", slideClicked);
    li.addEventListener("mouseover", slideHovered);
    li.addEventListener("mouseout", slideUnhovered);

    li.setAttribute('data-slideno', '0' + slideNo);//! needs generalising if you have >10 slides !

    ul.appendChild(li);

    const div = document.createElement('DIV');
    const p = document.createElement('P');
    const h3 = document.createElement('H3');

    p.innerHTML = slide[text1];
    div.appendChild(p);
    h3.innerHTML = slide[text2];
    div.appendChild(h3);

    li.appendChild(div);
    div.classList.add("carousel-text");
  }
}

// var & event-listener buttons
document.querySelector(".left").addEventListener("click", slideLeft);
document.querySelector(".right").addEventListener("click", slideRight);

let marginLeft = 0;
const slides = document.querySelector('.glide__slides');

// Function slide left arrow
function slideLeft() {
  marginLeft += 264;
  slides.style.marginLeft = marginLeft + 'px';
}
// Function slide right arrow
function slideRight() {
  marginLeft -= 264;
  slides.style.marginLeft = marginLeft + 'px';
}


// this is for testing, in real version use whatever required (i.e. whichever element is to have the hero image)
function ahHeroChange(backgroundImage) {
  hero.style.background = backgroundImage + "center/cover no-repeat";
}
//  Change Hero Card Content
function h4(h4) {
  document.querySelector('.hero-content h4').innerHTML = "Destination " + h4;
}
function h1(h1) {
  document.querySelector('.hero-content h1').innerHTML = h1;
}
// Change carousel indicators
function number(num) {
  document.querySelector('.carousel-indicator p span').innerHTML = num;
}


function slideClicked(event) {
  var slide = event.target;
  var slideNo = slide.getAttribute('data-slideno');

  // make the hero image the same as the slide's
  ahHeroChange(slide.style.backgroundImage);

  /* I don't know what these functions do - they were executed in the original on a click */

  number(slideNo);
  h4(slide.firstElementChild.querySelector('p').innerHTML);// text1 of the slide is passed to h4
  h1(slide.firstElementChild.querySelector('h3').innerHTML);// text2 of the slide is passed to h1

}


function slideHovered(event) {
  var slide = event.target;
  var slider = slide.parentElement;
  slider.style.animationPlayState = 'paused';
  // ahHeroChange(slide.style.backgroundImage);
}

function slideUnhovered(event) {
  var slide = event.target;
  var slider = slide.parentElement;

  //restore the hero image to the first one in the slider
  // ahHeroChange(slider.firstElementChild.style.backgroundImage);

  //get the animation running again
  slider.style.animationPlayState = 'running';
}


function animationEnd(event) {
  //find the element that was clicked (it will be a ul element representing a slider)
  var slider = event.target;

  //take the first slide off the list and put it back at the end
  slider.append(this.firstElementChild);

  //change the hero image to the slide which is now the leftmost - use modified heroChange in the final version
  hero.style.background = this.firstElementChild.style.backgroundImage + "center/cover no-repeat";

  // toggle the animationName (to an identical keyframes action) to force the animation to start again
  slider.style.animationName = 'sliding' + (Number(event.animationName.replace('sliding', '')) + 1) % 2;

  var slide = event.target;
  var slideNo = slide.getAttribute('data-slideno');

  // Change Slide Number
  number(slideNo);
  // text1 of the slide is passed to h4
  h4(slide.firstElementChild.querySelector('p').innerHTML);
  // text2 of the slide is passed to h1
  h1(slide.firstElementChild.querySelector('h3').innerHTML);

}