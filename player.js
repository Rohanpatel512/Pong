// Global variables
const velocity = 20;

class PlayerPaddle {

  // Constructs the player paddle variables
  constructor(width, height, x, y) {
    // Initialize all variables
    this.width = width;
    this.height = height;
    this.x = x;
    this.y = y;
  }

  // Function to draw the players paddle
  drawPlayerPaddle() {
    paint.fillStyle = "white";
    paint.fillRect(this.x, this.y, this.width, this.height);
  }
}

function movePlayerPaddle(event) {

  // Request an animation frame on the function
  requestAnimationFrame(movePlayerPaddle);

  // Clear the canvas and draw the rest of the components
  paint.clearRect(0, 0, 550, 400);

  // Check if down key is pressed
  if(event.keyCode == 40 && player.y != 310) {
    // Move the paddle down
    player.y += velocity;
  } else if(event.keyCode == 38 && player.y != -10) {
    // Move the paddle down
    player.y -= velocity;
  }

  // Draw the rest of the components
  player.drawPlayerPaddle()
  playerTwo.drawPlayerTwoPaddle();
  ball.drawPongBall();
  setScore();

}

function playerCollision() {

  // Get the top, left and bottom sides of the paddle
  var top = player.y;
  var left = player.x;
  var bottom = player.y + player.height;

  // Get the right, bottom and top side of the ball
  var ballTop = ball.y;
  var ballRight = ball.x + ball.radius;
  var ballBottom = ball.y + ball.radius;

  // Return for any collision detections
  return ballRight > left && ballBottom > top && ballTop < bottom;

}
