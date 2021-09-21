import React, {createContext, useReducer} from 'react';
import AppReducer from './AppReducer';

const initialState = {
    transactions: [],
    amount: 0
}

export const GlobalContext = createContext(initialState);

export const GlobalProvider = ({children}) => {
    const [state, dispatch] = useReducer(AppReducer, initialState);

    function deleteTransaction(id) {
        dispatch({
            type: 'DELETE_TRANSACTION',
            payload : id
        });
    }

    function addTransaction(transaction) {
        dispatch({
            type: 'ADD_TRANSACTION',
            payload : transaction
        });
    }

    function addAmount(amount) {
        dispatch({
            type: 'ADD_AMOUNT',
            payload : amount
        });
    }


    return (<GlobalContext.Provider value = {{transactions: state.transactions, amount: state.amount, deleteTransaction, addTransaction, addAmount}}> {children} </GlobalContext.Provider>);
}
