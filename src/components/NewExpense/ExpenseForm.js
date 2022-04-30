import React, { useState } from "react";
import "./ExpenseForm.css";

const ExpenseForm = (props) => {
  const [enteredTitle, setEnteredTitle] = useState("");
  const [enteredAmount, setEnteredAmount] = useState("");
  const [enteredDate, setEnteredDate] = useState("");

  const titleChangeHandler = (event) => {
    setEnteredTitle(event.target.value);
  };

  const amountChangeHandler = (event) => {
    setEnteredAmount(event.target.value);
  };

  const dateChangeHandler = (event) => {
    setEnteredDate(event.target.value);
  };
  //By default, if the Add Expense button is clicked, the page reloads. To prevent the behavior, we need the submitHandler function to manually collect the data and do something with it.
  const submitHandler = (event) => {
    event.preventDefault(); // prevent default behavior, which is to send the request and refresh the page
    //Create an object to store the data
    const expenseData = {
      // Store the current state data in the object
      title: enteredTitle,
      amount: +enteredAmount, // + sign is to convert the string to number
      date: new Date(enteredDate),
    };
    //console.log(expenseData);
    //Pass the expenseData object to the onSaveExpenseData function, saveExpenseDataHandler is defined in NewExpense component, now being executed in ExpenseForm component.
    props.onSaveExpenseData(expenseData);
    // Reset the state, clear the input fields
    setEnteredTitle("");
    setEnteredAmount("");
    setEnteredDate("");
  };

  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input
            type="text"
            value={enteredTitle} //bind the value to the state, so when setEnteredTitle is called, the value will be updated. When change the state, change the input value
            onChange={titleChangeHandler}
          />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input
            type="number"
            min="0.01"
            step="0.01"
            value={enteredAmount}
            onChange={amountChangeHandler}
          />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input
            type="date"
            min="2019-01-01"
            max="2023-12-31"
            value={enteredDate}
            onChange={dateChangeHandler}
          />
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="submit">Add Expense</button>
        <button type="button" onClick={props.onCancel}>
          Cancel
        </button>
      </div>
    </form>
  );
};

export default ExpenseForm;
