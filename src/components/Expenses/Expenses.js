import "./Expenses.css";
import React, { useState } from "react";
import ExpensesFilter from "./ExpenseFilter";
import Card from "../UI/Card";
import ExpensesList from "./ExpensesList";

const Expenses = (props) => {
  // Task3: create a state variable to store the filter value
  const [filteredYear, setFilterYear] = useState("2020");

  const filterChangeHandler = (selectedYear) => {
    setFilterYear(selectedYear);
  };
  // If we have the data already, we just need to change how it renders with simple solutions
  const filteredExpenses = props.items.filter((expense) => {
    return expense.date.getFullYear().toString() === filteredYear;
  });
  // // Task2: Forward the selected value to Expense Component
  // const filterChangeHandler = (selectedYear) => {
  //   console.log("Expense.js");
  //   console.log(selectedYear);
  // };

  return (
    <div>
      <Card className="expenses">
        {/* Task4: Set current state value as selected prop to ExpensesFilter */}
        <ExpensesFilter
          selected={filteredYear}
          onChangeFilter={filterChangeHandler}
        />
        <ExpensesList items={filteredExpenses} />

        {/* use map() to get the expenses array data, for each element create a <ExpenseItem> component and use ternary expression to show message if there is no expense item under certain condition */}
        {/* {filteredExpenses.length === 0 ? (
          <p>No expenses found.</p>
        ) : (
          filteredExpenses.map((expense) => (
            <ExpenseItem
              key={expense.id}
              title={expense.title}
              amount={expense.amount}
              date={expense.date}
            />
          ))
        )} */}

        {/* Alternative conditional outputting 1 - Abusing && features */}
        {/* {filteredExpenses.length === 0 && <p>No expenses found.</p>}
        {filteredExpenses.length > 0 &&
          filteredExpenses.map((expense) => (
            <ExpenseItem
              key={expense.id}
              title={expense.title}
              amount={expense.amount}
              date={expense.date}
            />
          ))} */}
      </Card>
    </div>
  );
};
export default Expenses;
