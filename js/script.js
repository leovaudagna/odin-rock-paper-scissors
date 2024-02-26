//GLOBAL VARIABLES

let you = 0;
let cpu = 0;


const yourScore = document.getElementById('your-score');
yourScore.innerHTML = you;
const cpuScore = document.getElementById('cpu-score');
cpuScore.innerHTML = cpu;


//CPU RANDOM CHOICE
function getComputerChoice(){
    let randomNumber = Math.floor(Math.random() * 3);
    
    switch (randomNumber){
        case 0:
            return "Rock";
            break;
        case 1:
            return "Paper";
            break;
        case 2:
            return "Scissors";
            break;
    }
}

//SCORE
function score(text){
    if (text == "YOU WON"){
        you += 1;
    } else if(text == "YOU LOSE"){
        cpu += 1;
    } else {
        console.log("DRAW");
    }

    yourScore.innerText = you;
    cpuScore.innerText = cpu;

    if(you == 5){
        console.log("PEPE");
        document.getElementById('final-score').innerText = "YOU WON! CONGRATULATIONS";
    } else if(cpu == 5){
        document.getElementById('final-score').innerText = "YOU LOSE!";
    }
    
}



function playerSelection(me, cpu){
    
    let cpuChoice = cpu.toLowerCase();
    let playerChoice = me.toLowerCase();
    

    document.getElementById('yourChoice').innerText = playerChoice;
    document.getElementById('cpuChoice').innerText = cpuChoice;

    let result = document.getElementById('result');
    

    switch (playerChoice){
        case "rock":
        if(cpuChoice == "paper"){
                result.innerText = "YOU LOSE";
                break;
            } else if (cpuChoice == "scissors"){
                result.innerText = "YOU WON";
                break;
            } else {
                result.innerText = "DRAW";
                break;
            }
        
        case "paper":
            if(cpuChoice == "scissors"){
                result.innerText = "YOU LOSE";
                break;
            } else if (cpuChoice == "rock"){
                result.innerText = "YOU WON";
                break;
            } else {
                result.innerText = "DRAW";
                break;
            }
        
        case "scissors":
            if(cpuChoice == "rock"){
                result.innerText = "YOU LOSE";
                break;
            } else if (cpuChoice == "paper"){
                result.innerText = "YOU WON";
                break;
            } else {
                result.innerText = "DRAW";
                break;
            }
    }

    console.log(result.innerText);
    score(result.innerText);
    return result;
}


//Nueva lógica
const rock = document.getElementById("rock-button");
const paper = document.getElementById("paper-button");
const scissors = document.getElementById("scissors-button");

//EVENT LISTENERS
rock.addEventListener("click", function(){
    playerSelection("rock", getComputerChoice());
})

paper.addEventListener("click", function(){
    playerSelection("paper", getComputerChoice());
})

scissors.addEventListener("click", function(){
    playerSelection("scissors", getComputerChoice());
})

