function getComputerChoice() {
  const randomize = Math.floor(Math.random() * 3);
  return setHand(randomize);
}

function getHumanChoice() {
  let choice = prompt("Choose between rock (0), paper (1) or scissors (2) ");
  return setHand(choice);
}

function setHand(choice) {
  let selectedHand;

  if (choice == 0 || choice.toString().toLowerCase() == "rock") {
    selectedHand = "Rock";
  } else if (choice == 1 || choice.toString().toLowerCase() == "paper") {
    selectedHand = "Paper";
  } else if (choice == 2 || choice.toString().toLowerCase() == "scissors") {
    selectedHand = "Scissors";
  }

  return selectedHand;
}

function playRound(humanChoice, computerChoice) {
  console.log("*****");
  console.log(`Human: ${humanChoice}`);
  console.log(`Computer: ${computerChoice}`);

  if (
    (humanChoice === "Rock" && computerChoice === "Scissors") ||
    (humanChoice === "Paper" && computerChoice === "Rock") ||
    (humanChoice === "Scissors" && computerChoice === "Paper")
  ) {
    humanScore++;
  } else {
    computerScore++;
  }

  console.log(`Human score: ${humanScore}`);
  console.log(`Computer score: ${computerScore}`);
}

function playGame() {
  const computerChoice = getComputerChoice();
  const humanChoice = getHumanChoice();

  playRound(humanChoice, computerChoice);
}

// Run Code
let humanScore = 0;
let computerScore = 0;

for (i = 0; i < 5; i++) {
  playGame();
}

console.log(`Result: Computer: ${computerScore}, Human: ${humanScore}`);

if (humanScore > computerScore) {
  alert("You won!");
} else if (humanScore < computerScore) {
  alert("Computer Won");
} else if (humanScore == computerScore) {
  alert("Draw");
}