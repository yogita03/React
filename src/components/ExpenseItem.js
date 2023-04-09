import './ExpenseItem.css';

function ExpenseItem(props) {
    // const expenseDate = new Date(2023, 4, 7);
    // const expenseTitle = 'car Insurance';
    // const expenseAmount = 294.67;
    // // const LocationOfExpenditure = 'Petrol';
    
    return (
    <div className = "expense-item">
       <div>{props.date.toISOString()}</div>
        <div className="expense-item__description">
            <p> {props.index}</p>
            <h2>{props.title}</h2>
            <div className="expense-item__text" >
            <h2>{props.location}</h2></div> 
            <div className="expense-item__price">${props.amount} </div>
                
            
             
        </div>
    </div>
    );
}
export default ExpenseItem;