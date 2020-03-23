var timeEl = document.getElementById("timer");
var startQuiz = document.getElementById("startBtn");
var cardTitle = document.getElementById("cardTitle");
var cardText = document.getElementById("cardText");
var btnList = document.getElementById("btnList");
var q1 = document.getElementById("q1");
var correctAnswers = document.getElementById("correct");
var incorrectAnswers = document.getElementById("incorrect");
var displayedCard = document.getElementById("0");
var score = 0;
var secondsLeft = 60;
var questionsArray = [
    ['1. What is the abbreviation for Javascrip?', 'JVS', 'JS', 'JavS', 'JVscript'],
    ['2. Javascript is linked to an html page with what tag type?', '<p>', '<html>', '<src>', '<script>'],
    ['3. Fill in the blank. Javascript has 3 kinds of popup boxes: Alert, Confirm, and _______.', 'window', 'Warning!', 'Prompt', 'Caution!'],
    ['4. Fill in the blank. Written in global scope, the method alert(); is the same as writing window._____();', 'alert', 'this', 'prompt', 'document'],
    ['5. Fill in the blank. Combined, HTML, CSS, and Javascript are the languages of the ____.', 'back-end', 'server', 'programmer', 'web'],
];

function setTime() {
    var timerInterval = setInterval(function () {
        secondsLeft--;
        timeEl.textContent = secondsLeft + " seconds left.";
        console.log(secondsLeft);
        if (secondsLeft === 0 || secondsLeft < 0) {
            clearInterval(timerInterval);
            sendMessage();
        }

    }, 1000);
}

function sendMessage() {
    timeEl.textContent = "Time's Up!";
    return;
}



startQuiz.addEventListener("click", function (event) {
    event.preventDefault();
    nextCard();
    setTime();

});

correctAnswers.addEventListener("click", function (event) {
    event.preventDefault();
    score = score + 10;
});

incorrectAnswers.addEventListener("click", function (event) {
    event.preventDefault();
    score = score - 10;
    secondsLeft = secondsLeft - 10;
});



function nextCard(displayedCard) {
    if (displayedCard = '0') {
        displayedCard.style.display = "none";
        displayedCard = '1';
        displayedCard.style.display = "block";
    }
    if (displayedCard = '1') {
        displayedCard.style.display = "none";
        displayedCard = '2';
        displayedCard.style.display = "block";
    };
    if (displayedCard = '2') {
        displayedCard.style.display = "none";
        displayedCard = '3';
        displayedCard.style.display = "block";
    };
    if (displayedCard = '3') {
        displayedCard.style.display = "none";
        displayedCard = '4';
        displayedCard.style.display = "block";
    };
    if (displayedCard = '4') {
        displayedCard.style.display = "none";
        displayedCard = '5';
        displayedCard.style.display = "block";
    };



}


