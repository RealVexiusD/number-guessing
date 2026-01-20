const guessBtn = document.getElementById("guessBtn");
const resetBtn = document.getElementById("resetBtn");

guessBtn.addEventListener("click", () => {
  const input = document.getElementById("guessInput");
  const guess = Number(input.value);

  if (!guess || guess < CONFIG.MIN || guess > CONFIG.MAX) {
    document.getElementById("result").textContent = `Enter a number between ${CONFIG.MIN} and ${CONFIG.MAX}.`;
    return;
  }

  checkGuess(guess);
});

resetBtn.addEventListener("click", () => {
  resetGame();
});

// Initialize attempts display
document.getElementById("attempts").textContent = `Attempts: 0`;
