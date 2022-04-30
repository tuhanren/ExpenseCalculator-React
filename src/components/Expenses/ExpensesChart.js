import React from "react";
import Chart from "../Chart/Chart";

const ExpenseChart = (props) => {
  // Initial state of the chart data points
  const chartDataPoints = [
    { label: "Jan", value: 0 },
    { label: "Feb", value: 0 },
    { label: "Mar", value: 0 },
    { label: "Apr", value: 0 },
    { label: "May", value: 0 },
    { label: "Jun", value: 0 },
    { label: "Jul", value: 0 },
    { label: "Aug", value: 0 },
    { label: "Sep", value: 0 },
    { label: "Oct", value: 0 },
    { label: "Nov", value: 0 },
    { label: "Dec", value: 0 },
  ];

  // Loop through the items and add the values to the chartDataPoints (use for of loop since it is an array)
  for (const expense of props.expenses) {
    // Use the month as index to find the correct chartDataPoint and add the value
    const expenseMonth = expense.date.getMonth();
    chartDataPoints[expenseMonth].value += expense.amount;
  }
  // Pass the chartDataPoints to the Chart component
  return <Chart dataPoints={chartDataPoints} />;
};

export default ExpenseChart;
