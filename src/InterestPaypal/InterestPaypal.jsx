import React from 'react';

function InterestPaypal({ principal, rate, duration }) {
  let calculateInterest = (P, R, N) => {
    R = R / 12 / 100; // Monthly interest rate
    let emi = Math.floor((P * R * Math.pow(1 + R, N)) / (Math.pow(1 + R, N) - 1));
    let totalPayment = emi * N;
    let totalInterest = totalPayment - P;
    return totalInterest.toFixed(2);
  };

  let interestPayable = calculateInterest(principal, rate, duration);

  return (
    <div>
      {/* <h4></h4> */}
      <p className='interestAmount'>Interest Payable <span className='interestSpan'>{interestPayable ? ` ₹ ${interestPayable}` : "Enter valid values"}</span></p>
    </div>
  );
}

export default InterestPaypal;
