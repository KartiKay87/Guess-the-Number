'use strict';

/*console.log(document.querySelector('.message').textContent);

document.querySelector('.message').textContent = '👍 Correct Number!';

console.log(document.querySelector('.number').textContent);
*/

function printHighscore(score1, score2) {
  if (score1 <= score2) {
    document.querySelector('.highscore').textContent = score2;
  } else {
    document.querySelector('.highscore').textContent = score1;
  }
}

function decrease() {
  document.querySelector('.score').textContent =
    Number(document.querySelector('.score').textContent) - 1;
}
let num = Math.trunc(Math.random() * 19 + 1);
console.log(num);
let score = Number(document.querySelector('.score').textContent);
console.log(score);
document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);

  if (!guess) {
    document.querySelector('.message').textContent = '∅ No Number!';
  } else {
    if (guess === num) {
      document.querySelector('.message').textContent = '👍 Correct Number!';
      const thisnum = Number(document.querySelector('.highscore').textContent);
      console.log(thisnum);
      printHighscore(thisnum, score);
      document.querySelector('.number').textContent = num;
      document.querySelector('body').style.backgroundColor = '#32CD32';

      document.querySelector('.number').style.width = '30rem';
    } else {
      if (guess < num - 0) {
        if (score > 1) {
          document.querySelector('.message').textContent = 'Too low';
          score = score - 1;
          decrease();
        } else {
          document.querySelector('.message').textContent = 'You lost the game!';
          document.querySelector('.score').textContent = 0;
        }
      } else {
        if (guess > num + 1) {
          if (score > 1) {
            document.querySelector('.message').textContent = 'Too high';
            score = score - 1;
            decrease();
          } else {
            document.querySelector('.message').textContent =
              'You lost the game!';
            document.querySelector('.score').textContent = 0;
          }
        } else {
          if (guess === num + 1 || guess === num - 1) {
            if (score > 1) {
              document.querySelector('.message').textContent = 'very close';
              score = score - 1;
              decrease();
            } else {
              document.querySelector('.message').textContent =
                'You lost the game!';
              document.querySelector('.score').textContent = 0;
            }
          }
        }
      }
    }
  }
});

document.querySelector('.again').addEventListener('click', function () {
  document.querySelector('.message').textContent = 'Start guessing...';
  document.querySelector('.score').textContent = '20';
  document.querySelector('.guess').value = '';
  score = 20;
  num = Math.trunc(Math.random() * 19 + 1);
  document.querySelector('.number').textContent = '?';
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
});
