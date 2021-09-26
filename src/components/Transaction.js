import React, {useContext} from 'react';
import { GlobalContext } from '../context/GlobalState';

/**
*This component is responsible for remove the transaction or adding the amount to
* the current amount
*/
export const Transaction = ({transaction  }) => {
    const {deleteTransaction} = useContext(GlobalContext);

    const sign = transaction.amount < 0 ? "-" : '+';

    return(
        <li className = {transaction.amount < 0 ? "minus" : "plus"}>
        //transaction list will only show the positive amount in either red or green based on positive or negative
            {transaction.text} <span> {sign} $ {Math.abs(transaction.amount)} </span>
            <button onClick = {() => deleteTransaction(transaction.id)} className = "delete-btn"> x </button>
        </li>
    )
}
