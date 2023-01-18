import React, { useState } from "react";
import "./App.css";
import Expenses from "./components/expenses/Expenses";
import NewExpenses from "./components/newExpense/NewExpenses";
import styled from "styled-components";

const App = () => {
  const [expenses, setExpenses] = useState([]);

  const addNewExpenseHandler = (data) => {
    setExpenses([...expenses, data]);
  };

  return (
    <Container>
      <NewExpenses onNewExpenseAdd={addNewExpenseHandler} />
      <Expenses expenses={expenses} />
    </Container>
  );
};

export default App;

const Container = styled.div`
  width: 780px;
  margin: 0 auto;
  padding-top: 50px;
`;
