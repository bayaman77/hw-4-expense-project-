import React from "react";
import "./ExpenseItem.css";

const ExpenseItem = ({ title, price, date }) => {

  return (
    <div className="card">
      <div>
        <p className="date_box">{date.toString()}</p>
        <p className="title">{title}</p>
      </div>
      <p className="price">{`$ ${price}`}</p>
    </div>
  );
};

export default ExpenseItem;
