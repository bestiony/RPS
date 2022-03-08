// take user input 
let userChoice;
let u = "user", c = "computer";



game(5);


/*-----------functions-----------*/
//
function game(rounds) {
    // basic varriables 
    let cWins = 0, uWins = 0, finale;
    // 
    for (i = 0; i < rounds; i++) {
        userChoice = prompt("pick a move");
        computerChoice = random_choice();
        result = decide_winner(userChoice, computerChoice);
        cWins += (result[0] == "c") ? 1 : 0;
        uWins += (result[0] == "u") ? 1 : 0;
        console.log(decide_winner(userChoice, computerChoice))
    }
    // decide game winner 
    if (cWins == uWins) {
        finale = `it's a draw ${cWins} wins each`;
    } else if (cWins > uWins) {
        finale = game_winner_message(c, cWins, uWins);
    } else {
        finale = game_winner_message(u, uWins, cWins);

    }
    console.log(finale);

}

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
    return `${winner} wins over ${loser}. ${wChoice} beats ${lChoice}`;
}

// game winner 
function game_winner_message (winner, winner_score, loser_score) {
    return `${winner} wins the game with a total of ${winner_score} to ${loser_score}`
}