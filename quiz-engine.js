// ============================================================
//  QUIZ PRO: PRAIZO — Quiz Engine
// ============================================================

// ── State ────────────────────────────────────────────────────
let activeCourse   = null;   // full course object
let activeTopics   = [];     // array of topic objects being quizzed
let activeQuestions = [];    // flat array of questions
let userAnswers    = [];     // index of chosen option per question (-1 = unanswered)
let currentQ       = 0;      // current question index
let quizTopicLabel = "";     // label shown in quiz header

// ── Boot ─────────────────────────────────────────────────────
document.addEventListener("DOMContentLoaded", () => {
  renderCourseGrid();
  document.getElementById("globalSearch").addEventListener("input", handleGlobalSearch);
});

// ── Screen Management ─────────────────────────────────────────
function showScreen(id) {
  document.querySelectorAll(".screen").forEach(s => s.classList.remove("active"));
  document.getElementById(id).classList.add("active");
  window.scrollTo({ top: 0, behavior: "smooth" });
}

// ── Home / Course Grid ────────────────────────────────────────
function renderCourseGrid() {
  const grid = document.getElementById("coursesGrid");
  grid.innerHTML = COURSES.map((c, i) => `
    <div class="course-card" style="--course-color:${c.color};--course-gradient:${c.gradient};animation-delay:${i * 0.06}s"
         onclick="openCourse('${c.id}')">
      <div class="card-icon-wrap">
        <span class="card-icon">${c.icon}</span>
      </div>
      <div class="card-body">
        <h3 class="card-title">${c.title}</h3>
        <p class="card-desc">${c.desc}</p>
        <div class="card-meta">
          <span class="card-topics">${c.topics.length} topics</span>
          <span class="card-qs">${countQuestions(c)} questions</span>
        </div>
      </div>
      <div class="card-arrow">→</div>
    </div>
  `).join("");
}

function countQuestions(course) {
  return course.topics.reduce((sum, t) => sum + t.questions.length, 0);
}

// ── Open Course → Topic Picker ────────────────────────────────
function openCourse(courseId) {
  activeCourse = COURSES.find(c => c.id === courseId);
  if (!activeCourse) return;

  document.getElementById("topicCourseIcon").textContent  = activeCourse.icon;
  document.getElementById("topicCourseTitle").textContent = activeCourse.title;
  document.getElementById("topicCourseDesc").textContent  = activeCourse.desc;
  document.getElementById("fullQuizCount").textContent    = countQuestions(activeCourse);
  document.getElementById("topicSearch").value = "";

  renderTopicList(activeCourse.topics);
  showScreen("screen-topics");
}

function renderTopicList(topics) {
  const list = document.getElementById("topicsList");
  list.innerHTML = topics.map(t => `
    <button class="topic-item" onclick="startTopicQuiz('${encodeURIComponent(t.name)}')">
      <span class="topic-item-name">${t.name}</span>
      <span class="topic-item-count">${t.questions.length} Qs</span>
      <span class="topic-item-arrow">→</span>
    </button>
  `).join("");
}

function filterTopics() {
  const q = document.getElementById("topicSearch").value.toLowerCase().trim();
  const filtered = activeCourse.topics.filter(t => t.name.toLowerCase().includes(q));
  renderTopicList(filtered);
}

// ── Start Quiz ────────────────────────────────────────────────
function startFullQuiz() {
  if (!activeCourse) return;
  activeTopics = activeCourse.topics;
  quizTopicLabel = "Full Quiz";
  launchQuiz();
}

function startTopicQuiz(encodedName) {
  const name = decodeURIComponent(encodedName);
  const topic = activeCourse.topics.find(t => t.name === name);
  if (!topic) return;
  activeTopics = [topic];
  quizTopicLabel = topic.name;
  launchQuiz();
}

function launchQuiz() {
  // Flatten all questions from the selected topics
  activeQuestions = activeTopics.flatMap(t => t.questions.map(q => ({ ...q, _topic: t.name })));
  // Shuffle questions
  activeQuestions = shuffle(activeQuestions);
  userAnswers = new Array(activeQuestions.length).fill(-1);
  currentQ = 0;

  // Set header labels
  document.getElementById("quizCourseLabel").textContent = activeCourse.icon + " " + activeCourse.title;
  document.getElementById("quizTopicLabel").textContent  = quizTopicLabel;
  document.getElementById("qTotal").textContent = activeQuestions.length;

  renderQuestion(0);
  renderDots();
  showScreen("screen-quiz");
}

