let secretNumber = getRandomNumber(CONFIG.MIN, CONFIG.MAX);

function checkGuess(guess) {
  const result = document.getElementById("result");

  if (guess === secretNumber) {
    result.textContent = "The answer was correct!";
  } else {
    result.textContent = "You guessed wrong sorry. Try again.";
  }
}
