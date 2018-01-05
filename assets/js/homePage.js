

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
// var wel=document.getElementById("chair");

//     wel.addEventListener("mouseover", function(){
//         wel.textContent = "Message from the Chairman!";

//      });
//     wel.addEventListener("mouseout", function(){
//         wel.textContent = " ";

//      });

// var wrap = $("#sidebar-wrapper");

// wrap.on("scroll", function(e) {
    
//   if (this.scrollTop > 50) {
//     wrap.addClass("fixedPosition");
//     $(".sidebar-nav").addClass("absPosition");
//   } else {
//     wrap.removeClass("fixedPosition");
//     $(".sidebar-nav").removeClass("absPosition");
//   }
  
// });