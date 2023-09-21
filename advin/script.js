let randomNumber;
let attempts = 5;
let gameOver = false;

function startGame() {
    randomNumber = Math.floor(Math.random() * 100) + 1;
    attempts = 5;
    gameOver = false;
    document.getElementById('message').textContent = '';
    document.getElementById('attempts').textContent = attempts;
    document.getElementById('guess').value = '';
}

document.getElementById('check').addEventListener('click', function () {
    if (gameOver) return;

    const guess = parseInt(document.getElementById('guess').value);

    if (isNaN(guess) || guess < 1 || guess > 100) {
        setMessage('Digite um número válido entre 1 e 100.', 'red');
        return;
    }

    attempts--;

    if (guess === randomNumber) {
        setMessage(`Parabéns! Você acertou o número ${randomNumber}.`, 'green');
        gameOver = true;
    } else if (attempts === 0) {
        setMessage(`Suas tentativas acabaram. O número correto era ${randomNumber}.`, 'red');
        gameOver = true;
    } else {
        const hint = guess < randomNumber ? 'maior' : 'menor';
        setMessage(`Tente novamente. Dica: O número é ${hint} que ${guess}. Tentativas restantes: ${attempts}`, 'blue');
    }
});

document.getElementById('restart').addEventListener('click', startGame);

function setMessage(message, color) {
    const messageElement = document.getElementById('message');
    messageElement.textContent = message;
    messageElement.style.color = color;
}

startGame();