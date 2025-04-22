let secretNumber = Math.floor(Math.random() * 100) + 1;
let score = 10;
let highScore = 0;
let history = [];

const messageEl = document.querySelector('.message');
const guessInput = document.querySelector('.guess-input');
const checkBtn = document.querySelector('.check-btn');
const playBtn = document.querySelector('.play-again-btn');
const scoreEl = document.querySelector('.score');
const highScoreEl = document.querySelector('.high-score');
const secretNumberBox = document.querySelector('.secret-number-box');
const historyEl = document.querySelector('.history');

checkBtn.addEventListener('click', () => {
  const guess = Number(guessInput.value);

  if (!guess || guess < 1 || guess > 100) {
    messageEl.textContent = 'Invalid input!';
    return;
  }

  if (history.includes(guess)) {
    messageEl.textContent = 'Already guessed!';
    return;
  }

  history.push(guess);
  historyEl.textContent = history.join(', ');

  if (guess === secretNumber) {
    messageEl.textContent = 'Correct!';
    document.body.style.background = 'linear-gradient(135deg, #81ecec, #6c5ce7)';
    secretNumberBox.textContent = secretNumber;
    guessInput.disabled = true;

    if (score > highScore) {
      highScore = score;
      highScoreEl.textContent = highScore;
    }
  } else {
    if (score > 1) {
      messageEl.textContent = guess > secretNumber ? 'Too high!' : 'Too low!';
      score--;
      scoreEl.textContent = score;
    } else {
      messageEl.textContent = 'Game Over!';
      score = 0;
      scoreEl.textContent = score;
      guessInput.disabled = true;
    }
  }
});

playBtn.addEventListener('click', () => {
  score = 10;
  secretNumber = Math.floor(Math.random() * 100) + 1;
  history = [];

  scoreEl.textContent = score;
  messageEl.textContent = 'Start guessing...';
  guessInput.disabled = false;
  guessInput.value = '';
  historyEl.textContent = 'None yet';
  document.body.style.background = 'linear-gradient(135deg, #ff9a9e, #fad0c4)';
  secretNumberBox.textContent = '?';
});
