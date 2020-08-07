// function to select the elements
const selectElement = (element) => document.querySelector(element);

selectElement('.hamburger').addEventListener('click', () => {
    selectElement('.hamburger').classList.toggle('active');
});

selectElement('.hamburger').addEventListener('click', () => {
    selectElement('.nav-list').classList.toggle('active');
});

// Define Vars
let body = selectElement('body');

// 3. Select back-to-portfolio button function 
let goBack = selectElement('.back-to-portfolio');

// Open/Close back-to-portfolio on .back-to-portfolio click
goBack.addEventListener('click', function () {
  body.classList.toggle('go-back');
});