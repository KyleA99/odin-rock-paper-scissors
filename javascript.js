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
const playerRoundTie = "Tie!"

let buttons = document.querySelectorAll("#selectionButtonsContainer > button");
const resetButton = document.querySelector("resetButton");

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
      if(playerScore === 5 || computerScore === 5)
        endGame();
  });
});

/**
 * Reloads window/webpage
 */
let reloadPage = () => {
  window.location.reload();
}

// For the resetButton, we add an event listener which calls reloadPage() and passes the click event objects through reloadPage()
document.getElementById("resetButton").addEventListener("click", reloadPage);

/**
 * Concatenates player and computer selections for each round
 * @param {*} playerSelection Calls the value for the player's move
 * @param {*} computerSelection Calls the value for the computer's move
 * @returns A string containing the concatenated selections
 */
let concatenateSelections = (playerSelection, computerSelection) => (playerSelection + computerSelection);
  playerSelection = playerSelection;
  //playerSelection = how to call button.id here?
  computerSelection = getComputerChoice();
// console.log(concatenateSelections(playerSelection, computerSelection)); doesnt work...

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
// console.log(playRound(playerSelection, computerSelection)) doesnt work...

/**
 * Returns a message declaring whether the player won, lost, or tied for the DOM display
 * @param {string} result 
 * @returns {string} A string stating whether the user/player won, lost, or tied each round
 */
let determineRoundResult = result => {
  if (result === "Win") {
    return (playerRoundWin)
  } else if (result === "Lose") {
    return (playerRoundLose)
  } else {
    return (playerRoundTie)
  }
}  
// console.log(roundResult()); doesnt work...

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
    return (`The score is: ${playerScore}, ${computerScore}`);
  } else if (playerScore < computerScore) {
    return (`The score is: ${playerScore}, ${computerScore}`);
  } else {
    return (`The score is: ${playerScore}, ${computerScore}`);
  }
}
// console.log(game(result)); doesnt work

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
}
  // console.log(seriesWinner(playerScore, computerScore)); doesnt work...

/**
 * Disables the rock, paper, and scissors selection buttons if seriesResult returns a string successfully
 */
let endGame =() => {
  let seriesResult = seriesWinner(playerScore, computerScore);
  if (seriesResult === "You won the series!" || "You lost the series!") {
    // Re-declares a variable called buttons which is a node list
    buttons = document.querySelectorAll("#selectionButtonsContainer > button");
    buttons.forEach(button => button.disabled = true); {
    }
  } else {
  // Do nothing.
  }
}
// console.log(endGame()); doesnt work...

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
selectionButtonsContainer.appendChild(shellDiv);

// A <p> that announces the score
scoreParagraph = document.createElement("p");
scoreParagraph.classList.add("scoreParagraphContent");
scoreParagraph.style.color = "white";

shellDiv.appendChild(scoreParagraph);
selectionButtonsContainer.appendChild(shellDiv);

// A <h5> that announces the winner of the series
seriesResults = document.createElement("h5");
seriesResults.classList.add("seriesResultsContent");
seriesResults.style.color = "red";

shellDiv.appendChild(seriesResults);
selectionButtonsContainer.appendChild(shellDiv);