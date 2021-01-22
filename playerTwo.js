class PlayerTwoPaddle {

  // Constructs the computer paddle variables
  constructor(width, height, x, y) {
    // Initialize all variables
    this.width = width;
    this.height = height;
    this.x = x;
    this.y = y;
  }

  // Function to draw computers paddle
  drawPlayerTwoPaddle() {
    paint.fillStyle = "white";
    paint.fillRect(this.x, this.y, this.width, this.height);
  }

}

function playerTwoCollision() {

  // Get the right, bottom, top sides of the paddle
  var right = playerTwo.x + playerTwo.width;
  var top = playerTwo.y;
  var bottom = playerTwo.y + playerTwo.height;

  // Get the top, left and bottom sides of the ball
  var ballTop = ball.y;
  var ballLeft = ball.x;
  var ballBottom = ball.y + ball.radius;

  // Return for any collision detections
  return ballLeft < right && ballTop < bottom && ballBottom > top;

}

function movePlayerTwo(event) {

  // Request animation frame on function
  requestAnimationFrame(movePlayerTwo);

  // Clear the board of any drawings
  paint.clearRect(0, 0, 550, 400);

  // Check if down or up key is pressed
  if(event.keyCode == 83 && playerTwo.y != 310) {
    playerTwo.y += velocity;
  } else if(event.keyCode == 87 && playerTwo.y != -10) {
    playerTwo.y -= velocity;
  }

  // Call method to draw the pong ball and other components
  ball.drawPongBall();
  player.drawPlayerPaddle();
  playerTwo.drawPlayerTwoPaddle();
  setScore();

}
