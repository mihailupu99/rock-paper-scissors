let choice = ['rock', 'paper', 'scissors']

let humanScore = 0;
let computerScore = 0; 

var clickedId =''

function randomChoice(arr){
    let randomIndex = Math.floor(Math.random() * arr.length);
    let item = arr[randomIndex];
    return item;
}

let rock = document.getElementById('rock');
let paper = document.getElementById('paper');
let scissors = document.getElementById('scissors');


function getId(btn){
    clickedId = btn.id;
    console.log(clickedId);
    

    if (clickedId == 'rock'){
        document.getElementById("yourchoiceimg").src = "rock.png";
    } else if (clickedId == 'paper'){
        document.getElementById("yourchoiceimg").src = "paper.png";
    } else if (clickedId == 'scissors'){
        document.getElementById("yourchoiceimg").src = "scissors.png";
    }

    returnItem = randomChoice(choice);


    if (returnItem == 'rock'){
        document.getElementById("computerchoiceimg").src = "rock.png";
    } else if (returnItem == 'paper'){
        document.getElementById("computerchoiceimg").src = "paper.png";
    } else if (returnItem == 'scissors'){
        document.getElementById("computerchoiceimg").src = "scissors.png";
    }

    if ((clickedId == 'rock' && returnItem == 'scissors') ||
        (clickedId == 'paper' && returnItem == 'rock') || 
        (clickedId == 'scissors' && returnItem == 'paper')){
            humanScore += 1;
        } else if (clickedId == returnItem){
            console.log("It's a tie")
        } else {
            computerScore += 1; 
        }
    document.getElementById("human").textContent=`${humanScore}`;
    document.getElementById("computer").textContent=`${computerScore}`;
    
    if (humanScore == 5){
        alert("Congratulations Human, You win! Press F5 to play again.")
    } else if (computerScore == 5){
        alert("Unfortunately Computer Wins! Press F5 to play again.")
    }

}

// rock.onclick = function(){
//     document.getElementById("yourchoiceimg").src = "rock.png";
//     returnItem = randomChoice(choice);
//     if (returnItem == 'rock'){
//         document.getElementById("computerchoiceimg").src = "rock.png";
//     }
    
// }
// paper.onclick = function(){
//     document.getElementById("yourchoiceimg").src = "paper.png";
//     returnItem = randomChoice(choice);
//     if (returnItem == 'paper'){
//         document.getElementById("computerchoiceimg").src = "paper.png";
//     }
//     console.log(returnItem);
// }
// scissors.onclick = function(){
//     document.getElementById("yourchoiceimg").src = "scissors.png";
//     returnItem = randomChoice(choice);
//     if (returnItem == 'scissors'){
//         document.getElementById("computerchoiceimg").src = "scissors.png";
//     }
//     console.log(returnItem);
// }


// const rock = document.querySelector('#rock');
// rock.onclick = () => document.getElementById("yourchoiceimg").src == "rock.png";

// const paper = document.querySelector('#paper');
// paper.onclick = () => document.getElementById("yourchoiceimg").src == "paper.png";





// function computerChange(){
//     returnItem = randomChoice(choice);
//     console.log(returnItem);
    
// }

// function playRound(e){
//     playerSelection = prompt("Will you choose rock, paper or scissors?").toLowerCase();
//     computerSelection = randomChoice(choice);

//     if ((playerSelection == 'rock' && computerSelection == 'scissors') ||
//         (playerSelection == 'paper' && computerSelection == 'rock') || 
//         (playerSelection == 'scissors' && computerSelection == 'paper')){
//             humanScore += 1;
//         } else if (playerSelection == computerSelection){
//             console.log("It's a tie")
//         } else {
//             computerScore += 1; 
//         }
        
//     console.log(playerSelection);
//     console.log(computerSelection);
// }


