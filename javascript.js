let playerScore = 0;
let computerScore = 0;
let tieScore = 0;

// Initializing variables with the output expected to be strings
let playerSelection = "";
let computerSelection = "";
let playRoundResult = "";
let playRoundResults = "";

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
    // console.log(displayRoundResults);

    let displayText = game(result);
    scoreParagraph.textContent = displayText;
    // console.log(displayText);

    let displaySeriesResults = seriesWinner(playerScore, computerScore);
    seriesResults.textContent = displaySeriesResults;
    // console.log(displaySeriesResults);
  });
});

function concatenateSelections(playerSelection, computerSelection) {
  playerSelection = playerSelection;
  //playerSelection = how to call button.id here?
  computerSelection = getComputerChoice();
  return (playerSelection + computerSelection);
}
// console.log(concatenateSelections(playerSelection, computerSelection)); doesnt work

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
// console.log(playRound(playerSelection, computerSelection)); doesnt work...

function roundScore(result) {
  if (result === "Win") {
    return ("You won this round!")
  } else if (result === "Lose") {
    return ("You lost this round!")
  } else {
    return ("Tie!")
  }
}  
// console.log(roundScore());

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
  // console.log(playerScore)

  if (playerScore > computerScore) {
    return (`The score is: ${playerScore}, ${computerScore}`);
  } else if (playerScore < computerScore) {
    return (`The score is: ${playerScore}, ${computerScore}`);
  } else {
    return (`The score is: ${playerScore}, ${computerScore}`);
  }
}
// console.log(game());

function seriesWinner(playerScore, computerScore) {
  if (playerScore === 5 && computerScore < 5) {
  return ("You won the series!");
  } else if (computerScore === 5 && playerScore < 5) {
  return ("You lost the series!");
  } else {
    // Do nothing.
  }
  // console.log(playerScore);
  // console.log(computerScore);
}
  // console.log(seriesWinner(playerScore, computerScore));

function endGame() {
  let seriesResult = seriesWinner(playerScore, computerScore);
  if (seriesResult === "You won the series!" || "You lost the series!") {
    document.querySelectorAll("button").disabled = true;  // buttons arent disabling...
  } else {
    // Do nothing.
  }
}

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
seriesResults = document.createElement("h5");
seriesResults.classList.add("seriesResultsContent");
seriesResults.style.color = "red";

shellDiv.appendChild(seriesResults);
container.appendChild(shellDiv);

//add documentation
// merge branches
// arrow functions

// add a button for resetting the game (maybe reset webpage somehow)