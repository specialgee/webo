// Affiche un gif aléatoirement

function addGif(url) {
  var img = document.createElement("img");
  img.src = url;

  var gif = document.getElementById("gif");
  gif.innerHTML = "";
  gif.appendChild(img);
}

var totalGif = 6;
var index = Math.floor(Math.random() * totalGif) + 1;
console.log("GIF: ", index);

switch (index) {
  case 1:
    addGif("https://media.giphy.com/media/oY69d2bibMcFO/giphy.gif");
    break;
  case 2:
    addGif("https://media.giphy.com/media/dtsxqRt0VdZVioQcDh/giphy.gif");
    break;
  case 3:
    addGif(
      "https://media.giphy.com/media/KENOUMfISQiEGZdhGB/giphy-downsized.gif"
    );
    break;
  case 4:
    addGif("https://media.giphy.com/media/u47uzYbZu3r535TmGr/giphy.gif");
    break;
  case 5:
    addGif("https://media.giphy.com/media/H8FP5CniGPbB4zFnRR/giphy.gif");
    break;
  case 6:
    addGif("https://media.giphy.com/media/dUC6HYIJMw6IA2cECV/giphy.gif");
    break;

  default:
    addGif("https://media.giphy.com/media/u47uzYbZu3r535TmGr/giphy.gif");
}
