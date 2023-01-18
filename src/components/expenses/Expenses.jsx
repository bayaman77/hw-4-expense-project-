import React from "react";
import { useState } from "react";
import Chart from "../chart/Chart";
import ExpenseItem from "../expense-item/ExpenseItem";
import ExpensesFilter from "../expensesFilter/ExpensesFilter";
import styled from "styled-components";

const Expenses = ({ expenses }) => {
  const [selectedYear, setSelectedYear] = useState("2023");

  const yearChangeHandler = (event) => {
    setSelectedYear(event.target.value);
  };

  const filteredItems = expenses.filter((element) => {
    const stringifiedYear = new Date(element.date).getFullYear().toString();
    return stringifiedYear === selectedYear;
  });

  return (
    <ListContainer>
      <ExpensesFilter value={selectedYear} onChange={yearChangeHandler} />
      <Chart expenses={filteredItems} />
      {expenses.length ? (
        filteredItems.map((elem) => {
          return (
            <ExpenseItem
              title={elem.title}
              price={elem.price}
              date={elem.date}
              key={elem.title}
            />
          );
        })
      ) : (
        <Title>Expenses don't found!🤷🏻‍♂️</Title>
      )}
    </ListContainer>
  );
};

export default Expenses;

const ListContainer = styled.ul`
  width: 100%;
  background-color: #1f1f1f;
  border-radius: 12px;
  padding: 28px 16px;
`;

const Title = styled.h1`
   margin-top: 20px;
    text-align: center;
    color: white;
`
