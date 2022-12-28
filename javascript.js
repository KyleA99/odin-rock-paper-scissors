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
// utilizes a function to call the results of playRound and utilizes a loop to determine the winner of a 5 round game

function playRound (playerSelection, computerSelection) {
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

    function game () {
        let playerScore = 0;
        let computerScore = 0;
        for (let i = 0; i < 5; ++i) {
                if (winner === "Player") {
                    ++playerScore;
                } else if (winner === "Computer") {
                    ++computerScore;
                } else {
                // something for tie (game ends 2-2-1)
                }
        }
        if (playerScore > computerScore) {
            gameResults = "${playerScore}, $computerScore}: You won the game!";
        } else if (playerRoundWins < computerRoundWins) {
            gameResults = "${playerScore}, ${computerScore}: You lost the game!";
        } else {
            gameResults = "${playerScore}, ${computerScore}: You tied, please play again!";
            }
        }
            return winner;
}
    playerSelection = "paper";
    computerSelection = getComputerChoice();
    playerSelection = playerSelection.toLowerCase();
    computerSelection = computerSelection.toLowerCase();
    
    playRound(playerSelection, computerSelection);