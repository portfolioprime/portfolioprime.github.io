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
//we only have one slider at the moment but this makes it more general

// these are the offsets in the array describing a slide. Done as indexes rather than named as easier to set up sliders array
const img = 0;
const text1 = 1;
const text2 = 2;

const sliders = [
  [
    ['images/02.jpg','Shire','Valley<br> of Dreams'],
    ['images/03.jpg','Westwood','Misty<br> Woodlands'],
    ['images/05.jpg','France','Beautiful<br> Slopes'],
    ['images/04.jpg','Olympus','A Slice<br> of Heaven'],
    ['images/01.jpg','UK','Cliffs<br> of Green'],
    ['images/06.jpg','Nowhere','Ocean\'s<br> Edge'],
    ['images/08.jpg','Germany','Hidden<br> Paradise'],
    ['images/4.jpg','Switzerland','Seabreeze<br> Lake'],
    ['images/01.jpg','Spain','Green<br> Mountain'],
    ['images/07.jpg','Lost','Paradise<br> Island']
  ]
]

// go through each slider and create its outer divs and its ul element
sliders.forEach(createLis);

function createLis(slider,sliderno) {
  const div1 = document.createElement('DIV');
  // const div2 = document.createElement('DIV');
  const ul = document.createElement('UL');

  div1.classList.add("hero-carousel");
  // div2.classList.add("slide-track");
  // div2.setAttribute("data-glide-el","track");

  // div1.appendChild(div2);
  div1.appendChild(ul);
  // div2.appendChild(ul);
  intro.appendChild(div1);
  // document.body.appendChild(div1);

  ul.classList.add("carousel-slides");
 
  slider.forEach(createLi);

  // create li within ul
  function createLi(slide,slideno) {
    const li = document.createElement('LI');
    li.classList.add("carousel-item");
    li.setAttribute("onclick","slideClicked(this,"+slideno+")");

    ul.appendChild(li);

    const div = document.createElement('DIV');
    const p = document.createElement('P');
    const h3 = document.createElement('H3');

    p.innerHTML = slide[text1];
    div.appendChild(p);
    h3.innerHTML = slide[text2];
    div.appendChild(h3);

    li.appendChild(div);
    div.classList.add('carousel-text');
  }
}

function slideClicked(slide,slideno) {
  number('0'+slideno);//needs generalising for more than 10 slides!
  h4(slide[text1]);
  h1(slide[text2]);
  heroChange('url("+slide[img]+") bottom/cover no-repeat');
}


// My Carousel Attempt
// var & event-listener buttons
document.querySelector(".left").addEventListener("click", slideLeft);
document.querySelector(".right").addEventListener("click", slideRight);


let marginLeft = 0;
const slides = document.querySelector('.carousel-slides');

// Function slide left
function slideLeft() {
  marginLeft -= 264;
  slides.style.marginLeft = marginLeft + 'px';
}
// Function slide Right
function slideRight() {
  marginLeft += 264;
  slides.style.marginLeft = marginLeft + 'px';
}function number(num) {
  document.querySelector('.carousel-indicator p span').innerHTML = num;
}


function showSlides() {
  marginLeft -= 264;
  var i;
  var slides = document.getElementsByClassName("carousel-slides");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.marginLeft = marginLeft + 'px';
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}
  slides[slideIndex-1].style.marginLeft = marginLeft + 'px';
  setTimeout(showSlides, 5000); // Change image every 2 seconds
} 


/* 
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
*/