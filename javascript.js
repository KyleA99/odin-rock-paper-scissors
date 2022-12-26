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

// declares a function named roundResults which declares the results using conditional statements

function roundResults (playerSelection, computerSelection){
    if (playerSelection === computerSelection) {
        message = "Tie!";
        winner = "Tie"
    } else if (playerSelection == "rock" && computerSelection == "paper") {
        message = "You Lose!";
        winner = "Computer";
    } else if (playerSelection == "rock" && computerSelection == "cissors") {
        message = "You Win!";
        winner = "Player";
    } else if (playerSelection == "paper" && computerSelection == "scissors") {
        message = "You Lose!";
        winner = "Computer";
    } else if (playerSelection == "paper" && computerSelection == "rock") {
        message = "You Win!";
        winner = "Player";
    } else if (playerSelection == "scissors" && computerSelection == "rock") {
        message = "You Lose!";
        winner = "Computer";
    } else {
        message = "You Win!";
        winner = "Player";
    }
    return winner;
}
    playerSelection = "paper";
    computerSelection = getComputerChoice();
    playerSelection = playerSelection.toLowerCase();
    computerSelection = computerSelection.toLowerCase();
    
    roundResults(playerSelection, computerSelection);

function game () {
    
}