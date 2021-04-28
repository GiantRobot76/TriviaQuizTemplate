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
  ".random() is a method associated with which JS object?",
  "Statistics",
  "Probability",
  "Stochasitcs",
  "Math",
  5,
];

var q3 = [
  "3",
  "Which of the following mtehods removes the last item from an array?",
  ".slice()",
  ".push()",
  ".pop()",
  ".flat()",
  4,
];

var q4 = [
  "4",
  ".getElementbyID() is a method associated with which JS Object",
  "Document",
  "Window",
  "Main",
  "HTML",
  2,
];

var q5 = [
  "5",
  "What is the highest index for this array ['a', 'b', 'c', 'd']",
  "4",
  "3",
  "d",
  "5",
  3,
];

//Global Variables for Answer Checking, Score Retention, and Clock Management
var numQuestions = 5;
var questArray = [q1, q2, q3, q4, q5];
var currentScore = 0;
var questionIndex = 0;
var currentQuestArray = q1;
var timeLeft = 60;

//gameScores array used for leaderboard. If there are items in local storage, array is set to include those. Otherwise initialized as empty
var gameScores = JSON.parse(localStorage.getItem("results")) || [];

//variable assignments to get elements/IDs used in DOM operations
var questNum = document.getElementById("qNum");
var questText = document.getElementById("qText");
var ans1 = document.getElementById("answer1");
var ans2 = document.getElementById("answer2");
var ans3 = document.getElementById("answer3");
var ans4 = document.getElementById("answer4");
var resButton = document.getElementById("showResult");
var countdown = document.getElementById("clock");
var qCard = document.getElementById("question-card");
var startButton = document.getElementById("start-button");
var startBox = document.getElementById("start");
var gameOverBox = document.getElementById("game-over");
var finalScore = document.getElementById("score-span");
var playAgainButton = document.getElementById("play-again");
var leaderButton = document.getElementById("register-score");
var leaderBoard = document.getElementById("leaderboard");
var initButton = document.getElementById("initial-entry");
var inputData = document.getElementById("input-form");
var leaveBoard = document.getElementById("leave-board");
var clearScores = document.getElementById("clear-scores");
var recentScores = document.getElementById("recent-scores");

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

function startGame() {
  startBox.setAttribute("style", "display:none");
  qCard.setAttribute("style", "display:block");
  gameOverBox.setAttribute("style", "display:none");
  leaderBoard.setAttribute("style", "display:none");
  timeLeft = 60;
  score = 0;
  questionIndex = 0;
  questArray = [q1, q2, q3, q4, q5];
  currentQuestArray = q1;
  loadQuestion(q1);
  timer();
}

function clearQuestion() {
  questNum.textContent = "";
  questText.textContent = "";
  ans1.textContent = "";
  ans2.textContent = "";
  ans3.textContent = "";
  ans4.textContent = "";
  resButton.textContent = "";
  ans1.setAttribute("style", "background-color:lightsteelblue");
  ans2.setAttribute("style", "background-color:lightsteelblue");
  ans3.setAttribute("style", "background-color:lightsteelblue");
  ans4.setAttribute("style", "background-color:lightsteelblue");
}

function nextQuestion() {
  clearQuestion();
  questionIndex++;
  if (questionIndex === 5) {
    questionIndex = 0;
    gameOver();
  }
  currentQuestArray = questArray[questionIndex];
  loadQuestion(currentQuestArray);
}

function gameOver() {
  qCard.setAttribute("style", "display:none");
  timeLeft = 0;
  gameOverBox.setAttribute(
    "style",
    "display:flex; flex-direction: column; justify-items:center; align-content: center; align-items: center; "
  );
  finalScore.textContent = currentScore;
}

function openLeader() {
  startBox.setAttribute("style", "display:none");
  qCard.setAttribute("style", "display:none");
  gameOverBox.setAttribute("style", "display:none");
  leaderBoard.setAttribute(
    "style",
    "display:flex; flex-direction: column; justify-items:center; align-content: center; align-items: center;"
  );

  renderUsers();
}

function clearLeader() {
  localStorage.clear();
  location.reload();
}

/*Timer Fucntion. Controls Clock*/
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

