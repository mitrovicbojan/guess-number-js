'use strict';

// console.log(document.querySelector('.message').textContent);
// document.querySelector('.message').textContent = 'correct Number!';

// document.querySelector('.number').textContent = 12;
// document.querySelector('.score').textContent = 20;

// document.querySelector('.guess').value = 22;
// console.log(document.querySelector('.guess').value);

//function expression. function is just a value. when we asign it to a variable it's called func expression
// const x = function () {
//   console.log(23);
// };

// document.querySelector('.check').addEventListener('click', x);

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;

const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};
const displayNumber = function (number) {
  document.querySelector('.number').textContent = number;
};

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  if (!guess) {
    displayMessage('No Number');
  } else if (guess === secretNumber) {
    displayMessage('Correct Number');
    displayNumber(secretNumber);

    //when player wins change css
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';

    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }
  } else if (guess !== secretNumber) {
    if (score > 1) {
      // document.querySelector('.message').textContent =
      //   guess > secretNumber ? 'Too high' : 'Too Low';
      displayMessage(guess > secretNumber ? 'Too high' : 'Too Low');
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      displayMessage('You lost the game!');
      document.querySelector('.score').textContent = 0;
    }
  }
});

document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  document.querySelector('.number').textContent = '?';
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
  document.querySelector('.score').textContent = score;
  displayMessage('Start guessing...');
  document.querySelector('.guess').value = '';
  secretNumber = Math.trunc(Math.random() * 20) + 1;
});
