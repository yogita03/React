import React from 'react';

import ExpenseItem from './ExpenseItem';
import Card from '../UI/Card';
import ExpensesFilter from './ExpensesFilter';
import './Expenses.css';

const Expenses = (props) => {
    
    //  return (
    //     <Card className='expenses'>
       
    //     {
    //      expenses.map((Val) => {
    //         return (
    //         //   <li key={Val.id}>
    //             <div>
    //                 <ExpenseItem title={Val.title} 
    //                     amount={Val.amount}
    //                     date={Val.date}
    //                     location={Val.location}
    //                     />
                         
    //             </div>
    //             // </li>
    //         )
    //     })}
    //      </Card>
    // );

    // const expenses = [
    //     {
    //       id: 'e1',
    //       title: 'Toilet Paper',
    //       amount: 94.12,
    //       date: new Date(2020, 7, 14),
    //       location: 'Nagpur'
    //     },
    //     { id: 'e2', title: 'New TV', amount: 799.49, date: new Date(2021, 2, 12), location: 'Pune' },
    //     {
    //       id: 'e3',
    //       title: 'Car Insurance',
    //       amount: 294.67,
    //       date: new Date(2021, 2, 28),
    //       location: 'Mumbai'
    //     },
    //     {
    //       id: 'e4',
    //       title: 'New Desk (Wooden)',
    //       amount: 450,
    //       date: new Date(2021, 5, 12),
    //       location: 'Hyderabad'
    //     },
    //   ];

      // const Expense = ({data}) => {
      //   return(
      //       <Card className="expenses">
      //           {expenses.map((ele,index)=><ExpenseItem data={ele} key={index}/>)}
      //           {data.map((ele,index)=><ExpenseItem data={ele} key={index}/>)}
      //       </Card>
      //   )
      // }

      const [filteredYear, setFilteredYear] = useState('2020');

      const filterChangeHandler = selectedYear => {
        setFilteredYear(selectedYear);
      };

    return (
        <Card className="expenses">
          <ExpensesFilter selected={filteredYear} onChangeFilter={filterChangeHandler} />
          <ExpenseItem
            title={props.items[0].title}
            amount={props.items[0].amount}
            date={props.items[0].date}
       
          />
          <ExpenseItem
            title={props.items[1].title}
            amount={props.items[1].amount}
            date={props.items[1].date}
           
          />
          <ExpenseItem
            title={props.items[2].title}
            amount={props.items[2].amount}
            date={props.items[2].date}
            
          />
          <ExpenseItem
            title={props.items[3].title}
            amount={props.items[3].amount}
            date={props.items[3].date}
           
          />
        </Card>
      );
    }
   


export default Expenses;