import React, {useContext} from 'react';
import {GlobalContext} from '../context/GlobalState';

/**
*This component is responsible for designating a transaction as an income or
*expense based on the provided sign
*/
export const IncomeExpenses = () => {
    const {transactions} = useContext(GlobalContext);
    //transactions are mapped to their amount
    const amounts = transactions.map(transaction => transaction.amount);
    //income and expenses are filtered based on if they are liss or greater than 0
    const income = amounts.filter(item => item >0).reduce((acc, item)=>(acc +=item), 0).toFixed(2);
    const expense = amounts.filter(item => item < 0).reduce((acc, item)=>(acc +=item), 0).toFixed(2);


    return(
        <div className = "inc-exp-container">
            <div>
                <h4> Income </h4>
                <p className = "money plus">{income}</p>
            </div>
            <div>
                <h4> Expense </h4>
                <p  className = "money minus"> {expense}</p>
            </div>
        </div>
    )
}
