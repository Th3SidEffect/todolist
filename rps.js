const choice = ["Rock", "Paper", "Scissors"];
let cc = document.getElementById("cc");
let pc = document.getElementById("pc");
let res = document.getElementById("result");

function playGame(playerChoice){
    let computerChoice = choice[Math.floor(Math.random() * 3)];
    pc.textContent = `Player Choice: ${playerChoice}`;
    cc.textContent = `Computer Choice: ${computerChoice}`;
    
    if(computerChoice === playerChoice){
        res.textContent = `It's a Tie!`;
    }
    else{
        switch(playerChoice){
            case "Rock":
                res.textContent = (computerChoice == "Paper") ? "You Lose!" : "You Win!";
                break;
            case "Paper":
                res.textContent = (computerChoice == "Scissors") ? "You Lose!" : "You Win";
                break;
            case "Scissors":
                res.textContent = (computerChoice == "Paper") ? "You Win!" : "You Lose!";
                break;
        }
    }
}