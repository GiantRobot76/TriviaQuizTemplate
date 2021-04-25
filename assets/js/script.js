//Question arrays. First element is question number. Second is question text. index 2-5 are multiple choice answers. 6 is index of correct answer.

var q1 = [
  "1",
  "Statements in JS should be ended with what character?",
  ";",
  ":",
  "~",
  "%",
  2,
];

var q2 = [
  "2",
  "JS stands for what?",
  "Just Skating",
  "Jupiter's Sattelites",
  "Justin Slitherine",
  "Javascript",
  5,
];

var q3 = [
  "3",
  "Java is the nickname for what beverage?",
  "Beer",
  "Wine",
  "Coffee",
  "Tea",
  4,
];

var q4 = [
  "4",
  "Java is also an island in what country?",
  "Indonesia",
  "Malaysia",
  "Singapore",
  "East Timor",
  2,
];

var q5 = [
  "5",
  "Javascript can be programmed on all of the following except:",
  "PC",
  "Nintendo Switch",
  "Macintosh",
  "Linux",
  3,
];

//Global Variables for Answer Checking and Score Retention
var numQuestions = 5;
var questArray = [q1, q2, q3, q4, q5];
var currentScore = 0;
var questionIndex = 0;
var currentQuestArray = q1;
var timeLeft = 60;

//variable assignments to get elements/IDs used in DOM operations
var questNum = document.getElementById("qNum");
var questText = document.getElementById("qText");
var ans1 = document.getElementById("answer1");
var ans2 = document.getElementById("answer2");
var ans3 = document.getElementById("answer3");
var ans4 = document.getElementById("answer4");
var resButton = document.getElementById("showResult");
var countdown = document.getElementById("clock");

function loadQuestion(questArray) {
  questNum.textContent = "Question " + questArray[0];
  questText.textContent = questArray[1];
  ans1.textContent = questArray[2];
  ans2.textContent = questArray[3];
  ans3.textContent = questArray[4];
  ans4.textContent = questArray[5];
  currentAnswer = questArray[6];
  resButton.setAttribute("style", "display:none");
}

function clearQuestion() {
  questNum.textContent = "";
  questText.textContent = "";
  ans1.textContent = "";
  ans2.textContent = "";
  ans3.textContent = "";
  ans4.textContent = "";
  ans1.setAttribute("style", "background-color:lightsteelblue");
  ans2.setAttribute("style", "background-color:lightsteelblue");
  ans3.setAttribute("style", "background-color:lightsteelblue");
  ans4.setAttribute("style", "background-color:lightsteelblue");
}

function nextQuestion() {
  clearQuestion();
  questionIndex++;
  currentQuestArray = questArray[questionIndex];
  loadQuestion(currentQuestArray);
}

function gameOver() {
  alert("That's all folks!!!");
}

function timer() {
  var timeInterval = setInterval(function () {
    countdown.textContent = "Seconds Remaining: " + timeLeft;
    timeLeft--;

    if (timeLeft <= 0) {
      clearInterval(timeInterval);
      gameOver();
    }
  }, 1000);
}

//button event listeners for answer check. Checks index of button pushed against the current question answer.
ans1.addEventListener("click", function () {
  if (currentAnswer === 2) {
    ans1.setAttribute("style", "background-color:green");
    currentScore = currentScore + 10;
    resButton.setAttribute("style", "display:block");
    resButton.textContent =
      "Correct! Your Current Score is: " +
      currentScore +
      " Click here to move to the next question.";
  } else {
    ans1.setAttribute("style", "background-color:red");
    resButton.setAttribute("style", "display:block");
    timeLeft -= 10;
    resButton.textContent =
      "Sorry. The Correct Answer was " +
      currentQuestArray[currentAnswer] +
      " Your Current Score is: \n" +
      currentScore +
      " .Click here to move to the next question.";
  }
});

ans2.addEventListener("click", function () {
  if (currentAnswer === 3) {
    ans2.setAttribute("style", "background-color:green");
    currentScore = currentScore + 10;
    resButton.setAttribute("style", "display:block");
    resButton.textContent =
      "Correct! Your Current Score is: " +
      currentScore +
      " Click here to move to the next question.";
  } else {
    ans2.setAttribute("style", "background-color:red");
    resButton.setAttribute("style", "display:block");
    timeLeft -= 10;
    resButton.textContent =
      "Sorry. The Correct Answer was " +
      currentQuestArray[currentAnswer] +
      " Your Current Score is: \n" +
      currentScore +
      " .Click here to move to the next question.";
  }
});

ans3.addEventListener("click", function () {
  if (currentAnswer === 4) {
    ans3.setAttribute("style", "background-color:green");
    currentScore = currentScore + 10;
    resButton.setAttribute("style", "display:block");
    resButton.textContent =
      "Correct! Your Current Score is: " +
      currentScore +
      " Click here to move to the next question.";
  } else {
    ans3.setAttribute("style", "background-color:red");
    resButton.setAttribute("style", "display:block");
    timeLeft -= 10;
    resButton.textContent =
      "Sorry. The Correct Answer was " +
      currentQuestArray[currentAnswer] +
      " Your Current Score is: \n" +
      currentScore +
      " .Click here to move to the next question.";
  }
});

ans4.addEventListener("click", function () {
  if (currentAnswer === 5) {
    ans4.setAttribute("style", "background-color:green");
    currentScore = currentScore + 10;
    resButton.setAttribute("style", "display:block");
    resButton.textContent =
      "Correct! Your Current Score is: " +
      currentScore +
      " Click here to move to the next question.";
  } else {
    ans4.setAttribute("style", "background-color:red");
    resButton.setAttribute("style", "display:block");
    timeLeft -= 10;
    resButton.textContent =
      "Sorry. The Correct Answer was " +
      currentQuestArray[currentAnswer] +
      " Your Current Score is: \n" +
      currentScore +
      " .Click here to move to the next question.";
  }
});

resButton.addEventListener("click", function () {
  numQuestions--;
  if (numQuestions === 0) {
    gameOver();
  } else nextQuestion();
});

loadQuestion(q1);
timer();
