let score = 0;
let timeLeft = 10; // game lasts 10 seconds
let gameActive = true;

const button = document.getElementById("clickButton");
const scoreDisplay = document.getElementById("score");
const timerDisplay = document.getElementById("timer");
const resultDisplay = document.getElementById("result");

button.addEventListener("click", () => {
  if (gameActive) {
    score++;
    scoreDisplay.textContent = "Score: " + score;
  }
});

const countdown = setInterval(() => {
  timeLeft--;
  timerDisplay.textContent = "Time left: " + timeLeft + "s";

  if (timeLeft <= 0) {
    clearInterval(countdown);
    gameActive = false;
    resultDisplay.textContent = "Game Over! Final Score: " + score;
    button.disabled = true;
  }
}, 1000);