let randomNumber = Math.floor(Math.random() * 100) + 1;

const submit = document.getElementById("submit").addEventListener("click", GuessGame);
const remaining = document.getElementById("remaining");
const lowHigh = document.getElementById("low-high");

let remainingNumber = [6];

function GuessGame(){
    let userGuess = document.getElementById('your-guess').value;
    if (userGuess == randomNumber) {
        lowHigh.innerHTML = 'Congratulations, correct guess.' + " " + randomNumber;
    } else if (userGuess < randomNumber){
        remainingNumber--;
        remaining.innerHTML = "Guess remaining: " + remainingNumber;
        if (remainingNumber <= 0) {
            lowHigh.innerHTML = "I am sad. You lost!";
            location.reload();
        } else {
            lowHigh.innerHTML = 'A little higher!';
        }
    } else if (userGuess > randomNumber){
        remainingNumber--;
        remaining.innerHTML = "Guess remaining: " + remainingNumber;
        if (remainingNumber <= 0) {
            lowHigh.innerHTML = "I am sad. You lost!";
            location.reload();
        }
        else {
            lowHigh.innerHTML = 'A little lower!';
        }
    }

    if (userGuess < 0) {
        alert("Please enter a number higher than 0!");
        location.reload();
    } else if (userGuess > 100) {
        alert("Please enter a number less than 100!");
        location.reload();
    }else if (userGuess == "") {
        alert("Please enter a number!");
        location.reload();
    }
}