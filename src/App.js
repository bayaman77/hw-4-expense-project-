import React, { useState } from 'react';
import './App.css'
import Expenses from './components/expenses/Expenses';
import NewExpenses from './components/newExpense/NewExpenses';


const App = () => {
  const [expenses, setExpenses] = useState([])

const addNewExpenseHandler = (data) =>{
  setExpenses([...expenses, data])
}

  return (
    <div className='app'>
      <NewExpenses onNewExpenseAdd={addNewExpenseHandler}/>
      {expenses.length ? <Expenses expenses={expenses}/> : <h1 className='nothing'>Посты не были найдены! 🤷🏻‍♂️</h1>}
      
    </div>
  );
};

export default App;