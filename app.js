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
  const optionsDiv = document.getElementById("options-container");
  optionsDiv.innerHTML = "";
  const opts = q.options || q.choices || q.answers || [];
  opts.forEach((opt, optIndex) => {
    const btn = document.createElement("div");
    btn.className = "option-item"; // Hoặc class CSS tương ứng của dự án bạn
  const selected = (userAnswers[currentIndex] || []).includes(optIndex);
    if (selected) btn.classList.add("selected");
    btn.innerHTML = `
      <input type="${isMultiple ? 'checkbox' : 'radio'}" name="option" ${selected ? 'checked' : ''}>
      <span>${opt}</span>
    `;
    btn.onclick = () => selectOption(optIndex, isMultiple);
    optionsDiv.appendChild(btn);
  });
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
function submitExam() {
  // 1. Ẩn thẻ làm bài quiz, hiện thẻ kết quả
  document.getElementById("quiz-card").classList.add("hidden");
  
  const resultCard = document.getElementById("result-card");
  if (resultCard) resultCard.classList.remove("hidden");

  // 2. Tìm hoặc tạo khu vực hiển thị chi tiết câu trả lời
  let reviewContainer = document.getElementById("review-container");
  if (!reviewContainer) {
    reviewContainer = document.createElement("div");
    reviewContainer.id = "review-container";
    if (resultCard) resultCard.appendChild(reviewContainer);
  }

  reviewContainer.innerHTML = "<h2>Chi tiết bài làm:</h2>";

  // 3. Duyệt qua từng câu hỏi để kiểm tra Đúng/Sai
  currentExamQuestions.forEach((q, idx) => {
    const userSelected = userAnswers[idx] || []; // Mảng chỉ số đáp án người dùng chọn
    const correctAnswers = q.correctAnswers;    // Mảng chỉ số đáp án đúng từ questions.js

    // Kiểm tra xem người dùng trả lời đúng hoàn toàn hay không
    const isCorrect = userSelected.length === correctAnswers.length && 
                      userSelected.every(val => correctAnswers.includes(val));

    const qBox = document.createElement("div");
    qBox.style.margin = "15px 0";
    qBox.style.padding = "10px";
    qBox.style.border = "1px solid #ccc";
    qBox.style.borderRadius = "6px";
    qBox.style.backgroundColor = isCorrect ? "#e6fffa" : "#fff5f5";

    // CHỈ HIỂN THỊ NỘI DUNG CÂU HỎI (Không kèm chữ Câu X hay Question X)
    let htmlContent = `<p style="font-weight: bold;">${q.question}</p><ul>`;

    q.options.forEach((opt, optIdx) => {
      const isSelected = userSelected.includes(optIdx);
      const isAnsCorrect = correctAnswers.includes(optIdx);

      let colorStyle = "color: #333;";
      let tag = "";

      if (isAnsCorrect) {
        colorStyle = "color: green; font-weight: bold;";
        tag = " ✓ (Đáp án đúng)";
      } else if (isSelected && !isAnsCorrect) {
        colorStyle = "color: red; font-weight: bold;";
        tag = " ✗ (Bạn đã chọn sai)";
      }

      htmlContent += `<li style="${colorStyle}">${opt} ${tag}</li>`;
    });

    htmlContent += `</ul>`;
    htmlContent += `<p style="font-weight:bold; color:${isCorrect ? 'green' : 'red'};">
                      ${isCorrect ? '✓ Đúng' : '✗ Sai'}
                    </p>`;

    qBox.innerHTML = htmlContent;
    reviewContainer.appendChild(qBox);
  });
}
