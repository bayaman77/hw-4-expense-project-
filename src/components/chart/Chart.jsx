import React from "react";
import "./Chart.css";
import ChartBar from "./ChartBar";

const Chart = ({expenses}) => {
  const maxPirce = 2000;
  const months = [
    {
      label: "Январь",
      currentPrice: 0,
    },
    {
      label: "Февраль",
      currentPrice: 0,
    },
    {
      label: "Март",
      currentPrice: 0,
    },
    {
      label: "Апрель",
      currentPrice: 0,
    },
    {
      label: "Май",
      currentPrice: 0,
    },
    {
      label: "Июнь",
      currentPrice: 0,
    },
    {
      label: "Июль",
      currentPrice: 0,
    },
    {
      label: "Август",
      currentPrice: 0,
    },
    {
      label: "Сентярь",
      currentPrice: 0,
    },
    {
      label: "Октябрь",
      currentPrice: 0,
    },
    {
      label: "Ноябрь",
      currentPrice: 0,
    },
    {
      label: "Декабрь",
      currentPrice: 0,
    },
  ];

expenses.forEach((item) => {
    const monthNumber = new Date(item.date).getMonth()
    months[monthNumber].currentPrice += item.price
})

  return (
    <div className="chart">
      {months.map((item) => (
        <ChartBar
          key={item.label}
          label={item.label}
          currentPrice={item.currentPrice}
          maxPrice={maxPirce}
        />
      ))}
    </div>
  );
};

export default Chart;
