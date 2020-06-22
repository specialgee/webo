// Affiche un gif aléatoirement

var gif = document.getElementById("gif");
gif.innerHTML = "";

var index = Math.floor(Math.random() * 4);

function addGif(url) {
  var img = document.createElement("img");
img.src = url;
gif.appendChild(img);
}

switch(index) {
  case 0:
    addGif("https://media.giphy.com/media/g4hKza7HfxyOk/giphy.gif");
    break;
  case 1:
    addGif("https://media.giphy.com/media/g4hKza7HfxyOk/giphy.gif");
  case 2:
    addGif("https://media.giphy.com/media/g4hKza7HfxyOk/giphy.gif");
  case 3:
    addGif("https://media.giphy.com/media/g4hKza7HfxyOk/giphy.gif");
    break;
  default:
    addGif("https://media.giphy.com/media/g4hKza7HfxyOk/giphy.gif");
}