 // declares a function (getComputerChoice), an array (choiceClass), and randomly selectes a number/array item
 
 function getComputerChoice () {
    let choiceClass = []
        choiceClass [0] = "Rock";
        choiceClass [1] = "Paper";
        choiceClass [2] = "Scissors";
        let randomChoiceClass = Math.floor(Math.random() * choiceClass.length);
        //console.log(choiceClass[randomChoiceClass]);
        return choiceClass[randomChoiceClass];
 }
    getComputerChoice();

// declares a function named roundResults which declares the results based off conditional statements

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
    playerSelection = "rock";
    computerSelection = getComputerChoice();
    playerSelection = playerSelection.toLowerCase();
    computerSelection = computerSelection.toLowerCase();

    roundResults(playerSelection, computerSelection);