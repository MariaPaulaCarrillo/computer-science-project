// ------------ EMAIL FUNCTION ------------
function sendMail(email) {
    if (!email) {
        document.getElementById('responseMessage').innerText = "Please enter a valid email address.";
        return;
    }

    // Simulación de envío de correo
    setTimeout(() => {
        document.getElementById('responseMessage').innerText = "Email sent successfully!";
    }, 1000);
}

document.getElementById('emailForm').addEventListener('submit', function () {
    const emailValue = document.getElementById('email').value;
    sendMail(emailValue);
});


// ------------ NUMBER GUESS GAME ------------
let randomNumber = Math.floor(Math.random() * 101);

function checkGuess() {
    const userGuess = document.getElementById('userGuess').value;
    const resultMessage = document.getElementById('resultMessage');

    if (userGuess === "") {
        resultMessage.textContent = "Please enter a number!";
        return;
    }

    const guess = parseInt(userGuess);

    if (guess < 0 || guess > 100) {
        resultMessage.textContent = "Number must be between 0 and 100.";
    } else if (guess < randomNumber) {
        resultMessage.textContent = "Too low! Try again.";
    } else if (guess > randomNumber) {
        resultMessage.textContent = "Too high! Try again.";
    } else {
        resultMessage.textContent = "🎉 Correct! You guessed the number!";
        randomNumber = Math.floor(Math.random() * 101); // nuevo número
    }
}


