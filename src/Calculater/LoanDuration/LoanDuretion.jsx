import React from 'react'
import './LoanDuration.css'

function LoanDuretion() {
  return (
    <section className='loanAmountsec'>
    <p>Loan Amount</p>
    <h1>Enter Amount</h1>
    <input type="range" />
    <div className='AmountRange'>
        <p>$ 50,000</p>
        <p>$ 5000000</p>
    </div>
    </section>
  )
}

export default LoanDuretion