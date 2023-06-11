function responsiveness() {
  var x = document.getElementById("topnavResponsive");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}
