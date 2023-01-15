import React from "react";
import { useState } from "react";
import Chart from "../chart/Chart";
import ExpenseItem from "../expense-item/ExpenseItem";
import ExpensesFilter from "../expensesFilter/ExpensesFilter";
import "./Expenses.css";

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
    <ul className="list__container">
      <ExpensesFilter value={selectedYear} onChange={yearChangeHandler} />
      <Chart expenses={filteredItems}/>
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
        <h1 className="nothing">Expenses don't found!🤷🏻‍♂️</h1>
      )}
    </ul>
  );
};

export default Expenses;
