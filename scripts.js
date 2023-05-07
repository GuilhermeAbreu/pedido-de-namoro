// move the "Yes" button
document.getElementById("yes-btn").addEventListener("click", function() {
  var x = Math.floor(Math.random() * (window.innerWidth - this.offsetWidth));
  var y = Math.floor(Math.random() * (window.innerHeight - this.offsetHeight));
  this.style.position = "absolute";
  this.style.left = x + "px";
  this.style.top = y + "px";
});

// show the modal when the "No" button is clicked
document.getElementById("no-btn").addEventListener("click", function() {
  document.getElementById("modal").style.display = "block";
});

// close the modal when the "x" is clicked
document.getElementsByClassName("close")[0].addEventListener("click", function() {
  document.getElementById("modal").style.display = "none";
});
