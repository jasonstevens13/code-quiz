var timeEl = document.getElementById("timer");
var startQuiz = document.getElementById("startBtn");
var secondsLeft = 60;



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



startQuiz.addEventListener("click", function (event) {
    event.preventDefault();
    setTime();

    console.log(event);

});
