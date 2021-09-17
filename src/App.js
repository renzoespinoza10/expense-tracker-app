import React from 'react';
import './App.css';
import {Header} from './components/Header';
import {Balance} from './components/Balance';
import {Budget} from './components/Budget';
import {IncomeExpenses} from './components/IncomeExpenses';
import {TransactionList} from './components/TransactionList';
import {AddTransaction} from './components/AddTransaction';
import {GlobalProvider} from "./context/GlobalState";
import {Recommendations} from "./components/Recommendations";

function App() {
  return (
    <GlobalProvider>
        <Header />
        <div className = "container">
            <Budget />
            <Balance />
            <IncomeExpenses/>
            <TransactionList/>
            <AddTransaction/>
            <Recommendations/>
        </div>
    </GlobalProvider>
  );
}

export default App;
