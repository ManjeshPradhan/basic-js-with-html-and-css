let num1;
let num2;
let correctAns;

const questionEl = document.getElementById("question");

const inputEl = document.getElementById("input");

const formEl = document.getElementById("form");

const scoreEl = document.getElementById("score");
let score

if (!score) {
  score = 0;
}

function changeVariables() {
  num1 = Math.ceil(Math.random() * 10);
  num2 = Math.ceil(Math.random() * 10);
  questionEl.innerText = `What is ${num1} multiply by ${num2}?`;
  correctAns = num1 * num2;
  scoreEl.innerText = `score: ${score}`;
}

changeVariables()

formEl.addEventListener("submit", (e) => {
  e.preventDefault()
  const userAns = +inputEl.value;
  if (userAns === correctAns) {
    score++;
  } else {
    score--;
  }
  inputEl.value = null;
  changeVariables()

});
