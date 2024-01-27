const GAMES = 5;
const HAND = ["rock", "paper", "scissors", "lizard", "spock"];

// This function select a random choice between Rock, Paper, Scissors, Lizard and Spock
function getComputerChoice() {
  let ranNum = Math.floor(Math.random() * HAND.length);

  return HAND[ranNum];
}

//This function plays a single round of the game
function singleRound(playerSelection, computerChoice) {
  let player = playerSelection.toLowerCase();
  let computer = computerChoice.toLowerCase();

  if (player === computer) {
    return "Its a Tie!!";
  } else if (!HAND.includes(player)) {
    return "Enter a valid value!!";
    //Rock
  } else if (player === "rock" && computer === "paper") {
    return "You Lost! Paper covers Rock!!";
  } else if (player === "rock" && computer === "scissors") {
    return "You Win! Rock crushes Scissors!!";
  } else if (player === "rock" && computer === "spock") {
    return "You Lost! Spock vaporizes Rock!!";
  } else if (player === "rock" && computer === "lizard") {
    return "You Win! Rock crushes Lizard!!";
    //Paper
  } else if (player === "paper" && computer === "rock") {
    return "You Win! Paper covers Rock!!";
  } else if (player === "paper" && computer === "scissors") {
    return "You Lost! Scissors cuts Paper!!";
  } else if (player === "paper" && computer === "spock") {
    return "You Win! Paper disproves Spock!!";
  } else if (player === "paper" && computer === "lizard") {
    return "You Lost! Lizard eats Paper!!";
    //Scissors
  } else if (player === "scissors" && computer === "rock") {
    return "You Lost! Rock crushes Scissors!!";
  } else if (player === "scissors" && computer === "paper") {
    return "You Win! Scissors cuts Paper!!";
  } else if (player === "scissors" && computer === "spock") {
    return "You Lost! Spock smashes Scissors!!";
  } else if (player === "scissors" && computer === "lizard") {
    return "You Win! Scissors decapitates Lizard!!";
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

function game() {
  let playerPunctuation = 0;
  let computerPunctuation = 0;

  //Hand Buttons
  const rockBtn = document.querySelector("#rock-btn");
  const paperBtn = document.querySelector("#paper-btn");
  const scissorsBtn = document.querySelector("#scissors-btn");
  const lizardBtn = document.querySelector("#lizard-btn");
  const spockBtn = document.querySelector("#spock-btn");
  const resetBtn = document.querySelector("#reset-btn");

  //Texts and Score
  let finishSign = document.querySelector("#win-lose");
  let playerScore = document.querySelector("#player-score");
  let computerScore = document.querySelector("#computer-score");
  let status = document.querySelector(".status");
  let selPlayerImg = document.querySelector("#img-choice-player");
  let selComputerImg = document.querySelector("#img-choice-computer");
  let winner = document.querySelector("#win-lose");

  // Reset function
  function resetGame() {
    playerPunctuation = 0;
    computerPunctuation = 0;

    playerScore.textContent = "0";
    computerScore.textContent = "0";
    status.textContent = "";
    selPlayerImg.style.display = "none";
    selComputerImg.style.display = "none";
    winner.textContent = "";
    resetBtn.style.display = "none";

    // Vuelve a habilitar los botones si es necesario
    rockBtn.disabled = false;
    paperBtn.disabled = false;
    scissorsBtn.disabled = false;
    lizardBtn.disabled = false;
    spockBtn.disabled = false;
  }

  //Play round
  rockBtn.addEventListener("click", () => {
    let computerChoice = getComputerChoice();
    let result = singleRound(HAND[0], computerChoice);

    status.textContent = result;
    selPlayerImg.style.display = "block";
    selPlayerImg.src = "/img/rock.png";
    selComputerImg.style.display = "block";
    selComputerImg.src = `/img/${computerChoice}.png`;

    if (result.split(" ")[2] !== "Tie!!") {
      if (result.split(" ")[1] === "Win!") {
        playerPunctuation++;
      } else if (result.split(" ")[1] === "Lost!") {
        computerPunctuation++;
      }
    }

    playerScore.textContent = playerPunctuation;
    computerScore.textContent = computerPunctuation;

    if (playerPunctuation === 5) {
      winner.textContent = "You Win the Game!!!";
      // Disable buttons
      rockBtn.disabled = true;
      paperBtn.disabled = true;
      scissorsBtn.disabled = true;
      lizardBtn.disabled = true;
      spockBtn.disabled = true;
      resetBtn.style.display = "block";
      resetBtn.addEventListener("click", resetGame);
    } else if (computerPunctuation === 5) {
      winner.textContent = "You Lost the Game!!!";
      // Disable buttons
      rockBtn.disabled = true;
      paperBtn.disabled = true;
      scissorsBtn.disabled = true;
      lizardBtn.disabled = true;
      spockBtn.disabled = true;
      resetBtn.style.display = "block";
      resetBtn.addEventListener("click", resetGame);
    }
  });

  paperBtn.addEventListener("click", () => {
    let computerChoice = getComputerChoice();
    let result = singleRound(HAND[1], computerChoice);

    status.textContent = result;
    selPlayerImg.style.display = "block";
    selPlayerImg.src = "/img/paper.png";
    selComputerImg.style.display = "block";
    selComputerImg.src = `/img/${computerChoice}.png`;

    if (result.split(" ")[2] !== "Tie!!") {
      if (result.split(" ")[1] === "Win!") {
        playerPunctuation++;
      } else if (result.split(" ")[1] === "Lost!") {
        computerPunctuation++;
      }
    }

    playerScore.textContent = playerPunctuation;
    computerScore.textContent = computerPunctuation;

    if (playerPunctuation === 5) {
      winner.textContent = "You Win the Game!!!";
      // Disable buttons
      rockBtn.disabled = true;
      paperBtn.disabled = true;
      scissorsBtn.disabled = true;
      lizardBtn.disabled = true;
      spockBtn.disabled = true;
      resetBtn.style.display = "block";
      resetBtn.addEventListener("click", resetGame);
    } else if (computerPunctuation === 5) {
      winner.textContent = "You Lost the Game!!!";
      // Disable buttons
      rockBtn.disabled = true;
      paperBtn.disabled = true;
      scissorsBtn.disabled = true;
      lizardBtn.disabled = true;
      spockBtn.disabled = true;
      resetBtn.style.display = "block";
      resetBtn.addEventListener("click", resetGame);
    }
  });

  scissorsBtn.addEventListener("click", () => {
    let computerChoice = getComputerChoice();
    let result = singleRound(HAND[2], computerChoice);

    status.textContent = result;
    selPlayerImg.style.display = "block";
    selPlayerImg.src = "/img/scissors.png";
    selComputerImg.style.display = "block";
    selComputerImg.src = `/img/${computerChoice}.png`;

    if (result.split(" ")[2] !== "Tie!!") {
      if (result.split(" ")[1] === "Win!") {
        playerPunctuation++;
      } else if (result.split(" ")[1] === "Lost!") {
        computerPunctuation++;
      }
    }

    playerScore.textContent = playerPunctuation;
    computerScore.textContent = computerPunctuation;

    if (playerPunctuation === 5) {
      winner.textContent = "You Win the Game!!!";
      // Disable buttons
      rockBtn.disabled = true;
      paperBtn.disabled = true;
      scissorsBtn.disabled = true;
      lizardBtn.disabled = true;
      spockBtn.disabled = true;
      resetBtn.style.display = "block";
      resetBtn.addEventListener("click", resetGame);
    } else if (computerPunctuation === 5) {
      winner.textContent = "You Lost the Game!!!";
      // Disable buttons
      rockBtn.disabled = true;
      paperBtn.disabled = true;
      scissorsBtn.disabled = true;
      lizardBtn.disabled = true;
      spockBtn.disabled = true;
      resetBtn.style.display = "block";
      resetBtn.addEventListener("click", resetGame);
    }
  });

  lizardBtn.addEventListener("click", () => {
    let computerChoice = getComputerChoice();
    let result = singleRound(HAND[3], computerChoice);

    status.textContent = result;
    selPlayerImg.style.display = "block";
    selPlayerImg.src = "/img/lizard.png";
    selComputerImg.style.display = "block";
    selComputerImg.src = `/img/${computerChoice}.png`;

    if (result.split(" ")[2] !== "Tie!!") {
      if (result.split(" ")[1] === "Win!") {
        playerPunctuation++;
      } else if (result.split(" ")[1] === "Lost!") {
        computerPunctuation++;
      }
    }

    playerScore.textContent = playerPunctuation;
    computerScore.textContent = computerPunctuation;

    if (playerPunctuation === 5) {
      winner.textContent = "You Win the Game!!!";
      // Disable buttons
      rockBtn.disabled = true;
      paperBtn.disabled = true;
      scissorsBtn.disabled = true;
      lizardBtn.disabled = true;
      spockBtn.disabled = true;
      resetBtn.style.display = "block";
      resetBtn.addEventListener("click", resetGame);
    } else if (computerPunctuation === 5) {
      winner.textContent = "You Lost the Game!!!";
      // Disable buttons
      rockBtn.disabled = true;
      paperBtn.disabled = true;
      scissorsBtn.disabled = true;
      lizardBtn.disabled = true;
      spockBtn.disabled = true;
      resetBtn.style.display = "block";
      resetBtn.addEventListener("click", resetGame);
    }
  });

  spockBtn.addEventListener("click", () => {
    let computerChoice = getComputerChoice();
    let result = singleRound(HAND[4], computerChoice);

    status.textContent = result;
    selPlayerImg.style.display = "block";
    selPlayerImg.src = "/img/spock.png";
    selComputerImg.style.display = "block";
    selComputerImg.src = `/img/${computerChoice}.png`;

    if (result.split(" ")[2] !== "Tie!!") {
      if (result.split(" ")[1] === "Win!") {
        playerPunctuation++;
      } else if (result.split(" ")[1] === "Lost!") {
        computerPunctuation++;
      }
    }

    playerScore.textContent = playerPunctuation;
    computerScore.textContent = computerPunctuation;

    if (playerPunctuation === 5) {
      winner.textContent = "You Win the Game!!!";
      // Disable buttons
      rockBtn.disabled = true;
      paperBtn.disabled = true;
      scissorsBtn.disabled = true;
      lizardBtn.disabled = true;
      spockBtn.disabled = true;
      resetBtn.style.display = "block";
      resetBtn.addEventListener("click", resetGame);
    } else if (computerPunctuation === 5) {
      winner.textContent = "You Lost the Game!!!";
      // Disable buttons
      rockBtn.disabled = true;
      paperBtn.disabled = true;
      scissorsBtn.disabled = true;
      lizardBtn.disabled = true;
      spockBtn.disabled = true;
      resetBtn.style.display = "block";
      resetBtn.addEventListener("click", resetGame);
    }
  });
}

game();