// ── Render Question ───────────────────────────────────────────
function renderQuestion(index) {
  const q = activeQuestions[index];
  currentQ = index;

  document.getElementById("questionNumber").textContent = `Question ${index + 1}`;
  document.getElementById("questionText").textContent   = q.q;
  document.getElementById("qCurrent").textContent       = index + 1;

  // Progress bar
  const pct = ((index) / activeQuestions.length) * 100;
  document.getElementById("progressFill").style.width = pct + "%";

  // Options
  const grid = document.getElementById("optionsGrid");
  const labels = ["A", "B", "C", "D"];
  grid.innerHTML = q.options.map((opt, i) => {
    const selected = userAnswers[index] === i ? "selected" : "";
    return `
      <button class="option-btn ${selected}" onclick="selectOption(${i})" data-idx="${i}">
        <span class="option-label">${labels[i]}</span>
        <span class="option-text">${opt}</span>
      </button>`;
  }).join("");

  // Prev/Next buttons
  document.getElementById("btnPrev").disabled = index === 0;
  document.getElementById("btnNext").style.display =
    index === activeQuestions.length - 1 ? "none" : "inline-flex";
  document.getElementById("submitWrap").style.display =
    index === activeQuestions.length - 1 ? "block" : "none";

  updateDots();
}

// ── Option Selection ──────────────────────────────────────────
function selectOption(optionIndex) {
  userAnswers[currentQ] = optionIndex;

  // Visual feedback
  document.querySelectorAll(".option-btn").forEach((btn, i) => {
    btn.classList.toggle("selected", i === optionIndex);
  });

  updateDots();
}

// ── Navigation ────────────────────────────────────────────────
function nextQuestion() {
  if (currentQ < activeQuestions.length - 1) renderQuestion(currentQ + 1);
}

function prevQuestion() {
  if (currentQ > 0) renderQuestion(currentQ - 1);
}

// ── Question Dots ─────────────────────────────────────────────
function renderDots() {
  const container = document.getElementById("questionDots");
  container.innerHTML = activeQuestions.map((_, i) =>
    `<span class="dot" id="dot-${i}" onclick="renderQuestion(${i})"></span>`
  ).join("");
}

function updateDots() {
  activeQuestions.forEach((_, i) => {
    const dot = document.getElementById(`dot-${i}`);
    if (!dot) return;
    dot.className = "dot";
    if (i === currentQ)            dot.classList.add("dot-active");
    else if (userAnswers[i] !== -1) dot.classList.add("dot-answered");
  });
}

// ── Submit & Mark ─────────────────────────────────────────────
function submitQuiz() {
  let correct = 0, wrong = 0, skipped = 0;

  activeQuestions.forEach((q, i) => {
    if      (userAnswers[i] === -1)      skipped++;
    else if (userAnswers[i] === q.answer) correct++;
    else                                  wrong++;
  });

  const total = activeQuestions.length;
  const pct   = Math.round((correct / total) * 100);

  // Grade
  let grade, trophy;
  if      (pct >= 90) { grade = "A+  Distinction 🌟";  trophy = "🏆"; }
  else if (pct >= 75) { grade = "A   Excellent 🎉";     trophy = "🥇"; }
  else if (pct >= 60) { grade = "B   Good 👍";          trophy = "🥈"; }
  else if (pct >= 50) { grade = "C   Pass ✅";          trophy = "🥉"; }
  else                { grade = "F   Needs Work 📚";    trophy = "💪"; }

  // Populate results screen
  document.getElementById("resultsTrophy").textContent  = trophy;
  document.getElementById("resultsCourse").textContent  = activeCourse.title + " — " + quizTopicLabel;
  document.getElementById("scorePct").textContent       = pct + "%";
  document.getElementById("scoreFrac").textContent      = `${correct}/${total}`;
  document.getElementById("correctCount").textContent   = correct;
  document.getElementById("wrongCount").textContent     = wrong;
  document.getElementById("skippedCount").textContent   = skipped;
  document.getElementById("gradeBadge").textContent     = grade;

  // Ring animation
  const circumference = 314;
  const offset = circumference - (pct / 100) * circumference;
  setTimeout(() => {
    document.getElementById("ringFill").style.strokeDashoffset = offset;
  }, 300);

  // Grade color on badge
  const badge = document.getElementById("gradeBadge");
  if      (pct >= 75) badge.style.background = "linear-gradient(135deg,#27ae60,#2ecc71)";
  else if (pct >= 50) badge.style.background = "linear-gradient(135deg,#e67e22,#f39c12)";
  else                badge.style.background = "linear-gradient(135deg,#c0392b,#e74c3c)";

  // Hide review panel
  document.getElementById("reviewPanel").style.display = "none";

  showScreen("screen-results");
}

