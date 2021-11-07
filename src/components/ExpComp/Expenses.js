import React, { useState } from "react";
import ExpensesFilter from "./ExpensesFilter";
import Card from "./Card";
import ExpenseList from "./ExpenseList";
import ExpenseChart from "./ExpensesChart";
import "./styles/Expenses.css";

function Expences(props) {
  const curryear = new Date().getFullYear().toString();
  const [filteredYear, setfilteredYear] = useState(curryear);

  const filterChangeHandeller = (selectedYear) => {
    setfilteredYear(selectedYear);
  };

  const filteredExpences = props.items.filter((expense) => {
    return expense.date.getFullYear().toString() === filteredYear;
  });

  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter
          selectedDate={filteredYear}
          onFilterChange={filterChangeHandeller}
        />
        <ExpenseChart expenses={filteredExpences} />
        <ExpenseList content={filteredExpences} />
      </Card>
    </div>
  );
}

export default Expences;
