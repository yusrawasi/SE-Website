

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

