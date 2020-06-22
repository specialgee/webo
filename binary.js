/* If you're feeling fancy you can add interactivity 
    to your site with Javascript */

// Positionne des éléments aléatoirement sur la page

var digits = document.getElementsByClassName("digit");

var h = setInterval(function() {
  for (var i = 0; i < digits.length; i++) {    
    digits[i].style.top = Math.floor(Math.random() * 200 + 1) + "px";
    digits[i].style.left = Math.floor(Math.random() * 1000 + 1) + "px";
  }
}, 400);
