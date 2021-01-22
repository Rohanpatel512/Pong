// Global variables
let yVelocity = 0;
let xVelocity = 5;
let interval;

class PongBall {

  // Construct the pong ball
  constructor(x, y, radius) {
    // Initialize all variables
    this.x = x;
    this.y = y;
    this.radius = radius;
    this.yVelocity = yVelocity;
    this.xVelocity = xVelocity;
  }

  // Function that draws the ball
  drawPongBall() {
    paint.beginPath();
    paint.fillStyle = "white";
    paint.arc(this.x, this.y, this.radius, 0, 2 * Math.PI);
    paint.fill();
    paint.stroke();
  }

}

function moveBall() {

  // Set an animation frame on function
  interval = requestAnimationFrame(moveBall);

  // Clear the canvas from any other drawings
  paint.clearRect(0, 0, 550, 400);

  // Call method to check for collisions
  checkCollision();
  checkScore();

  // Move the ball
  ball.x += ball.xVelocity;
  ball.y += ball.yVelocity;

  // Call method to draw the pong ball and other components
  player.drawPlayerPaddle()
  playerTwo.drawPlayerTwoPaddle();
  ball.drawPongBall();
  setScore();

}

function checkCollision() {

  // Check if ball hits the top or bottom walls
  if(ball.y >= board.height - ball.radius || ball.y <= ball.radius) {
    // Change the y-direction of the ball
    ball.yVelocity = -ball.yVelocity;
  }

  // Check for ball collisions against any of the paddles
  if(playerCollision()) {
    setDirection("player");
  } else if(playerTwoCollision()) {
    setDirection("playerTwo");
  }
}

function setDirection(paddle) {

  // Local variables
  var midPoint = 0;
  var distance = 0;

  // Check if paddle is player or not
  if(paddle == "player") {
    // Get the y-coordinate of the player paddles midpoint
    midPoint = player.y + (player.height / 2);
  } else {
      // Get the y-coordinate of player two paddles midpoint
    midPoint = playerTwo.y + (playerTwo.height / 2);
  }

  // Get the difference between the y-coordinate of ball and midpoint
  distance = midPoint - ball.y;

  // Set the y and x velocity of the ball
  ball.yVelocity += distance * -0.1;
  ball.xVelocity *= -1;

}
