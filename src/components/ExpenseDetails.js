import './ExpenseItem.css';
function ExpenseDetails(props){
       const title = props.title;
       const amount = props.amount;
       const location = props.location;

    return (
        <div>
        <div className="expense-item__description">
            {/* <p> {props.index}</p> */}
            <h2>{title}</h2>
             <div className="expense-item__text" >
            <h2>{location}</h2></div> 
            <div className="expense-item__price">${amount} </div>
            </div>
            </div>
    );
    
    
}

export default ExpenseDetails;