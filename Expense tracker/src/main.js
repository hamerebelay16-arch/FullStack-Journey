import {
  savebtn,
  showbtn,
  addToggle,
  table,
  renderTable,
  showMessage,
  getEntryInput,
  clearForm,
  isTableVisible,
  toggleTable,
  updateStats,
  setDefaultDates,
  shakeCard,
  flashButton,
  syncTypeStyles,
  toggleAddForm,
} from "./ui.js";
import {
  retrieveFromLocal,
  expenses,
  incomes,
  deleteItem,
  addExpense,
  addIncome,
} from "./storage.js";
import { totalExpense, totalIncome, balance } from "./calculation.js";

retrieveFromLocal();
setDefaultDates();
syncTypeStyles();
refreshStats();

function isValidEntry(entry) {
  return Number.isFinite(entry.amount) && entry.amount > 0 && entry.date !== "";
}

function refreshStats() {
  const spent = totalExpense(expenses);
  const earned = totalIncome(incomes);
  updateStats(spent, earned, balance(spent, earned));
}

function refreshTableIfVisible() {
  if (isTableVisible()) {
    renderTable(expenses, incomes);
  }
}

addToggle.addEventListener("click", () => {
  toggleAddForm();
});

document.getElementById("entry-type").addEventListener("change", () => {
  syncTypeStyles();
});

showbtn.addEventListener("click", () => {
  if (toggleTable()) {
    renderTable(expenses, incomes);
  }
});

table.addEventListener("click", (event) => {
  const deleteBtn = event.target.closest(".delete-btn");
  if (!deleteBtn) return;

  const row = deleteBtn.closest("tr");
  let finished = false;
  const finish = () => {
    if (finished) return;
    finished = true;
    deleteItem(deleteBtn.dataset.type, deleteBtn.dataset.id);
    renderTable(expenses, incomes);
    refreshStats();
  };

  row.classList.add("row-exit");
  row.addEventListener("animationend", finish, { once: true });
  setTimeout(finish, 320);
});

savebtn.addEventListener("click", () => {
  const entry = getEntryInput();
  if (!isValidEntry(entry)) {
    shakeCard();
    showMessage("Enter a valid amount and date.", "error");
    return;
  }

  const { type, ...data } = entry;
  if (type === "income") {
    addIncome(data);
    showMessage("Income saved.", "success");
  } else {
    addExpense(data);
    showMessage("Expense saved.", "success");
  }

  clearForm();
  flashButton(savebtn);
  refreshStats();
  refreshTableIfVisible();
});
