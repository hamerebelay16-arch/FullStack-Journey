export function totalExpense(expenses) {
  let sum = 0;
  for (const exp of expenses) {
    sum += exp.amount;
  }
  return sum;
  //   return expenses.reduce((total, expense) => total + expense.amount, 0);
  //u can also loop thru the array items these way
}
export function totalIncome(deposits) {
  let sum = 0;
  for (let dep of deposits) sum += dep.amount;
  return sum;
}
export function balance(totalExp, totalInc) {
  let balance = totalInc - totalExp;
  return balance;
}
