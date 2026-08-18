/* ── Config ─────────────────────────────────────────────── */

const QUESTIONS = [
  {
    question: "Which planet has the shortest year in our Solar System?",
    alternatives: ["Venus", "Mercury", "Mars"],
    correct: 1,
  },
  {
    question: "What causes the phases of the Moon?",
    alternatives: [
      "Earth's shadow",
      "The Moon's changing distance from Earth",
      "Different portions of the Moon illuminated by the Sun",
    ],
    correct: 2,
  },
  {
    question: "Which star is closest to Earth after the Sun?",
    alternatives: ["Sirius", "Proxima Centauri", "Alpha Centauri A"],
    correct: 1,
  },
  {
    question: "What is the name of our galaxy?",
    alternatives: ["Andromeda", "Milky Way", "Triangulum"],
    correct: 1,
  },
  {
    question: "Which planet rotates on its side?",
    alternatives: ["Neptune", "Uranus", "Saturn"],
    correct: 1,
  },
  {
    question: "What is a light-year a measure of?",
    alternatives: ["Brightness", "Time", "Distance"],
    correct: 2,
  },
  {
    question: "Which planet has the largest volcano in the Solar System?",
    alternatives: ["Mars", "Earth", "Jupiter"],
    correct: 0,
  },
  {
    question: "What is the main component of the Sun?",
    alternatives: ["Hydrogen", "Oxygen", "Helium"],
    correct: 0,
  },
  {
    question:
      "What is the term for a star that suddenly increases greatly in brightness before fading?",
    alternatives: ["Nebula", "Nova", "Pulsar"],
    correct: 1,
  },
  {
    question: "Which planet is known for its prominent ring system?",
    alternatives: ["Saturn", "Jupiter", "Neptune"],
    correct: 0,
  },
];

const TIME_PER_QUESTION = 15;
const TIMER_WARNING_AT = 5;
const STORAGE_KEY = "highest";

/* ── DOM ────────────────────────────────────────────────── */

const ui = {
  startBtn: document.getElementById("startbtn"),
  nextBtn: document.getElementById("nextbtn"),
  restartBtn: document.getElementById("restartbtn"),
  question: document.getElementById("question"),
  answers: document.getElementById("answers"),
  timer: document.getElementById("timer"),
  highest: document.getElementById("highest"),
  subtitle: document.getElementById("quiz-subtitle"),
  factQuestions: document.getElementById("fact-questions"),
  factTime: document.getElementById("fact-time"),
  progressBar: document.getElementById("progress-bar"),
  progressText: document.getElementById("progress-text"),
  finalScore: document.getElementById("final-score"),
  resultMessage: document.getElementById("result-message"),
  startScreen: document.getElementById("start-screen"),
  quizScreen: document.getElementById("quiz-screen"),
  resultScreen: document.getElementById("result-screen"),
};

/* ── State ──────────────────────────────────────────────── */

const state = {
  questionIndex: 0,
  score: 0,
  highestScore: 0,
  answered: false,
  timerId: null,
};

/* ── Helpers ────────────────────────────────────────────── */

function pluralize(count, singular, plural = `${singular}s`) {
  return count === 1 ? singular : plural;
}

function toggleScreen(show, hide) {
  show.classList.remove("hide");
  hide.classList.add("hide");
}

function getStoredHighest() {
  const stored = Number(localStorage.getItem(STORAGE_KEY));
  return Number.isFinite(stored) ? stored : 0;
}

function saveHighestIfNeeded() {
  if (state.score <= state.highestScore) return;

  state.highestScore = state.score;
  localStorage.setItem(STORAGE_KEY, state.highestScore);
  ui.highest.textContent = state.highestScore;
}

function getResultMessage() {
  const { score } = state;
  const total = QUESTIONS.length;
  const passingScore = Math.ceil(total / 2);

  if (score === total) return "You just mapped the whole sky.";
  if (score >= passingScore) return "Solid orbit. Push for a cleaner run.";
  return "Still in the atmosphere. Launch again.";
}

function replayEnterAnimation(element) {
  element.classList.remove("is-entering");
  void element.offsetWidth;
  element.classList.add("is-entering");
}

