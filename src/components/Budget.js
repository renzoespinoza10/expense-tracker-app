import React, {useState, useContext, useEffect} from 'react';
import { GlobalContext} from '../context/GlobalState';


/**
*This component is responsible for keeping a set budget and displaying how much
*of that budget is remaining based off of transactions.
*/
export const Budget = () => {
    //keeps the set budget amount
    const [amount, setAmount] = useState(0);
    const [budgetVal, setBudgetVal] = useState(0);

    const { transactions, addAmount } = useContext(GlobalContext);
    const amounts = transactions.map(transaction => transaction.amount);
    const total = amounts.reduce((acc, item) => (acc += item), 0).toFixed(2);

    //subtracts the total amount that has been listed by transactions from the budget
    const remainingFunds = (budgetVal - (-total));

    // sets the budget amount
    const handleSubmit = e =>{
        e.preventDefault();
        setBudgetVal(amount);
    }

    //adds the amount to budget
    const addBudget= () =>{
        addAmount(amount)
    }

    useEffect(() => {
        amount > 0 && addBudget(amount)
    }, [amount])

    return (
        <div>
            <h4>
            Budget
            </h4>
            <h1>
            <em>${budgetVal}.00 (Remaining Funds: ${remainingFunds}.00)</em>
            </h1>
            <form onSubmit = {handleSubmit} action = "#">
                <div classNameName = "form control">
                    <input type = "number" value = {amount} onChange = {(e) => setAmount(e.target.value)} placeholder = "Enter budget..." />
                </div>
                <button type = "submit " className = "btn"> Add Budget </button>
            </form>
        </div>
    )
}
