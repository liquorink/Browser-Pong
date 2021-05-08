let canvas;
let canvasContext;
let ballX = 50;
let ballY = 50;
let ballSpeedX = 15;
let ballSpeedY = 4;
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
  ballY = ballY + ballSpeedY;
  if (ballX > canvas.width) {
    ballSpeedX = -ballSpeedX;
  }

  if (ballX < 0) {
    ballSpeedX = -ballSpeedX;
  }

  if (ballY > canvas.height) {
    ballSpeedY = -ballSpeedY;
  }

  if (ballY < 0) {
    ballSpeedY = -ballSpeedY;
  }
}
// Draws all the shapes & colors, every 30 frames.
function drawEverything() {
  // console.log(ballX);
  console.log(ballY);
  colorRect(0, 0, canvas.width, canvas.height, "black");
  colorRect(0, 210, 10, 90, "white");
  colorCircle(ballX, ballY, 10, "white");
}
function colorCircle(centerX, centerY, radius, drawColor) {
  canvasContext.fillStyle = drawColor;
  canvasContext.beginPath();
  canvasContext.arc(centerX, centerY, radius, 0, Math.PI * 2, true);
  canvasContext.fill();
}
function colorRect(leftX, topY, width, height, drawColor) {
  canvasContext.fillStyle = drawColor;
  canvasContext.fillRect(leftX, topY, width, height);
}
