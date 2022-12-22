 // declares a function named getComputerChoice
 // declares an array named choiceClass, with contains an item for each computer choice
 // randomly selects a number which corresponds to an array item
 // logs message to console which displays randomly generated computer choice
 // ends function execution and specifies value to be returned to the function caller
 
 function getComputerChoice () {
    const choiceClass = []
        choiceClass [0] = "Rock";
        choiceClass [1] = "Paper";
        choiceClass [2] = "Scissors";
        const randomChoiceClass = Math.floor(Math.random() * choiceClass.length);
        console.log(choiceClass[randomChoiceClass]);
        return randomChoiceClass;
 }
    getComputerChoice();