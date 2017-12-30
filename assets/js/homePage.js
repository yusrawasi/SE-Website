

// CODE FOR THE SLIDESHOW
var slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

var slideIndex = 0;
showSlides();

function showSlides() {
    var i;
    var slides = document.getElementsByClassName("mySlides"); //Get all slides present.
    for (i = 0; i < slides.length; i++) { //Loop through and turn the display off.
        slides[i].style.display = "none"; 
    }
    slideIndex++; //One image has to be displayed
    if (slideIndex > slides.length) {slideIndex = 1} 
    slides[slideIndex-1].style.display = "block"; //Turn this images display to 'block' for display
    setTimeout(showSlides, 1500); // Change image every 1.5 seconds *Change this number if too frequent*
}

$(document).ready(function() {
 
  $("#owl-demo").owlCarousel({
 
      autoPlay: 3000, //Set AutoPlay to 3 seconds
 
      items : 4,
      itemsDesktop : [1199,3],
      itemsDesktopSmall : [979,3]
 
  });
 
});
var wel=document.getElementById("chair");

    wel.addEventListener("mouseover", function(){
        wel.textContent = "Message from the Chairman!";

     });
    wel.addEventListener("mouseout", function(){
        wel.textContent = " ";

     });

