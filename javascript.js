let playerScore = 0;
let computerScore = 0;
let tieScore = 0;

// Initializing variables with the output expected to be strings
let playerSelection = "";
let computerSelection = "";
let playRoundResult = "";
let playRoundResults = "";
let seriesScore = "";

// Selects the #results-container - not actually using this...
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
    //declares result variable and converts button.id to be equal to playerSelection
    let result = playRound(button.id, computerSelection);
    // console.log(playRound(button.id, computerSelection));

    let displayRoundResults = roundScore(result);
    roundResults.textContent = displayRoundResults;

    let displayText = game(result);
    scoreParagraph.textContent = displayText;
    // console.log(displayText);

    // let displaySeriesResult = seriesResult();
    // seriesResult.textContent = displaySeriesResult;
    // console.log(displaySeriesWinner);
  });
});

function concatenateSelections(playerSelection, computerSelection) {
  playerSelection = playerSelection;
  return (playerSelection + computerSelection);
}

/**
 * Evaluates the winner of a single round using a switch case statement 
 * @param {string} playerSelection Calls the value for the player's move
 * @param {string} computerSelection Calls the value for the computer's move
 * @returns {string} A string stating the winner of the round
 */
function playRound(playerSelection, computerSelection) {
  switch(concatenateSelections(playerSelection, computerSelection)) {
    case "rockscissors":
      playRoundResult = "Win";
      break;
    case "paperrock":
      playRoundResult = "Win";
      break;
    case "scissorspaper":
      playRoundResult = "Win";
      break; 
    case "rockpaper":
      playRoundResult = "Lose"
      break;
    case "paperscissors":
      playRoundResult = "Lose"
      break;
    case "scissorsrock":
      playRoundResult = "Lose"
      break;
    default:
      playRoundResult = "Tie"
  }
  return playRoundResult
}

/**
 * Calls the playRound function, increments the player and computer scores, and determines the winner for a 5 round game
 * @returns {string} The score of a game using template literals and announces the game results
 */
function game(result) {
  // for (let i = 0; i < 5; i++) {
  if (result === "Win") {
      playerScore++;
    } else if (result === "Lose") {
      computerScore++;
    } else {
      tieScore++;
    }
  }
  // console.log(playerScore)

  if (playerScore > computerScore) {
    return (`The score is: ${playerScore}, ${computerScore}`);
  } else if (playerScore < computerScore) {
    return (`The score is: ${playerScore}, ${computerScore}`);
  } else {
    return (`The score is: ${playerScore}, ${computerScore}`);
  }
// }
// console.log(game());

function seriesResult() {
  seriesScore = game(); // How do I make it so seriesResult() can access the playerScore and computerScore in game() function
  if (playerScore === "5" && computerScore < "5") {
  return "You won the series!";
  } else if (computerScore === "5" && playerScore < "5") {
  return "You lost the series!";
  } else {
    // Do nothing.
  }
}
// console.log(seriesResults());

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

// A <h5> that announces the winner of the series
seriesResult = document.createElement("h5");
seriesResult.classList.add("seriesResultContent");
seriesResult.style.color = "red";

shellDiv.appendChild(seriesResult);
container.appendChild(shellDiv);

//add documentation
// merge branches

// add a button for resetting the game (maybe reset webpage somehow)