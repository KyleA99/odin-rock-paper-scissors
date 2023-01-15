/**
 * Generates a randomized choiceClass from the array using the Math.random method
 * @returns {string} choiceClass values that have been randomly selected
 */
function getComputerChoice() {
  let choiceClass = [];
  choiceClass [0] = "Rock";
  choiceClass [1] = "Paper";
  choiceClass [2] = "Scissors";
  let randomChoiceClass = Math.floor(Math.random() * choiceClass.length);
  return choiceClass[randomChoiceClass];
}

// declares a constant called buttons which is a node list (looks/behaves similar to an array)
const buttons = document.querySelectorAll("button");
// forEach method iterates through each button
buttons.forEach((button) => {
// for each button we add a click listener which calls the playRound function and passes the "click" event objects through playRound
  button.addEventListener("click", () => {
    alert(button.id);
    playRound(button.id, computerSelection);
    console.log(playRound(button.id, computerSelection))
  });
});

// selects the #results-container
const container = document.querySelector("#results-container");

// a <div> with a black border and blue background color 
const shellDiv = document.createElement("div");
shellDiv.classList.add("shellDivContent");
shellDiv.style.border = "solid";
shellDiv.style.margin = "12px";
shellDiv.style.backgroundColor = "blue";

// a <h1> announcing what the <div> contains
const shellHeader = document.createElement("h1");
shellHeader.classList.add("shellHeaderContent");
shellHeader.textContent = "The results are of the round are:";
shellHeader.style.color = "black";

shellDiv.appendChild(shellHeader);

// a <p> that announces the score”
const scoreParagraph = document.createElement("p");
scoreParagraph.classList.add("scoreParagraphContent");
scoreParagraph.textContent = "The score (player - computer - tie) is: x - x - x";
scoreParagraph.style.color = "white";

// a <p> that announces the game results”
const resultsParagraph = document.createElement("p");
resultsParagraph.classList.add("resultsParagraphContent");
resultsParagraph.textContent = "The winner is: xxx !";
resultsParagraph.style.color = "white";

shellDiv.appendChild(scoreParagraph);

shellDiv.appendChild(resultsParagraph);

container.appendChild(shellDiv);

/**
 * Evaluates the winner of a single round using a switch case statement 
 * @param {string} playerSelection Calls the value for the player's move
 * @param {string} computerSelection Calls the value for the computer's move
 * @returns {string} A string stating the winner of the round
 */
function playRound(playerSelection, computerSelection) {
  switch(playerSelection + computerSelection) {
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
// function game() {
//   let playerScore = 0;
//   let computerScore = 0;
//   for (let i = 0; i < 5; i++) {
// const playerSelection = getPlayerChoice.toLowerCase();
    const computerSelection = getComputerChoice().toLowerCase();
//     if (playRound(playerSelection, computerSelection) === "You won this round!") {
//       playerScore++;
//     } else if (playRound(playerSelection, computerSelection) === "You lost this round!") {
//       computerScore++;
//     } else {
//     // Do nothing.
//     }
//   }
//   if (playerScore > computerScore) {
//     return (`${playerScore}, ${computerScore}: You won the game!`);
//   } else if (playerScore < computerScore) {
//     return (`${playerScore}, ${computerScore}: You lost the game!`);
//   } else {
//     return (`${playerScore}, ${computerScore}: You tied, please play again!`);
//   }
// }
// console.log(game())