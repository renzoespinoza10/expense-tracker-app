import React, {useState, useContext, useEffect} from 'react';
import { GlobalContext} from '../context/GlobalState';



export const Budget = () => {
    const [amount, setAmount] = useState(0);
    const [budgetVal, setBudgetVal] = useState(0);

    const { transactions, addAmount } = useContext(GlobalContext);
    const amounts = transactions.map(transaction => transaction.amount);
    const total = amounts.reduce((acc, item) => (acc += item), 0).toFixed(2);
    const remainingFunds = (budgetVal - (-total));

    const handleSubmit = e =>{
        e.preventDefault();
        setBudgetVal(amount);
    }

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
