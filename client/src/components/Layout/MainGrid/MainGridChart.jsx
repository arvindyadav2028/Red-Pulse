import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Tooltip,
  Legend
);

const MainGridChart = () => {
 const data = {
    labels: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
    datasets: [
      {
        data: [35, 30, 40, 32, 28, 60, 30],
        backgroundColor: [
         "#60A5FA", // Darker Blue (Blue-400)
          "#60A5FA",
          "#60A5FA",
          "#60A5FA",
          "#60A5FA",
          "#0D9488", // Darker Teal Highlight (Teal-600)
          "#60A5FA",
        ],
        borderRadius: 10,   // rounded top bars
        borderSkipped: false,
        barThickness: 20,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: { display: false },
    },
    scales: {
      x: {
        grid: { display: false },
        ticks: { color: "#000" },
      },
      y: {
        beginAtZero: true,
        grid: {
          color: "rgba(255,255,255,0.7)",
        },
        ticks: { color: "#000" },
      },
    },
  };

  return (
  <div className="h-[180px]">
    <Bar data={data} options={options} />
  </div>
);
}

export default MainGridChart
