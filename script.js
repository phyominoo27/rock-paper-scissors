// function that Randomly Pick R,P or S
function getComputerChoice() {
  const randomIndex = Math.floor(Math.random() * 3);
  switch (randomIndex) {
    case 0:
      return "rock";
    case 1:
      return "paper";
    case 2:
      return "scissors";
  }
}

// Function that play a single round of game
function playRound(playerSelection, computerSelection) {
  if (
    (playerSelection == "rock" && computerSelection == "paper") ||
    (playerSelection == "paper" && computerSelection == "scissors") ||
    (playerSelection == "scissors" && computerSelection == "rock")
  ) {
    return "You Win!";
  } else if (playerSelection == computerSelection) {
    return "Tie!";
  } else {
    return "You Lose!";
  }
}

function playGame() {
  let playerWin = 0;

  for (i = 0; i < 5; i++) {
    let playerInput = prompt(
      "Pick one (Rock,Paper or scissors)",
      ""
    ).toLowerCase();
    const player = playerInput;
    const computer = getComputerChoice();

    let result = playRound(player, computer);

    if (result == "You Win!") {
      playerWin++;
    } else if (result == "You Lose!") {
      playerWin--;
    }
  }

  if (playerWin > 0) {
    return "You Win!";
  } else if (playerWin < 0) {
    return "You Lose!";
  } else {
    return "Tie!";
  }
}
console.log(playGame());