/* ── UI updates ─────────────────────────────────────────── */

function updateStartScreen() {
  const count = QUESTIONS.length;
  const questionWord = pluralize(count, "question");
  const secondWord = pluralize(TIME_PER_QUESTION, "second");

  ui.subtitle.textContent =
    `${count} shots at the stars. ${TIME_PER_QUESTION} ${secondWord} each. Don't freeze.`;
  ui.factQuestions.textContent = `${count} ${questionWord}`;
  ui.factTime.textContent = `${TIME_PER_QUESTION} ${secondWord}`;
}

function updateProgress() {
  const current = state.questionIndex + 1;
  const total = QUESTIONS.length;

  ui.progressText.textContent = `Question ${current} of ${total}`;
  ui.progressBar.style.width = `${(current / total) * 100}%`;
}

function renderQuestion() {
  const { question, alternatives } = QUESTIONS[state.questionIndex];

  replayEnterAnimation(ui.question);
  ui.question.textContent = question;

  ui.answers.innerHTML = alternatives
    .map(
      (text, index) => `
        <button class="answer-btn" data-index="${index}" type="button">
          <span class="option-letter">${String.fromCharCode(65 + index)}</span>
          <span>${text}</span>
        </button>`,
    )
    .join("");
}

function showResults() {
  toggleScreen(ui.resultScreen, ui.quizScreen);
  ui.finalScore.textContent = `${state.score} / ${QUESTIONS.length}`;
  ui.resultMessage.textContent = getResultMessage();
}

/* ── Timer ──────────────────────────────────────────────── */

function stopTimer() {
  clearInterval(state.timerId);
  state.timerId = null;
}

function startTimer() {
  stopTimer();

  let timeLeft = TIME_PER_QUESTION;
  ui.timer.textContent = timeLeft;
  ui.timer.classList.remove("warning");

  state.timerId = setInterval(() => {
    timeLeft -= 1;
    ui.timer.textContent = timeLeft;
    ui.timer.classList.toggle("warning", timeLeft <= TIMER_WARNING_AT);

    if (timeLeft === 0) {
      stopTimer();
      goToNextQuestion();
    }
  }, 1000);
}

/* ── Quiz flow ──────────────────────────────────────────── */

function displayQuestion() {
  updateProgress();
  renderQuestion();
  startTimer();
}

function finishQuiz() {
  stopTimer();
  saveHighestIfNeeded();
  showResults();
}

function goToNextQuestion() {
  const isLastQuestion = state.questionIndex === QUESTIONS.length - 1;

  if (isLastQuestion) {
    finishQuiz();
    return;
  }

  state.questionIndex += 1;
  state.answered = false;
  displayQuestion();
}

function resetQuiz() {
  state.questionIndex = 0;
  state.score = 0;
  state.answered = false;
}

function startQuiz() {
  resetQuiz();
  toggleScreen(ui.quizScreen, ui.startScreen);
  displayQuestion();
}

function restartQuiz() {
  resetQuiz();
  toggleScreen(ui.quizScreen, ui.resultScreen);
  displayQuestion();
}

/* ── Events ─────────────────────────────────────────────── */

function handleAnswerClick(event) {
  if (state.answered) return;

  const button = event.target.closest(".answer-btn");
  if (!button) return;

  state.answered = true;

  const selectedIndex = Number(button.dataset.index);
  const isCorrect = selectedIndex === QUESTIONS[state.questionIndex].correct;

  button.classList.add(isCorrect ? "green" : "red");
  if (isCorrect) state.score += 1;
}

ui.answers.addEventListener("click", handleAnswerClick);
ui.startBtn.addEventListener("click", startQuiz);
ui.nextBtn.addEventListener("click", goToNextQuestion);
ui.restartBtn.addEventListener("click", restartQuiz);

/* ── Init ───────────────────────────────────────────────── */

function init() {
  updateStartScreen();
  state.highestScore = getStoredHighest();
  ui.highest.textContent =
    localStorage.getItem(STORAGE_KEY) == null ? "—" : state.highestScore;
}

init();
