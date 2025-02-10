let score = 0;
let tokens = 0;

const clickButton = document.getElementById('click-button');
const scoreDisplay = document.getElementById('score');
const tokensDisplay = document.getElementById('tokens');

clickButton.addEventListener('click', () => {
    score += 1;
    scoreDisplay.textContent = `Score: ${score}`;

    // Начисление токенов за каждые 1000 очков
    if (score % 1000 === 0) {
        tokens += 10;
        tokensDisplay.textContent = `KNB Tokens: ${tokens}`;
        alert(`You earned 10 KNB Tokens! Total: ${tokens}`);
    }
});