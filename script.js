const resultText = document.querySelector("#result-h1");
const paper = document.querySelector("#choice-one");
const rock = document.querySelector("#choice-two");
const scissors = document.querySelector("#choice-three");
const computerScoreDom = document.querySelector("#computer-p");
const playerScoreDom = document.querySelector("#player-p");

const choices = ["rock", "scissors", "paper"];

function getComputerChoice() {
    let randomIndex = Math.floor(Math.random() * choices.length);
    return choices[randomIndex];
}

let playerScore = 0;
let computerScore = 0;

paper.addEventListener("click", function () {
    let playerChoice = this.dataset.choice;
    play(playerChoice);
});

rock.addEventListener("click", function () {
    let playerChoice = this.dataset.choice;
    play(playerChoice);
});

scissors.addEventListener("click", function () {
    let playerChoice = this.dataset.choice;
    play(playerChoice);
});

function checkWinner(player, computer) {
    if (player === computer) {
        return "Draw";
    }

    if (player === "rock" && computer === "scissors") {
        return "Player wins";
    }

    if (player === "scissors" && computer === "paper") {
        return "Player wins";
    }

    if (player === "paper" && computer === "rock") {
        return "Player wins";
    }

    return "Computer wins";
}

function play(playerChoice) {
    let computerChoice = getComputerChoice();
    let result = checkWinner(playerChoice, computerChoice);

    if (result === "Player wins") {
        playerScore++;
    } else if (result === "Computer wins") {
        computerScore++;
    }

    resultText.textContent = result;
    playerScoreDom.textContent = "Your score: " + playerScore;
    computerScoreDom.textContent = "Computer score: " + computerScore + " " + `(the computer chose: ${computerChoice})`;
}

const reset = document.querySelector("#button-reset")

reset.addEventListener("click", () => {
    resultText.textContent = "choose one";
    playerScore = 0;
    computerScore = 0;
    computerScoreDom.textContent = "Computer score: 0 (the computer chose: ?)";
    playerScoreDom.textContent = "Your score: 0";
});