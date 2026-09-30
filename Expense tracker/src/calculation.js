export function totalByType(items, type) {
  let sum = 0;
  for (const item of items) {
    if (item.type === type) sum += item.amount;
  }
  return sum;
}

export function totalExpense(items) {
  return totalByType(items, "expense");
}

export function totalIncome(items) {
  return totalByType(items, "income");
}

export function totalLoan(items) {
  return totalByType(items, "loan");
}

export function totalBorrow(items) {
  return totalByType(items, "borrow");
}

/** Cash on hand: income + borrow − expense − loan */
export function balance(items) {
  return (
    totalIncome(items) +
    totalBorrow(items) -
    totalExpense(items) -
    totalLoan(items)
  );
}
