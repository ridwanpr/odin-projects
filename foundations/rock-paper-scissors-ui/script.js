document.addEventListener("DOMContentLoaded", () => {
  initEvent();
});

function initEvent() {
  setScoreStorage();
  const hand = document.querySelectorAll(".hand");
  hand.forEach((el) => {
    el.addEventListener("click", playRound);
  });

  const restartButton = document.querySelector(".restart");
  restartButton.addEventListener("click", restartGame);
}

function setScoreStorage(type = null, val = 0) {
  if (type == null) {
    localStorage.setItem("humanScore", val);
    localStorage.setItem("computerScore", val);
  } else if (type == "human") {
    localStorage.setItem("humanScore", val);
  } else if (type == "computer") {
    localStorage.setItem("computerScore", val);
  }
}

function playRound() {
  const humanScoreEl = document.querySelector("#player-score");
  const computerScoreEl = document.querySelector("#computer-score");
  const userChoiceEl = document.querySelector(".user-choice");
  const computerChoiceEl = document.querySelector(".computer-choice");
  const humanChoice = this.getAttribute("id");
  const computerChoice = getComputerChoice();
  let humanScore = parseInt(localStorage.getItem("humanScore"), 10);
  let computerScore = parseInt(localStorage.getItem("computerScore"), 10);
  const choosenChoiceResult = document.querySelectorAll(".choices");
  const results = document.querySelector(".results");
  const restartButton = document.querySelector(".restart");

  choosenChoiceResult.forEach((el) => {
    if (el.classList.contains("none")) {
      el.classList.remove("none");
    }
  });

  const mapWinCondition = {
    rock: "scissors",
    paper: "rock",
    scissors: "paper",
  };

  // draw / same hand choice
  if (humanChoice === computerChoice) {
    userChoiceEl.textContent = humanChoice.toUpperCase();
    computerChoiceEl.textContent = computerChoice.toUpperCase();
    return;
  }

  if (mapWinCondition[humanChoice] === computerChoice) {
    humanScore++;
    humanScoreEl.textContent = humanScore;
    setScoreStorage("human", humanScore);
  } else {
    computerScore++;
    computerScoreEl.textContent = computerScore;
    setScoreStorage("computer", computerScore);
  }

  userChoiceEl.textContent = humanChoice.toUpperCase();
  computerChoiceEl.textContent = computerChoice.toUpperCase();

  if (humanScore == 5) {
    results.textContent = "YOU WIN!";
    results.style.backgroundColor = "lightgreen";
    results.classList.remove("none");
    restartButton.classList.remove("none");
  } else if (computerScore == 5) {
    results.textContent = "YOU LOSE!";
    results.style.backgroundColor = "lightcoral";
    results.classList.remove("none");
    restartButton.classList.remove("none");
  }
}

function getComputerChoice() {
  const randomize = Math.floor(Math.random() * 3);
  let computerChoice = "";
  if (randomize == 0) {
    computerChoice = "rock";
  } else if (randomize == 1) {
    computerChoice = "paper";
  } else if (randomize == 2) {
    computerChoice = "scissors";
  }

  return computerChoice;
}

function restartGame() {
  setScoreStorage();
  document.querySelector("#player-score").textContent = "0";
  document.querySelector("#computer-score").textContent = "0";

  const results = document.querySelector(".results");
  const restartButton = document.querySelector(".restart");
  const choosenChoiceResult = document.querySelectorAll(".choices");

  if (!results.classList.contains("none")) {
    results.classList.add("none");
  }

  if (!restartButton.classList.contains("none")) {
    restartButton.classList.add("none");
  }

  choosenChoiceResult.forEach((el) => {
    if (!el.classList.contains("none")) {
      el.classList.add("none");
    }
  });
}
