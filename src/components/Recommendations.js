import React, { useState, useContext, useEffect } from 'react';
import { fadeOut, fadeIn } from "react-animations";
import { StyleSheet, css } from "aphrodite";

import { GlobalContext } from '../context/GlobalState';

import '../popup.css'
export const Recommendations = () => {
  const [visible, setVisible] = useState(false);
  const [fadeIn, setFadeIn] = useState(false)
  const [highExpenseName, setHighExpenseName] = useState('');
  const { transactions, amount } = useContext(GlobalContext);
  const amounts = transactions.map(transaction => transaction.amount);
  const total = amounts.reduce((acc, item) => (acc += item), 0).toFixed(2);
  const styles = StyleSheet.create({
    fadeIn: {
      animationName: fadeIn,
      animationDuration: "5s"
    },
    fadeOut: {
      animationName: fadeOut,
      animationDuration: "2s"
    }
  });

  console.log(transactions, 'transactions')

  const remaining = (amount) - (-total);
  useEffect(() => {
    console.log(remaining, amount, total, 'amount')
    if (remaining < (amount / 2)) {
      setFadeIn(true)
      setVisible(true)
    }
  }, [remaining, amount])

  useEffect(() => {
    let highExpense = 0
    let highItemName = ''
    transactions.length > 0 && transactions.map((value) => {
      const currentAmount = (-1 * value.amount)
      console.log(currentAmount, 'currentAmount')

      if(highExpense < currentAmount){
        highExpense = (value.amount * -1)
        highItemName = value.text
      }
    })
    setHighExpenseName(highItemName)
  }, [transactions])
  const gotIt = () => {
    setFadeIn(false)
    setTimeout(() => {
      setVisible(false)
    }, 2000);
  }

  return (
    <>
      {
        visible && (
          <div className={`
          popup-container
          title is-1
          ${fadeIn ? css(styles.fadeIn) : css(styles.fadeOut)}
        `} >
            <h2 className="popup-title"> Suggestion !!!</h2>
            <div className="body-container">
              <p>You have spent too much on <span className="item">{highExpenseName}</span></p>
              <p>In order to cut your expense you should consider spending less on <span className="item">{highExpenseName}</span> next month.</p>
            </div>
            <button className="gotIt" onClick={() => gotIt()}>Got It!</button>
          </div>
        )
      }
    </>
  )
}
