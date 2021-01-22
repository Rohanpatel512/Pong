// Global variables
let playerTwoScore = 0;
let playerScore = 0;
let winScore = 7;
let board = document.getElementById("board");
let paint = board.getContext('2d');
const player = new PlayerPaddle(20, 100, 520, 150);
const playerTwo = new PlayerTwoPaddle(20, 100, 12, 150);
const ball = new PongBall(275, 200, 10);

function drawComponents() {

  // Draw all components (paddles, scores, and ball)
  player.drawPlayerPaddle()
  playerTwo.drawPlayerTwoPaddle();
  ball.drawPongBall();
  setScore();

}

function setScore() {
  // Set the font, and display scores onto the canvas
  paint.font = "40pt Calibri";
  paint.fillStyle = "white";
  paint.fillText(playerTwoScore, 110, 50);
  paint.fillText(playerScore, 400, 50);
}

function startGame() {

  // Add event listeners onto the window
  window.addEventListener("keydown", movePlayerPaddle);
  window.addEventListener("keydown", movePlayerTwo);

  // Call method to starting moving other components
  moveBall();
}


function checkScore() {

  // Check player one or two has scored
  if(ball.x < 0) {
    // Increase player ones score
    playerScore += 1;
    window.cancelAnimationFrame(interval);
    reset();
  } else if(ball.x > board.width) {
    // Increase player twos score
    playerTwoScore += 1;
    window.cancelAnimationFrame(interval);
    reset();
  }
}

function reset() {

  // Reset the x and y position of both paddles and the ball
  ball.x = 275;
  ball.y = 200;

  // Reset the x and y coordinates of both paddles
  player.x = 520;
  player.y = 150;
  playerTwo.x = 12;
  playerTwo.y = 150;

  // Call method to check for a winner
  checkWinner();

}

function checkWinner() {
  // Check if any of the players have won
  if(playerScore == winScore) {
    alert("Player one has won! the game " + playerScore + " - " + playerTwoScore);
    location.reload();
  } else if(playerTwoScore == winScore) {
    alert("Player two has won the game! " + playerTwoScore + " - " + playerScore);
    location.reload();
  }
}
