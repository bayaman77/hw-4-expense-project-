import React from "react";
import ChartBar from "./ChartBar";
import styled from "styled-components";

const Chart = ({ expenses }) => {
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
    const monthNumber = new Date(item.date).getMonth();
    months[monthNumber].currentPrice += item.price;
  });

  return (
    <ChartContainer>
      {months.map((item) => (
        <ChartBar
          key={item.label}
          label={item.label}
          currentPrice={item.currentPrice}
          maxPrice={maxPirce}
        />
      ))}
    </ChartContainer>
  );
};

export default Chart;

const ChartContainer = styled.div`
  margin-top: 18px;
    padding: 14px;
    border-radius: 12px;
    background-color: #f8dfff;
    text-align: center;
    display: flex;
    justify-content: space-around;
    height: 10rem;
`
