//Hamburger icon and menu
$(document).ready(function(){
  $('.icon').click(function(){
    $('.icon').toggleClass('active');
    $('.side-menu').toggleClass('toggle');
  })
})

// Stores all elements with the className "accordion" in a variable
let accordion = document.getElementsByClassName("accordion");

// Toggle between hiding and showing the active panel and arrow icon on click
for (let infoBox of accordion) {
  infoBox.addEventListener("click", function () {
    let panel = infoBox.nextElementSibling;
    let img = infoBox.lastElementChild;
    if (panel.style.height) {
      panel.style.height = null;
      img.src="./images/Hastsko-Mesch-Hovslageri.svg";
    } else {
      panel.style.height = panel.scrollHeight + "px";
      img.src="./images/Hastsko-Mesch-Hovslageri2.svg";
    } 
  })
}
