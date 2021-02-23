'use strict'

const message = document.querySelector('.message'); //message
const body = document.querySelector('body');
const number = document.querySelector('.number'); //hidden-number
const score = document.querySelector('.score'); //score
const guess = document.querySelector('.guess'); //input
const check = document.querySelector('.check'); //check-button
const again = document.querySelector('.again');
const highscore = document.querySelector('.highscore');

//Number to be guess
let secretNum = Math.floor(Math.random() * 20) + 1;
console.log(secretNum);
let scoreValue = 20;
let highScore = 0;

function game() {
    const guessValueInNumber = Number(guess.value);

    if (!guessValueInNumber) {
        message.textContent = " ⛔ No Number !";

    } else if (guessValueInNumber > 20) {
        message.textContent = "Out Of Range";

    } else if (guessValueInNumber < 0) {
        message.textContent = "Out Of Range";

    } else if (guessValueInNumber === secretNum) {
        message.textContent = "🎉 Correct Number ";
        body.style.backgroundColor = '#60b347';
        number.style.width = '30rem'; 
        number.textContent = secretNum;
        if(scoreValue>highScore){
            highScore = scoreValue;
            highscore.textContent = highScore;        }
            
    } else if(guessValueInNumber != secretNum){
        if (scoreValue > 1) {
        message.textContent = guessValueInNumber > secretNum ? "📈 Too High" : "📉 Too Low";
        scoreValue--;
            score.textContent = scoreValue;
        } else {
            message.textContent = "💀 You Lost !";
            score.textContent = 0;
        }
    }
}

//Play Again
function playAgain(){
    scoreValue = 20;
    secretNum = Math.floor(Math.random() * 20) + 1;
    console.log(secretNum);
    message.textContent = 'Start guessing...';
    score.textContent = scoreValue;
    number.textContent = '?';
    guess.value = ''; 
    body.style.backgroundColor = '#222';
    number.style.width = '15rem'; 


}


again.addEventListener('click', playAgain);
check.addEventListener('click', game);
