let canvas;
let canvasContext;
let ballX = 50;
let ballSpeedX = 15;
// After the website loads, the code will run.
window.onload = function () {
  canvas = document.getElementById("gameCanvas");
  canvasContext = canvas.getContext("2d");
  //   Setting up the FPS & moving 2 functions.
  let framesPerSecond = 30;
  setInterval(function () {
    moveEverything();
    drawEverything();
  }, 1000 / framesPerSecond);
};
// The speed of the ball.
function moveEverything() {
  ballX = ballX + ballSpeedX;
  if (ballX >= canvas.width) {
    ballSpeedX = -ballSpeedX;
  }

  if (ballX <= 0) {
    ballSpeedX = -ballSpeedX;
  }
}
// Draws all the shapes & colors, every 30 frames.
function drawEverything() {
  console.log(ballX);
  colorRect(0, 0, canvas.width, canvas.height, "black");
  colorRect(0, 210, 10, 90, "white");
  canvasContext.fillStyle = "red";
  canvasContext.beginPath();
  canvasContext.arc(ballX, 100, 100, 100, Math.PI * 2, true);
  canvasContext.fill();
}
// code optimization.
function colorRect(leftX, topY, width, height, drawColor) {
  canvasContext.fillStyle = drawColor;
  canvasContext.fillRect(leftX, topY, width, height);
}
console.log("I'm testing this commit")