"use client";
import {
  Chart as ChartJS,
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend,
} from "chart.js";
import { Radar } from "react-chartjs-2";

ChartJS.register(
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend
);

export const data = {
  labels: ["Python", "SQL", "Tableau", "Power BI", "Excel", "R", "SPSS"],
  datasets: [
    {
      label: "",
      data: [100, 90, 100, 95, 100, 90, 95],
      fill: true,
      backgroundColor: "rgba(54, 162, 235, 0.2)",
      borderColor: "rgb(54, 162, 235)",
      pointBackgroundColor: "rgb(54, 162, 235)",
      pointBorderColor: "#fff",
      pointHoverBackgroundColor: "#fff",
      pointHoverBorderColor: "rgb(54, 162, 235)",
      borderWidth: 1.5,
    },
  ],
};

export function Chart() {
  return (
    <Radar
      data={data}
      options={{
        scales: {
          r: {
            angleLines: {
              display: true,
            },
            ticks: {
              display: false,
            },
            suggestedMin: 0,
            suggestedMax: 100,
          },
        },
        plugins: {
          legend: {
            display: false,
          },
        },
      }}
    />
  );
}
export function Button({
  children,
  variant = "primary",
}: {
  children: React.ReactNode;
  variant?: "primary" | "tertial" | "secondary";
}) {
  return variant === "primary" ? (
    <button className='my-3 after:bg-gray-950 overflow-hidden font-bold text-sm after:inset-0 after:absolute after:-z-20 text-white  py-2 px-4 relative hover:text-gray-950 before:inset-0 before:bg-gray-100 before:absolute before:translate-x-full hover:before:translate-x-0 before:transition before:-z-10 after:pointer-events-none before:pointer-events-none'>
      {children}
    </button>
  ) : variant === "tertial" ? (
    <button className='my-1 overflow-hidden after:bg-white group font-bold after:inset-0 after:absolute after:-z-20 fill-gray-950 text-gray-950  py-1 px-2 relative hover:text-white hover:fill-white before:inset-0 before:bg-gray-950 before:absolute before:translate-x-full hover:before:translate-x-0 before:transition before:-z-10 after:pointer-events-none before:pointer-events-none'>
      {children}
    </button>
  ) : null;
}
