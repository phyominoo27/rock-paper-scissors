// RPS Game function
// Function that Randomly Pick R,P or S

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

function createGame() {
  let playerInput;
  let playerWon = 0;
  let pcWon = 0;

  const rock = document.querySelector(".rock");
  rock.addEventListener("click", () => {
    const currentRound = document.querySelector(".currentRound");
    currentRound.textContent = "";
    playerInput = "rock";
    playGame(playerInput); // Call playGame with the chosen option
  });

  const paper = document.querySelector(".paper");
  paper.addEventListener("click", () => {
    const currentRound = document.querySelector(".currentRound");
    currentRound.textContent = "";
    playerInput = "paper";
    playGame(playerInput);
  });

  const scissors = document.querySelector(".scissors");
  scissors.addEventListener("click", () => {
    const currentRound = document.querySelector(".currentRound");
    currentRound.textContent = "";
    playerInput = "scissors";
    playGame(playerInput);
  });

  // Function to play the game with the chosen player input
  function playGame(chosenOption) {
    const finalResult = document.querySelector(".result");
    finalResult.textContent = "";

    const computerChoice = getComputerChoice();
    const currentRound = document.querySelector(".currentRound");
    const pcChoice = document.createElement("p");
    pcChoice.style.color = "coral";
    pcChoice.style.fontSize = "30px";

    pcChoice.textContent = `Computer Choose ${computerChoice}!`;
    currentRound.appendChild(pcChoice);

    const result = playRound(chosenOption, computerChoice);

    if (result == "You Win!") {
      playerWon++;
      const currentRound = document.querySelector(".currentRound");
      const gStatus = document.createElement("p");
      gStatus.textContent = "You win this round!";
      currentRound.appendChild(gStatus);

      const playerScore = document.querySelector(".playerScore");
      playerScore.textContent = playerWon;
    } else if (result == "You Lose!") {
      pcWon++;
      const currentRound = document.querySelector(".currentRound");
      const gStatus = document.createElement("p");
      gStatus.textContent = "Computer win this round!";
      currentRound.appendChild(gStatus);

      const computerScore = document.querySelector(".computerScore");
      computerScore.textContent = pcWon;
    } else {
      const currentRound = document.querySelector(".currentRound");
      const gStatus = document.createElement("p");
      gStatus.textContent = "Tie!";
      currentRound.appendChild(gStatus);
    }
    if (playerWon > 4) {
      const result = document.querySelector(".result");
      const final = document.createElement("p");
      final.textContent = "You won the Game!!";
      result.appendChild(final);
      setTimeout(function () {
        window.location.reload();
      }, 2000);
    } else if (pcWon > 4) {
      const result = document.querySelector(".result");
      const final = document.createElement("p");
      final.textContent = "You Lose!!";
      result.appendChild(final);
      setTimeout(function () {
        window.location.reload();
      }, 2000);
    }
  }
}

createGame();

// PlayerScore
