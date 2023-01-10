import React from "react";
import ExpenseItem from "../expense-item/ExpenseItem";
import './Expenses.css'

const Expenses = ({expenses}) => {
  return (
    <ul className="list__container">
      {expenses.map((elem) => {
        return (
          <ExpenseItem title={elem.title} price={elem.price} date={elem.date} key={elem.title}/>
        );
      })}
    </ul>
  );
};

export default Expenses;
