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

    function game () {
        let playerRoundWins = 0;
        let computerRoundWins = 0;
        for (let i = 0; i < 5; ++i) {
                array1[i] > array2[i] ? playerRoundWins++ : null; //remove array 1 + 2 section with just output of playRound()?
                array1[i] < array2[i] ? computerRoundWins++ : null;  //remove array 1 + 2 section with just output of playRound()?
        }
        if (playerRoundWins > computerRoundWins) {
            gameResults = "${playerRoundWins}, ${computerRoundWins}: You won the game!";
        } else if (playerRoundWins < computerRoundWins) {
            gameResults = "${playerRoundWins}, ${computerRoundWins}: You lost the game!";
        } else {
            gameResults = "${playerRoundWins}, ${computerRoundWins}: You tied, please play again!";
            }
        }
            return winner;
}
    playerSelection = "paper";
    computerSelection = getComputerChoice();
    playerSelection = playerSelection.toLowerCase();
    computerSelection = computerSelection.toLowerCase();
    
    playRound(playerSelection, computerSelection);

// need to consider if there is one or more ties during 5 round game...