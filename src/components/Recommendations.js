import React from 'react';
import {Budget} from './Budget';
import {Transaction} from './Transaction';

export const Recommendations = () => {
    const { transactions } = useContext(GlobalContext);

    return (
        <div>
            <h3 className = "center"> Recommended Cuts </h3>
            <ul>
                <li>Remove {transaction}</li>
                <li>Remove chupapaya</li>
            </ul>
        </div>
    )
}
