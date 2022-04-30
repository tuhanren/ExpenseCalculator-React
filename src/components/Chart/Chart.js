import React from "react";
import "./Chart.css";
import ChartBar from "./ChartBar";

const Chart = (props) => {
  // Get the value array from the props, transform dataPoint to dataPoint.value as a new array
  const dataPointValues = props.dataPoints.map((dataPoint) => dataPoint.value);
  // Get the max value from the dataPointValues array, use ... to pull out all the values as 12 arguments for max()
  const totalMaximum = Math.max(...dataPointValues);
  return (
    <div className="chart">
      {/* output the chart dynanmicly */}
      {props.dataPoints.map((dataPoint) => (
        <ChartBar
          key={dataPoint.label}
          value={dataPoint.value}
          maxValue={totalMaximum}
          label={dataPoint.label}
        />
      ))}
    </div>
  );
};

export default Chart;
