import React from 'react'
import '../styling/form.css'

const Form = () => {
    return (
        <div className="form-expense">
          <h4>Add Expense</h4>
        <form>
            <label >Name</label>
            <input type="text" placeholder="Enter Expense" />
            <label htmlFor="">Cost</label>
            <input type="text" placeholder="Expense Cost" />
            <button>Add Expense</button>
        </form>
        </div>
    )
}

export default Form
