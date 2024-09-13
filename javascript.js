// Create a new function named getComputerChoice.
// Write the code so that getComputerChoice will randomly return one of the following string values: “rock”, “paper” or “scissors”.
// Hint: The Math.random method returns a random number that’s greater than or equal to 0 and less than 1. Think about how you can use this to conditionally return one of the multiple choices.
// Test that your function returns what you expect using console.log or the browser developer tools before advancing to the next step.

//COMPUTER CHOICE
let getComputerChoice = function (){
    let x = Math.floor(Math.random() * 3); 
    let choice;
    if (x === 0){
        choice = "rock";
    }
    else if (x === 1){
        choice = "paper";
    }
    else {
        choice = "scissors";
    }
    console.log("computer choice: " + choice);
    return choice;
}

// //HUMAN CHOICE
let getHumanChoice = function(){
    let choice = prompt("enter either: Rock, Paper, or Scissors").toLowerCase();
        console.log("human choice: " + choice);
        return choice;
}

// ROUND //
 let playRound = function (humanChoice,computerChoice){
    let result;
    if (computerChoice === "rock" && humanChoice === "rock" || computerChoice === "paper" && humanChoice === "paper" || computerChoice === "scissors" && humanChoice === "scissors"){
        result = "tie";
    }
    else if (computerChoice === "rock" && humanChoice === "scissors"){
        result = "computer";
    }
    else if (computerChoice === "scissors" && humanChoice === "paper"){
        result = "computer";
    }
    else if (computerChoice === "paper" && humanChoice === "rock"){
        result = "computer";
    }
    else {
        result = "human";
    }
    console.log(result);
    return result;
}
function playGame(){
    let humanScore = 0;
    let computerScore = 0;

    for (let i = 0; i < 5; i++){
        let humanSelection = getHumanChoice();  // Get a new choice every round
        let computerSelection = getComputerChoice();  // Get a new choice every round
        
        // playRound returns who won the round: "human", "computer", or "tie"
        let roundResult = playRound(humanSelection, computerSelection);

        // Update the scores based on the round result
        if (roundResult === "human") {
            humanScore++;
        } else if (roundResult === "computer") {
            computerScore++;
        }
        console.log("human score: " + humanScore);
        console.log("computer score: " + computerScore);
    }
    if (humanScore === computerScore){
        console.log("it's a tie!")
    }
    else if (humanScore > computerScore){
        console.log("Human wins!")
    }
    else {
        console.log("computer wins!")
    }
}

playGame();