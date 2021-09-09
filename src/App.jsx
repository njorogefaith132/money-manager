import React from 'react'
import './App.css'
import ExpenseList from './components/ExpenseList'
import Form from './components/Form'
import Navbar from './components/Navbar'
import TotalsSection from './components/TotalsSection'

function App() {
  return (
    <div className="App">
      <div className="header">
      <Navbar />
      <TotalsSection />
      </div>
      <div className="body">
      <ExpenseList />
      <Form/>

      </div>
      
     

    </div>
  )
}

export default App
