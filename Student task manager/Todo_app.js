const input = document.querySelector("#added");
const addbtn = document.querySelector("#addbtn");
const taskcontainer = document.querySelector(".show-task");

const searchInput = document.querySelector("#search");
const searchBtn = document.querySelector("#searchBtn");
const searchPanel = document.querySelector(".search-panel");

const filterBtn = document.querySelector("#filterBtn");
const filterPanel = document.querySelector(".filter-panel");

const toast = document.querySelector("#toast");

let toastTimer;

function showToast(msg) {
  toast.textContent = msg;
  toast.classList.add("show");
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => toast.classList.remove("show"), 3000);
}

// =========================================
// Local Storage
// =========================================

let tasksArray = JSON.parse(localStorage.getItem("tasks")) || [];

function saveTasks() {
  localStorage.setItem("tasks", JSON.stringify(tasksArray));
}

// =========================================
// Search Toggle
// =========================================

searchBtn.addEventListener("click", () => {
  searchPanel.classList.toggle("hidden");
});

// =========================================
// Filter Toggle
// =========================================

filterBtn.addEventListener("click", () => {
  filterPanel.classList.toggle("hidden");
});

// =========================================
// Close Priority Dropdowns (shared)
// =========================================

document.addEventListener("click", (e) => {
  document.querySelectorAll(".priority-dropdown").forEach((dropdown) => {
    if (!dropdown.closest(".priority-wrapper").contains(e.target)) {
      dropdown.classList.add("hidden");
    }
  });
});

// =========================================
// Sanitize
// =========================================

function sanitize(str) {
  const div = document.createElement("div");
  div.textContent = str;
  return div.innerHTML;
}

// =========================================
// Format Date
// =========================================

function formatDate(dateStr) {
  const date = new Date(dateStr + "T00:00:00");
  const today = new Date();
  today.setHours(0, 0, 0, 0);
  const diff = Math.round((date - today) / 86400000);

  const label =
    diff === 0 ? "Today" :
    diff === 1 ? "Tomorrow" :
    diff === -1 ? "Yesterday" :
    date.toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" });

  const icon = diff < 0 ? "⚠️" : diff === 0 ? "🔥" : "📅";
  return `${icon} ${label}`;
}

// =========================================
// Create Task Card
// =========================================

function createTaskElement(taskData) {
  const task = document.createElement("li");
  task.className = "task-card";

  task.innerHTML = `
    <div class="task-left">

      <div class="task-header">
        <input
          type="checkbox"
          class="task-checkbox"
          ${taskData.completed ? "checked" : ""}
        >

        <span class="task-title ${taskData.completed ? "completed" : ""}"></span>
      </div>

      <div class="task-date">
        <span class="date-display">${taskData.dueDate ? formatDate(taskData.dueDate) : "📅 Set due date"}</span>
        <input type="date" class="date-input hidden" value="${taskData.dueDate || ""}">
      </div>

    </div>

    <div class="task-right">

      <div class="priority-wrapper">
        <span class="priority ${taskData.priority}" title="Click to change priority">
          ${taskData.priority}
        </span>
        <div class="priority-dropdown hidden">
          <span data-p="high" class="priority high">high</span>
          <span data-p="medium" class="priority medium">medium</span>
          <span data-p="low" class="priority low">low</span>
        </div>
      </div>

      <button
        class="delete-btn"
        title="Delete Task"
      >
        <i class="fa-solid fa-trash"></i>
      </button>

    </div>
  `;

  taskcontainer.append(task);

  // =====================================
  // References
  // =====================================

  task.querySelector(".task-title").textContent = taskData.text;

  const checkbox = task.querySelector(".task-checkbox");

  const title = task.querySelector(".task-title");

  const priorityBadge = task.querySelector(".priority-wrapper .priority");

  const priorityDropdown = task.querySelector(".priority-dropdown");

  const deleteBtn = task.querySelector(".delete-btn");

  const dateDisplay = task.querySelector(".date-display");

  const dateInput = task.querySelector(".date-input");

  // =====================================
  // Completion
  // =====================================

  checkbox.addEventListener("change", () => {
    taskData.completed = checkbox.checked;

    title.classList.toggle("completed", checkbox.checked);

    updateOverdueState();

    saveTasks();
  });

  // =====================================
  // Due Date
  // =====================================

  dateDisplay.setAttribute("tabindex", "0");
  dateDisplay.setAttribute("role", "button");

  dateDisplay.addEventListener("click", () => {
    dateInput.classList.remove("hidden");
    dateInput.showPicker?.();
    dateInput.focus();
  });

  dateDisplay.addEventListener("keydown", (e) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      dateInput.classList.remove("hidden");
      dateInput.showPicker?.();
      dateInput.focus();
    }
  });

  dateInput.addEventListener("change", () => {
    taskData.dueDate = dateInput.value;
    dateDisplay.textContent = taskData.dueDate ? formatDate(taskData.dueDate) : "📅 Set due date";
    dateInput.classList.add("hidden");
    updateOverdueState();
    saveTasks();
  });

  dateInput.addEventListener("blur", () => {
    dateInput.classList.add("hidden");
  });

  // =====================================
  // Priority Change
  // =====================================

  priorityBadge.setAttribute("tabindex", "0");
  priorityBadge.setAttribute("role", "button");

  priorityBadge.addEventListener("click", () => {
    priorityDropdown.classList.toggle("hidden");
  });

  priorityBadge.addEventListener("keydown", (e) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      priorityDropdown.classList.toggle("hidden");
    }
  });

  priorityDropdown.addEventListener("click", (e) => {
    const chosen = e.target.dataset.p;
    if (!chosen) return;

    taskData.priority = chosen;
    priorityBadge.textContent = chosen;
    priorityBadge.className = `priority ${chosen}`;
    priorityDropdown.classList.add("hidden");
    saveTasks();
  });

  // =====================================
  // Delete Task
  // =====================================

  deleteBtn.addEventListener("click", () => {
    tasksArray = tasksArray.filter((taskObj) => taskObj !== taskData);
    saveTasks();

    task.style.opacity = "0";
    task.style.transform = "translateX(50px)";

    setTimeout(() => {
      task.remove();
      updateEmptyState();
      updateTaskCount();
    }, 300);
  });

  // =====================================
  // Overdue Detection
  // =====================================

  function updateOverdueState() {
    task.classList.remove("overdue");

    if (!taskData.dueDate || taskData.completed) {
      return;
    }

    const today = new Date();
    const due = new Date(taskData.dueDate);

    today.setHours(0, 0, 0, 0);
    due.setHours(0, 0, 0, 0);

    if (due < today) {
      task.classList.add("overdue");
    }
  }

  updateOverdueState();
}

