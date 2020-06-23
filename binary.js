// Positionne des éléments aléatoirement sur la page

var digits = document.getElementsByClassName("digit");

var h = setInterval(function() {
  for (var i = 0; i < digits.length; i++) {
    digits[i].style.top = Math.floor(Math.random() * 200 + 1) + "px";
    digits[i].style.left = Math.floor(Math.random() * 1900 + 1) + "px";
  }
}, 400);
