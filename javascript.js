// Variables
let playerScore = 0;
let computerScore = 0;
let tieScore = 0;
let playerSelection = "";
let computerSelection = "";
let playRoundResult = "";
let playRoundResults = "";
const playerRoundWin = "You won this round!";
const playerRoundLose = "You lost this round!";
const playerRoundTie = "Tie!";

let buttons = document.querySelectorAll("#buttons-div > button");
const resetButton = document.querySelector("resetButton");
const resultsContainer = document.getElementById("results-container");

// Game Logic

/**
 * Generates a randomized choiceClass from the array using the Math.random method
 * @returns {string} choiceClass values that have been randomly selected
 */
let getComputerChoice = () => {
  let choiceClass = ["rock", "paper", "scissors"];
  let randomChoiceClass = Math.floor(Math.random() * choiceClass.length);
  return choiceClass[randomChoiceClass];
}

/**
 * For each button we add a click listener which calls the playRound function and passes the "click" event objects through playRound()
 */
buttons.forEach((button) => {
  button.addEventListener("click", () => {
    computerSelection = getComputerChoice();
    //declares result variable and converts button.id to be equal to playerSelection
    let result = playRound(button.id, computerSelection);

    let displayRoundResults = determineRoundResult(result);
    roundResults.textContent = displayRoundResults;

    let displayText = calculateGameScore(result);
    scoreParagraph.textContent = displayText;

    let displaySeriesResults = seriesWinner(playerScore, computerScore);
    seriesResults.textContent = displaySeriesResults;
      if(playerScore === 5 || computerScore === 5) {
        endGame();
      }
  });
});

/**
 * Concatenates player and computer selections for each round
 * @param {string} playerSelection Calls the value for the player's move
 * @param {string} computerSelection Calls the value for the computer's move
 * @returns A string containing the concatenated selections
 */
let concatenateSelections = (playerSelection, computerSelection) => (playerSelection + computerSelection);
  playerSelection = playerSelection;
  //playerSelection = how to call button.id here?
  computerSelection = getComputerChoice();

/**
 * Evaluates the winner of a single round using a switch case statement 
 * @param {string} playerSelection Calls the value for the player's move
 * @param {string} computerSelection Calls the value for the computer's move
 * @returns {string} A string stating whether the player won, lost, or tied each round
 */
let playRound = (playerSelection, computerSelection) => {
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
  return playRoundResult;
}

/**
 * Returns a message declaring whether the player won, lost, or tied for the DOM display
 * @param {string} result 
 * @returns {string} A string stating whether the user/player won, lost, or tied each round
 */
let determineRoundResult = result => {
  if (result === "Win") {
    return (playerRoundWin);
  } else if (result === "Lose") {
    return (playerRoundLose);
  } else {
    return (playerRoundTie);
  }
}  

/**
 * Calls the playRound function, increments the player and computer scores, and displays the winner for a 5 round game
 * @returns {string} The score of a game using template literals and announces the game results
 */
let calculateGameScore = result => {
  if (result === "Win") {
      playerScore++;
    } else if (result === "Lose") {
      computerScore++;
    } else {
      tieScore++;
    }

  if (playerScore > computerScore) {
    return (`The score (player, computer) is: ${playerScore}, ${computerScore}`);
  } else if (playerScore < computerScore) {
    return (`The score (player, computer) is: ${playerScore}, ${computerScore}`);
  } else {
    return (`The score (player, computer) is: ${playerScore}, ${computerScore}`);
  }
}

/**
 * Determines the winner of the series (first to reach a score of 5)
 * @param {string} playerScore Calls the value for the player's move
 * @param {string} computerScore Calls the value for the computer's move
 * @returns {string} Whether the player won or lost the series
 */
let seriesWinner = (playerScore, computerScore) => {
  if (playerScore === 5 && computerScore < 5) {
  return ("You won the series!");
  } else if (computerScore === 5 && playerScore < 5) {
  return ("You lost the series!");
  } else {
    // Do nothing.
  }

// Try...catch statement for error handling
  try {
      if (playerScore > 5 || computerScore > 5) throw "exceeds 5"
  }
  catch(err) {
    alert ("Round count " + err);
  }
}

/**
 * Disables the rock, paper, and scissors selection buttons if seriesResult returns a string successfully
 */
let endGame =() => {
  let seriesResult = seriesWinner();
  if (seriesResult === "You won the series!" || "You lost the series!") {
    // Re-declares a variable called buttons which is a node list
    buttons = document.querySelectorAll("#buttons-div > button");
    buttons.forEach(button => button.disabled = true); {
    }
  } else {
  // Do nothing.
  }
}

/**
 * Reloads window/webpage
 */
let reloadPage = () => {
  window.location.reload();
}

// For the resetButton, we add an event listener which calls reloadPage() and passes the click event objects through reloadPage()
document.getElementById("resetButton").addEventListener("click", reloadPage);

// UI Display

// A <div> used to contain results displays
const shellDiv = document.createElement("div");
shellDiv.classList.add("shellDivContent");

// A <h5> that announces the results of the most recent round
roundResults = document.createElement("h4");
roundResults.classList.add("roundResultsContent");
roundResults.style.color = "white";

shellDiv.appendChild(roundResults);
resultsContainer.appendChild(shellDiv);

// A <p> that announces the score
scoreParagraph = document.createElement("p");
scoreParagraph.classList.add("scoreParagraphContent");
scoreParagraph.style.color = "white";

shellDiv.appendChild(scoreParagraph);
resultsContainer.appendChild(shellDiv);

// A <h5> that announces the winner of the series
seriesResults = document.createElement("h5");
seriesResults.classList.add("seriesResultsContent");
seriesResults.style.color = "#36d633";

shellDiv.appendChild(seriesResults);
resultsContainer.appendChild(shellDiv);