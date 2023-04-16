// import logo from './logo.svg';
import React, { useState} from 'react';
import NewExpense from './components/NewExpense/NewExpense';
// import './App.css';
import Expenses from './components/Expenses/Expenses';

 const DUMMY_EXPENSES = [
    {
      id: 'e1',
      title: 'Toilet Paper',
      amount: 94.12,
      date: new Date(2020, 7, 14),
      location: 'Nagpur'
    },
    { id: 'e2', title: 'New TV', amount: 799.49, date: new Date(2021, 2, 12), location: 'Pune' },
    {
      id: 'e3',
      title: 'Car Insurance',
      amount: 294.67,
      date: new Date(2021, 2, 28),
      location: 'Mumbai'
    },
    {
      id: 'e4',
      title: 'New Desk (Wooden)',
      amount: 450,
      date: new Date(2021, 5, 12),
      location: 'Hyderabad'
    },
  ];

  const App = () => {
   const [expenses, setExpenses] = useState(DUMMY_EXPENSES);

    const addExpenseHandler = (expense) => {
      setExpenses(prevExpenses => {
        return [expense, ...prevExpenses]
      });
    };
       
    return (
      <div>
        <NewExpense onAddExpense={addExpenseHandler} />
        <Expenses items={expenses} />
        
      </div>
    );

}


export default App;