let ran = parseInt(Math.random() * 10) + 1;

function guess() {

    const user = Number(document.getElementById('guess').value);
    const result = document.getElementById('result');

    if (user == ran) {
        result.innerHTML = "🏆 YOU WIN! 🎉";
        result.classList.add("win");
        result.innerHTML += '<div class="confetti">🎉✨🎊</div>';

    } else if (user > ran) {
        result.textContent = 'Треба менше число. Спробуйте ще раз.';
        result.classList.remove("win");

    } else {
        result.textContent = 'Треба більше число. Спробуйте ще раз.';
        result.classList.remove("win");
    }
}
