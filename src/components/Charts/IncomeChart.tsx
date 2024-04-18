import React, { useEffect } from "react";
import Chart from "chart.js/auto";
import { Transaction } from "../../Types";

const IncomeChart: React.FC<{ transactions: Transaction[] | null }> = ({
  transactions,
}) => {
  useEffect(() => {
    let chartInstance: Chart<"doughnut", number[], string> | undefined;

    const categories: { [key: string]: number } = {};

    transactions?.forEach((transaction) => {
      if (transaction.type === "income") {
        if (categories[transaction.category]) {
          categories[transaction.category] += transaction.amount;
        } else {
          categories[transaction.category] = transaction.amount;
        }
      }
    });

    const chartData = {
      labels: Object.keys(categories),
      datasets: [
        {
          label: "Total Income",
          data: Object.values(categories),
          backgroundColor: [
            "#5aadb8",
            "#468e9d",
            "#6dc99b",
            "#26b952",
            "#b5e764",
            "#49e8ee",
            "#7250cf",
          ],
          borderColor: ["white"],
          borderWidth: 1,
        },
      ],
    };

    const ctx = document.getElementById(
      "income-chart"
    ) as HTMLCanvasElement | null;
    if (ctx) {
      if (chartInstance) {
        chartInstance.destroy();
      }
      chartInstance = new Chart(ctx, {
        type: "doughnut",
        data: chartData,
        options: {
          animation: {
            animateScale: true,
            animateRotate: true,
          },
          plugins: {
            legend: {
              display: true,
              position: "top",
            },
          },
          maintainAspectRatio: false,
          responsive: true,
        },
      });
    }

    return () => {
      if (chartInstance) {
        chartInstance.destroy();
      }
    };
  }, [transactions]);

  return (
    <canvas
      id="income-chart"
      style={{ maxHeight: "300px", maxWidth: "400px" }}
    />
  );
};

export default IncomeChart;
