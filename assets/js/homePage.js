

$(document).ready(function() {
 
  $("#owl-demo").owlCarousel({
 
      navigation : true, // Show next and prev buttons
      slideSpeed : 300,
      paginationSpeed : 400,
      singleItem:false
 
      // "singleItem:true" is a shortcut for:
      // items : 1, 
      // itemsDesktop : false,
      // itemsDesktopSmall : false,
      // itemsTablet: false,
      // itemsMobile : false
 
  });
 
});
var wel=document.getElementById("chair");

    wel.addEventListener("mouseover", function(){
        wel.textContent = "Message from the Chairman!";

     });
    wel.addEventListener("mouseout", function(){
        wel.textContent = " ";

     });

