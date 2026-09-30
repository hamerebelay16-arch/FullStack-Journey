export const transactions = [];

const LEGACY_KEYS = ["expenses", "incomes"];

function createId() {
  return crypto.randomUUID();
}

function readJsonArray(key) {
  try {
    const raw = localStorage.getItem(key);
    if (raw == null || raw === "") return [];
    const parsed = JSON.parse(raw);
    return Array.isArray(parsed) ? parsed : [];
  } catch {
    return [];
  }
}

function normalizeItem(item, type, fallbackCreatedAt = Date.now()) {
  return {
    id: item.id || createId(),
    type: item.type || type,
    amount: Number(item.amount) || 0,
    description: item.description || "",
    date: item.date || "",
    createdAt: Number(item.createdAt) || fallbackCreatedAt,
  };
}

export function saveTheme(theme) {
  localStorage.setItem("theme", theme);
}

export function getTheme() {
  return localStorage.getItem("theme");
}

function persist() {
  localStorage.setItem("transactions", JSON.stringify(transactions));
}

export function retrieveFromLocal() {
  const saved = readJsonArray("transactions");
  const legacyExpenses = readJsonArray("expenses");
  const legacyIncomes = readJsonArray("incomes");

  const legacy = [
    ...legacyExpenses.map((item) => ({ ...item, type: item.type || "expense" })),
    ...legacyIncomes.map((item) => ({ ...item, type: item.type || "income" })),
  ];

  // Prefer existing transactions; if empty, recover from legacy keys.
  const source = saved.length > 0 ? saved : legacy;
  const base = Date.now();

  transactions.length = 0;
  transactions.push(
    ...source.map((item, index) =>
      normalizeItem(
        item,
        item.type || "expense",
        base - (source.length - index),
      ),
    ),
  );

  persist();

  // Only remove legacy after we have successfully stored something,
  // or legacy was already empty.
  if (saved.length > 0 || legacy.length > 0) {
    LEGACY_KEYS.forEach((key) => localStorage.removeItem(key));
  }
}

export function addTransaction(entry) {
  transactions.push({
    id: createId(),
    type: entry.type,
    amount: Number(entry.amount),
    description: entry.description || "",
    date: entry.date,
    createdAt: Date.now(),
  });
  persist();
}

export function updateTransaction(id, updates) {
  const index = transactions.findIndex((item) => item.id === id);
  if (index === -1) return false;

  transactions[index] = {
    ...transactions[index],
    type: updates.type,
    amount: Number(updates.amount),
    description: updates.description || "",
    date: updates.date,
  };
  persist();
  return true;
}

export function deleteTransaction(id) {
  const index = transactions.findIndex((item) => item.id === id);
  if (index === -1) return false;
  transactions.splice(index, 1);
  persist();
  return true;
}

export function getSortedTransactions() {
  return [...transactions].sort((a, b) => {
    if (a.date !== b.date) {
      return a.date < b.date ? 1 : -1;
    }
    return (b.createdAt || 0) - (a.createdAt || 0);
  });
}

export function filterTransactions(filters = {}) {
  const { type = "all", dateMode = "any", date = "" } = filters;

  return getSortedTransactions().filter((item) => {
    if (type !== "all" && item.type !== type) return false;
    if (!date || dateMode === "any") return true;
    if (dateMode === "before") return item.date < date;
    if (dateMode === "on") return item.date === date;
    if (dateMode === "after") return item.date > date;
    return true;
  });
}
