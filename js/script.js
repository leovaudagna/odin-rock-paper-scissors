function getComputerChoice(){
    let randomNumber = Math.floor(Math.random() * 3);
    
    switch (randomNumber){
        case 0:
            return "Piedra";
            break;
        case 1:
            return "Papel";
            break;
        case 2:
            return "Tijera";
            break;
    }
}

function playerSelection(me, cpu){
    
    let cpuChoice = cpu.toLowerCase();
    let playerChoice = me.toLowerCase();
    
    console.log("JUGADOR: " + playerChoice);
    console.log("CPU: " + cpuChoice);
    

    switch (playerChoice){
        case "piedra":
            if(cpuChoice == "papel"){
                return "PERDISTE";
                break;
            } else if (cpuChoice == "tijera"){
                return "GANASTE";
                break;
            } else {
                return "EMPATE";
                break;
            }
        
        case "papel":
            if(cpuChoice == "tijera"){
                return "PERDISTE";
                break;
            } else if (cpuChoice == "piedra"){
                return "GANASTE";
                break;
            } else {
                return "EMPATE";
                break;
            }
        
        case "tijera":
            if(cpuChoice == "piedra"){
                return "PERDISTE";
                break;
            } else if (cpuChoice == "papel"){
                return "GANASTE";
                break;
            } else {
                return "EMPATE";
                break;
            }
    }
}

let resultado = playerSelection("Piedra", getComputerChoice());
console.log(resultado);