import React, { useState } from "react";
import NewExpense from "./Components//NewExpense/NewExpense";
import Expenses from "./Components/Expenses/Expenses";


const DUMMY_EXPENSES = [
  {
    id: 'e1',
    title: 'House Rent',
    amount: 245,
    date: new Date(2020, 7, 10)
  },
  {
    id: 'e2',
    title: 'Flat Rent',
    amount: 110,
    date: new Date(2020, 5, 14)
  },
  {
    id: 'e3',
    title: 'PG Rent',
    amount: 85,
    date: new Date(2020, 1, 15)
  },
];

const App = () => {
  const [expenses, setExpenses] = useState(DUMMY_EXPENSES);
  const addExpenseHandler = expense => {
    setExpenses(prevExpenses =>{
      return [expense, ...prevExpenses];
    });
  };

  return (
    <div>
      <NewExpense onAddExpanse={addExpenseHandler} />
      <Expenses items={expenses} />
    </div>
  );
}

export default App;
