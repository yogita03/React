import  ExpenseDetails from './ExpenseDetails';
import ExpenseDate from './ExpenseDate';
import Card from './Card';
import './ExpenseItem.css';

const ExpenseItem = (props) => {
    // const expenseDate = new Date(2023, 4, 7);
    // const expenseTitle = 'car Insurance';
    // const expenseAmount = 294.67;
    // // const LocationOfExpenditure = 'Petrol';
   
    
    return (
      
    <Card className = "expense-item"> 
       <ExpenseDate date={props.date} />
        <ExpenseDetails amount={props.amount}  location={props.location}  title={props.title}/>
       
       </Card>
    
   
    );
}
export default ExpenseItem;