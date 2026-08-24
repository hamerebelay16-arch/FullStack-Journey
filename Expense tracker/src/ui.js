export const savebtn = document.getElementById("savebtn");
export const showbtn = document.getElementById("showbtn");
export const addToggle = document.getElementById("add-toggle");
export const table = document.getElementById("displayTable");
export const displaydiv = document.querySelector(".display");

const message = document.getElementById("message");
const typeSelect = document.getElementById("entry-type");
const amountInput = document.getElementById("amount");
const descriptionInput = document.getElementById("description");
const dateInput = document.getElementById("date");
const todayLabel = document.getElementById("today-label");
const statExpense = document.getElementById("stat-expense");
const statIncome = document.getElementById("stat-income");
const statBalance = document.getElementById("stat-balance");
const balanceCard = document.querySelector(".stat-balance");
const addDropdown = document.getElementById("add-dropdown");

let toastTimer;

function todayValue() {
  const date = new Date();
  const pad = (n) => String(n).padStart(2, "0");
  return `${date.getFullYear()}-${pad(date.getMonth() + 1)}-${pad(date.getDate())}`;
}

function formatMoney(value) {
  return Number(value).toFixed(2);
}

function formatDate(iso) {
  if (!iso) return "";
  const [year, month, day] = iso.split("-").map(Number);
  return new Date(year, month - 1, day).toLocaleDateString(undefined, {
    month: "short",
    day: "numeric",
    year: "numeric",
  });
}

export function setDefaultDates() {
  dateInput.value = todayValue();
  todayLabel.textContent = new Date().toLocaleDateString(undefined, {
    weekday: "long",
    month: "long",
    day: "numeric",
  });
}

export function syncTypeStyles() {
  const isIncome = typeSelect.value === "income";
  addDropdown.classList.toggle("is-income", isIncome);
  savebtn.classList.toggle("btn-income", isIncome);
  savebtn.textContent = isIncome ? "Save income" : "Save expense";
}

export function toggleAddForm() {
  addDropdown.classList.toggle("is-open");
  const open = addDropdown.classList.contains("is-open");
  addToggle.setAttribute("aria-expanded", String(open));
  return open;
}

const numberAnims = new WeakMap();

function animateNumber(el, next) {
  const start = Number(el.dataset.value || 0);
  const end = Number(next);
  el.dataset.value = String(end);
  const token = {};
  numberAnims.set(el, token);
  const started = performance.now();
  const duration = 480;

  function frame(now) {
    if (numberAnims.get(el) !== token) return;
    const progress = Math.min(1, (now - started) / duration);
    const eased = 1 - Math.pow(1 - progress, 3);
    el.textContent = formatMoney(start + (end - start) * eased);
    if (progress < 1) requestAnimationFrame(frame);
    else el.textContent = formatMoney(end);
  }

  requestAnimationFrame(frame);
}

export function updateStats(expenseTotal, incomeTotal, balanceTotal) {
  animateNumber(statExpense, expenseTotal);
  animateNumber(statIncome, incomeTotal);
  animateNumber(statBalance, balanceTotal);
  balanceCard.classList.toggle("negative", balanceTotal < 0);
}

export function showMessage(text, kind = "") {
  message.textContent = text;
  message.className = kind ? `toast ${kind} show` : "toast show";
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => {
    message.classList.remove("show");
  }, 2400);
}

export function shakeCard() {
  addDropdown.classList.remove("shake");
  void addDropdown.offsetWidth;
  addDropdown.classList.add("shake");
}

export function flashButton(button) {
  const original = button.textContent;
  button.classList.add("btn-flash");
  button.textContent = "Saved";
  setTimeout(() => {
    button.classList.remove("btn-flash");
    button.textContent = original;
  }, 900);
}

export function getEntryInput() {
  return {
    type: typeSelect.value,
    amount: Number(amountInput.value),
    description: descriptionInput.value.trim(),
    date: dateInput.value,
  };
}

export function clearForm() {
  amountInput.value = "";
  descriptionInput.value = "";
  dateInput.value = todayValue();
}

export function isTableVisible() {
  return displaydiv.classList.contains("is-open");
}

export function toggleTable() {
  displaydiv.classList.toggle("is-open");
  const visible = isTableVisible();
  showbtn.textContent = visible ? "Hide" : "Show";
  return visible;
}

function trashIcon() {
  const svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
  svg.setAttribute("viewBox", "0 0 24 24");
  svg.setAttribute("width", "18");
  svg.setAttribute("height", "18");
  svg.setAttribute("aria-hidden", "true");
  const path = document.createElementNS("http://www.w3.org/2000/svg", "path");
  path.setAttribute("fill", "currentColor");
  path.setAttribute(
    "d",
    "M9 3h6l1 2h4v2H4V5h4l1-2zm1 6h2v10h-2V9zm4 0h2v10h-2V9zM7 7h10v12a2 2 0 0 1-2 2H9a2 2 0 0 1-2-2V7z",
  );
  svg.appendChild(path);
  return svg;
}

function appendRow(item, type, index) {
  const tr = document.createElement("tr");
  tr.style.animationDelay = `${index * 40}ms`;

  const amountTd = document.createElement("td");
  amountTd.textContent =
    (type === "expense" ? "− " : "+ ") + formatMoney(item.amount);
  amountTd.className =
    type === "expense" ? "amount-expense" : "amount-income";

  const descTd = document.createElement("td");
  descTd.textContent = item.description || "No description";

  const dateTd = document.createElement("td");
  dateTd.textContent = formatDate(item.date);

  const actionTd = document.createElement("td");
  const btn = document.createElement("button");
  btn.type = "button";
  btn.className = "delete-btn";
  btn.setAttribute("aria-label", "Delete");
  btn.title = "Delete";
  btn.dataset.type = type;
  btn.dataset.id = item.id;
  btn.appendChild(trashIcon());
  actionTd.appendChild(btn);

  tr.append(amountTd, descTd, dateTd, actionTd);
  table.appendChild(tr);
}

export function renderTable(expenses, incomes) {
  table.replaceChildren();

  if (expenses.length === 0 && incomes.length === 0) {
    const tr = document.createElement("tr");
    const td = document.createElement("td");
    td.colSpan = 4;
    td.textContent = "No transactions yet.";
    td.className = "empty";
    tr.appendChild(td);
    table.appendChild(tr);
    return;
  }

  let index = 0;
  expenses.forEach((expense) => appendRow(expense, "expense", index++));
  incomes.forEach((income) => appendRow(income, "income", index++));
}
