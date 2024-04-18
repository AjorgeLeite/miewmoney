import React, { useEffect, useState } from "react";
import Chart, { ChartType } from "chart.js/auto";
import { Transaction } from "../../Types";
import "chartjs-adapter-date-fns";

const LineChart: React.FC<{ transactions: Transaction[] | null }> = ({
  transactions,
}) => {
  useEffect(() => {
    let chartInstance: Chart<ChartType, number[], Date> | undefined;

    const calculateDailyBalance = () => {
      const dailyBalances: { [date: string]: number } = {};
      let cumulativeBalance = 0;

      transactions?.forEach((transaction) => {
        const date = new Date(transaction.date).toISOString().split("T")[0];
        const amount =
          transaction.amount * (transaction.type === "income" ? 1 : -1);

        if (dailyBalances[date]) {
          dailyBalances[date] += amount;
        } else {
          dailyBalances[date] = cumulativeBalance + amount;
        }

        cumulativeBalance = dailyBalances[date];
      });

      return Object.entries(dailyBalances).map(([date, balance]) => ({
        date: new Date(date),
        balance,
      }));
    };

    const balanceData = calculateDailyBalance();

    const chartData = {
      labels: balanceData.map((dataPoint) => dataPoint.date),
      datasets: [
        {
          label: "Balance",
          data: balanceData.map((dataPoint) => dataPoint.balance),
          borderColor: "#5aadb8",
          borderWidth: 3,
          fill: false,
        },
      ],
    };

    const ctx = document.getElementById(
      "line-chart"
    ) as HTMLCanvasElement | null;
    if (ctx) {
      if (chartInstance) {
        chartInstance.destroy();
      }
      chartInstance = new Chart(ctx, {
        type: "line",
        data: chartData,
        options: {
          scales: {
            x: {
              type: "time",
              time: {
                unit: "day",
              },
            },
            y: {
              beginAtZero: false,
            },
          },
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
    <canvas id="line-chart" style={{ maxHeight: "200px", maxWidth: "400px" }} />
  );
};

export default LineChart;
