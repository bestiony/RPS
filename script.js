// take user input 
let userChoice = "rock";
let u = "user", c = "computer";

// take computer input 
let computerChoice = random_choice();

// decide winner 
console.log(decide_winner(userChoice, computerChoice));
let cWins = 0, uWins = 0;

for (i = 0; i < 5; i++) {
    computerChoice = random_choice();
    result = decide_winner(userChoice, computerChoice);
    cWins += (result[0] == "c") ? 1 : 0;
    uWins += (result[0] == "u") ? 1 : 0;
    console.log(decide_winner(userChoice, computerChoice))
}

let finale;
if (cWins > uWins) {
    finale = `${c} wins the round with a total of ${cWins} to ${uWins}`;
} else {
    finale = `${u} wins the round with a total of ${uWins} to ${cWins}`;

}
console.log(finale);


/*-----------functions-----------*/

// take computer input 
function random_choice() {
    let random = Math.floor(Math.random() * 100);
    let choice;
    // 0-30 -> rock   31-60 -> paper   61-100-> scissors 
    if (random <= 30) {
        choice = "rock";
    } else if (random <= 60) {
        choice = "paper";
    } else {
        choice = "scissors";
    }
    return choice;
}

// decide winner 
function decide_winner(uChoice, cChoice) {
    uChoice = uChoice.toLowerCase().trim();
    cChoice = cChoice.toLowerCase().trim();
    let result;
    if (uChoice == cChoice) {
        result = "it's a draw"
    } else if (uChoice == "rock") {
        result = (cChoice == "scissors") ? win_message(u, c, uChoice, cChoice) : win_message(c, u, cChoice, uChoice);
    } else if (uChoice == "paper") {
        result = (cChoice == "rock") ? win_message(u, c, uChoice, cChoice) : win_message(c, u, cChoice, uChoice);
    } else {
        result = (cChoice == "paper") ? win_message(u, c, uChoice, cChoice) : win_message(c, u, cChoice, uChoice);
    }
    return result;
}


// print win message, takes winner loser and thier choices
function win_message(winner, loser, wChoice, lChoice) {
    return `${winner} wins over ${loser} with ${wChoice} to ${lChoice}`;
}