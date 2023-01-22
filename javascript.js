let playerScore = 0;
let computerScore = 0;
let tieScore = 0;

// Initializing variables with the output expected to be strings
let playerSelection = "";
let computerSelection = "";
let playRoundResults = "";

// Selects the #results-container
// const container = document.querySelector("#results-container");

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

// Declares a constant called buttons which is a node list (looks/behaves similar to an array)
const buttons = document.querySelectorAll("button");

// forEach method is used to iterate through each button
buttons.forEach((button) => {
// For each button we add a click listener which calls the playRound function and passes the "click" event objects through playRound
  button.addEventListener("click", () => {
    computerSelection = getComputerChoice();
    let result = playRound(button.id, computerSelection);
    // console.log(playRound(button.id, computerSelection));

    let displayRoundResults = playRound(playerSelection, computerSelection);
    roundResults.textContent = displayRoundResults;

    let displayText = game(result);
    scoreParagraph.textContent = displayText;
    // console.log(displayText);
  });
});

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
    return "Win";
    // break;
    case "rockpaper":
    case "paperscissors":
    case "scissorsrock":
    return "Lose";
    // break;
    default:
    return "Tie";
  }


  // need to leave return statements in playRoun(playerSelection, computerSelection) and create a new function
  // with conditionals below - to be used for roundScore DOM display
  if (playRoundResults === "Win" ) {
    return ("You won this round!")
  } else if (playRoundResults === "Lose") {
    return ("You lost this round!")
  } else {
    return ("Tie!")
  }
}

/**
 * Calls the playRound function, increments the player and computer scores, and determines the winner for a 5 round game
 * @returns {string} The score of a game using template literals and announces the game results
 */
function game(result) {
  if (result === "Win") {
    playerScore++;
  } else if (result === "Lose") {
    computerScore++;
  } else {
    tieScore++;
  }
  
  if (playerScore > computerScore) {
    return (`The score is: ${playerScore}, ${computerScore}, ${tieScore}: You are currently winning!`);
  } else if (playerScore < computerScore) {
    return (`The score is: ${playerScore}, ${computerScore}, ${tieScore}: You are currently losing!`);
  } else {
    return (`The score is: ${playerScore}, ${computerScore}, ${tieScore}: The game is currently tied, continue playing!`);
  }
}
// console.log(game());

// A <div> with a black border and blue background color 
const shellDiv = document.createElement("div");
shellDiv.classList.add("shellDivContent");
shellDiv.style.border = "solid";
shellDiv.style.margin = "12px";
shellDiv.style.backgroundColor = "blue";

// A <h1> announcing the rules
const shellHeader = document.createElement("h1");
shellHeader.classList.add("shellHeaderContent");
shellHeader.textContent = "The first one to reach a score of 5 wins!";
shellHeader.style.color = "black";

shellDiv.appendChild(shellHeader);

// A <h5> that announces the results of the most recent round
roundResults = document.createElement("h4");
roundResults.classList.add("roundResultsContent");
roundResults.style.color = "white";

shellDiv.appendChild(roundResults);
container.appendChild(shellDiv);

// A <p> that announces the score
scoreParagraph = document.createElement("p");
scoreParagraph.classList.add("scoreParagraphContent");
scoreParagraph.style.color = "white";

shellDiv.appendChild(scoreParagraph);
container.appendChild(shellDiv);

// display round result: either win, lose, tie
// current score : x,x,x you are currently winning or currently losing

//separate game() functions so each conditional is it's own function

// reset game once player or computer reaches score of 5 and display who won series

// merge branches