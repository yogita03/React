import  ExpenseDetails from './ExpenseDetails';
import ExpenseDate from './ExpenseDate';
import './ExpenseItem.css';

function ExpenseItem(props) {
    // const expenseDate = new Date(2023, 4, 7);
    // const expenseTitle = 'car Insurance';
    // const expenseAmount = 294.67;
    // // const LocationOfExpenditure = 'Petrol';
   
    
    return (
      
    <div className = "expense-item"> 
       <ExpenseDate date={props.date} />
        <ExpenseDetails amount={props.amount}  location={props.location}  title={props.title}/>
       
       </div>
    
   
    );
}
export default ExpenseItem;