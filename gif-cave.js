// Affiche un gif aléatoirement

var gif = document.getElementById("gif");
gif.innerHTML = "";

var index = Math.floor(Math.random() * 4);

function addGif(url) {
  var img = document.createElement("img");
img.src = url;
  
  gif.innerHTML = "";
gif.appendChild(img);
}

switch(index) {
  case 0:
    addGif("https://media.giphy.com/media/oY69d2bibMcFO/giphy.gif");
    break;
  case 1:
    addGif("https://media.giphy.com/media/69jy5FNbwGAZH8FSHN/giphy-downsized.gif");
  case 2:
    addGif("https://media.giphy.com/media/26BRE3wu5ZVxWOJLW/giphy-downsized.gif");
  case 3:
    addGif("https://media.giphy.com/media/KENOUMfISQiEGZdhGB/giphy-downsized.gif");
    break;
  default:
    addGif("https://media.giphy.com/media/g4hKza7HfxyOk/giphy.gif");
}