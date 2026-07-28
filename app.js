let currentExamQuestions = [];
let currentIndex = 0;
let userAnswers = {};
const QUESTIONS_PER_EXAM = 50;

document.addEventListener("DOMContentLoaded", () => {
  document.getElementById("total-q").innerText = questionBank.length;
  document.getElementById("exam-q").innerText = Math.min(QUESTIONS_PER_EXAM, questionBank.length);
});

function startExam() {
  let shuffled = [...questionBank].sort(() => 0.5 - Math.random());
  currentExamQuestions = shuffled.slice(0, QUESTIONS_PER_EXAM);
  document.getElementById("welcome-card").classList.add("hidden");
  document.getElementById("quiz-card").classList.remove("hidden");
  showQuestion(0);
}

function showQuestion(index) {
  currentIndex = index;
  const q = currentExamQuestions[index];
  document.getElementById("question-number").innerText = `Question ${index + 1} of ${currentExamQuestions.length}`;
  document.getElementById("question-text").innerText = q.question;
  
  const isMultiple = q.correct.length > 1;
  document.getElementById("select-type-badge").innerText = isMultiple ? "Select all that apply" : "Select one answer";
  
  const optionsDiv = document.getElementById("options-container");
  optionsDiv.innerHTML = "";
  const inputType = isMultiple ? "checkbox" : "radio";

  q.options.forEach((opt, optIndex) => {
    const isChecked = userAnswers[currentIndex]?.includes(optIndex) ? "checked" : "";
    optionsDiv.innerHTML += `
      <label class="option-item">
        <span>${opt}</span>
        <input type="${inputType}" name="option" value="${optIndex}" ${isChecked} onchange="saveAnswer()">
      </label>
    `;
  });

  if (index === currentExamQuestions.length - 1) {
    document.getElementById("next-btn").classList.add("hidden");
    document.getElementById("submit-btn").classList.remove("hidden");
  } else {
    document.getElementById("next-btn").classList.remove("hidden");
    document.getElementById("submit-btn").classList.add("hidden");
  }
}

function saveAnswer() {
  const selected = Array.from(document.querySelectorAll('input[name="option"]:checked')).map(cb => parseInt(cb.value));
  userAnswers[currentIndex] = selected;
}

function nextQuestion() {
  if (currentIndex < currentExamQuestions.length - 1) {
    showQuestion(currentIndex + 1);
  }
}

function finishExam() {
  let score = 0;
  currentExamQuestions.forEach((q, idx) => {
    const userAns = (userAnswers[idx] || []).sort().join(',');
    const correctAns = [...q.correct].sort().join(',');
    if (userAns === correctAns) score++;
  });

  const percentage = Math.round((score / currentExamQuestions.length) * 100);
  const passed = percentage >= 70;

  document.getElementById("quiz-card").classList.add("hidden");
  document.getElementById("result-card").classList.remove("hidden");
  document.getElementById("score-box").innerHTML = `
    <h2>${passed ? "🎉 PASSED!" : "❌ FAILED"}</h2>
    <p>Your Score: <b>${score}/${currentExamQuestions.length}</b> (${percentage}%)</p>
    <p>Pass Grade: 70%</p>
  `;
}
