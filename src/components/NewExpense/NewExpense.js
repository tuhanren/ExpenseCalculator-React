import React, { useState } from "react";
import "./NewExpense.css";
import ExpenseForm from "./ExpenseForm";

const NewExpense = (props) => {
  const [isEditing, setIsEditing] = useState(false);
  // The handler should triggered when the Add new expense button is clicked
  const editExpenseHandler = () => {
    setIsEditing(true);
  };
  const stopEditingHandler = () => {
    setIsEditing(false);
  };
  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData, // This is the old values that are being overwritten (that we dont need to change in this state)
      id: Math.random().toString(),
    };
    //Add expense data to the expenses array
    props.onAddExpense(expenseData);
    //After adding the expense data, stop editing
    setIsEditing(false);
  };

  return (
    <div className="new-expense">
      {!isEditing ? (
        <button onClick={editExpenseHandler}>Add New Expense</button>
      ) : (
        <ExpenseForm
          onSaveExpenseData={saveExpenseDataHandler}
          onCancel={stopEditingHandler}
        />
      )}

      {/* {!isEditing && <button onClick={editExpenseHandler}>Add New Expense</button>} */}
      {/* passing saveExpenseDataHandler through onSaveExpenseData pointer "SUPPER IMPORTANT!-Child to Parent component communication"*/}
      {/* {isEditing && <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} />} */}
      {/* if something changed in ExpenseForm Component, onSaveExpenseData will be triggered */}
    </div>
  );
};

export default NewExpense;
