 // declares a function named getComputerChoice
 // declares an array named choiceClass, with contains an item for each computer choice
 // randomly selects a number which corresponds to an array item
 // logs message to console which displays randomly generated computer choice
 // ends function execution and specifies value to be returned to the function caller
 
 function getComputerChoice () {
    let choiceClass = []
        choiceClass [0] = "Rock";
        choiceClass [1] = "Paper";
        choiceClass [2] = "Scissors";
        let randomChoiceClass = Math.floor(Math.random() * choiceClass.length);
        // console.log(choiceClass[randomChoiceClass]);
        return randomChoiceClass;
 }
    getComputerChoice();

// declares a function named roundResults which determines if the player or computer won an individual round
// add conditional statements to return a string that declares the winner of the round
// declares function parameters

function roundResults (playerSelection, computerSelection){
    if (playerSelection === computerSelection) {
        message = "Tie!";
    } else if (playerSelection == "Rock" && computerSelection == "Paper") {
        message = "You Lose!";
    } else if (playerSelection == "Rock" && computerSelection == "Scissors") {
        message = "You Win!";
    } else if (playerSelection == "Paper" && computerSelection == "Scissors") {
        message = "You Lose!";
    } else if (playerSelection == "Paper" && computerSelection == "Rock") {
        message = "You Win!";
    } else if (playerSelection == "Scissors" && computerSelection == "Rock") {
        message = "You Lose!";
    } else {
        message = "You Win!";
    }
    
    console.log(message);
    return;
}
    computerSelection = getComputerChoice();
    playerSelection = "Rock";
    roundResults(playerSelection, computerSelection);