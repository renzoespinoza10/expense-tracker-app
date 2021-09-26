import React, {useState, useContext} from 'react';
import {GlobalContext} from '../context/GlobalState';

/**
*This component is responsible for displaying options to add a new transaction.
*It displays a holder to place the amount (neg or pos) as well as a title for the
*transaction
*/
export const AddTransaction = () =>{
    // Constants to hold text, amount, and to bring transaction compatibility
    const [text, setText] = useState('');
    const [amount, setAmount] = useState(0);
    const {addTransaction} = useContext(GlobalContext);

    //when submit button is clicked, amount is incremented and text updated
    const onSubmit = e => {
        e.preventDefault();
        const newTransaction = {
            id : Math.floor(Math.random() * 100000000),
            text,
            amount: +amount
        }
        addTransaction(newTransaction);
    }


    return (
        <>
            <h3> Add New Transaction </h3>
            <form onSubmit = {onSubmit} action = "#">
                <div classNameName = "form control">
                    <label htmlFor = "text"> Text  </label>
                    //changes the text in transaction list
                    <input type = "text" value = {text} onChange = {(e) => setText(e.target.value)} placeholder = "Enter text..." />
                </div>
                <div className = "form-control">
                    //Sets the values for the amount based on whether it's positive or negative
                    <label htmlFor = "amount">
                        Amount <br />
                        (negative - expense, positive - income) </label>
                    <input type = "number" value = {amount} onChange = {(e) => setAmount(e.target.value)}placeholder = "Enter amount..."/>
                </div>
                <button type= "submit" className = "btn"> Add Transaction </button>
            </form>
        </>
    )
}
