import React, { useState } from "react";
import "./App.css";
import Expenses from "./components/expenses/Expenses";
import NewExpenses from "./components/newExpense/NewExpenses";

const App = () => {
  const [expenses, setExpenses] = useState([]);

  const addNewExpenseHandler = (data) => {
    setExpenses([...expenses, data]);
  };

  return (
    <div className="app">
      <NewExpenses onNewExpenseAdd={addNewExpenseHandler} />
      <Expenses expenses={expenses} />
    </div>
  );
};

export default App;
