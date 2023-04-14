// import logo from './logo.svg';
import React from 'react';
import NewExpense from './components/NewExpense/NewExpense';
// import './App.css';
import Expenses from './components/Expenses/Expenses';


const App = () => {
  const expenses = [
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

  // const list = {
  // return (
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    //   return(
    //   <div>
    //    <h2> Expense Tracker</h2> 
    //   {/* // <div>
    //   //   <NewExpense />
    //   //   <Expenses items={expenses} />
    //   // </div> */}
    // //  {expenses.map((Val) => {
    //             return (
    //               <li key={Val.id}>
    //                 <div>
    //                     <ExpenseItem title={Val.title} 
    //                         amount={Val.amount}
    //                         date={Val.date}
    //                         location={Val.location}
    //                         />
                             
    //                 </div>
    //                 </li>
    //             )
    //         })}

    // </div>
    // );
       
    return (
      <div>
        <NewExpense />
        <Expenses items={expenses} />
      </div>
    );

}


export default App;