// ── Review ────────────────────────────────────────────────────
function showReview() {
  const panel = document.getElementById("reviewPanel");
  const list  = document.getElementById("reviewList");
  const labels = ["A","B","C","D"];

  list.innerHTML = activeQuestions.map((q, i) => {
    const userAns = userAnswers[i];
    const correct  = q.answer;
    const isRight  = userAns === correct;
    const isSkip   = userAns === -1;

    let status = isSkip ? "review-skipped" : isRight ? "review-correct" : "review-wrong";
    let icon   = isSkip ? "⏭️" : isRight ? "✅" : "❌";

    return `
      <div class="review-item ${status}">
        <div class="review-q-header">
          <span class="review-num">Q${i+1}</span>
          <span class="review-status-icon">${icon}</span>
          <span class="review-topic-tag">${q._topic}</span>
        </div>
        <p class="review-question">${q.q}</p>
        <div class="review-options">
          ${q.options.map((opt, oi) => {
            let cls = "";
            if (oi === correct)       cls = "review-opt-correct";
            if (oi === userAns && oi !== correct) cls = "review-opt-wrong";
            return `<div class="review-opt ${cls}">
              <span>${labels[oi]}.</span> ${opt}
              ${oi === correct ? '<span class="correct-badge">✓ Correct</span>' : ""}
              ${oi === userAns && oi !== correct ? '<span class="wrong-badge">✗ Your answer</span>' : ""}
            </div>`;
          }).join("")}
        </div>
      </div>`;
  }).join("");

  panel.style.display = "block";
  panel.scrollIntoView({ behavior: "smooth" });
}

function hideReview() {
  document.getElementById("reviewPanel").style.display = "none";
}

// ── Retake ────────────────────────────────────────────────────
function retakeQuiz() {
  launchQuiz();
}

// ── Quit ──────────────────────────────────────────────────────
function confirmQuit() {
  document.getElementById("quitModal").classList.remove("hidden");
}

function closeModal() {
  document.getElementById("quitModal").classList.add("hidden");
}

function quitQuiz() {
  closeModal();
  goHome();
}

// ── Go Home ───────────────────────────────────────────────────
function goHome() {
  activeCourse    = null;
  activeTopics    = [];
  activeQuestions = [];
  userAnswers     = [];
  currentQ        = 0;
  showScreen("screen-home");
}

// ── Global Search ─────────────────────────────────────────────
function handleGlobalSearch(e) {
  const q = e.target.value.toLowerCase().trim();
  const dropdown = document.getElementById("searchResults");
  const clearBtn = document.getElementById("searchClear");

  clearBtn.style.display = q ? "block" : "none";

  if (!q) { dropdown.classList.add("hidden"); return; }

  const results = [];
  COURSES.forEach(course => {
    course.topics.forEach(topic => {
      const topicMatch = topic.name.toLowerCase().includes(q);
      const qMatches   = topic.questions.filter(qq => qq.q.toLowerCase().includes(q));

      if (topicMatch) {
        results.push({ type: "topic", course, topic, count: topic.questions.length });
      } else if (qMatches.length) {
        results.push({ type: "topic", course, topic, count: qMatches.length, partial: true });
      }
    });
  });

  if (!results.length) {
    dropdown.innerHTML = `<div class="search-no-result">No topics found for "${e.target.value}"</div>`;
    dropdown.classList.remove("hidden");
    return;
  }

  dropdown.innerHTML = results.slice(0, 8).map(r => `
    <div class="search-result-item" onclick="launchFromSearch('${r.course.id}','${encodeURIComponent(r.topic.name)}')">
      <span class="sr-icon">${r.course.icon}</span>
      <div class="sr-info">
        <strong>${r.topic.name}</strong>
        <span>${r.course.title}</span>
      </div>
      <span class="sr-count">${r.count} Qs</span>
    </div>
  `).join("");

  dropdown.classList.remove("hidden");
}

function launchFromSearch(courseId, encodedTopic) {
  document.getElementById("searchResults").classList.add("hidden");
  document.getElementById("globalSearch").value = "";
  document.getElementById("searchClear").style.display = "none";

  activeCourse = COURSES.find(c => c.id === courseId);
  const topicName = decodeURIComponent(encodedTopic);
  const topic = activeCourse.topics.find(t => t.name === topicName);
  if (!topic) return;

  activeTopics   = [topic];
  quizTopicLabel = topic.name;
  launchQuiz();
}

function clearGlobalSearch() {
  document.getElementById("globalSearch").value = "";
  document.getElementById("searchResults").classList.add("hidden");
  document.getElementById("searchClear").style.display = "none";
}

// Close search dropdown on outside click
document.addEventListener("click", e => {
  const wrap = document.querySelector(".global-search-wrap");
  if (wrap && !wrap.contains(e.target)) {
    document.getElementById("searchResults").classList.add("hidden");
  }
});

// ── Utility ───────────────────────────────────────────────────
function shuffle(arr) {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}
