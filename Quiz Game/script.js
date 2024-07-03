"use strict";

const welcomeWindow = document.querySelector(".welcome-window");
const startBtn = document.querySelector(".start-btn");
const quizBox = document.querySelector(".quiz-box");
const questionHeaderEl = document.querySelector(".question-header");
const answerBox = document.querySelectorAll(".answer-box");
const answersBox = document.querySelector(".answers-box");
const answerEl = document.querySelectorAll(".answer");
const submitBtn = document.querySelector(".submit-btn");
const imgEl = document.querySelector(".img");
const message = document.querySelector(".message");
const correctAnswerClass = document.querySelector(".correct-answer");
const playAgainBtn = document.querySelector(".play-again-btn");
const scoreEl = document.querySelector(".score");
const totalScore = document.querySelector(".total-score");
const endMessage = document.querySelector(".end-message");

const questionOne = {
  question: "What is displayed on this image?",
  options: ["Triangle", "Pyramids of Giza", "Colosseum", "Machu Picchu"],
  correctAnswer: "Pyramids of Giza",
};

const questionTwo = {
  question:
    "Who was the first Roman Emperor, known for transforming the Roman Republic into the Roman Empire?",
  options: ["Julius Caesar", "Nero", "Constantine", "Augustus"],
  correctAnswer: "Augustus",
};

const questionThree = {
  question:
    "What medieval English document, signed in 1215, is often considered a cornerstone of constitutional law?",
  options: [
    "Canterbury Tales",
    "Domesday Book",
    "Magna Carta",
    "Book of Common Prayer",
  ],
  correctAnswer: "Magna Carta",
};

const questionFour = {
  question:
    "Who was the primary author of The Communist Manifesto, published in 1848?",
  options: [
    "Karl Marx",
    "Friedrich Engels",
    "Vladimir Lenin",
    "Rosa Luxemburg",
  ],
  correctAnswer: "Karl Marx",
};

const questionFive = {
  question:
    "Who was the Byzantine emperor responsible for codifying Roman laws into the Justinian Code in the 6th century?",
  options: ["Heraclius", "Leo III", "Justinian I", "Constantine XI"],
  correctAnswer: "Justinian I",
};

const questionSix = {
  question:
    "Which ancient city was home to the famous library and the Pharos, one of the Seven Wonders of the Ancient World?",
  options: ["Alexandria", "Rome", "Athens", "Babylon"],
  correctAnswer: "Alexandria",
};

const questionSeven = {
  question:
    "During the Middle Ages, what was the significance of the Battle of Hastings in 1066?",
  options: [
    "Mongol invasions",
    "Reconquista in Spain",
    "Hundred Years' War",
    "Norman conquest of England",
  ],
  correctAnswer: "Norman conquest of England",
};

const questionEight = {
  question:
    "Who was the Egyptian queen famous for her relationships with Julius Caesar and Mark Antony?",
  options: ["Cleopatra", "Nefertiti", "Hatshepsut", "Ankhesenamun"],
  correctAnswer: "Cleopatra",
};

const questionNine = {
  question:
    "Which ancient Chinese philosopher is associated with the philosophy of Taoism?",
  options: ["Confucius", "Laozi", "Sun Tzu", "Zhuangzi"],
  correctAnswer: "Laozi",
};

const questionTen = {
  question: "What event led to the Great Schism in Christianity in 1054?",
  options: [
    "Council of Nicaea",
    "Investiture Controversy",
    "East-West Schism",
    "Avignon Papacy",
  ],
  correctAnswer: "East-West Schism",
};

const quizQuestions = [
  questionOne,
  questionTwo,
  questionThree,
  questionFour,
  questionFive,
  questionSix,
  questionSeven,
  questionEight,
  questionNine,
  questionTen,
];

const questions = quizQuestions.map((questions) => questions.question);

const allAnswers = quizQuestions.map((answers) => answers.options);

const correctAnswers = quizQuestions.map((corrAnsw) => corrAnsw.correctAnswer);
console.log(correctAnswers);

let answerClicked = false;
let questionsIndex = 1;
let answersIndex = 1;
let imagesIndex = 2;
let score = 0;
let newValue;
let currentValue;
let totalValue;
let totalScoreInitial;
let totalScoreFinal;
let totalScoreValue = 0;

