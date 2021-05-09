let canvas;
let canvasContext;
let ballX = 50;
let ballY = 50;
let ballSpeedX = 15;
let ballSpeedY = 4;
let player1Y = 250;
const PLAYER1_HEIGHT = 100;

function calculateMousePos(evt) {
  let rect = canvas.getBoundingClientRect();
  let root = document.documentElement;
  let mouseX = evt.clientX - rect.left - root.scrollLeft;
  let mouseY = evt.clientY - rect.top - root.scrollTop;
  return {
    x: mouseX,
    y: mouseY,
  };
}
// After the website loads, the code will run.
window.onload = function () {
  canvas = document.getElementById("gameCanvas");
  canvasContext = canvas.getContext("2d");
  //   Setting up the FPS & moving 2 functions.
  let framesPerSecond = 30;
  setInterval(function () {
    moveEverything();
    drawEverything();
    // calculateMousePos();
  }, 1000 / framesPerSecond);
  canvas.addEventListener("mousemove", function (evt) {
    let mousePos = calculateMousePos(evt);
    player1Y = mousePos.y;
  });
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
