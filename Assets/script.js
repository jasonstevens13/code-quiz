// Here I have created varibales for all of the specific html IDs that are being utilized.
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

// The below current question index variable is initializing at the first object in our array of questions.
// Therefore, when we display the question card/container, we start with the first question.
var currentQuestionIndex = 0;
// Initialized score at 0.
var score = 0;
// Initialized seconds left on timer at 60.
var secondsLeft = 60;


// This is an array of objects for each quiz question, answers, and correct answer.
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

// To identify the last question in the array.
var lastQuestionIndex = questionsArray.length - 1;

// This function serves to render the question contents into the quiz card in the html file.
// Each ID of the html quiz container is identified and then the text content of the currect question is pushed into it.
function renderQuestion() {
    let q = questionsArray[currentQuestionIndex];
    question.textContent = q.question;
    questionText.textContent = q.questionText;
    choiceA.textContent = q.choiceA;
    choiceB.textContent = q.choiceB;
    choiceC.textContent = q.choiceC;
    choiceD.textContent = q.choiceD;
}

// This function serves to check the user's answer. 
function checkAnswer(answer) {
    // If correct per the object in the question array, add 20 pts; else take 10 seconds off of the timer.
    if (questionsArray[currentQuestionIndex].correct == answer) {
        score = score + 20;
    } else {
        secondsLeft = secondsLeft - 10;
    }

    // If the question we are on in the array is still less than the last question, then move to the next question
    // and render it to the html.
    if (currentQuestionIndex < lastQuestionIndex) {
        currentQuestionIndex++;
        renderQuestion();
    } else {
        // else we are done and we can hide the quiz card by setting diplay to none and the render the score card.
        quiz.style.display = "none";
        scoreRender();
        finishMessage();
    }

}
// This function 
function scoreRender() {
    doneQuiz.style.display = "block";
    scoreDisplay.textContent = "Your score is " + score + ".";
    timeEl.textContent = "You're Done!";
    // finishMessage();
}


function setTime() {
    var timerInterval = setInterval(function () {
        secondsLeft--;
        timeEl.textContent = secondsLeft + " seconds left.";
        if (secondsLeft === 0 || secondsLeft < 0) {
            clearInterval(timerInterval);
            timeEl.textContent = "Time's Up!";
        }

    }, 1000);
}



// function finishMessage() {
//     timeEl.textContent = "You're Done!";
//     return;
// }



startQuiz.addEventListener("click", function (event) {
    event.preventDefault();
    startQuiz.style.display = "none";
    setTime();
    renderQuestion();
    quiz.style.display = "block";
});


// Pseudo-Code: If you are reading this, then I have not yet implemented the following:
// I will store the score and initials input into local storage
// I will have to sort by score, descending (where to do that I am not sure just yet)
// The 'view highscores' navbar element needs to be turned into a link athat displays a listing of scores.






