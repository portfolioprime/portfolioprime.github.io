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
]

// go through each slider and create its outer divs and its ul element
sliders.forEach(createLis);

function createLis(slider, sliderno) {
  const div1 = document.createElement('DIV');
  const div2 = document.createElement('DIV');
  const ul = document.createElement('UL');

  div1.classList.add("hero-carousel");
  div2.classList.add("slide-track");
  div2.setAttribute("data-glide-el","track");

  div1.appendChild(div2);
  // div1.appendChild(ul);
  div2.appendChild(ul);
  intro.appendChild(div1);
  // document.body.appendChild(div1);

  ul.classList.add("carousel-slides");

  slider.forEach(createLi);

  // create li within ul
  function createLi(slide, slideno) {
    const li = document.createElement('LI');
    li.classList.add("carousel-item");
    li.style.backgroundImage = 'url(' + slide[img] + ')';
    li.setAttribute("onclick", "slideClicked(this," + slideno + ")");

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

//  Change bg image
function heroChange(backgroundImage) {
  hero.style.background = backgroundImage + "center/cover no-repeat";
}
// function heroChange(backgroundImage) {
//   hero.style.background = backgroundImage + "slide[pos]";
// }

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

function slideClicked(slide, slideno) {
  number('0' + slideno);//needs generalising for more than 10 slides!
  h4(slide.firstElementChild.querySelector('p').innerHTML);// text1 of the slide is passed to h4
  h1(slide.firstElementChild.querySelector('h3').innerHTML);// text2 of the slide is passed to h1
  heroChange(slide.style.backgroundImage);
}

/* Not really working */
/* function slideClicked(slide, slideno) {
  number('0' + slideno);//needs generalising for more than 10 slides!
  h4(slide[text1]);
  h1(slide[text2]);
  // heroChange(slide.style.backgroundImage);
  heroChange("url(" + slide[img] + ") bottom/cover no-repeat");

  // //  Change carousel indicators
  function number(num) {
    document.querySelector('.carousel-indicator p span').innerHTML = num;
  }
  //  Change Hero Card Content
  function h4(text1) {
    document.querySelector('.hero-content h4').innerHTML = text1;
  }
  function h1(text2) {
    document.querySelector('.hero-content h1').innerHTML = text2;
  }
  //  Change Hero bg image
  function heroChange(img) {
    var hero = document.querySelector('.hero');
    hero.style.background = img;
  }
}
 */



// My Carousel Attempt
// var & event-listener buttons
document.querySelector(".left").addEventListener("click", slideLeft);
document.querySelector(".right").addEventListener("click", slideRight);

let marginLeft = 0;
const slides = document.querySelector('.carousel-slides');

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

/* var slideIndex = 0;
showSlides();

function showSlides() {
  marginLeft -= 264;
  var i;
  var slides = document.getElementsByClassName("carousel-slides");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.marginLeft = marginLeft + 'px';
  }
  slideIndex++;
  if (slideIndex > slides.length) { slideIndex = 1 }
  slides[slideIndex - 1].style.marginLeft = marginLeft + 'px';
  setTimeout(showSlides, 5000); // Change image every 2 seconds
}
 */
