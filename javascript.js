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
    
    playRound(playerSelection, computerSelection);

// utilizes a function to call the results of playRound and utilizes a loop to determine the winner of a
// 5 round game

function game () {
    for (let i = 0; i < 5; i++)
    {
        // body of the loop
        // satements we want to execute
    }
}