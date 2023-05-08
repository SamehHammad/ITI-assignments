const canvas = document.getElementById("myCanvas");
const ctx = canvas.getContext("2d");
let isFlip = true;
let counter = 0;

function drawHalfCircle() {
  if (isFlip) { 
    ctx.beginPath();
    ctx.fillStyle = "yellow";
    ctx.arc(100, 100, 50, 0, Math.PI, false);
    ctx.fill();
    isFlip=false;
  } else {
    ctx.beginPath();
    ctx.fillStyle = "yellow";
    ctx.arc(100, 100, 50, 0, Math.PI, true);
    ctx.fill();
    isFlip=true;
  }
}

function drawFullCircle() {
  ctx.beginPath();
  ctx.fillStyle = "yellow";
  ctx.arc(100, 100, 50, 0, 2 * Math.PI, false);
  ctx.fill();
}

function draw() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  if (counter < 10) {
    drawHalfCircle();
  } else {
    drawFullCircle();
  }
  
  if (counter >= 11) {
    clearInterval(intervalId);
  }
  
  counter++;
}

let intervalId = setInterval(draw, 500);
