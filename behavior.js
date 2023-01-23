document.addEventListener("DOMContentLoaded", function(event) {
  var thumbnailElement = document.getElementById("smart_thumbnail");
  thumbnailElement.addEventListener("click", function() {
  // write here
  if (thumbnailElement.className == "small") {
    // write here the code that will execute if the image is big     
      thumbnailElement.className = "smart_thumbnail";
  }else{    
      thumbnailElement.className = "small";
  }
   });

});
// event imag
document.addEventListener("DOMContentLoaded", function(event) {
var imagg = document.getElementById("imagg");
imagg.addEventListener("click", function() {
 if (imagg.className == "mmg" ) {
    window.open("index.html") 
 } else {
  window.open("history.html")   
 }
});
});

// event botton
document.addEventListener("DOMContentLoaded", function(event) {
   var buton = document.getElementById("buton");
   buton.addEventListener("click", function() {
   if (buton.className == "butto") {
        if (buton == " ") {
          window.open("contact.html")
        } else {
          window.open("index.html") 
        }

      } else {
        window.open("contact.html")   
      }
   });
 });
