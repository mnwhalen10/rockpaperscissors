// Create a new function named getComputerChoice.
// Write the code so that getComputerChoice will randomly return one of the following string values: “rock”, “paper” or “scissors”.
// Hint: The Math.random method returns a random number that’s greater than or equal to 0 and less than 1. Think about how you can use this to conditionally return one of the multiple choices.
// Test that your function returns what you expect using console.log or the browser developer tools before advancing to the next step.

//COMPUTER CHOICE
let getComputerChoice = function (max){
    let x = Math.floor(Math.random() * max); 
    if (x === 0){
        return "rock";
    }
    else if (x === 1){
        return "paper";
    }
    else {
        return "scissors";
    }
}
// console.log(getComputerChoice(3))

