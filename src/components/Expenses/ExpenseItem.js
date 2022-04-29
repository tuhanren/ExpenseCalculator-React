import "./ExpenseItem.css";
import Card from "../UI/Card";
import ExpenseDate from "./ExpenseDate";
import React from "react";

const ExpenseItem = (props) => {
  // // useState tells the component to keep track of the state, if the value changes, the component will re-render
  // // const [currentStateValue, functionUpdatingCurrentStateValue] = useState(initialValue);
  // const [title, setTitle] = useState(props.title);
  // // why const? because we don't want to change the value of the title, we want to keep track of the value of the title

  // // updating function
  // const clickHandler = () => {
  //   setTitle("Updated!");
  //   console.log(title);
  // };

  return (
    /* Card is a custom component, not like the div, build-in component that css will support automactically, it will do only been told */
    <Card className="expense-item">
      <ExpenseDate date={props.date} />
      <div className="expense-item__description">
        <h2>{props.title}</h2>
        <div className="expense-item__price">${props.amount}</div>
      </div>
      {/* <button onClick={clickHandler}>Change Title</button> */}
    </Card>
  );
};

export default ExpenseItem;
