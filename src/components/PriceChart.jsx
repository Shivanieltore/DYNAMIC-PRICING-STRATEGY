import React, { useContext } from "react";
import { AppContext } from "../context/AppContext";
import { Line } from "react-chartjs-2";

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Tooltip,
  Legend
);

function PriceChart() {
  const { chartData } = useContext(AppContext);

  const safeData =
    chartData && chartData.length > 0
      ? chartData
      : [
          { time: "T0", price: 100, demand: 5, profit: 200 },
        ];

  const labels = safeData.map((d) => d.time);

  const data = {
    labels,
    datasets: [
      {
        label: "Price (₹)",
        data: safeData.map((d) => d.price),
        borderColor: "rgba(37, 99, 235, 1)",
        backgroundColor: "rgba(37, 99, 235, 0.2)",
        borderWidth: 2,
        tension: 0.3,
      },
      {
        label: "Demand",
        data: safeData.map((d) => d.demand),
        borderColor: "rgba(22, 163, 74, 1)",
        backgroundColor: "rgba(22, 163, 74, 0.2)",
        borderWidth: 2,
        tension: 0.3,
      },
      {
        label: "Profit (₹)",
        data: safeData.map((d) => d.profit || 0),
        borderColor: "rgba(249, 115, 22, 1)",
        backgroundColor: "rgba(249, 115, 22, 0.2)",
        borderWidth: 2,
        tension: 0.3,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "bottom",
      },
      tooltip: {
        mode: "index",
        intersect: false,
      },
    },
    interaction: {
      mode: "nearest",
      axis: "x",
      intersect: false,
    },
  };

  return (
    <div className="bg-white shadow-lg p-6 rounded-xl w-full mb-6">
      <h2 className="text-2xl font-bold mb-4 text-slate-800">
        Price & Profit Trend
      </h2>
      <Line data={data} options={options} />
    </div>
  );
}

export default PriceChart;
