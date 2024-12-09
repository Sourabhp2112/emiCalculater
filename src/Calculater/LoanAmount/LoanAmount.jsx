import React, { useRef, useState } from 'react'
import "./LoanAmount.css"

function LoanAmount({value1,value2,loan,min,max,onChange}) {

  let [Amount,setAmount] = useState(min)
  let [Error,setError] = useState('')

let inputValue = (e)=>{
  setAmount(e.target.value)
  setError('')
}


let handleAmountChange = (e) => {
  let value = e.target.value;
  
  if (value < min) {
    setError(`Please enter correct ${loan}`);
  } else if (value > max) {
    setError(`Please enter correct loan ${loan}`);
  } else {
    setAmount(value);
    setError('');
    onChange(value)  
  }

};

  return (
    <section className='loanAmountsec'>
        <p>{loan}</p>
        <input type="number" value={Amount} onChange={handleAmountChange} className="amountInputBox" min={min} max={max}/>
        <input type="range" className='rangeAmount' min={min}  max={max} value={Amount} onChange={handleAmountChange}/>
        <div className='AmountRange'>
            <p>{value1}</p>
            <p>{value2}</p>
        </div>
        {Error && <p className="errorMessage" style={{color:"red"}}>{Error}</p>}
    </section>
  )
}

export default LoanAmount