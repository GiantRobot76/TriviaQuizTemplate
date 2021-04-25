//Question arrays. First element is question number. Second is question text. index 2-5 are multiple choice answers. 6 is index of correct answer.

q1 = [
  "1",
  "Statements in JS should be ended with what character?",
  ";",
  ":",
  "~",
  "%",
  3,
];

//Global Variables for Answer Checking and Score Retention

//variable assignments to get elements/IDs used in DOM operations
questNum = document.getElementById("qNum");
questText = document.getElementById("qText");
ans1 = document.getElementById("answer1");
ans2 = document.getElementById("answer2");
ans3 = document.getElementById("answer3");
ans4 = document.getElementById("answer4");

function loadQuestion(questArray) {
  questNum.textContent = "Question " + questArray[0];
  questText.textContent = questArray[1];
  ans1.textContent = questArray[2];
  ans2.textContent = questArray[3];
  ans3.textContent = questArray[4];
  ans4.textContent = questArray[5];
}

function clearQuestion() {
  questNum.textContent = "";
  questText.textContent = "";
  ans1.textContent = "";
  ans2.textContent = "";
  ans3.textContent = "";
  ans4.textContent = "";
}

//button event listeners
ans1.addEventListener("click", function () {
  console.log("You Just Pressed Button 1");
});

ans2.addEventListener("click", function () {
  console.log("You Just Pressed Button 2");
});

ans3.addEventListener("click", function () {
  console.log("You Just Pressed Button 3");
});

ans4.addEventListener("click", function () {
  console.log("You Just Pressed Button 4");
});
