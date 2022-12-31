function getComputerChoice () {
    let choiceClass = []
        choiceClass [0] = "Rock";
        choiceClass [1] = "Paper";
        choiceClass [2] = "Scissors";
        let randomChoiceClass = Math.floor(Math.random() * choiceClass.length);
        return choiceClass[randomChoiceClass];
 }

function getPlayerChoice () {
    return prompt("Please choose either rock, paper, or scissors.");
}

function playRound (playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {
        return "Tie!";
    } else if (playerSelection == "rock" && computerSelection == "paper") {
        return "You lost this round!";
    } else if (playerSelection == "rock" && computerSelection == "scissors") {
        return "You won this round!";
    } else if (playerSelection == "paper" && computerSelection == "scissors") {
        return "You lost this round!";
    } else if (playerSelection == "paper" && computerSelection == "rock") {
        return "You won this round!";
    } else if (playerSelection == "scissors" && computerSelection == "rock") {
        return "You lost this round!";
    } else {
        return "You won this round!";
    }
}

// this is saving the result
const playerSelection = getPlayerChoice().toLowerCase();
const computerSelection = getComputerChoice().toLowerCase();
console.log(playRound(playerSelection, computerSelection));

// this is calling the function as a param
// console.log(playRound(getPlayerChoice(), computerSelection()));


function game () {
    let playerScore = 0;
    let computerScore = 0;
    for (let i = 0; i < 5; ++i) {
//     playerSelection = getPlayerChoice();
//     computerSelection = getComputerChoice();
    if (playRound(playerSelection, computerSelection) === "You won this round!") {
        ++playerScore;
    } else if (playRound(playerSelection, computerSelection) === "You lost this round!") {
        ++computerScore;
    } else {
    // Do nothing.
    }
    }
    if (playerScore > computerScore) {
        gameResults = (`${playerScore}, ${computerScore}: You won the game!`);
    } else if (playerScore < computerScore) {
        gameResults = (`${playerScore}, ${computerScore}: You lost the game!`);
    } else {
    gameResults = (`${playerScore}, ${computerScore}: You tied, please play again!`);
    }
}
//game();



// playerSelection = getPlayerChoice();

// playRound(playerSelection, computerSelection);
// console.log(gameResults)


//do not nest playRound() and game()