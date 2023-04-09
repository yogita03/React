// import logo from './logo.svg';
import './App.css';
import ExpenseItem from './components/ExpenseItem';


function App() {
  const expenses = [
    {
      id: 'e1',
      title: 'Toilet Paper',
      amount: 94.12,
      date: new Date(2020, 7, 14),
      location: 'Water'
    },
    { id: 'e2', title: 'New TV', amount: 799.49, date: new Date(2021, 2, 12), location: 'Recharge' },
    {
      id: 'e3',
      title: 'Car Insurance',
      amount: 294.67,
      date: new Date(2021, 2, 28),
      location: 'Petrol'
    },
    {
      id: 'e4',
      title: 'New Desk (Wooden)',
      amount: 450,
      date: new Date(2021, 5, 12),
      location: 'Cut'
    },
  ];

  // const list = {

  
  return (
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
      
      <div>
      <h2> Expense Tracker</h2>
     {expenses.map((Val,index) => {
                return (
                    <div>
                        <ExpenseItem title={Val.title} index = {index + 1}
                            amount={Val.amount}
                            date={Val.date}
                            location={Val.location}>
                             </ExpenseItem>
                    </div>
                )
            })}




    </div>
    );
}
export default App;