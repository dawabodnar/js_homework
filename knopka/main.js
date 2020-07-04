function colors(number) {
  var main = document.getElementById("main");
  
  var color = "red";
  for (var i = 0; i < number; i++) {
    if (color == "red") {
      main.textContent = main.textContent + "<div>red</div>" ;
      color = "blue";
    } else {
      main.textContent = main.textContent + "<div>blue</div>";
      color = "red";
    }
  }
}

colors(8);
