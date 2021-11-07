import React from "react";
import ExpenseItem from "./ExpenseItems";
import "./styles/ExpenseList.css";

function ExpenseList(props) {
  if (props.content.length === 0) {
    return <h2 className="expenses-list__fallback">No expenses found.</h2>;
  }
  return (
    <ul className="expenses-list">
      {props.content.map((expense) => (
        <ExpenseItem
          key={expense.id}
          title={expense.title}
          amount={expense.amount}
          date={expense.date}
        />
      ))}
    </ul>
  );
}

export default ExpenseList;
