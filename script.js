// This function select a random choice between Rock, Paper and Scissors
function getComputerChoice() {
  const hand = ["rock", "paper", "scissors"];
  let ranNum = Math.floor(Math.random() * hand.length);

  return hand[ranNum];
}
