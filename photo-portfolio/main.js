// Select element function
const selectElement = function (element) {
    return document.querySelector(element);
  };
  
  // Define Vars
  let body = selectElement('body');
  
  // 3. Select back-to-portfolio button function 
  let goBack = selectElement('.back-to-portfolio');
  
  // Open/Close back-to-portfolio on .back-to-portfolio click
  goBack.addEventListener('click', function () {
    body.classList.toggle('go-back');
  });