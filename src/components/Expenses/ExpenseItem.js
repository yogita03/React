import  ExpenseDetails from './ExpenseDetails';
import ExpenseDate from './ExpenseDate';
import Card from '../UI/Card';
import './ExpenseItem.css';

const ExpenseItem = (props) => {
    // const expenseDate = new Date(2023, 4, 7);
    // const expenseTitle = 'car Insurance';
    // const expenseAmount = 294.67;
    // // const LocationOfExpenditure = 'Petrol';
    // const clickHandler = () => {
    //     console.log('Clicked!!!');
    // }
    
    // return (
      
    // <Card className = "expense-item"> 
    //    <ExpenseDate date={props.date} />
    //     <ExpenseDetails amount={props.amount}  location={props.location}  title={props.title}/>
       
    //    <button onClick={clickHandler}>Change Title</button>
    //    </Card>
    
   
    // );

    const clickHandler = () => {
       let d = document.activeElement.parentElement.parentElement
       d.remove()
    }
        return (
          
        <Card className = "expense-item"> 
           <ExpenseDate date={props.date} />
            <ExpenseDetails amount={props.amount}  location={props.location}  title={props.title}/>

            <button onClick={clickHandler}>Delete Expenses</button>
       
         </Card>
       
        );
        
}
export default ExpenseItem;