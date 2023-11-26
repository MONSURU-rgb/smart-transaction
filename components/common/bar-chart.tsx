import {
  Chart as ChartJS,
  BarElement,
  CategoryScale,
  LinearScale,
  Tooltip,
} from "chart.js";

ChartJS.register(BarElement, CategoryScale, LinearScale, Tooltip);

import { Bar } from "react-chartjs-2";
export function Barchart({
  dataArray,
  bgColor,
  label,
}: {
  dataArray: Array<number>;
  bgColor: string[];
  label: Array<string>;
}) {
  const data = {
    labels: label,
    datasets: [
      {
        // label: "764",
        data: dataArray,
        backgroundColor: bgColor,

        barPercentage: 0.6,
        categoryPercentage: 0.5,
        borderRadius: 10,
      },
    ],
  };

  const options = {
    scales: {
      x: {
        grid: {
          display: false,
        },
      },

      y: {
        grid: {
          display: false,
          drawBorder: false,
        },
        display: false,
      },
    },
  };

  return (
    <div className="bar">
      <Bar data={data} options={options}></Bar>
    </div>
  );
}
