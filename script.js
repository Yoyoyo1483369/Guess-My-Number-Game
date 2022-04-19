'use strict';

let secret = Math.trunc(Math.random() * 20) + 1;

let score = 20;
let highscore = 0;

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  if (!guess || guess > 20 || guess < 1) {
    document.querySelector('.message').textContent =
      'Type a number between 1 and 20!';
  } else if (guess == secret) {
    document.querySelector('.message').textContent = 'You win ✔✨';

    document.querySelector('.number').textContent = secret;

    document.querySelector('body').style.backgroundColor = '#60b347';

    document.querySelector('.number').style.width = '30rem';
    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }
  } else if (guess > secret) {
    document.querySelector('.message').textContent = 'Too high';
    score--;

    if (score > 0) {
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = 'You lose 💥';
      document.querySelector('.score').textContent = 0;
    }
  } else if (guess < secret) {
    document.querySelector('.message').textContent = 'Too low';
    score--;

    if (score > 0) {
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = 'You lose 💥';
      document.querySelector('.score').textContent = 0;
    }
  }
});

document.querySelector('.again').addEventListener('click', function () {
  secret = Math.trunc(Math.random() * 20) + 1;

  score = 20;

  document.querySelector('.score').textContent = 20;

  document.querySelector('body').style.backgroundColor = '#222';

  document.querySelector('.number').style.width = '15rem';

  document.querySelector('.number').textContent = '?';

  document.querySelector('.message').textContent = 'Start guessing...';

  document.querySelector('.guess').value = '';
});
