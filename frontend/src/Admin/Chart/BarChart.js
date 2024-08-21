import React from "react";
import { Bar } from "react-chartjs-2";

export default function BarChart({chartData}) {
  return (
    <div className="chart-container">
    <Bar
      data={chartData}
    />
  </div>
  )
}


