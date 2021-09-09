import React from 'react'
import '../styling/totalssection.css'

const TotalsSection = () => {
    return (
        <div className="totals">
            <div className="expense-total">
            <h2>Expenses</h2>
            <p>KSH 2000</p>

            </div>
            <div className="balance">
            <h2>Balance</h2>
            <p>KSH 3000</p>

            </div>
        </div>
    )
}

export default TotalsSection
