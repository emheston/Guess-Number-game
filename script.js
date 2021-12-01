"use strict";

let secretNumber = Math.floor(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;

document.querySelector(".check").addEventListener("click", function playGame() {
  let guess = Number(document.querySelector(".guess").value);
  console.log(guess);

  if (!guess) {
    document.querySelector(".message").textContent = "Empty Field";
  } else if (guess === secretNumber) {
    document.querySelector(".message").textContent = "Correct Number";
    document.querySelector("body").style.backgroundColor = "#60b347";
    document.querySelector(".number").textContent = secretNumber;
    document.querySelector(".number").style.width = "30rem";
    if (score > highscore) {
      highscore = score;
      document.querySelector(".highscore").textContent = highscore;
    }
  } else if (guess > secretNumber && guess >= 1 && guess <= 20) {
    if (score > 1) {
      document.querySelector(".message").textContent = "Too High!";
      score--;
      document.querySelector(".score").textContent = score;
    } else {
      document.querySelector(".message").textContent = "You Lose!";
      document.querySelector(".score").textContent = 0;
    }
  } else if (guess < secretNumber && guess >= 1 && guess <= 20) {
    if (score > 1) {
      document.querySelector(".message").textContent = "Too Low!";
      score--;
      document.querySelector(".score").textContent = score;
    } else {
      document.querySelector(".message").textContent = "You Lose!";
      document.querySelector(".score").textContent = 0;
    }
  } else {
    document.querySelector(".message").textContent = "1-20 Please!!";
  }
});

document
  .querySelector(".again")
  .addEventListener("click", function playAgain() {
    score = 20;
    secretNumber = Math.floor(Math.random() * 20) + 1;
    document.querySelector("body").style.backgroundColor = "#222";
    document.querySelector(".number").style.width = "15rem";
    document.querySelector(".message").textContent = "Start Guessing...";
    document.querySelector(".number").textContent = "?";
    document.querySelector(".score").textContent = score;
    document.querySelector(".guess").value = "";
    playGame();
  });
