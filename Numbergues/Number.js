//Declare variable
let attempts = 10, min = 0;
let randomNum = Math.floor(Math.random() * 100 + 1);
// let max = 100, tries = 10, triesLeft = tries;


const guess = document.getElementById("guess");
const submit = document.getElementById("submit");
const hint = document.getElementById("hint");
const attemptsText = document.getElementById("attempts");

// Event listeners
submit.addEventListener("click", checkGuess);

function checkGuess() {
    const userValue = Number(guess.value);
    attempts--;

    //condition

    if(userValue === randomNum) {
        hint.textContent = "Congratulation, you guessed it!";
    }
    else if(attempts === 0) {
        hint.textContent = "You Lost!, try again";
    }
    else if(userValue < randomNum) {
        hint.textContent = "It's to low! Try higher.";
    }
    else {
        hint.textContent = "It's to High! Try lower.";
    }

    attemptsText.textContent = "Attempts: " + attempts;
}

