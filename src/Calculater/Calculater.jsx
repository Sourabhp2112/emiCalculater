import React from 'react'
import { useState } from "react";
import './Calculater.css'
import LoanAmount from './LoanAmount/LoanAmount'
import EmiAmount from '../EMIAmount/EmiAmount'
import InterestPaypal from '../InterestPaypal/InterestPaypal'

function Calculater() {
  let [loanAmount, setLoanAmount] = useState(500000); // Default loan amount
  let [loanDuration, setLoanDuration] = useState(120); // Default duration in months
  let [interestRate, setInterestRate] = useState(8.5); // Default interest rate
  let [totalAmount,setTotalAmount] = useState(0)
  return (
    <>
      <h1 className='head'>Calculate your Personal Loan EMIs</h1> 
      <section className='calculaterSec'>
        <div className='rightdiv'>
          <LoanAmount value1={"0"} value2={"1 Cr"} loan={"Loan Amount"} min={0} max={10000000} onChange={setLoanAmount} />
          <LoanAmount value1={"12 months"} value2={"360 months"} loan={"Loan Duration"} min={0} max={360} onChange={setLoanDuration} />
          <LoanAmount value1={"1%"} value2={"20%"} loan={"IIllustrative Interest Rate p.a."} min={0} max={20} onChange={setInterestRate} />
        </div>
        <div className='leftdiv'>
          <section className='leftSec'>
          <InterestPaypal principal={loanAmount} rate={interestRate} duration={loanDuration} />
            <EmiAmount principal={loanAmount} rate={interestRate} duration={loanDuration} />
              <button className="applyButton">Apply For Personal Loan</button>
          </section>
        </div>
      </section>
    </>
  )
}

export default Calculater