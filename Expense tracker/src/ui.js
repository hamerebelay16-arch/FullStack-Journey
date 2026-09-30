export const themebtn = document.getElementById("theme-toggle");
export const savebtn = document.getElementById("savebtn");
export const showbtn = document.getElementById("showbtn");
export const addToggle = document.getElementById("add-toggle");
export const filterToggle = document.getElementById("filter-toggle");
export const filterPanel = document.getElementById("filter-panel");
export const filterType = document.getElementById("filter-type");
export const filterDateMode = document.getElementById("filter-date-mode");
export const filterDate = document.getElementById("filter-date");
export const filterClear = document.getElementById("filter-clear");
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
const statLoan = document.getElementById("stat-loan");
const statBorrow = document.getElementById("stat-borrow");
const statBalance = document.getElementById("stat-balance");
const balanceCard = document.querySelector(".stat-balance");
const addDropdown = document.getElementById("add-dropdown");

const TYPE_LABELS = {
  expense: "Save expense",
  income: "Save income",
  loan: "Save loan",
  borrow: "Save borrow",
};

const TYPE_CLASS = {
  expense: "is-expense",
  income: "is-income",
  loan: "is-loan",
  borrow: "is-borrow",
};

let toastTimer;
let editingId = null;

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

function amountPrefix(type) {
  return type === "expense" || type === "loan" ? "− " : "+ ";
}

function amountClass(type) {
  return `amount-${type}`;
}

export function applyTheme(theme) {
  document.documentElement.dataset.theme = theme;
  if (!themebtn) return;
  themebtn.setAttribute(
    "aria-label",
    theme === "dark" ? "Switch to light theme" : "Switch to dark theme",
  );
  themebtn.setAttribute("aria-pressed", String(theme === "dark"));
}

export function currentTheme() {
  return document.documentElement.dataset.theme === "dark" ? "dark" : "light";
}

export function setDefaultDates() {
  if (dateInput) dateInput.value = todayValue();
  if (todayLabel) {
    todayLabel.textContent = new Date().toLocaleDateString(undefined, {
      weekday: "long",
      month: "long",
      day: "numeric",
    });
  }
}

export function syncTypeStyles() {
  if (!typeSelect || !savebtn || !addDropdown) return;
  const type = typeSelect.value;
  addDropdown.classList.remove("is-expense", "is-income", "is-loan", "is-borrow");
  addDropdown.classList.add(TYPE_CLASS[type] || "is-expense");
  savebtn.classList.remove("btn-income", "btn-loan", "btn-borrow");
  if (type === "income") savebtn.classList.add("btn-income");
  if (type === "loan") savebtn.classList.add("btn-loan");
  if (type === "borrow") savebtn.classList.add("btn-borrow");
  savebtn.textContent = TYPE_LABELS[type] || "Save";
}

export function toggleAddForm() {
  if (!addDropdown || !addToggle) return false;
  addDropdown.classList.toggle("is-open");
  const open = addDropdown.classList.contains("is-open");
  addToggle.setAttribute("aria-expanded", String(open));
  return open;
}

export function toggleFilterPanel() {
  if (!filterPanel || !filterToggle) return false;
  filterPanel.classList.toggle("is-open");
  const open = filterPanel.classList.contains("is-open");
  filterToggle.setAttribute("aria-expanded", String(open));
  filterToggle.classList.toggle("is-active", open);
  return open;
}

export function getFilterValues() {
  return {
    type: filterType?.value || "all",
    dateMode: filterDateMode?.value || "any",
    date: filterDate?.value || "",
  };
}

export function clearFilters() {
  if (filterType) filterType.value = "all";
  if (filterDateMode) filterDateMode.value = "any";
  if (filterDate) filterDate.value = "";
}

const numberAnims = new WeakMap();

