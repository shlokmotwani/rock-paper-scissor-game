function getComputerChoice(){
    let num = Math.floor(Math.random() * 10 / 4);
    let options = ["rock", "paper", "scissor"];
    let choice = options[num];
    return choice;
}

function playOneRound(playerChoice){
    let computerChoice = getComputerChoice();
    computerChoice = computerChoice[0].toUpperCase() + computerChoice.slice(1);
    console.log("Computer Choice = " + computerChoice);
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

    let buttonDiv = document.querySelector(".button-div");
    let resultDiv = document.querySelector("#result-div");

    let playerChoice = "";

    buttonDiv.addEventListener("click", (e)=>{
        playerChoice = e.target.textContent;
        console.log("Player Choice = " + playerChoice);
        let winner = playOneRound(playerChoice);

        if(winner[0] == "P"){
            playerScore++;
            console.log("Player WINS this round");
        }
        else if(winner[0] == "C"){
            computerScore++;
            console.log("Computer WINS this round");
        }
        else{
            console.log("This round was a tie.");
        }

        console.log(`Score : Player - ${playerScore} / Computer - ${computerScore}`);

        if (playerScore == 5){
            playerScore = computerScore = 0;
            resultDiv.textContent = "Player won the game!";
        }
        if (computerScore == 5){
            playerScore = computerScore = 0;
            resultDiv.textContent = "Computer won the game!";
        }
    });  
}

playGame();