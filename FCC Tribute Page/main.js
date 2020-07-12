// Accordian
var acc = document.getElementsByClassName("hero-info");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    /* Toggle between adding and removing the "active" class,
    to highlight the button that controls the panel */
    this.classList.toggle("tab-open");

    /* Toggle between hiding and showing the active panel */
    // var tabBody = this.nextElementSibling;
    // if (tabBody.style.display === "block") {
    //   tabBody.style.display = "none";
    // } else {
    //   tabBody.style.display = "block";
    // }
  });
} 

