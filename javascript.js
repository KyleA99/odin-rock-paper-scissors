function getComputerChoice () {
    let choiceClass = []
        choiceClass [0] = "Rock";
        choiceClass [1] = "Paper";
        choiceClass [2] = "Scissors";
        let randomChoiceClass = Math.floor(Math.random() * choiceClass.length);
        return choiceClass[randomChoiceClass];
 }
getComputerChoice();

function getPlayerChoice () {
    return prompt("Please choose either rock, paper, or scissors.");
}

function playRound (playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {
        roundResults = "Tie!";
        winner = "Tie";
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
        playerSelection = getPlayerChoice().toLowerCase();
        computerSelection = getComputerChoice().toLowerCase();
                if (winner === "Player") {
                    ++playerScore;
                } else if (winner === "Computer") {
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
    game();
}
playerSelection = getPlayerChoice();
computerSelection = getComputerChoice();

playRound(playerSelection, computerSelection);
console.log(gameResults)