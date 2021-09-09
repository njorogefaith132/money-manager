import React from 'react'
import '../styling/totalssection.css'

const TotalsSection = () => {
    return (
        <div className="totals">
            <div className="expense-total">
            <h3>Expenses</h3>
            <p>KSH 2000</p>

            </div>
            <div className="balance">
            <h3>Balance</h3>
            <p>KSH 3000</p>

            </div>
        </div>
    )
}

export default TotalsSection
