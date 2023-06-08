const data = [
    {
        id: 1,
        question: "Queue data structure works on?",
        answers: [
            { answer:"LIFO", isCorrect: false },
            { answer:"FIFO", isCorrect: true },
            { answer:"FILO", isCorrect: false },
            { answer:"LIFO", isCorrect: false },
        ],
    },
    {
        id: 2,
        question: "Minimum number of spanning tree in a connected graph is?",
        answers: [
            { answer:"n", isCorrect: false },
            { answer:"n^(n-1)", isCorrect: false },
            { answer:"1", isCorrect: true },
            { answer:"0", isCorrect: false },
        ],
    },
    {
        id: 3,
        question: "The Θ notation in asymptotic evaluation represents ?",
        answers: [
            { answer:"Base case", isCorrect: false },
            { answer:"Average case", isCorrect: true },
            { answer:"Worst case", isCorrect: false },
            { answer:"Null case", isCorrect: false },
        ],
    },
    {
        id: 4,
        question: "Program with highest run-time complexity is?",
        answers: [
            { answer:"Tower of Hanoi", isCorrect: true },
            { answer:"Fibonacci Series", isCorrect: false },
            { answer:"Prime Number Series", isCorrect: false },
            { answer:"None of above", isCorrect: false },
        ],
    },
    {
        id: 5,
        question: "Trie is also known as?",
        answers: [
            { answer:"Treap", isCorrect: false },
            { answer:"Binomial Tree", isCorrect: false },
            { answer:"2-3 Tree", isCorrect: false },
            { answer:"Digital Tree", isCorrect: true },
        ],
    },
];
const gameScreen = document.querySelector(".game");
const resultScreen = document.querySelector(".result");
const question = document.querySelector(".question");
const answersContainer = document.querySelector(".answers");
const submit = document.querySelector(".submit");
const play = document.querySelector(".play");

let qIndex = 0;
let correctCount = 0;
let wrongCount = 0;
let total = 0;
let selectedAnswer;

const playAgain = () => {
  qIndex = 0;
  correctCount = 0;
  wrongCount = 0;
  total = 0;
  showQuestion(qIndex);
};

play.addEventListener("click",()=>{
  resultScreen.style.display = "none";
  gameScreen.style.display = "block";
  playAgain()
})

const showResult = () => {
  resultScreen.style.display = "block";
  gameScreen.style.display = "none";

  resultScreen.querySelector(
    ".correct"
  ).textContent = `Correct Answers: ${correctCount}`;

  resultScreen.querySelector(
    ".wrong"
  ).textContent = `Wrong Answers: ${wrongCount}`;

  resultScreen.querySelector(".score").textContent = `Score: ${
    (correctCount - wrongCount) * 10
  }`;
};

const showQuestion = (qNumber) => {
  if (qIndex === data.length) return showResult();
  selectedAnswer = null;
  question.textContent = data[qNumber].question;
  answersContainer.innerHTML = data[qNumber].answers
    .map(
      (item, index) =>
        `
  <div class="answer">
      <input type="radio" id=${index} name="answer" value=${item.isCorrect} />
      <label for="1">${item.answer}</label>
  </div>
  `
    )
    .join("");

  selectAnswer();
};

const selectAnswer = () => {
  answersContainer.querySelectorAll("input").forEach((el) => {
    el.addEventListener("click", (e) => {
      selectedAnswer = e.target.value;
    });
  });
};

const submitAnswer = () => {
  submit.addEventListener("click", () => {
    if (selectedAnswer !== null) {
      selectedAnswer === "true" ? correctCount++ : wrongCount++;
      qIndex++;
      showQuestion(qIndex);
    } else alert("Select an answer!");
  });
};

showQuestion(qIndex);
submitAnswer();