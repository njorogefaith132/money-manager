import React from 'react'
import '../styling/expenselist.css'

const ExpenseList = () => {
    return (
        <div className="e-list">
            <h4>My Expenses</h4>
            <div className="expense-list">

            <div className="expense">
                <h3>New Pants</h3>
                <p>KSH 200</p>
            </div>
            <div className="expense">
                <h3>New Pants</h3>
                <p>KSH 200</p>
            </div>
            <div className="expense">
                <h3>New Pants</h3>
                <p>KSH 200</p>
            </div>
            </div>
            
        </div>
    )
}

export default ExpenseList
