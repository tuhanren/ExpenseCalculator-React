import "./Expenses.css";
import React, { useState } from "react";
import ExpenseItem from "./ExpenseItem";
import ExpensesFilter from "./ExpenseFilter";
import Card from "../UI/Card";

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
        {/* use map() to get the expenses array data, for each element create a <ExpenseItem> component */}
        {filteredExpenses.map((expense) => (
          <ExpenseItem
            key={expense.id}
            title={expense.title}
            amount={expense.amount}
            date={expense.date}
          />
        ))}
        {/* // My Solution, in Expense.js replace the original map function with
        {props.items
                .filter(
                  (expense) => expense.date.getFullYear().toString() === filteredYear
                )
                .map((expense) => (
                  <ExpenseItem
                    key={expense.id}
                    title={expense.title}
                    amount={expense.amount}
                    date={expense.date}
                  />
                ))} */}

        {/* <ExpenseItem
          title={props.items[0].title}
          amount={props.items[0].amount}
          date={props.items[0].date}
        />
        <ExpenseItem
          title={props.items[1].title}
          amount={props.items[1].amount}
          date={props.items[1].date}
        />
        <ExpenseItem
          title={props.items[2].title}
          amount={props.items[2].amount}
          date={props.items[2].date}
        ></ExpenseItem>
        <ExpenseItem
          title={props.items[3].title}
          amount={props.items[3].amount}
          date={props.items[3].date}
        ></ExpenseItem> */}
      </Card>
    </div>
  );
};
export default Expenses;