// =========================================
// Add Task
// =========================================

function addTask() {
  const text = input.value.trim();

  if (text === "") {
    showToast("Please enter a task.");
    return;
  }

  const isDuplicate = tasksArray.some(
    (t) => t.text.toLowerCase() === text.toLowerCase()
  );

  if (isDuplicate) {
    showToast("This task already exists.");
    return;
  }

  const taskData = {
    text,
    completed: false,
    priority: "medium",
    dueDate: "",
  };

  tasksArray.push(taskData);
  saveTasks();
  createTaskElement(taskData);
  updateEmptyState();
  updateTaskCount();

  input.value = "";
}

// =========================================
// Add Button
// =========================================

addbtn.addEventListener("click", addTask);

// =========================================
// Enter Key
// =========================================

input.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    addTask();
  }
});

// =========================================
// Search
// =========================================

searchInput.addEventListener("input", () => {
  const searchText = searchInput.value.toLowerCase();

  for (const task of taskcontainer.children) {
    const taskTitle = task
      .querySelector(".task-title")
      .textContent.toLowerCase();

    if (taskTitle.includes(searchText)) {
      task.classList.remove("hidden");
    } else {
      task.classList.add("hidden");
    }
  }
});

// =========================================
// Filters
// =========================================

filterPanel.addEventListener("click", (e) => {
  const filter = e.target.dataset.filter;

  if (!filter) return;

  for (const task of taskcontainer.children) {
    const completed = task.querySelector(".task-checkbox").checked;

    const priority = task.querySelector(".priority").textContent.trim();

    let show = true;

    switch (filter) {
      case "completed":
        show = completed;
        break;

      case "high":
      case "medium":
      case "low":
        show = priority === filter;
        break;

      default:
        show = true;
    }

    task.classList.toggle("hidden", !show);
  }
});

// =========================================
// Filter Active State
// =========================================

filterPanel.addEventListener("click", (e) => {
  const btn = e.target.closest("[data-filter]");
  if (!btn) return;
  filterPanel.querySelectorAll("button").forEach((b) => b.classList.remove("active"));
  btn.classList.add("active");
});

// =========================================
// Empty State
// =========================================

function updateEmptyState() {
  const empty = document.querySelector(".empty-state");
  empty.classList.toggle("hidden", taskcontainer.children.length > 0);
}

// =========================================
// Task Count
// =========================================

function updateTaskCount() {
  const count = tasksArray.length;
  document.querySelector("#task-count").textContent =
    count === 0 ? "" : `${count} task${count !== 1 ? "s" : ""}`;
}

// =========================================
// Load Tasks
// =========================================

tasksArray.forEach((task) => {
  createTaskElement(task);
});

updateEmptyState();
updateTaskCount();
