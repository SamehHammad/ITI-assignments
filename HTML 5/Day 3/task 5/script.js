var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");

let grad = ctx.createLinearGradient(0, 0, 0, 200);
grad.addColorStop(0.3, "rgb(60, 152, 291)");
grad.addColorStop(0.6, "white");
grad.addColorStop(1, "green");
ctx.fillStyle = grad;
ctx.fillRect(40, 40, 200, 200);
ctx.lineWidth = 2;
ctx.beginPath();
ctx.moveTo(100, 150);
ctx.lineTo(100, 100);
ctx.lineTo(200, 100);
ctx.lineTo(200, 150);
ctx.strokeStyle = "black";
ctx.stroke();
