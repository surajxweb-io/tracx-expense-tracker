import React, { useState } from "react";
import ExpenseForm from "./ExpenseForm";
import "./styles/NewExpense.css";

const NewExpense = (props) => {
  const [isEditing, setIsEditing] = useState(false);

  const startEditingHandeller = () => {
    setIsEditing(true);
  };

  const cancelEditingHandeller = () => {
    setIsEditing(false);
  };

  const saveExpenseDataHandeller = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };
    props.onAddExpense(expenseData);
    setIsEditing(false);
  };

  return (
    <div className="new-expense">
      {!isEditing && (
        <button onClick={startEditingHandeller}>Add New Expense ➕</button>
      )}
      {isEditing && (
        <ExpenseForm
          onSaveExpenseData={saveExpenseDataHandeller}
          onCancel={cancelEditingHandeller}
        />
      )}
    </div>
  );
};

export default NewExpense;
