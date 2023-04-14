import React, { useState } from 'react';
// import  ExpenseDetails from './ExpenseDetails';
import ExpenseDate from './ExpenseDate';
import Card from '../UI/Card';
import './ExpenseItem.css';

const ExpenseItem = (props) => {
  
    const [title, setTitle] = useState(props.title);
    
    const clickHandler = () => {
       
        setTitle('Updated');
        console.log(title);
    };
       return (
          
        <Card className = "expense-item"> 
           <ExpenseDate date={props.date} />
           <div className="expense-item__description">
            {/* <p> {props.index}</p> */}
            <h2>{title}</h2>
           
            {/* <div style={{display: "flex" , justifyContent: "space-around", alignItems: "center", minWidth:"200px"
            }}> */}
             <div className="expense-item__description" >
            <h2>{props.location}</h2>
            <div className="expense-item__price">${props.amount} </div>
            </div>
            </div>
            {/* </div>  */}
            <button onClick={clickHandler}>Change Title</button>
         </Card>
       
        );
        
}
export default ExpenseItem;