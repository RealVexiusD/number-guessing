let secretNumber = getRandomNumber(CONFIG.MIN, CONFIG.MAX);
let attempts = 0;

function resetGame() {
  secretNumber = getRandomNumber(CONFIG.MIN, CONFIG.MAX);
  attempts = 0;
  document.getElementById("result").textContent = "";
  document.getElementById("guessInput").value = "";
  document.getElementById("attempts").textContent = `Attempts: ${attempts}`;
}

function checkGuess(guess) {
  const result = document.getElementById("result");
  attempts++;
  document.getElementById("attempts").textContent = `Attempts: ${attempts}`;

  if (guess === secretNumber) {
    result.textContent = `Correct! The number was ${secretNumber}. Click Reset to play again.`;
  } else if (guess < secretNumber) {
    result.textContent = `Too low!`;
  } else {
    result.textContent = `Too high!`;
  }

  if (attempts >= CONFIG.MAX_ATTEMPTS && guess !== secretNumber) {
    result.textContent += `You've reached max attempts! The number was ${secretNumber}. Click Reset to try again.`;
  }
}