//Render List for Leaderboard. Appends an LI item for all initial/score pairs in local storage
function renderUsers() {
  for (var i = 0; i < gameScores.length; i++) {
    var li = document.createElement("li");

    li.textContent = gameScores[i].initial + " - " + gameScores[i].score;
    document.getElementById("data").append(li);
  }
}

//button for start game
startButton.addEventListener("click", startGame);

//button event listeners for answer check. Checks index of button pushed against the current question answer.
ans1.addEventListener("click", function () {
  if (currentAnswer === 2) {
    ans1.setAttribute("style", "background-color:green");
    currentScore += 10;
    resButton.setAttribute("style", "display:block");
    resButton.textContent = "Correct! Your Current Score is: " + currentScore;
    setTimeout(nextQuestion, 1000);
  } else {
    ans1.setAttribute("style", "background-color:red");
    resButton.setAttribute("style", "display:block");
    timeLeft -= 10;
    resButton.textContent =
      "Sorry. The Correct Answer was " +
      currentQuestArray[currentAnswer] +
      ". Your Current Score is: \n" +
      currentScore;
    setTimeout(nextQuestion, 1000);
  }
});

ans2.addEventListener("click", function () {
  if (currentAnswer === 3) {
    ans2.setAttribute("style", "background-color:green");
    currentScore += 10;
    resButton.setAttribute("style", "display:block");
    resButton.textContent = "Correct! Your Current Score is: " + currentScore;
    setTimeout(nextQuestion, 1000);
  } else {
    ans2.setAttribute("style", "background-color:red");
    resButton.setAttribute("style", "display:block");
    timeLeft -= 10;
    resButton.textContent =
      "Sorry. The Correct Answer was " +
      currentQuestArray[currentAnswer] +
      ". Your Current Score is: \n" +
      currentScore;
    setTimeout(nextQuestion, 1000);
  }
});

ans3.addEventListener("click", function () {
  if (currentAnswer === 4) {
    ans3.setAttribute("style", "background-color:green");
    currentScore += 10;
    resButton.setAttribute("style", "display:block");
    resButton.textContent = "Correct! Your Current Score is: " + currentScore;
    setTimeout(nextQuestion, 1000);
  } else {
    ans3.setAttribute("style", "background-color:red");
    resButton.setAttribute("style", "display:block");
    timeLeft -= 10;
    resButton.textContent =
      "Sorry. The Correct Answer was " +
      currentQuestArray[currentAnswer] +
      ". Your Current Score is: \n" +
      currentScore;
    setTimeout(nextQuestion, 1000);
  }
});

ans4.addEventListener("click", function () {
  if (currentAnswer === 5) {
    ans4.setAttribute("style", "background-color:green");
    currentScore += 10;
    resButton.setAttribute("style", "display:block");
    resButton.textContent = "Correct! Your Current Score is: " + currentScore;
    setTimeout(nextQuestion, 1000);
  } else {
    ans4.setAttribute("style", "background-color:red");
    resButton.setAttribute("style", "display:block");
    timeLeft -= 10;
    resButton.textContent =
      "Sorry. The Correct Answer was " +
      currentQuestArray[currentAnswer] +
      ". Your Current Score is: \n" +
      currentScore;
    setTimeout(nextQuestion, 1000);
  }
});

resButton.addEventListener("click", function () {
  numQuestions--;
  if (numQuestions === 0) {
    gameOver();
  } else nextQuestion();
});

playAgainButton.addEventListener("click", startGame);

leaderButton.addEventListener("click", openLeader);

//Form Event Listiner to capture initials.

initButton.addEventListener("click", function (event) {
  event.preventDefault();

  console.log("pushed");

  var initials = document.querySelector("#initials").value;
  var score = currentScore;

  console.log(initials);
  console.log(score);

  //add new key-value pair to gameScores array
  gameScores.push({ initial: initials, score: score });
  console.log(gameScores);

  localStorage.setItem("results", JSON.stringify(gameScores));

  var li = document.createElement("li");

  //append new li item to list of scores
  li.textContent = initials + " - " + score;
  document.getElementById("data").append(li);
});

leaveBoard.addEventListener("click", startGame);
clearScores.addEventListener("click", clearLeader);
recentScores.addEventListener("click", openLeader);
