import React from 'react'
import './App.css'
import IncomeExpenseCharts from './components/IncomeExpenseCharts'
import IncomeBreakDownChart from './components/IncomeBreakDownChart'
import ExpenseBreakDownChart from './components/ExpenseBreakDownChart'

const App = () => {
  return (
   <>
     <div className='container'>
      <div className='main'>
        <h3>IncomeExpenseCharts</h3>
        <IncomeExpenseCharts/>
      </div>
      <div className='income'>
        <h3>IncomeBreakDownCharts</h3>
        <IncomeBreakDownChart/>
      </div>
      <div className='expense'>
        <h3 >ExpenseBreakDownCharts</h3>
        <ExpenseBreakDownChart className='expense'/>
      </div>
     </div>
   </>
  )
}

export default App