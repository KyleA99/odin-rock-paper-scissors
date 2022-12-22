// function getComputerChoice () {
// }

const choiceClass = []
    choiceClass [0] = "Rock";
    choiceClass [1] = "Paper";
    choiceClass [2] = "Scissors";
    const randomChoiceClass = choiceClass[(Math.random() * choiceClass) | 0]

    console.log(randomChoiceClass, choiceClass[randomChoiceClass])


function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min);
}
console.log(getRandomInt(0, 3));