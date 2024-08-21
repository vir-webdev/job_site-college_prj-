import React from 'react'
import { Line } from "react-chartjs-2";

export default function LineChart({chartData}) {
  return (
    <div>
       <div className="chart-container">
      <Line
        data={chartData}
      />
    </div>
    </div>
  )
}
