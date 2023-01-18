import React from "react";
import { useState } from "react";
import ExpenseForm from "../expense-form/ExpenseForm";
import Button from "../UI/button/Button";
import styled from "styled-components";

const NewExpenses = ({onNewExpenseAdd}) => {
  const [showForm, setShowForm] = useState(false);

  const showExpenseForm =() => {
    setShowForm((prevState) => !prevState)
  }

  return (
    <NewExpensesContainer>
      {showForm ? (
        <ExpenseForm onNewExpenseAdd={onNewExpenseAdd} onShowForm={showExpenseForm}/>
      ) : ( 
        <Button onClick={showExpenseForm}>Добавить новый расход</Button>
      )}
    </NewExpensesContainer>
  );
};

export default NewExpenses;

const NewExpensesContainer = styled.div`
   width: 100%;
    padding: 20px 0;
    background-color: #AD9BE9;
    border-radius: 12px;
    margin-bottom: 28px;
    display: flex;
    justify-content: center;
`
