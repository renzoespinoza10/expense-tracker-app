import React, {useContext} from 'react';
import {GlobalContext} from '../context/GlobalState';
import {Transaction} from './Transaction';


/**
*This component is responsible for listing all the transactions that are added
*with their respective amounts
*/
export const TransactionList = () => {
    const { transactions } = useContext(GlobalContext);

    return (
        <div>
        //lists the transactions
            <h3> Transaction History </h3>
            <ul className = "list">
                {transactions.map(transaction => (<Transaction key={transaction.id} transaction = {transaction}/>))}

            </ul>
        </div>
    )
}
