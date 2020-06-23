var spamLink = document.getElementById("spam-link");

spamLink.onclick = function() {
  var message1 = confirm("es-tu sûr de vouloir redémarer ?");

  if (message1 == true) {
    var message2 = confirm("es-tu vraiment sûr  ?");

    if (message2 == true) {
      window.location.href = "/index.html";
    } else {
      alert("Encore une fois !");
    }
  } else {
    alert("Essaie encore !");
  }
};
