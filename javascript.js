 // declares a function (getComputerChoice), an array (choiceClass), and randomly selectes an array item
 
 function getComputerChoice () {
    let choiceClass = []
        choiceClass [0] = "Rock";
        choiceClass [1] = "Paper";
        choiceClass [2] = "Scissors";
        let randomChoiceClass = Math.floor(Math.random() * choiceClass.length);
        return choiceClass[randomChoiceClass];
 }
    getComputerChoice();

// declares a function named playRound which declares the results using conditional statements

function playRound (playerSelection, computerSelection){
    if (playerSelection === computerSelection) {
        roundResults = "Tie!";
        winner = "Tie"
    } else if (playerSelection == "rock" && computerSelection == "paper") {
        roundResults = "You lost this round!";
        winner = "Computer";
    } else if (playerSelection == "rock" && computerSelection == "scissors") {
        roundResults = "You won this round!";
        winner = "Player";
    } else if (playerSelection == "paper" && computerSelection == "scissors") {
        roundResults = "You lost this round!";
        winner = "Computer";
    } else if (playerSelection == "paper" && computerSelection == "rock") {
        roundResults = "You won this round!";
        winner = "Player";
    } else if (playerSelection == "scissors" && computerSelection == "rock") {
        roundResults = "You lost this round!";
        winner = "Computer";
    } else {
        roundResults = "You won this round!";
        winner = "Player";
    }
    return winner;
}
//  playerSelection = "paper";
    computerSelection = getComputerChoice();
    playerSelection = playerSelection.toLowerCase();
    computerSelection = computerSelection.toLowerCase();
    
    playRound(playerSelection, computerSelection);

// utilizes a function to call the results of playRound and utilizes a loop to determine the winner of a 5 round game

function game () {
    let numberRoundWins = 0;
    for (let i = 0; i < 5; ++i) {
            if (playerScore > computerScore) {
            gameResults = "You won the game!";
        }   else if (playerScore < computerScore) {
            gameResults = "You lost the game!";
        }   else {
            gameResults = "You tied, please play again!";
        }
}
}

// need to return results of playRound into game() function
// need to consider if there is one or more ties during 5 round game...