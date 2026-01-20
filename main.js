document.getElementById("guessBtn").addEventListener("click", () => {
  const input = document.getElementById("guessInput");
  const guess = Number(input.value);

  if (!guess) {
    document.getElementById("result").textContent =
      "Please enter a number.";
    return;
  }

  checkGuess(guess);
});
