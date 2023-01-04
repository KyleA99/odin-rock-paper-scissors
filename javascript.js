function getComputerChoice () {
    let choiceClass = [];
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

function game () {
    let playerScore = 0;
    let computerScore = 0;
    for (let i = 0; i < 5; i++) {
        const playerSelection = getPlayerChoice().toLowerCase();
        const computerSelection = getComputerChoice().toLowerCase();
        if (playRound(playerSelection, computerSelection) === "You won this round!") {
            playerScore++;
        } else if (playRound(playerSelection, computerSelection) === "You lost this round!") {
            computerScore++;
        } else {
        // Do nothing.
        }
    }
    if (playerScore > computerScore) {
        return (`${playerScore}, ${computerScore}: You won the game!`);
    } else if (playerScore < computerScore) {
        return (`${playerScore}, ${computerScore}: You lost the game!`);
    } else {
        return (`${playerScore}, ${computerScore}: You tied, please play again!`);
    }
}
console.log(game())