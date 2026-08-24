export const expenses = [];
export const incomes = [];

function createId() {
  return crypto.randomUUID();
}

function withIds(items) {
  let changed = false;
  const result = items.map((item) => {
    if (item.id) return item;
    changed = true;
    return { ...item, id: createId() };
  });
  return { result, changed };
}

export function saveTheme(theme) {
  localStorage.setItem("theme", theme);
}

export function getTheme() {
  return localStorage.getItem("theme");
}

export function saveToLocal(type, item) {
  localStorage.setItem(type, JSON.stringify(item));
}

export function retrieveFromLocal() {
  const savedexpenses = JSON.parse(localStorage.getItem("expenses")) || [];
  const savedincomes = JSON.parse(localStorage.getItem("incomes")) || [];

  const expenseData = withIds(savedexpenses);
  const incomeData = withIds(savedincomes);

  expenses.length = 0;
  incomes.length = 0;
  expenses.push(...expenseData.result);
  incomes.push(...incomeData.result);

  if (expenseData.changed) saveToLocal("expenses", expenses);
  if (incomeData.changed) saveToLocal("incomes", incomes);
}

export function addExpense(entry) {
  expenses.push({ ...entry, id: createId() });
  saveToLocal("expenses", expenses);
}

export function addIncome(entry) {
  incomes.push({ ...entry, id: createId() });
  saveToLocal("incomes", incomes);
}

export function deleteItem(type, id) {
  if (type === "expense") {
    const index = expenses.findIndex((item) => item.id === id);
    if (index === -1) return;
    expenses.splice(index, 1);
    saveToLocal("expenses", expenses);
  } else if (type === "income") {
    const index = incomes.findIndex((item) => item.id === id);
    if (index === -1) return;
    incomes.splice(index, 1);
    saveToLocal("incomes", incomes);
  }
}