startBtn.addEventListener("click", function () {
  quizBox.style.display = "flex";
  welcomeWindow.style.display = "none";
  submitBtn.style.display = "inline-block";
  scoreEl.style.display = "block";
  totalScore.style.display = "none";
  endMessage.textContent = "";
  answerClicked = false;
  questionsIndex = 1;
  answersIndex = 1;
  imagesIndex = 2;
  score = 0;
  totalScoreValue = 0;
  currentValue = parseInt(scoreEl.textContent.split(" / ")[0]);
  totalValue = parseInt(scoreEl.textContent.split(" / ")[1]);
  totalScoreInitial = parseInt(totalScore.textContent.split(" / ")[0]);
  totalScoreFinal = parseInt(totalScore.textContent.split(" / ")[1]);
  newValue = 1;
  scoreEl.textContent = newValue + " / " + totalValue;
  totalScore.textContent = totalScoreValue + " / " + totalScoreFinal;

  questionHeaderEl.textContent = questions[0];
  imgEl.src = "img-1.jpg";
  for (let i = 0; i < answerEl.length; i++) {
    let answers = allAnswers[0][i];
    answerEl[i].textContent = answers;
    answerBox[i].classList.remove("correct-answer");
    answerEl[i].classList.remove("correct-answer");
    answerBox[i].classList.remove("incorrect-answer");
    answerEl[i].classList.remove("incorrect-answer");
  }
});

for (let i = 0; i < answerEl.length; i++) {
  answerEl[i].addEventListener("click", function () {
    if (!answerClicked) {
      answerClicked = !answerClicked;
      message.textContent = "Option selected";
      message.style.color = "#40c057";

      const userSelectedAnswer = answerEl[i].textContent;
      let correctAnswer = correctAnswers[questionsIndex - 1];

      if (userSelectedAnswer === correctAnswer) {
        answerBox[i].classList.add("correct-answer");
        answerEl[i].classList.add("correct-answer");
        message.textContent = "Correct!";
        message.style.color = "#40c057";
        totalScoreInitial = parseInt(totalScore.textContent.split(" / ")[0]);
        totalScoreValue = totalScoreInitial + 1;
        totalScore.textContent = totalScoreValue + " / " + totalScoreFinal;
      } else {
        answerBox[i].classList.add("incorrect-answer");
        answerEl[i].classList.add("incorrect-answer");
        message.textContent = correctAnswer;
        message.style.color = "#40c057";
        message.style.fontWeight = "600";
      }
    }
  });
}

const submitBtnFunc = function () {
  if (answerClicked) {
    answerClicked = !answerClicked;
    message.textContent = "";
    if (questionsIndex < questions.length) {
      const currentQuestion = questions[questionsIndex];
      questionHeaderEl.textContent = currentQuestion;
      imgEl.src = `img-${imagesIndex}.jpg`;

      for (let i = 0; i < answerEl.length; i++) {
        let currentAnswers = allAnswers[answersIndex][i];
        answerEl[i].textContent = currentAnswers;
        answerBox[i].classList.remove("correct-answer");
        answerEl[i].classList.remove("correct-answer");
        answerBox[i].classList.remove("incorrect-answer");
        answerEl[i].classList.remove("incorrect-answer");
      }

      imagesIndex++;
      questionsIndex++;
      answersIndex++;
    } else {
      imgEl.src = `img-11.gif`;
      questionHeaderEl.textContent = "Quiz Finished!";
      answersBox.style.display = "none";
      submitBtn.style.display = "none";
      playAgainBtn.style.display = "inline-block";
      scoreEl.style.display = "none";
      totalScore.style.display = "block";
      if (totalScoreValue === 0) {
        totalScore.style.color = "#e03131";
        endMessage.style.color = "#e03131";
        endMessage.textContent =
          "You have no understanding of the past of the world whatsoever 😭";
      } else if (totalScoreValue > 1 && totalScoreValue < 3) {
        totalScore.style.color = "#e03131";
        endMessage.style.color = "#e03131";
        endMessage.textContent =
          "Well, at least you tried! Go learn some history 📚";
      } else if (totalScoreValue >= 3 && totalScoreValue < 6) {
        totalScore.style.color = "#ff922b";
        endMessage.style.color = "#ff922b";
        endMessage.textContent =
          "Not bad! You know some stuff from the past 🧾";
      } else if (totalScoreValue >= 6 && totalScoreValue <= 9) {
        totalScore.style.color = "#fcc419";
        endMessage.style.color = "#fcc419";
        endMessage.textContent =
          "Great job! You're this 🤏 close to becoming a history nerd ";
      } else {
        totalScore.style.color = "#40c057";
        endMessage.style.color = "#40c057";
        endMessage.textContent = `💎Brilliant!💎 You are a history nerd like me 🤓🤯`;
      }
    }

    currentValue = parseInt(scoreEl.textContent.split(" / ")[0]);

    if (currentValue < allAnswers.length) {
      newValue = currentValue + 1;
      scoreEl.textContent = newValue + " / " + totalValue;
    }
  }
};

submitBtn.addEventListener("click", submitBtnFunc);

playAgainBtn.addEventListener("click", function () {
  answersBox.style.display = "flex";
  welcomeWindow.style.display = "flex";
  quizBox.style.display = "none";
  playAgainBtn.style.display = "none";
});
