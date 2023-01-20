let playerScore = 0;
let computerScore = 0;

let playerSelection = "";
let computerSelection = getComputerChoice();
// console.log(computerSelection);

/**
 * Generates a randomized choiceClass from the array using the Math.random method
 * @returns {string} choiceClass values that have been randomly selected
 */
function getComputerChoice() {
  let choiceClass = ["rock", "paper", "scissors"];
  let randomChoiceClass = Math.floor(Math.random() * choiceClass.length);
  // console.log(choiceClass[randomChoiceClass]);
  return choiceClass[randomChoiceClass];
}

// declares a constant called buttons which is a node list (looks/behaves similar to an array)
const buttons = document.querySelectorAll("button");

// forEach method is used to iterate through each button
buttons.forEach((button) => {
// for each button we add a click listener which calls the playRound function and passes the "click" event objects through playRound
  button.addEventListener("click", () => {
    computerSelection = getComputerChoice();
    // this is the function that the events iterate through
    // playRound(button.id, computerSelection);
    let result = playRound(button.id, computerSelection);
    // console.log(playRound(button.id, computerSelection));
    let displayText = game(result);
    console.log(displayText);
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
shellHeader.textContent = "The results are:";
shellHeader.style.color = "black";

shellDiv.appendChild(shellHeader);

// a <p> that announces the score
const scoreParagraph = document.createElement("p");
scoreParagraph.classList.add("scoreParagraphContent");
// scoreParagraph.textContent = game();
scoreParagraph.style.color = "white";

shellDiv.appendChild(scoreParagraph);
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
function game(result) {
  if (result === "You won this round!") {
    playerScore++;
  } else if (result === "You lost this round!") {
    computerScore++;
  } else {
    // Do nothing.
  }
  
  if (playerScore > computerScore) {
    return (`${playerScore}, ${computerScore}: You won the game!`);
  } else if (playerScore < computerScore) {
    return (`${playerScore}, ${computerScore}: You lost the game!`);
  } else {
    return (`${playerScore}, ${computerScore}: You tied, please play again!`);
  }
}
// console.log(game());