function getComputerChoice(){
    let num = Math.floor(Math.random() * 10 / 4);
    let options = ["rock", "paper", "scissor"];
    let choice = options[num];
    return choice;
}

function playOneRound(){
    let playerChoice = prompt("Choose from Rock, Paper and Scissor:");

    if (playerChoice === null){
        return null;
    }

    playerChoice = playerChoice.toLowerCase();
    playerChoice = playerChoice[0].toUpperCase() + playerChoice.slice(1);
    let computerChoice = getComputerChoice();
    computerChoice = computerChoice[0].toUpperCase() + computerChoice.slice(1);
    return(announceWinner(playerChoice, computerChoice));
}

function announceWinner(playerChoice, computerChoice){
    if (playerChoice === computerChoice){
        return("It is a TIE.");
    }
    else if (playerChoice === "Rock" && computerChoice === "Paper" ||
        playerChoice === "Paper" && computerChoice === "Scissor" ||
        playerChoice === "Scissor" && computerChoice === "Rock"){
            return("Computer WINS.");
        }
    else{
        return("Player WINS.");
    }

}

function playGame(){
    let playerScore = computerScore = 0;
    for(let i=0; i<5; i++){
        let response = playOneRound();
        console.log(response);
        if(response === null){
            console.log("Game ABORTS!");
            return;
        }
        if(response[0] == "P"){
            playerScore++;
            console.log("Player WINS this round");
        }
        else if(response[0] == "C"){
            computerScore++;
            console.log("Computer WINS this round");
        }
        else{
            console.log("This round was a tie.");
        }
        console.log(`Score : Player - ${playerScore} / Computer - ${computerScore}`);
    }
    if (playerScore > computerScore){
        return "Player won the game!";
    }
    else if (computerScore > playerScore){
        return "Computer won the game!";
    }
    else{
        return "The game is a tie!!!!";
    }
}

console.log(playGame());