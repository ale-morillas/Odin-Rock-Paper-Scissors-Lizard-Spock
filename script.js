const GAMES = 5;
const HAND = ["rock", "paper", "scissors", "lizard", "spock"];

// This function select a random choice between Rock, Paper and Scissors
function getComputerChoice() {
  let ranNum = Math.floor(Math.random() * HAND.length);

  return HAND[ranNum];
}

//This function plays a single round of the game
function singleRound(playerSelection, computerChoice) {
  let player = playerSelection.toLowerCase();
  let computer = computerChoice.toLowerCase();

  console.log(`Player Choice: ${player}`);
  console.log(`Computer Choice: ${computer}`);

  if (player === computer) {
    return "Its a Tie!!";
  } else if (!HAND.includes(player)) {
    return "Enter a valid value!!";
  } else if (player === "rock" && computer === "paper") {
    return "You Lost! Paper covers Rock!!";
  } else if (player === "rock" && computer === "scissors") {
    return "You Win! Rock crushes Scissors!!";
  } else if (player === "paper" && computer === "rock") {
    return "You Win! Paper covers Rock!!";
  } else if (player === "paper" && computer === "scissors") {
    return "You Lost! Scissors cuts Paper!!";
  } else if (player === "scissors" && computer === "rock") {
    return "You Lost! Rock crushes Scissors!!";
  } else if (player === "scissors" && computer === "paper") {
    return "You Win! Scissors cuts Paper!!";
    //Lizard
  } else if (player === "lizard" && computer === "paper") {
    return "You Win! Lizard eats Paper!!";
  } else if (player === "lizard" && computer === "rock") {
    return "You Lost! Rock crushes Lizard!!";
  } else if (player === "lizard" && computer === "scissors") {
    return "You Lost! Scissors decapitates Lizard!!";
  } else if (player === "lizard" && computer === "spock") {
    return "You Win! Lizard poisons Spock!!";
    //Spock
  } else if (player === "spock" && computer === "rock") {
    return "You Win! Spock vaporizes Rock!!";
  } else if (player === "spock" && computer === "paper") {
    return "You Lost! Paper disproves Spock!!";
  } else if (player === "spock" && computer === "scissors") {
    return "You Win! Spock smashes Scissors!!";
  } else if (player === "spock" && computer === "lizard") {
    return "You Lost! Lizard poisons Spock!!";
  }
}

// This function plays 5 rounds of the game
function game() {
  let playerWins = 0;
  let computerWins = 0;

  for (let i = 0; i < 5; i++) {
    let computerChoice = getComputerChoice();

    let result = singleRound(playerChoice, computerChoice);
    console.log(result);
    if (result.split(" ")[2] !== "Tie!!") {
      if (result.split(" ")[1] === "Win!") {
        playerWins++;
      } else if (result.split(" ")[1] === "Lost!") {
        computerWins++;
      }
    }

    console.log("____________________________________");
    console.log("Points:");
    console.log(`Player: ${playerWins}`);
    console.log(`Computer: ${computerWins}`);
  }

  if (playerWins > computerWins) {
    return "You Win the Game!!!";
  } else if (playerWins == computerWins) {
    return "It's a Tie!!!";
  } else if (playerWins < computerWins) {
    return "You Lost the Game!!!";
  }
}

console.log(game());
