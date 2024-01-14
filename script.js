// This function select a random choice between Rock, Paper and Scissors
function getComputerChoice() {
  const hand = ["rock", "paper", "scissors"];
  let ranNum = Math.floor(Math.random() * hand.length);

  return hand[ranNum];
}

//This function plays a single round of the game
function singleRound(playerSelection, computerChoice) {
  let player = playerSelection.toLowerCase();
  let computer = computerChoice.toLowerCase();

  console.log(`Player Choice: ${player}`);
  console.log(`Computer Choice: ${computer}`);

  if (player === computer) {
    return "Its a Tie!!";
  } else if (player !== "rock" && player !== "paper" && player !== "scissors") {
    return "Enter a valid value!!";
  } else if (player === "rock" && computer === "paper") {
    return "You Lose! Paper beats Rock!!";
  } else if (player === "rock" && computer === "scissors") {
    return "You Win! Rock beats Scissors!!";
  } else if (player === "paper" && computer === "rock") {
    return "You Win! Paper beats Rock!!";
  } else if (player === "paper" && computer === "scissors") {
    return "You Lost! Scissors beats Paper!!";
  } else if (player === "scissors" && computer === "rock") {
    return "You Lost! Rock beats Scissors!!";
  } else if (player === "scissors" && computer === "paper") {
    return "You Win! Scissors beats Paper!!";
  }
}

let playerChoice = prompt("Rock, Paper or Scissors?:");
let computerChoice = getComputerChoice();

console.log(singleRound(playerChoice, computerChoice));
