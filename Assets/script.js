var timeEl = document.getElementById("timer");
var startQuizBtn = document.getElementById("startBtn");
var startQuiz = document.getElementById("startQuiz");
var quiz = document.getElementById("quiz");
var doneQuiz = document.getElementById("doneQuiz");
var question = document.getElementById("question");
var questionText = document.getElementById("questionText");
var choiceA = document.getElementById("A");
var choiceB = document.getElementById("B");
var choiceC = document.getElementById("C");
var choiceD = document.getElementById("D");
var scoreDisplay = document.getElementById("scoreDisplay");

var currentQuestionIndex = 0;
var score = 0;
var secondsLeft = 60;



// var correctAnswers = document.getElementById("correct");
// var incorrectAnswers = document.getElementById("incorrect");
// var displayedCard = document.getElementById("0");




var questionsArray = [
    {
        question: 'What is the abbreviation for Javascrip?',
        choiceA: 'JVS',
        choiceB: 'JS',
        choiceC: 'JavS',
        choiceD: 'JVscript',
        correct: 'B'
    },
    {
        question: 'Javascript is linked to an html page with what tag type?',
        choiceA: '<p>',
        choiceB: '<html>',
        choiceC: '<src>',
        choiceD: '<script>',
        correct: 'D'
    },
    {
        question: 'Fill in the blank. Javascript has 3 kinds of popup boxes: Alert, Confirm, and _______.',
        choiceA: 'window',
        choiceB: 'Warning!',
        choiceC: 'Prompt',
        choiceD: 'Caution!',
        correct: 'C',
    },
    {
        question: 'Fill in the blank. Written in global scope, the method alert(); is the same as writing window._____();',
        choiceA: 'alert',
        choiceB: 'this',
        choiceC: 'prompt',
        choiceD: 'document',
        correct: 'A'
    },
    {
        question: 'Fill in the blank. Combined, HTML, CSS, and Javascript are the languages of the ____.',
        choiceA: 'back-end',
        choiceB: 'server',
        choiceC: 'programmer',
        choiceD: 'web',
        correct: 'D'
    }
];

var lastQuestionIndex = questionsArray.length - 1;

function renderQuestion() {
    let q = questionsArray[currentQuestionIndex];
    question.textContent = q.question;
    questionText.textContent = q.questionText;
    choiceA.textContent = q.choiceA;
    choiceB.textContent = q.choiceB;
    choiceC.textContent = q.choiceC;
    choiceD.textContent = q.choiceD;
}

function checkAnswer(answer) {
    if (questionsArray[currentQuestionIndex].correct == answer) {
        score = score + 20;
    } else {
        console.log('Wrong');
        secondsLeft = secondsLeft - 10;
    }
    if (currentQuestionIndex < lastQuestionIndex) {
        currentQuestionIndex++;
        renderQuestion();
    } else {
        // clearInterval(timerInterval);
        finishMessage();
        quiz.style.display = "none";
        scoreRender();
        doneQuiz.style.display = "block";
        finishMessage();
    }

}

function scoreRender() {

    doneQuiz.style.display = "block";
    scoreDisplay.textContent = "Your score is " + score + ".";

}


function setTime() {
    var timerInterval = setInterval(function () {
        secondsLeft--;
        timeEl.textContent = secondsLeft + " seconds left.";
        console.log(secondsLeft);
        if (secondsLeft === 0 || secondsLeft < 0 || (doneQuiz.style.display = "block")) {
            clearInterval(timerInterval);
            sendMessage();
        }

    }, 1000);
}

function sendMessage() {
    timeEl.textContent = "Time's Up!";
    return;
}

function finishMessage() {
    timeEl.textContent = "You're Done!";
    return;
}



startQuiz.addEventListener("click", function (event) {
    event.preventDefault();
    startQuiz.style.display = "none";
    setTime();
    renderQuestion();
    quiz.style.display = "block";
});








