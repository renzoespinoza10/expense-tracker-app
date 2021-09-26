import React, {useContext} from 'react';
import { GlobalContext} from '../context/GlobalState';


/**
*This component is responsible for suggesting summing the transactions and displaying
*a net spending.
*/
export const Balance = () => {
    const { transactions } = useContext(GlobalContext);
    const amounts = transactions.map(transaction => transaction.amount);
    const total = amounts.reduce((acc, item) => (acc += item), 0).toFixed(2);

    //Adds all the net transactions and displays its value
    return (
        <div>
            <h4>
            Spendings
            </h4>
            <h1 style = {{color:"green"}}>
            <em>${-total}</em>
            </h1>
        </div>
    )
}