function animateNumber(el, next) {
  if (!el) return;
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

export function updateStats(stats) {
  animateNumber(statExpense, stats.expense);
  animateNumber(statIncome, stats.income);
  animateNumber(statLoan, stats.loan);
  animateNumber(statBorrow, stats.borrow);
  animateNumber(statBalance, stats.balance);
  balanceCard?.classList.toggle("negative", stats.balance < 0);
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

function svgIcon(pathD, size = 18) {
  const svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
  svg.setAttribute("viewBox", "0 0 24 24");
  svg.setAttribute("width", String(size));
  svg.setAttribute("height", String(size));
  svg.setAttribute("aria-hidden", "true");
  const path = document.createElementNS("http://www.w3.org/2000/svg", "path");
  path.setAttribute("fill", "currentColor");
  path.setAttribute("d", pathD);
  svg.appendChild(path);
  return svg;
}

function trashIcon() {
  return svgIcon(
    "M9 3h6l1 2h4v2H4V5h4l1-2zm1 6h2v10h-2V9zm4 0h2v10h-2V9zM7 7h10v12a2 2 0 0 1-2 2H9a2 2 0 0 1-2-2V7z",
  );
}

function editIcon() {
  return svgIcon(
    "M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM20.71 7.04a1 1 0 0 0 0-1.41l-2.34-2.34a1 1 0 0 0-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z",
  );
}

function checkIcon() {
  return svgIcon("M9 16.2 4.8 12l-1.4 1.4L9 19 21 7l-1.4-1.4L9 16.2z");
}

function closeIcon() {
  return svgIcon(
    "M18.3 5.7 12 12l6.3 6.3-1.4 1.4L10.6 13.4 4.3 19.7 2.9 18.3 9.2 12 2.9 5.7 4.3 4.3l6.3 6.3 6.3-6.3z",
  );
}

function typeOptions(selected) {
  const select = document.createElement("select");
  select.className = "row-type";
  [
    ["expense", "Expense"],
    ["income", "Income"],
    ["loan", "Loan"],
    ["borrow", "Borrow"],
  ].forEach(([value, label]) => {
    const option = document.createElement("option");
    option.value = value;
    option.textContent = label;
    if (value === selected) option.selected = true;
    select.appendChild(option);
  });
  return select;
}

function appendViewRow(item, index) {
  const tr = document.createElement("tr");
  tr.dataset.id = item.id;
  tr.style.animationDelay = `${index * 40}ms`;

  const amountTd = document.createElement("td");
  amountTd.textContent = amountPrefix(item.type) + formatMoney(item.amount);
  amountTd.className = amountClass(item.type);

  const descTd = document.createElement("td");
  descTd.textContent = item.description || "No description";

  const dateTd = document.createElement("td");
  dateTd.textContent = formatDate(item.date);

  const actionTd = document.createElement("td");
  actionTd.className = "actions-cell";

  const editBtn = document.createElement("button");
  editBtn.type = "button";
  editBtn.className = "edit-btn";
  editBtn.setAttribute("aria-label", "Edit");
  editBtn.title = "Edit";
  editBtn.dataset.action = "edit";
  editBtn.dataset.id = item.id;
  editBtn.appendChild(editIcon());

  const deleteBtn = document.createElement("button");
  deleteBtn.type = "button";
  deleteBtn.className = "delete-btn";
  deleteBtn.setAttribute("aria-label", "Delete");
  deleteBtn.title = "Delete";
  deleteBtn.dataset.action = "delete";
  deleteBtn.dataset.id = item.id;
  deleteBtn.appendChild(trashIcon());

  actionTd.append(editBtn, deleteBtn);
  tr.append(amountTd, descTd, dateTd, actionTd);
  table.appendChild(tr);
}

function appendEditRow(item) {
  const tr = document.createElement("tr");
  tr.className = "editing";
  tr.dataset.id = item.id;

  const amountTd = document.createElement("td");
  const amountInputEl = document.createElement("input");
  amountInputEl.type = "number";
  amountInputEl.min = "0";
  amountInputEl.step = "0.01";
  amountInputEl.className = "row-amount";
  amountInputEl.value = item.amount;
  amountTd.appendChild(amountInputEl);

  const descTd = document.createElement("td");
  const descStack = document.createElement("div");
  descStack.className = "edit-stack";
  const typeSelectEl = typeOptions(item.type);
  const descInputEl = document.createElement("input");
  descInputEl.type = "text";
  descInputEl.className = "row-description";
  descInputEl.value = item.description || "";
  descInputEl.placeholder = "Description";
  descStack.append(typeSelectEl, descInputEl);
  descTd.appendChild(descStack);

  const dateTd = document.createElement("td");
  const dateInputEl = document.createElement("input");
  dateInputEl.type = "date";
  dateInputEl.className = "row-date";
  dateInputEl.value = item.date;
  dateTd.appendChild(dateInputEl);

  const actionTd = document.createElement("td");
  actionTd.className = "actions-cell";

  const saveBtn = document.createElement("button");
  saveBtn.type = "button";
  saveBtn.className = "save-row-btn";
  saveBtn.setAttribute("aria-label", "Save changes");
  saveBtn.title = "Save";
  saveBtn.dataset.action = "save-edit";
  saveBtn.dataset.id = item.id;
  saveBtn.appendChild(checkIcon());

  const cancelBtn = document.createElement("button");
  cancelBtn.type = "button";
  cancelBtn.className = "cancel-row-btn";
  cancelBtn.setAttribute("aria-label", "Cancel edit");
  cancelBtn.title = "Cancel";
  cancelBtn.dataset.action = "cancel-edit";
  cancelBtn.dataset.id = item.id;
  cancelBtn.appendChild(closeIcon());

  actionTd.append(saveBtn, cancelBtn);
  tr.append(amountTd, descTd, dateTd, actionTd);
  table.appendChild(tr);
}

export function getEditingId() {
  return editingId;
}

export function setEditingId(id) {
  editingId = id;
}

export function readEditRow(row) {
  return {
    type: row.querySelector(".row-type").value,
    amount: Number(row.querySelector(".row-amount").value),
    description: row.querySelector(".row-description").value.trim(),
    date: row.querySelector(".row-date").value,
  };
}

export function renderTable(items) {
  table.replaceChildren();

  if (items.length === 0) {
    const tr = document.createElement("tr");
    const td = document.createElement("td");
    td.colSpan = 4;
    td.textContent = "No transactions match.";
    td.className = "empty";
    tr.appendChild(td);
    table.appendChild(tr);
    return;
  }

  items.forEach((item, index) => {
    if (editingId === item.id) appendEditRow(item);
    else appendViewRow(item, index);
  });
}
