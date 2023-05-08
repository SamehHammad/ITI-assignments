var redRange = document.getElementById("red");
var greenRange = document.getElementById("green");
var blueRange = document.getElementById("blue");
var text = document.getElementById("text");
redRange.addEventListener("input", function() {
  text.style.color = `rgb(${redRange.value}, ${greenRange.value}, ${blueRange.value})`;
});
greenRange.addEventListener("input", function() {
  text.style.color = `rgb(${redRange.value}, ${greenRange.value}, ${blueRange.value})`;
});
blueRange.addEventListener("input", function() {
  text.style.color = `rgb(6, 6, 240)`;
});

