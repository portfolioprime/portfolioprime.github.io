// function to select the elements
const selectElement = (element) => document.querySelector(element);

selectElement('.hamburger').addEventListener('click', () => {
    selectElement('.hamburger').classList.toggle('active');
});

selectElement('.hamburger').addEventListener('click', () => {
    selectElement('.nav-list').classList.toggle('active');
});
