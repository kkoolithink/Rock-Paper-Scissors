const choices = ["rock", "paper", "scissors"];

function capitalize(word) {
    return word.charAt(0).toUpperCase() + word.slice(1);
}

function determine_winner(player, computer) {
    if (player == computer) {
        return "It's a tie!";
    }
    
    if ((player === "rock" && computer == "scissors") || (player === "paper" && computer === "rock") || (player === "scissors") && computer === "paper") {
        return "You win!";
    } 
    else {
        return "You lose!";
    }
}

function play_game(player_choice) {
    const computer_choice = choices[Math.floor(Math.random() * 3)];

    document.querySelector("#player_choice").textContent = "You chose: " + capitalize(player_choice);
    document.querySelector("#computer_choice").textContent = "Computer chose: " + capitalize(computer_choice);

    document.querySelector("#winner").textContent = determine_winner(player_choice, computer_choice);
}