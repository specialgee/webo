/* If you're feeling fancy you can add interactivity 
    to your site with Javascript */

// Positionne des 



var digits = document.getElementsByClassName("digit");

var h = setInterval(function () {
   //div_elem.style.top = Math.floor((Math.random() * 100) + 1)+"px"; 
   //div_elem.style.left = Math.floor((Math.random() * 200) + 1)+"px";
   //console.log('top = '+div_elem.style.top);
   //console.log('left = '+div_elem.style.left); 
  
  for (var i = 0; i < digits.length; i++) {
      console.log(digits[i])

    digits[i].style.top = Math.floor((Math.random() * 100) + 1)+"px";
    digits[i].style.left = Math.floor((Math.random() * 200) + 1)+"px";

}

}, 1000);

