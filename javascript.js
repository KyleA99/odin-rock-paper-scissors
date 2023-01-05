/**
 * Generates a randomized choiceClass from the array using the Math.random method
 * @returns {string} choiceClass values that have been randomly selected
 */
function getComputerChoice () {
  let choiceClass = [];
  choiceClass [0] = "Rock";
  choiceClass [1] = "Paper";
  choiceClass [2] = "Scissors";
  let randomChoiceClass = Math.floor(Math.random() * choiceClass.length);
  return choiceClass[randomChoiceClass];
}

/**
 * Prompts the player for their "move"
 * @returns {string} The player's response to the prompt
 */
function getPlayerChoice () {
  return prompt("Please choose either rock, paper, or scissors.");
}

/**
 * Evaluates the winner of a single round using a switch case statement 
 * @param {string} playerSelection Calls the value for the player's move
 * @param {string} computerSelection Calls the value for the computer's move
 * @returns {string} A string stating the winner of the round
 */
function playRound (playerSelection, computerSelection) {
  switch (playerSelection + computerSelection) {
    case "rockscissors":
    case "paperrock":
    case "scissorspaper":
    return "You won this round!";
    // break;
    case "rockpaper":
    case "paperscissors":
    case "scissorsrock":
    return "You lost this round!";
    // break;
    default:
    return "Tie!";
  }
}

/**
 * Calls the playRound function, increments the player and computer scores, and determines the winner for a 5 round game
 * @returns {string} The score of a game using template literals and announces the game results
 */
function game () {
  let playerScore = 0;
  let computerScore = 0;
  for (let i = 0; i < 5; i++) {
    const playerSelection = getPlayerChoice().toLowerCase();
    const computerSelection = getComputerChoice().toLowerCase();
    if (playRound(playerSelection, computerSelection) === "You won this round!") {
      playerScore++;
    } else if (playRound(playerSelection, computerSelection) === "You lost this round!") {
      computerScore++;
    } else {
    // Do nothing.
    }
  }
  if (playerScore > computerScore) {
    return (`${playerScore}, ${computerScore}: You won the game!`);
  } else if (playerScore < computerScore) {
    return (`${playerScore}, ${computerScore}: You lost the game!`);
  } else {
    return (`${playerScore}, ${computerScore}: You tied, please play again!`);
  }
}
console.log(game())