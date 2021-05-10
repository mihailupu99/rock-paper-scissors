let choice = ['rock', 'paper', 'scissors']

let humanScore = 0;
let computerScore = 0; 

function randomChoice(arr){
    let randomIndex = Math.floor(Math.random() * arr.length);

    let item = arr[randomIndex];

    return item;
}

function playRound(playerSelection, computerSelection){
    playerSelection = prompt("Will you choose rock, paper or scissors?").toLowerCase();
    computerSelection = randomChoice(choice);

    if ((playerSelection == 'rock' && computerSelection == 'scissors') ||
        (playerSelection == 'paper' && computerSelection == 'rock') || 
        (playerSelection == 'scissors' && computerSelection == 'paper')){
            humanScore += 1;
        } else if (playerSelection == computerSelection){
            console.log("It's a tie")
        } else {
            computerScore += 1; 
        }
        
    console.log(playerSelection);
    console.log(computerSelection);
}


