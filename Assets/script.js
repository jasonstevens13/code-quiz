var timeEl = document.getElementById("timer");
console.log(timeEl.textContent);


var secondsLeft = 60;
console.log(secondsLeft);


function setTime() {
    var timerInterval = setInterval(function () {
        secondsLeft--;
        timeEl.textContent = secondsLeft + " seconds left.";
        console.log(secondsLeft);
        if (secondsLeft === 0) {
            clearInterval(timerInterval);
            sendMessage();
        }

    }, 1000);
}

function sendMessage() {
    timeEl.textContent = "Time's Up!";

}

setTime();
