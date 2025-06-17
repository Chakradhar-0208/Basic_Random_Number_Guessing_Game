
let a;
let chances = 0;

function generateNumber() {
    a = Math.floor(Math.random() * 101); // 0-100 inclusive
    chances = 7;
    document.getElementById('result').innerHTML = "Random number generated! Start guessing.";
    console.log("Generated number:", a);
}

function validateNumbers() {
    let res = document.getElementById('result');
    let temp = parseInt(document.getElementById('GuessedNum').value);

    if (isNaN(temp)) {
        res.innerHTML = "⚠️ Please enter a valid number.";
        return;
    }

    if (temp < 0 || temp > 100) {
        res.innerHTML = "⚠️ Guess a number between 0 and 100.";
    } else {
        compareNumbers(temp, res);
    }
}

function compareNumbers(temp, res) {
    if (chances > 0) {
        if (temp === a) {
            res.innerHTML = "🎉 Correct Guess!!";
            chances = 0;
        } else {
            chances--;
            if (chances > 0) {
                let rel
                if(temp>a) rel="Higher"
                else rel="Lower"
                res.innerHTML = `❌ Wrong Guess! Guessed Number is ${rel} Than Actual. Tries left: ${chances}`;
            } else {
                res.innerHTML = `❌ Maximum tries reached. The number was ${a}. Click Generate to try again.`;
            }
        }
    } else {
        res.innerHTML = "⚠️ Click 'Generate' to start a new game.";
    }
}
