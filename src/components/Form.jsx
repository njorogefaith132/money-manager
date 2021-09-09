import React from 'react'
import '../styling/form.css'

const Form = () => {
    return (
        <form>
            <input type="text" placeholder="Enter Expense" />
            <input type="text" placeholder="Expense Cost" />
            <button>Add Expense</button>
        </form>
    )
}

export default Form
