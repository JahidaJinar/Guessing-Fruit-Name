const fruits = [
  "apple","banana","cherry","grape","mango",
  "orange","peach","pear","pineapple","strawberry","watermelon"
];

let secretFruit = '';
let hintText = '';

function generateHint(word) {
  return `It's a ${word.length}-letter fruit that starts with "${word[0]}" and ends with "${word[word.length - 1]}".`;
}

function startGame() {
  secretFruit = fruits[Math.floor(Math.random() * fruits.length)];
  hintText = generateHint(secretFruit);
  document.getElementById("hint").textContent = hintText;
  document.getElementById("message").textContent = '';
  document.getElementById("guessInput").value = '';
  document.getElementById("restartBtn").style.display = 'none';
}

document.addEventListener('DOMContentLoaded', () => {
  const info = JSON.parse(localStorage.getItem('playerInfo') || '{}');
  if (info.name) {
    document.getElementById('greeting').textContent =
      `Welcome, ${info.name} (${info.age}), from ${info.institute}!`;
  }

  startGame();

  document.getElementById("submitGuess").addEventListener("click", () => {
    const guess = document.getElementById("guessInput").value.trim().toLowerCase();
    const message = document.getElementById("message");

    if (!guess) {
      message.textContent = "Please enter a guess.";
      return;
    }

    if (guess === secretFruit) {
      message.textContent = `🎉 Correct! The fruit was "${secretFruit}".`;
      document.getElementById("restartBtn").style.display = 'inline-block';
    } else {
      message.textContent = "❌ Incorrect guess. Try again!";
    }
  });

  document.getElementById("restartBtn").addEventListener("click", startGame);
  
  // Updated quit button handler
  document.getElementById("quitBtn").addEventListener("click", () => {
    if (confirm('Are you sure you want to quit?')) {
      localStorage.removeItem('playerInfo');
      window.location.href = './home.html';
    }
  });
});