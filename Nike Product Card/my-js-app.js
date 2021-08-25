/* SELECT ELEMENTS */
/* Initialize and declare Variables */
/* Declare function openCard() variables */
const cardTop = document.querySelector('.card-top');
const cardBody = document.querySelector('.card-body');

/* Declare function changeSize() variables */
const sizes = document.querySelectorAll('.size');

/* Declare function changeColor() variables */
const colors = document.querySelectorAll('.color');

/* Declare shoes variable */
const shoes =document.querySelector('.shoe');


/* FUNCTIONS */
function openCard() {
  cardTop.classList.toggle('close');
  cardBody.classList.toggle('close');
}

function changeSize() {
  sizes.forEach(s => s.classList.remove('active'));
  this.classList.add('active');
}

function changeColor() {
  // Initialize primary variable to change theme colors
  let primary = this.getAttribute('primary');
  let gradient = this.getAttribute('gradient');
  // let gradient = document.querySelector(`.gradient[color="${color}"]`);

  // function to add .active to change color button
  colors.forEach(c => c.classList.remove('active'));
  this.classList.add('active');

  // Change color to CSS var(--primary)
  document.documentElement.style.setProperty('--primary', primary);
  document.documentElement.style.setProperty('--primary-gradient', gradient);

  // cardTop.style.background = ("var(--primary-gradient)");

  // shoes.src = ('images/red.png')


}







/* ADD EVENT LISTENERS */
document.querySelector(".shoe").addEventListener("click", openCard);

sizes.forEach(s => s.addEventListener('click', changeSize));

colors.forEach(c => c.addEventListener('click', changeColor));