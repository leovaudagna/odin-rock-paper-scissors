//GLOBAL VARIABLES

let you = 0;
let cpu = 0;

let divBotones = document.querySelector("#buttons");
let restartButton = document.getElementById("restart-button");

let result = document.getElementById("result");

const yourScore = document.getElementById("your-score");
yourScore.innerHTML = you;
const cpuScore = document.getElementById("cpu-score");
cpuScore.innerHTML = cpu;

let yourChoiceText = document.getElementById("yourChoice");
let yourCPUText = document.getElementById("cpuChoice");

//CPU RANDOM CHOICE
function getComputerChoice() {
  let randomNumber = Math.floor(Math.random() * 3);

  switch (randomNumber) {
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

//END GAME
function endGame() {
  divBotones.style.display = "none";
  restartButton.style.display = "inline-block";
}

//RESTART GAME
function restartGame() {
  you = 0;
  cpu = 0;

  divBotones.style.display = "inline-block";
  restartButton.style.display = "none";

  yourScore.innerText = you;
  cpuScore.innerText = cpu;
  yourChoiceText.innerText = "";
  yourCPUText.innerText = ""; 
  
  yourScore.innerHTML = you;
  cpuScore.innerHTML = cpu;
  result.innerText = "";
  
}

//SCORE
function score(text) {
  if (text == "YOU WON!") {
    you += 1;
  } else if (text == "YOU LOSE") {
    cpu += 1;
  } else {
    console.log("DRAW");
  }

  yourScore.innerText = you;
  cpuScore.innerText = cpu;

  if (you == 5) {
    document.getElementById("final-score").innerText =
      "YOU WON! CONGRATULATIONS";
    endGame();
  } else if (cpu == 5) {
    document.getElementById("final-score").innerText = "YOU LOSE!";
    endGame();
  }
}

function playerSelection(me, cpu) {
  let cpuChoice = cpu.toLowerCase();
  let playerChoice = me.toLowerCase();

  yourChoiceText.innerText = playerChoice;
  yourCPUText.innerText = cpuChoice; 

   

  switch (playerChoice) {
    case "rock":
      if (cpuChoice == "paper") {
        result.innerText = "YOU LOSE";
        break;
      } else if (cpuChoice == "scissors") {
        result.innerText = "YOU WON";
        break;
      } else {
        result.innerText = "DRAW";
        break;
      }

    case "paper":
      if (cpuChoice == "scissors") {
        result.innerText = "YOU LOSE";
        break;
      } else if (cpuChoice == "rock") {
        result.innerText = "YOU WON";
        break;
      } else {
        result.innerText = "DRAW";
        break;
      }

    case "scissors":
      if (cpuChoice == "rock") {
        result.innerText = "YOU LOSE";
        break;
      } else if (cpuChoice == "paper") {
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
const restart = document.getElementById("restart-button");

//EVENT LISTENERS

rock.addEventListener("click", function () {
  playerSelection("rock", getComputerChoice());
});

paper.addEventListener("click", function () {
  playerSelection("paper", getComputerChoice());
});

scissors.addEventListener("click", function () {
  playerSelection("scissors", getComputerChoice());
});

restart.addEventListener("click", function () {
  restartGame();
});
