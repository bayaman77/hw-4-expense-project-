import React from "react";
import { useState } from "react";
import ExpenseForm from "../expense-form/ExpenseForm";
import Button from "../UI/button/Button";
import './NewExpenses.css'

const NewExpenses = ({onNewExpenseAdd}) => {
  const [showForm, setShowForm] = useState(false);

  const showExpenseForm =() => {
    setShowForm((prevState) => !prevState)
  }

  return (
    <div className="new-expenses_container" >
      {showForm ? (
        <ExpenseForm onNewExpenseAdd={onNewExpenseAdd} onShowForm={showExpenseForm}/>
      ) : ( 
        <Button onClick={showExpenseForm}>Добавить новый расход</Button>
      )}
    </div>
  );
};

export default NewExpenses;
