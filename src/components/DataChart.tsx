// import React from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

export const options = {
  responsive: true,
  plugins: {
    legend: {
      position: "top" as const,
      //   display: false,
    },
    title: {
      display: false,
      text: "Wealth over Rounds",
    },
  },
};

const DataChart = ({ datatoChart }: { datatoChart: number[][] }) => {
  console.log(datatoChart);
  const labels = datatoChart.map((a, index) => index + 1);
  const w1 = datatoChart.map((a) => a[0]);
  const w2 = datatoChart.map((a) => a[1]);

  const data = {
    labels,
    datasets: [
      {
        label: "Your Wealth",
        data: w1,
        borderColor: "rgb(255, 99, 132)",
        backgroundColor: "rgba(255, 99, 132, 0.5)",
      },
      {
        label: "Optimal Wealth",
        data: w2,
        borderColor: "rgb(34, 211, 238)",
        backgroundColor: "rgba(34, 211, 238, 0.5)",
      },
    ],
  };

  return (
    <div className="self-center chart">
      {/* wch80 */}
      <Line options={options} data={data} />
    </div>
  );
};

export default DataChart;
