import {
  savebtn,
  showbtn,
  addToggle,
  filterToggle,
  filterType,
  filterDateMode,
  filterDate,
  filterClear,
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
  toggleFilterPanel,
  getFilterValues,
  clearFilters,
  themebtn,
  applyTheme,
  currentTheme,
  setEditingId,
  getEditingId,
  readEditRow,
} from "./ui.js";
import {
  retrieveFromLocal,
  transactions,
  deleteTransaction,
  addTransaction,
  updateTransaction,
  filterTransactions,
  saveTheme,
} from "./storage.js";
import {
  totalExpense,
  totalIncome,
  totalLoan,
  totalBorrow,
  balance,
} from "./calculation.js";

function isValidEntry(entry) {
  return Number.isFinite(entry.amount) && entry.amount > 0 && entry.date !== "";
}

function refreshStats() {
  updateStats({
    expense: totalExpense(transactions),
    income: totalIncome(transactions),
    loan: totalLoan(transactions),
    borrow: totalBorrow(transactions),
    balance: balance(transactions),
  });
}

function currentList() {
  return filterTransactions(getFilterValues());
}

function refreshTableIfVisible() {
  if (isTableVisible()) {
    renderTable(currentList());
  }
}

function on(el, event, handler) {
  if (!el) return;
  el.addEventListener(event, handler);
}

try {
  retrieveFromLocal();
  setDefaultDates();
  syncTypeStyles();
  refreshStats();
  applyTheme(currentTheme());
  if (isTableVisible()) {
    renderTable(currentList());
  }
  window.__etReady = true;

  on(addToggle, "click", () => toggleAddForm());
  on(filterToggle, "click", () => toggleFilterPanel());
  on(filterType, "change", refreshTableIfVisible);
  on(filterDateMode, "change", refreshTableIfVisible);
  on(filterDate, "change", refreshTableIfVisible);
  on(filterClear, "click", () => {
    clearFilters();
    refreshTableIfVisible();
  });

  on(themebtn, "click", () => {
    const next = currentTheme() === "dark" ? "light" : "dark";
    applyTheme(next);
    saveTheme(next);
  });

  on(document.getElementById("entry-type"), "change", () => {
    syncTypeStyles();
  });

  on(showbtn, "click", () => {
    if (toggleTable()) {
      renderTable(currentList());
    }
  });

  on(table, "click", (event) => {
    const btn = event.target.closest("button[data-action]");
    if (!btn) return;

    const { action, id } = btn.dataset;

    if (action === "edit") {
      setEditingId(id);
      renderTable(currentList());
      return;
    }

    if (action === "cancel-edit") {
      setEditingId(null);
      renderTable(currentList());
      return;
    }

    if (action === "save-edit") {
      const row = btn.closest("tr");
      const updates = readEditRow(row);
      if (!isValidEntry(updates)) {
        showMessage("Enter a valid amount and date.", "error");
        return;
      }
      updateTransaction(id, updates);
      setEditingId(null);
      showMessage("Transaction updated.", "success");
      refreshStats();
      renderTable(currentList());
      return;
    }

    if (action === "delete") {
      if (getEditingId() === id) setEditingId(null);
      const row = btn.closest("tr");
      let finished = false;
      const finish = () => {
        if (finished) return;
        finished = true;
        deleteTransaction(id);
        renderTable(currentList());
        refreshStats();
      };

      row.classList.add("row-exit");
      row.addEventListener("animationend", finish, { once: true });
      setTimeout(finish, 320);
    }
  });

  on(savebtn, "click", () => {
    const entry = getEntryInput();
    if (!isValidEntry(entry)) {
      shakeCard();
      showMessage("Enter a valid amount and date.", "error");
      return;
    }

    addTransaction(entry);
    showMessage(
      entry.type.charAt(0).toUpperCase() + entry.type.slice(1) + " saved.",
      "success",
    );
    clearForm();
    flashButton(savebtn);
    refreshStats();
    refreshTableIfVisible();
  });
} catch (error) {
  console.error("Expense tracker failed to start:", error);
  const message = document.getElementById("message");
  if (message) {
    message.textContent = "App failed to load. Hard-refresh (Ctrl+F5).";
    message.className = "toast error show";
  }
}
