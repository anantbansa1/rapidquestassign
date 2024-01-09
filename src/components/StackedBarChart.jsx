import React from "react";
import { Bar } from "react-chartjs-2";
import {
  Chart as Chartjs,
  BarElement,
  CategoryScale,
  LinearScale,
  Tooltip,
  Legend,
} from "chart.js";
Chartjs.register(BarElement, CategoryScale, LinearScale, Tooltip, Legend);

function StackedBarChart() {
  const data = {
    labels: [20, 25, 30, 35, 40, 45, 50, 55, 60, 65, 70, 75, 80],
    datasets: [
      {
        label: "Employer",
        data: [10, 15, 20, 25, 30, 35, 42, 48, 56, 65, 72, 80, 85],
        backgroundColor: "#07009C",
      },
      {
        label: "Employee",
        data: [10, 15, 20, 25, 30, 35, 42, 48, 56, 65, 72, 80, 85],
        backgroundColor: "#4636F5",
      },
      {
        label: "Total Interest",
        data: [10, 15, 20, 25, 30, 35, 42, 48, 56, 65, 72, 80, 85],
        backgroundColor: "#8EAEF9",
      },
    ],
  };
  const options = {
    scales: {
      x: {
        stacked: true,
      },
      y: {
        stacked: true,
      },
    },
    plugins: {
      legend: {
        labels: {
          usePointStyle: true,
          pointStyle: "circle",
        },
      },
    },
    barThickness: 12,
  };

  return (
    <div>
      <Bar data={data} options={options}></Bar>
    </div>
  );
}

export default StackedBarChart;
